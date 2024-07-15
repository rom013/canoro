//////////////////

export interface City {
  id_city: string;
  name: string;
  background: string;
  country: string | any;
}

interface Package {
  price: string;
  discount?: number | 0;
  cityTour?: boolean | false;
  popular?: boolean | false;
  averageEvaluation: number;
  city: City[];
}

//////////////////

export type responseLocation = Package;
