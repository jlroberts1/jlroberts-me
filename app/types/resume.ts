export interface Job {
  title: string;
  company: string;
  dates: string;
  location?: string;
  bullets?: string[];
}

export interface Education {
  credential: string;
  institution: string;
  dates: string;
  location: string;
}
