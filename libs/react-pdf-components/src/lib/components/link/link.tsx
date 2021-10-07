import { FC } from 'react';
import { Link as RPDFLink } from '@react-pdf/renderer';

interface LinkProps {
  // external source url
  src: string;
}

export const Link: FC<LinkProps> = ({ children, src }) => {
  return <RPDFLink src={src}>{children}</RPDFLink>;
};
