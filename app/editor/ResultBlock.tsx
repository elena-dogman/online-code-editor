'use client';

import clsx from 'clsx';
import React from 'react';

type ExecutionResultProps = {
  output: string;
  isError?: boolean;
};

const ResultBlock: React.FC<ExecutionResultProps> = ({ output, isError }) => {
  return (
    <div
      className={clsx(
        'mt-4 p-4 border rounded-sm bg-surface-10 min-h-32',
        isError === undefined
          ? 'text-white'
          : isError
          ? 'text-red-700'
          : 'text-green-500'
      )}
    >
      <h2 className="text-lg mb-2">
        {isError === undefined
          ? 'Execution Result'
          : isError
          ? 'Error'
          : 'Execution Result'}
      </h2>
      <pre>{output}</pre>
    </div>
  );
};

export default ResultBlock;
