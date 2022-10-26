import { CSSProperties, FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RenderFunction } from 'react-pdf/dist/Page';

pdfjs.GlobalWorkerOptions.workerSrc =
  '//cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.js';

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
  error?: RenderFunction;
  loading?: RenderFunction;
  noData?: RenderFunction;
  style?: CSSProperties;
}

export const Viewer: FC<ViewerProps> = ({
  url,
  currentPage,
  onLoadProgress,
  onLoadSuccess,
  onClick,
  style,
  loading,
  error,
  noData,
}) => {
  return (
    <div>
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
        {/* { 
        PleaceHolderCompo
      } */}
        <Document
          file={url}
          onLoadSuccess={(data) => {
            onLoadSuccess && onLoadSuccess(data);
          }}
          onLoadProgress={onLoadProgress}
          error={error}
          loading={loading}
          noData={noData}
        >
          <Page pageNumber={currentPage} renderAnnotationLayer={false} />
        </Document>
      </div>
    </div>
  );
};
