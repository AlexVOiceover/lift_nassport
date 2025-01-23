// ActionsManager.tsx
import React, { useState } from 'react';
import ActionsTable from './ActionsTable';
import { Statement, ActionsManagerProps } from '../../types/types';

const ActionsManager: React.FC<ActionsManagerProps> = ({ statement }) => {
  // For now, simply pass statement.actions to ActionsTable
  return (
    <div>
      <h2>Actions Manager</h2>
      {/* We pass down statement.actions or an empty array if undefined */}
      <ActionsTable actions={statement.actions || []} />
    </div>
  );
};

export default ActionsManager;
