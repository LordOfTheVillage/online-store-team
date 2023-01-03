import React, { FC } from 'react';

interface ApplyInputProps {
  data: string;
  string: string;
  onClick: () => void;
}

export const ApplyInput: FC<ApplyInputProps> = ({ data, onClick, string }) => {
  return (
    <div style={{ display: 'flex' }}>
      {data} <button onClick={onClick}>{string}</button>
    </div>
  );
};
