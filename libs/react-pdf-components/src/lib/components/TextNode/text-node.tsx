import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@react-pdf/renderer';
import { FunctionComponent, useEffect } from 'react';
import useTheme from './../ThemeProvider/useTheme';
import './text-node.module.scss';
/*
  Atticus :: TextNode features
    superscript -->
    subscript -->
    bold
    italic
    underline
    strikethrough
    code
    smallcaps
    monospace
    sansserif

    dropcap

*/
type Features = {
  superscript?: boolean;
  subscript?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
  code?: boolean;
  smallCaps?: boolean;
  monospace?: boolean;
  sansSerif?: boolean;
};
const styles = StyleSheet.create({
  superscript: {},
  subscript: {},
  bold: {
    fontWeight: 900,
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },
  strikeThrough: {
    textDecoration: 'line-through',
  },
  baseStyles: {},
});
const featureToStyleMap: Record<keyof Features, keyof typeof styles> = {
  superscript: 'superscript',
  subscript: 'subscript',
  bold: 'bold',
  italic: 'italic',
  underline: 'underline',
  strikeThrough: 'strikeThrough',
  code: 'bold',
  smallCaps: 'bold',
  monospace: 'bold',
  sansSerif: 'bold',
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextNodeProps extends ReactPDF.TextProps, Features {
  fontSize?: number;
}
export const TextNode: FunctionComponent<TextNodeProps> = (props) => {
  const { fontFamily } = useTheme();
  useEffect(() => {
    console.log('THEME PROVIDER', { fontFamily });
  }, [fontFamily]);

  const composedStyles = [];
  composedStyles.push({
    ...styles.baseStyles,
    fontSize: props.fontSize,
    fontFamily,
  });

  for (const [propsName, styleName] of Object.entries<keyof typeof styles>(
    featureToStyleMap
  )) {
    if (props[propsName as keyof Features])
      composedStyles.push(styles[styleName]);
  }

  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]} {...props}>
        {props.children}
      </RPDFText>
    </RPDFView>
  );
};
