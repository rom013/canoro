interface city {
  name: string;
  background: string;
  country: string;
}

export interface responseLocation {
  price: string;
  discount?: number | 0;
  cityTour?: boolean | false;
  popular?: boolean | false;
  averageEvaluation: number;
  city: city[];
}
