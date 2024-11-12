export interface Course {
  id?: number;
  course_name: string;
  credits: number;
  description: number;
  teacher_id: number;
}

export interface PaginatedCourses {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Course[];
}
