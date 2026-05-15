export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export interface Subject {
  id: string;
  title: string;
  slug: string;
  semester: number;
  branch: string;
  free_content: string;
  premium_pdf_url: string;
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  subject_id: string;
  payment_id: string;
  amount: number;
  status: "pending" | "success" | "completed" | "failed";
  email: string;
  created_at: string;
}

export interface SemesterData {
  semester: number;
  subjects: Subject[];
}
