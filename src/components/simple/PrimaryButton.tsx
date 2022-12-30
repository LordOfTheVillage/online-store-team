import React from 'react';

interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

