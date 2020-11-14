import React from 'react';

interface Props {
  image: string;
  title: string;
  children?: React.ReactNode;
}
/**
 * Fetured item
 * @param image Image / icon
 * @param title Featured item title
 * @param children Featured item text
 */
export const Feature: React.FC<Props> = ({ image, title, children }) => (
  <div className='feature'>
    <img src={image} />
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);
