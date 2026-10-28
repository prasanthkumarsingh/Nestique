# Service card images

Generated using the built-in image_gen tool. Illustrative service imagery, separate from the actual project galleries. Final website assets are 1200 x 800 JPEGs hosted in Supabase Storage.

## Final prompts

### interior.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. A refined contemporary Indian living room with a linen sofa, walnut cabinetry, pale stone floor, soft curtains, warm indirect lighting and a few plants. Clearly communicate interior design. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### residential.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. A completed contemporary two-storey Indian family villa, cream stone and warm timber facade, balconies, entrance steps and modest planting. Clearly communicate residential construction. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### commercial.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. A contemporary mid-rise commercial office building in an Indian city, realistic glass and sandstone facade, inviting ground-floor lobby and landscaped pavement. Clearly communicate commercial construction. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### architecture.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. An architect's studio table with a detailed white physical model of a contemporary building, rolled drawings, precise floor plans and drafting instruments. No readable text. Clearly communicate architectural planning and design. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### renovation.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. An elegant apartment kitchen undergoing careful renovation: newly installed warm wood cabinets and stone island, a neatly protected floor edge, paint roller and small toolbox in foreground, finished wall beside an exposed plaster section. Clean organized work site. Clearly communicate renovation and remodelling. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### landscape.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. A beautifully designed tropical residential courtyard with native greenery, stone stepping paths, a mature small tree, layered planting, timber seating and warm garden lighting. Clearly communicate landscape design. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.

### builders.jpg

Use case: photorealistic-natural. Asset: individual landscape website service card photograph for an architecture and construction studio. A professionally managed residential development of several contemporary villas, some finished and one with a realistic reinforced concrete frame and orderly scaffolding in background. Tasteful architectural development overview, no people. Clearly communicate builders and property development. Cohesive premium architectural editorial photography, warm natural daylight, muted cream, timber, stone and green palette, physically plausible construction, crisp material detail, straight architectural verticals, wide landscape 3:2 composition. Single scene only, no collage, no lettering, no watermark, no logos. Leave bottom edge calm for a small UI label.


## Supabase hosting

The seven service images are hosted in the public `service-images` Supabase Storage bucket. The home page uses the public URLs recorded in `supabase-manifest.json`. Filenames include a content hash for cache-safe updates. Local JPEG copies have been removed; the website loads photos directly from Supabase. Each card has a bundled SVG service icon fallback while loading or if its photo fails. Private client storage is unchanged.
