# Portfolio image sources

The 32 images in portfolio-images.json are public marketing assets in Supabase Storage, in the portfolio-images bucket. Private client folders remain in the private project-images bucket. Filenames contain a content hash for reliable caching.

The seven apartment uploads have no supplied project name, so Heritage Apartment is an editorial display name based on their traditional interiors. It is not an asserted official property name. Update src/lib/portfolio.data.ts when an official name is supplied.

The portfolio displays all images, grouped by project, with Residential and Hospitality filters and a native-dialog full-size viewer. No Supabase service credentials are sent to the browser.
