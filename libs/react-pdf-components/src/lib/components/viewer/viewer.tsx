import {
  Document as RPDFDocument,
  Font,
  pdf,
} from '@paladin-analytics/rpdf-renderer';
import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useAsync } from 'react-use';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/build/pdf.worker.js';

type Doc = {
  numPages: number;
};

interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: string | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
}

interface ViewerProps {
  height?: string;
  width?: string;
  transform?: string;
  currentPage: number;
  fonts: BulkLoad[];
  trimHeight: number;
  // eslint-disable-next-line no-unused-vars
  onLoadSuccess?: (doc: Doc) => void;
}

const registerFonts = (fonts: BulkLoad[]) => {
  fonts.forEach((font) => {
    Font.register(font);
  });
};

export const Viewer: FC<ViewerProps> = ({
  children,
  height,
  width,
  transform,
  currentPage,
  fonts,
  trimHeight,
  onLoadSuccess,
}) => {
  const render = useAsync(async () => {
    if (!children) return null;

    registerFonts(fonts);

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
        marginTop: trimHeight > 20 ? '-14rem' : '-12rem',
        marginBottom: trimHeight > 20 ? '-14rem' : '-12rem',
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
