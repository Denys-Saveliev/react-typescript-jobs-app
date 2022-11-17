export interface ILocation {
  lat: string;
  lng: string;
}

export interface IJob {
  address: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  benefits: string[];
  location: ILocation;
  pictures: string;
  createdAt: Date;
  description: string;
  employment_type: string[];
  responsibilities: string[];
  compensations: string[];
  city?: string;
}

export interface IProps {
  jobs: IJob[];
}
