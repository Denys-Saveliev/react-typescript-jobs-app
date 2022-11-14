export interface ILocation {
  lat: string;
  long: string;
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
}

export interface IProps {
  jobs: IJob[];
}
