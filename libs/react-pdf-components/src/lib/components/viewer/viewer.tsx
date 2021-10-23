import {
  Document as RPDFDocument,
  Font,
  pdf,
} from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useAsync } from 'react-use';
import { editorFonts } from './fonts';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/build/pdf.worker.js';

type Doc = {
  numPages: number;
};

interface ViewerProps {
  height?: string;
  width?: string;
  transform?: string;
  // TODO: Add other sizes
  // pageSize: 'A4';
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onLoadSuccess: (param: Doc) => void;
}

const registerFonts = () => {
  editorFonts.forEach((el) => {
    Font.register(el);
  });

  // Font.register({
  //   family: 'Open Sans',
  //   fonts: [
  //     {
  //       src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
  //     },
  //     {
  //       src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',
  //       fontStyle: 'italic',
  //     },
  //     {
  //       src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
  //       fontWeight: 600,
  //     },
  //     {
  //       src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600italic.ttf',
  //       fontWeight: 600,
  //       fontStyle: 'italic',
  //     },
  //   ],
  // });
};

export const Viewer: FC<ViewerProps> = ({
  children,
  height,
  width,
  transform,
  // TODO: remove page size from here
  // pageSize,
  currentPage,
  onLoadSuccess,
}) => {
  const render = useAsync(async () => {
    if (!children) return null;

    registerFonts();

    const withDocumentWrapper = <RPDFDocument>{children}</RPDFDocument>;
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

      {render.error && (
        <div style={{ color: 'red' }}>{render.error.message}</div>
      )}

      <Document file={render.value} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={currentPage} />
      </Document>
    </div>
  );
};
