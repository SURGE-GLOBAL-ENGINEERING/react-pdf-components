import { FC } from 'react';
import { Document, LoadingProcessData, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.9.359/build/pdf.worker.js';

type Doc = {
  numPages: number;
};

interface ViewerProps {
  url: string;
  height?: string;
  width?: string;
  transform?: string;
  currentPage: number;
  trimHeight: number;
  // eslint-disable-next-line no-unused-vars
  onLoadProgress?: (data: LoadingProcessData) => void;
  // eslint-disable-next-line no-unused-vars
  onLoadSuccess?: (doc: Doc) => void;
  onClick?: () => void;
}

export const Viewer: FC<ViewerProps> = ({
  url,
  height,
  width,
  transform,
  currentPage,
  trimHeight,
  // TODO: look here
  onLoadProgress,
  onLoadSuccess,
  onClick,
}) => {
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
        // make unselectable
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        cursor: onClick ? 'pointer' : 'auto',
        // TODO: remove the unwanted
        zIndex: 1000,
        marginTop: trimHeight > 20 ? '-14rem' : '-12rem',
        marginBottom: trimHeight > 20 ? '-14rem' : '-12rem',
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
