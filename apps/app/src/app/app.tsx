import { Theme, ThemeProvider, useTheme } from '@atticus/react-pdf-components';
import ReactPDF, { Document, Font, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import ComponentPreviews from './components';
import { editorFonts } from './fonts';

editorFonts.forEach((el) => {
  Font.register(el);
});

interface WithPDFViewerProps extends ReactPDF.PDFViewerProps {
  documentProps?: ReactPDF.DocumentProps;
  themeConfig: Theme;
}
export const WithPDFViewer: React.FC<WithPDFViewerProps> = ({
  children,
  documentProps,
  themeConfig,
  ...pdfViewerProps
}) => {
  const { fontFamily } = useTheme();
  useEffect(() => {
    console.log('WITH PDFVIEWER', { fontFamily, themeConfig });
  }, [fontFamily, themeConfig]);
  return (
    <PDFViewer width={'100%'} height={'100%'} {...pdfViewerProps}>
      <Document title={fontFamily} {...documentProps}>
        <ThemeProvider themeConfig={themeConfig}>{children}</ThemeProvider>
      </Document>
    </PDFViewer>
  );
};

export function App() {
  const [fontState, setFontState] = useState('Courier');
  const [input, setinput] = useState('Courier');

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
    <ThemeProvider themeConfig={{ fontFamily: fontState }}>
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
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            type="text"
            name="text"
            id=""
          />
          <button
            onClick={() => {
              setFontState(input);
            }}
          >
            Set
          </button>
          <Switch>
            {routes.map((r) => (
              <Route key={r.label} path={`/${r.label}-demo`}>
                {/* <ThemeProvider themeConfig={{ fontFamily: fontState }}> */}
                <WithPDFViewer themeConfig={{ fontFamily: fontState }}>
                  {/* casting to any type as child can have different prop-types */}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {r.component.default({ children: undefined }) as any}
                </WithPDFViewer>
                {/* </ThemeProvider> */}
              </Route>
            ))}
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
