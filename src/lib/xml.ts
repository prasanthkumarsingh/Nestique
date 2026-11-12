/** Escape raw text once at the XML serialization boundary, not as URL encoding. */
export function escapeXmlText(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]!);
}
