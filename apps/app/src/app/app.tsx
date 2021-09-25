import styles from './app.module.scss';
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';
import { ReactComponent as Logo } from './logo.svg';
import { ReactPdfComponents } from '@atticus/react-pdf-components';
export function App() {
  return (
    <div className={styles.app}>
      <PDFViewer width={800} height={800}>
        <Document>
          <Page size="A4">
            <ReactPdfComponents></ReactPdfComponents>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default App;
