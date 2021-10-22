import { Page as RPDFPage } from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';

interface PageProps {
  wrap?: boolean;
  debug?: boolean;
  size?: 'A4';
  orientation?: 'portrait' | 'landscape';
}

export const Page: FC<PageProps> = ({ children, size }) => {
  return <RPDFPage size={size}>{children}</RPDFPage>;
};
