import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@react-pdf/renderer';
import { FunctionComponent } from 'react';
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
  baseStyles: {
    fontFamily: 'Open Sans',
  },
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
  const composedStyles = [];
  composedStyles.push({ ...styles.baseStyles, fontSize: props.fontSize });
  for (const [propsName, styleName] of Object.entries<keyof typeof styles>(
    featureToStyleMap
  )) {
    if (props[propsName as keyof Features])
      composedStyles.push(styles[styleName]);
  }
  console.log({ composedStyles });

  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]} {...props}>
        {props.children}
      </RPDFText>
    </RPDFView>
  );
};
