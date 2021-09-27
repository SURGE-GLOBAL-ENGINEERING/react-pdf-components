import styles from './app.module.scss';
import ReactPDF, { PDFViewer, Document, Font } from '@react-pdf/renderer';
import Demos from './components';
import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
export function App() {
  const routes = useMemo(() => {
    const r = [];
    for (const [key, value] of Object.entries(Demos)) {
      r.push({
        label: key,
        component: value,
      });
    }
    return r;
  }, []);

  console.log({ routes });

  return (
    <Router>
      <div className={styles.app}>
        <nav>
          <ul>
            {routes.map((r) => (
              <li key={r.label}>
                <Link to={`${r.label}-demo`}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map((r) => (
            <Route key={r.label} path={`/${r.label}-demo`}>
              <WithPDFViewer>
                {/* casting to any type as child can have different prop-types */}
                {r.component.default({ children: undefined }) as any}
              </WithPDFViewer>
            </Route>
          ))}
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

interface WithPDFViewerProps extends ReactPDF.PDFViewerProps {
  documentProps?: ReactPDF.DocumentProps;
}
export const WithPDFViewer: React.FC<WithPDFViewerProps> = ({
  children,
  documentProps,
  ...pdfViewerProps
}) => {
  return (
    <PDFViewer width={'100%'} height={'100%'} {...pdfViewerProps}>
      <Document {...documentProps}>{children}</Document>
    </PDFViewer>
  );
};
export default App;
