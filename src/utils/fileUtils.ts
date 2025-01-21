import fs from 'fs';

export const saveStatementsToFile = (
  statements: {
    subject: string;
    verb: string;
    object: string;
    adverbial: string;
    isPublic: boolean;
  }[],
  filePath: string
) => {
  const jsonData = JSON.stringify(statements, null, 2);

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error('Error saving statements:', err);
      return;
    }
    console.log('Statements successfully saved to:', filePath);
  });
};
