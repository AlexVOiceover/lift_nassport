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

export interface ActionsManagerProps {
  statement: Statement;
  // notify the parent about changes to actions, add an optional callback:
  //onActionsUpdate?: (updatedActions: Action[]) => void;
}
export interface AddActionRowProps {
  onAddAction: (newAction: Action) => void; // Exclude creationDate as it will be auto-generated
}

export interface ActionsTableProps {
  actions: Action[];
  editingRowIndex: number | null;
  onEditRow: (rowIndex: number) => void;
  onCancelEdit: () => void;
  setActions: React.Dispatch<React.SetStateAction<Action[]>>;
}
