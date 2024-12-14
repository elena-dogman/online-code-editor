'use client';

import React from 'react';

type ExecutionResultProps = {
  output: string;
};

const ExecutionResult: React.FC<ExecutionResultProps> = ({ output }) => {
  return (
    <div className="mt-4 p-4 border bg-gray-100 rounded-sm">
      <h2 className="text-xl mb-2">Execution Result</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default ExecutionResult;
