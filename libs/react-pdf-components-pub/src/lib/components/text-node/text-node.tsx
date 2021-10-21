import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent } from 'react';

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
    // TODO this is a temporary style for smallCaps, needs to find a better solution
    textTransform: 'uppercase',
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

export interface TextNodeProps extends ReactPDF.TextProps, Features {
  fontSize?: number;
  index?: number;
}

export const TextNode: FunctionComponent<TextNodeProps> = (props) => {
  // used to get the list item type if the current is a list item
  const composedStyles: { [key: string]: string | number | undefined }[] = [];

  const composeStyles = () => {
    composedStyles.push({
      ...styles.baseStyles,
      fontSize: props.fontSize,
    });

    if (props.style && Array.isArray(props.style)) {
      composedStyles.push(...(props.style as []));
    } else {
      // TODO: Uncomment and fix the following
      // composedStyles.push({ ...props.style });
    }
    // to add the relevant styles for the passed props
    for (const [propName, styleName] of Object.entries<keyof typeof styles>(
      featureToStyleMap
    )) {
      if (props[propName as keyof Features]) {
        composedStyles.push(styles[styleName]);
      }
    }
  };
  const handleSpecialStyles = () => {
    if (props.underline && props.strikeThrough)
      //handle spacial style cases --->
      composedStyles.push(styles.underlineStrikeThrough);
  };

  composeStyles();
  handleSpecialStyles();

  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]} {...props}>
        {props.children}
      </RPDFText>
    </RPDFView>
  );
};
