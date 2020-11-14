import React from 'react';

interface Props {
  clicked: () => void;
  text: String;
  type: 'button' | 'submit' | 'reset' | undefined;
}

/**
 * Button
 * @param clicked Click event
 * @param text Button text
 * @param type Button type
 */
export const Button : React.FC<Props> = ({ clicked, text, type }) => (
  <button onClick={clicked} type={type}>
    <div className="overlay"></div>
    {text}
  </button>
);
