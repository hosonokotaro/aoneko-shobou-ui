import React from 'react';

interface Props {
  text: string;
  no: number;
}

const Message: React.FC<Props> = ({ text, no }) => {
  return (
    <div>
      <p>
        {text} {no}
      </p>
    </div>
  );
};

export default Message;
