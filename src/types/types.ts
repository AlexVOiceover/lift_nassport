export interface Action {
  creationDate: string;
  byDate: string;
  action: string;
}

export interface PreStatement {
  subject: string;
  verb: string;
  object: string;
  adverbial: string;
  isPublic: boolean;
}
export interface Statement extends PreStatement {
  actions?: Action[];
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  color: string;
  icon: string;
  children?: Category[];
}

export interface Verb {
  name: string;
  popularity: number;
  categories: string[];
  color: string;
}
