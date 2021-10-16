import { FC } from 'react';
import { Link as RPDFLink } from '@paladin-analytics/renderer';

interface LinkProps {
  // external source url
  src: string;
}

export const Link: FC<LinkProps> = ({ children, src }) => {
  return <RPDFLink src={src}>{children}</RPDFLink>;
};
