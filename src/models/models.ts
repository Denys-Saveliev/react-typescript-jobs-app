
export interface IJob {
  address: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  benefits: string[];
  location: string;
  picture: string;
  createdAt: Date;
  description: string;
  employment_type: string[];
  responsibilities: string[];
  compensations: string[];
  city?: string;
  images: string[];
}

export interface IProps {
  jobs: IJob[];
}
