import { Link as RPDFLink } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';

interface LinkProps {
  // external source url
  src: string;
}

export const Link: FC<LinkProps> = ({ children, src }) => {
  return <RPDFLink src={src}>{children}</RPDFLink>;
};
