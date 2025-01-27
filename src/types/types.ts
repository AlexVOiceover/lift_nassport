export interface Action {
  creationDate: string;
  byDate: string;
  action: string;
}

export interface Statement {
  subject: string;
  verb: string;
  object: string;
  // adverbial?: string;
  isPublic: boolean;
  actions?: Action[];
}
