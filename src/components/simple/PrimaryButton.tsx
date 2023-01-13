import React from 'react';

export interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button data-testid="test-button" className="btn btn-primary" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

