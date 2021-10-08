import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@react-pdf/renderer';
import React, { FunctionComponent } from 'react';
import './text-node.module.scss';
/*
  Atticus :: TextNode features
    !superscript [no native feat]  https://github.com/diegomura/react-pdf/issues/754
    !subscript   [no native feat]
    *bold
    *italic
    *underline
    *strikethrough
    *code       [Courier]--> add other font types
    *monospace  [Courier]--> add other font types
    *sansserif  [PT Sans]--> add other font types
    !smallcaps  [no native feat]--> https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps

    ?dropcap

    TDOD
      - check the fonts
      - study the react pdf renderer (update issue)
      - wrapping

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
  subscript: {
    position: 'relative',
    top: '0.5em',
    fontSize: 15,
  },
  bold: {
    fontWeight: 900,
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },
  underlineStrikeThrough: {
    textDecoration: 'underline line-through',
  },
  strikeThrough: {
    textDecoration: 'line-through',
  },
  code: {
    fontFamily: 'Courier',
  },
  sansSerif: {
    fontFamily: 'PT Sans',
  },
  monospace: {
    fontFamily: 'Courier',
  },
  smallCaps: {
    textTransform: 'uppercase',
    // fontSize: '30%',
    transform: 'scale(0.5)',
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
  code: 'code',
  monospace: 'monospace',
  smallCaps: 'smallCaps',
  sansSerif: 'sansSerif',
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextNodeProps extends ReactPDF.TextProps, Features {
  fontSize?: number;
  dropCapped?: boolean;
}
export const TextNode: FunctionComponent<TextNodeProps> = (props) => {
  const composedStyles: { [key: string]: string | number | undefined }[] = [];
  composedStyles.push({
    ...styles.baseStyles,
    fontSize: props.fontSize,
  });

  if (props.style && Array.isArray(props.style)) {
    composedStyles.push(...(props.style as []));
  } else {
    composedStyles.push({ ...props.style });
  }
  // to add the relevant styles for the passed props
  for (const [propsName, styleName] of Object.entries<keyof typeof styles>(
    featureToStyleMap
  )) {
    if (props[propsName as keyof Features])
      composedStyles.push(styles[styleName]);
  }
  console.log('COMPOSED STYLES', { composedStyles });
  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]}>
        {props.dropCapped
          ? (props.children as string).slice(1)
          : props.children}
      </RPDFText>
    </RPDFView>
  );
};

// eslint-disable-next-line no-unused-vars
const renderDropCap = (char: string) => {
  console.log('RENDER DORP CAP', { char });

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const styles = StyleSheet.create({
    char: {
      fontSize: 36,
      // lineHeight: 2,
      // marginRight: 1.5,
      // transform: 'scale(1.1)',
    },
    // fontSize: "3rem",
    // lineHe: "1em",
    // padding: "0 0.25rem",
    // margin-right: "0.125rem",
    // webkit-initial-letter: "2",
    // initial-letter: "2",
    // transform: "scale(1.1)"
  });
  return <RPDFText style={styles.char}>{char.charAt(0)}</RPDFText>;
};
