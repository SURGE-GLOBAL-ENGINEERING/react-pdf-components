import { CSSProperties, FC } from 'react';
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
  style?: CSSProperties;
}

export const Viewer: FC<ViewerProps> = ({
  url,
  currentPage,
  onLoadProgress,
  onLoadSuccess,
  onClick,
  style,
}) => {
  return (
    <div
      style={{
        // make unselectable
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        cursor: onClick ? 'pointer' : 'auto',
        ...style,
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
