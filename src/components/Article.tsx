import React from 'react';

interface Props {
  image: string;
  author: string;
  title: string;
  children?: React.ReactNode;
}

/**
 * Article Card
 * @param author Article Author
 * @param image Card header image
 * @param title Article title
 * @param children Article text
 */
export const Article: React.FC<Props> = ({
  author,
  image,
  title,
  children,
}) => (
  <div className='article'>
    <img src={image} />
    <div className='body'>
      <span className='author'>{author}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </div>
);
