import { getSupabase } from "@/lib/supabase";
import { SHOWCASE_BUCKET, type ShowcaseProject } from "@/types/database";

export type ShowcaseImage = {
  /** Public URL of the uploaded photo, or null when none is set yet. */
  url: string | null;
  /** Optional alt-text override from the DB (falls back to the code copy). */
  alt: string | null;
};

/**
 * Reads the `showcase_projects` table (anon key, public read policy) and
 * resolves each row's Storage path to a public URL. Returns a slug → image
 * map consumed by <SelectedWorks />. On any failure it returns {} so the
 * section falls back to the bundled placeholder images and never crashes.
 *
 * Called from the homepage server component; that page sets
 * `export const revalidate` so results are cached and refreshed on a timer
 * rather than fetched on every request.
 */
export async function getShowcaseImages(): Promise<Record<string, ShowcaseImage>> {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("showcase_projects")
      .select("slug, image_path, alt, published, sort_order, updated_at")
      .eq("published", true);

    if (error || !data) return {};

    const map: Record<string, ShowcaseImage> = {};
    for (const row of data as ShowcaseProject[]) {
      const url = row.image_path
        ? supabase.storage.from(SHOWCASE_BUCKET).getPublicUrl(row.image_path).data.publicUrl
        : null;
      map[row.slug] = { url, alt: row.alt };
    }
    return map;
  } catch {
    return {};
  }
}
