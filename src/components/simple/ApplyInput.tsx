import React, { FC } from 'react';

interface ApplyInputProps {
  data: string;
  string: string;
  onClick: () => void;
}

export const ApplyInput: FC<ApplyInputProps> = ({ data, onClick, string }) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '10px' }}>
			<div >{data}</div>
      <button style={{ width: '10%', background: '#E0BEA2', color: 'white' }} onClick={onClick}>{string}</button>
    </div>
  );
};
