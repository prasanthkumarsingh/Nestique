export type ProjectStatus = "planning" | "in_progress" | "completed";

export type Admin = {
  id: string;
  email: string;
  name: string | null;
  added_by: string | null;
  created_at: string;
};

export type Client = {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  approved: boolean;
  added_by: string | null;
  created_at: string;
};

export type Project = {
  id: string;
  name: string;
  project_type: string | null;
  status: ProjectStatus;
  created_by: string | null;
  created_at: string;
};

export type ProjectClient = {
  id: string;
  project_id: string;
  client_email: string;
  created_at: string;
};

export type ProjectImage = {
  id: string;
  project_id: string;
  storage_path: string;
  category: string | null;
  caption: string | null;
  uploaded_by: string | null;
  uploaded_at: string;
};

export type ProjectUpdate = {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  status: string | null;
  update_date: string;
  created_by: string | null;
  created_at: string;
};

export type ClientFormData = {
  email: string;
  name?: string;
  phone?: string;
};

export type ProjectFormData = {
  name: string;
  project_type?: string;
  status: ProjectStatus;
  client_emails: string[];
};

export type ProjectImageFormData = {
  category?: string;
  caption?: string;
};

export type ProjectUpdateFormData = {
  title: string;
  description?: string;
  status?: string;
  update_date: string;
};

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  planning: "Planning",
  in_progress: "In Progress",
  completed: "Completed",
};

export const STORAGE_BUCKET = "project-images";

// project_updates.status is a free-text column (no DB enum) — this is the
// fixed set offered in the admin UI so update labels stay consistent.
export const UPDATE_STATUS_OPTIONS = ["Planning", "In Progress", "Completed", "On Hold"] as const;

export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
export const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
