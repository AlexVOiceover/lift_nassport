// ActionsManager.tsx
import React, { useState } from 'react';
import ActionsTable from './ActionsTable';
import AddActionRow from './AddActionRow';
import { ActionsManagerProps, Action } from '../../types/types';

const ActionsManager: React.FC<ActionsManagerProps> = ({ statement }) => {
  const [actions, setActions] = useState<Action[]>(statement.actions || []);

  const handleAddAction = (newAction: Action) => {
    // Update the actions state
    setActions((prev) => [...prev, newAction]);
  };
  return (
    <div>
      {/* <h2 className='font-bold mb-4'>Actions Manager</h2> */}
      {/* Display existing actions */}
      <ActionsTable actions={actions} />
      <hr className='my-4' />
      {/* Add a new action */}
      <AddActionRow onAddAction={handleAddAction} />
    </div>
  );
};

export default ActionsManager;
