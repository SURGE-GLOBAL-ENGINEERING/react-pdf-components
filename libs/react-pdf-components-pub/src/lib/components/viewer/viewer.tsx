import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  pdf,
  Document as RPDFDocument,
  Page as RPDFPage,
  Font,
} from '@react-pdf/renderer';
import { useAsync } from 'react-use';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/build/pdf.worker.js';

interface ViewerProps {
  height?: string;
  width?: string;
  transform?: string;
  // TODO: Add other sizes
  pageSize: 'A4';
  currentPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDocumentLoad: any;
}

const registerFonts = () => {
  Font.register({
    family: 'Open Sans',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600italic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },
    ],
  });
};

export const Viewer: FC<ViewerProps> = ({
  children,
  height,
  width,
  transform,
  pageSize,
  currentPage,
  onDocumentLoad,
}) => {
  const render = useAsync(async () => {
    if (!children) return null;

    registerFonts();

    const withDocumentWrapper = (
      <RPDFDocument>
        <RPDFPage size={pageSize}>{children}</RPDFPage>
      </RPDFDocument>
    );
    const blob = await pdf(withDocumentWrapper).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [children]);

  return (
    <div
      style={{
        height,
        width,
        transform,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // TODO: remove the unwanted
        zIndex: 1000,
        marginTop: '-10rem',
        marginBottom: '-10rem',
        backgroundColor: '#fff',
        padding: '2rem',
        boxShadow: '0 0 20px #969696',
      }}
    >
      {render.loading && <div>Rendering PDF...</div>}

      <Document file={render.value} onLoadSuccess={onDocumentLoad}>
        <Page pageNumber={currentPage} />
      </Document>
    </div>
  );
};
