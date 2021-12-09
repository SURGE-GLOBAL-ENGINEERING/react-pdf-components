import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/build/pdf.worker.js';

type Doc = {
  numPages: number;
};

interface LoadingProcessData {
  loaded: number;
  total: number;
}

interface ViewerProps {
  url: string;
  currentPage: number;
  transform?: string;
  marginTop?: string;
  marginBottom?: string;
  // eslint-disable-next-line no-unused-vars
  onLoadProgress?: (data: LoadingProcessData) => void;
  // eslint-disable-next-line no-unused-vars
  onLoadSuccess?: (doc: Doc) => void;
  onClick?: () => void;
}

export const Viewer: FC<ViewerProps> = ({
  url,
  transform,
  currentPage,
  marginTop,
  marginBottom,
  onLoadProgress,
  onLoadSuccess,
  onClick,
}) => {
  return (
    <div
      style={{
        transform,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // make unselectable
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        cursor: onClick ? 'pointer' : 'auto',
        zIndex: 1000,
        marginTop,
        marginBottom,
        backgroundColor: '#fff',
        boxShadow: '0 0 20px #969696',
      }}
      onClick={onClick}
    >
      <Document
        file={url}
        onLoadSuccess={onLoadSuccess}
        onLoadProgress={onLoadProgress}
      >
        <Page pageNumber={currentPage} renderAnnotationLayer={false} />
      </Document>
    </div>
  );
};
