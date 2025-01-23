// ActionsManager.tsx
import React, { useState } from 'react';
import ActionsTable from './ActionsTable';
import AddActionRow from './AddActionRow';
import { ActionsManagerProps, Action } from '../../types/types';

const ActionsManager: React.FC<ActionsManagerProps> = ({ statement }) => {
  const [actions, setActions] = useState<Action[]>(statement.actions || []);

  const handleAddAction = (newAction: Omit<Action, 'creationDate'>) => {
    // Automatically set today's date as creationDate
    const actionWithDate: Action = {
      ...newAction,
      creationDate: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
    };

    // Update the actions state
    setActions((prev) => [...prev, actionWithDate]);
  };
  return (
    <div>
      {/* <h2 className='font-bold mb-4'>Actions Manager</h2> */}
      {/* Display existing actions */}
      <ActionsTable actions={actions} />

      {/* Add a new action */}
      <AddActionRow onAddAction={handleAddAction} />
    </div>
  );
};

export default ActionsManager;
