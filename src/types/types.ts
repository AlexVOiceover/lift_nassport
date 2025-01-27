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
