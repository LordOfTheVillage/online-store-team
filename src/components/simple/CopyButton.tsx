import React, { useState } from 'react';

interface CopyButtonProps {
  title: string;
}

export const CopyButton: React.FC<CopyButtonProps> = (props) => {

	const [title, setTitle] = useState(props.title);

	const handleCopy = () => {
		setTitle('Copied');
		navigator.clipboard.writeText(document.location.href);
		setTimeout(() => setTitle(props.title), 2000); 
	};

  return (
    <button className="btn btn-primary" onClick={handleCopy}>
      {title}
    </button>
  );
};

