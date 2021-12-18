import { createRef, CSSProperties, FC, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
const { useScreenshot } = require('use-react-screenshot');

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
  const ref = createRef();
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    console.log('Image capt');

    takeScreenshot(ref.current);
  };

  useEffect(() => {
    console.log('image change', image);
  }, [image]);

  return (
    <div>
      <img width={1000} src={image} alt={'Screenshot'} />
      <button onChange={getImage}>Click</button>
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
          // options={}

          // renderMode=""
          ref={ref as any}
          onLoadSuccess={(data) => {
            onLoadSuccess && onLoadSuccess(data);
            getImage();
          }}
          onLoadProgress={onLoadProgress}
          loading={
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                backgroundColor: 'red',
                width: 800,
                height: 800,
              }}
            ></div>
          }
        >
          <Page pageNumber={currentPage} renderAnnotationLayer={false} />
        </Document>
      </div>
    </div>
  );
};
