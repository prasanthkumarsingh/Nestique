export type ProjectStatus = 'Planning' | 'Design' | 'Execution' | 'Completed';

export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export type Project = {
  id: string;
  client_id: string;
  project_name: string;
  status: ProjectStatus;
  completion_percentage: number;
  created_at: string;
};

export type ProjectUpdate = {
  id: string;
  project_id: string;
  title: string;
  description: string;
  image_url: string | null;
  created_at: string;
};

export type ClientFormData = Pick<Client, 'name' | 'email' | 'phone'>;

export type ProjectFormData = {
  client_id: string;
  project_name: string;
  status: ProjectStatus;
  completion_percentage: number;
};

export type UpdateFormData = {
  title: string;
  description: string;
  image_url?: string | null;
};
