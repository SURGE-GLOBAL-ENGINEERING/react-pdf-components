import { Theme } from '@atticus/react-pdf-components';
import ReactPDF, { Document, Font, PDFViewer } from '@react-pdf/renderer';
import { useMemo } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import ComponentPreviews from './components';
import { editorFonts } from './fonts';

editorFonts.forEach((el) => {
  Font.register(el);
});

interface WithPDFViewerProps extends ReactPDF.PDFViewerProps {
  documentProps?: ReactPDF.DocumentProps;
  themeConfig?: Theme;
}
const WithPDFViewer: React.FC<WithPDFViewerProps> = ({
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
// test change
export function App() {
  const routes = useMemo(() => {
    const r = [];
    for (const [key, value] of Object.entries(ComponentPreviews)) {
      r.push({
        label: key,
        component: value,
      });
    }
    return r;
  }, []);

  return (
    // TODO react-pdf have a issue with context-providers https://github.com/diegomura/react-pdf/issues/522
    // <ThemeProvider themeConfig={{ fontFamily: fontState }}>
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
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {r.component.default({ children: undefined }) as any}
              </WithPDFViewer>
            </Route>
          ))}
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
