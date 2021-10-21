import { Theme, Viewer } from '@atticus/react-pdf-components-pub';
import ReactPDF, {
  Document,
  Font,
  PDFViewer,
} from '@paladin-analytics/rpdf-renderer';
import { useMemo, useState } from 'react';
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

export function App() {
  const [isNew, setIsNew] = useState(false);

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

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const handleChange = (e: any) => {
    setIsNew(e.target.value === 'new');
  };

  return (
    // TODO react-pdf have a issue with context-providers https://github.com/diegomura/react-pdf/issues/522
    // <ThemeProvider themeConfig={{ fontFamily: fontState }}>
    <Router>
      <div className={styles.app}>
        <nav>
          <ul>
            {routes.map((r) => (
              <li key={r.label}>
                <Link to={`${r.label}-prev`}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <form>
          <input
            type="radio"
            name="previewer"
            value="old"
            onChange={handleChange}
          />
          Old
          <input
            type="radio"
            name="previewer"
            value="new"
            onChange={handleChange}
          />
          New
        </form>
        <Switch>
          {routes.map((r) => (
            <Route key={r.label} path={`/${r.label}-prev`}>
              {isNew ? (
                <Viewer
                  height="100%"
                  width="100%"
                  // pageSize="A4"
                  transform="scale(0.7) translate(0, 20%)"
                  currentPage={1}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onDocumentLoad={(d: any) => {
                    console.log('total pages', d.numPages);
                  }}
                >
                  <div>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {r.component.default({ children: undefined }) as any}
                  </div>
                </Viewer>
              ) : (
                <WithPDFViewer>
                  {/* casting to any type as child can have different prop-types */}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {r.component.default({ children: undefined }) as any}
                </WithPDFViewer>
              )}
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
