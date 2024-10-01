export interface ICourse {
  name: string;
  created_at?: Date;
}

export interface IFilterCourses {
  limit?: number;
  page?: number;
  search?: string;
}
