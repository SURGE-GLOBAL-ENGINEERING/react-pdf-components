import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent } from 'react';

/**
 * Atticus :: TextNode features
 *
 * *bold
 * *italic
 * *underline
 * *strikethrough
 * *superscript
 * *subscript
 * *smallcaps
 * *code       [Courier]--> add other font types
 * *monospace  [Courier]--> add other font types
 * *sansserif  [PT Sans]--> add other font types
 * ?dropcap
 *
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
  superscript: {
    fontVariant: 'superscript',
  },
  subscript: {
    fontVariant: 'subscript',
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
    fontVariant: 'small-caps',
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
  lineHeight?: number;
}

export const TextNode: FunctionComponent<TextNodeProps> = ({
  style,
  ...otherProps
}) => {
  // used to get the list item type if the current is a list item
  const composedStyles: { [key: string]: string | number | undefined }[] = [];

  const composeStyles = () => {
    composedStyles.push({
      ...styles.baseStyles,
      fontSize: otherProps.fontSize,
      lineHeight: otherProps.lineHeight,
    });

    if (style && Array.isArray(style)) {
      composedStyles.push(...(style as []));
    } else {
      composedStyles.push({ ...style });
    }
    // to add the relevant styles for the passed props
    for (const [propName, styleName] of Object.entries<keyof typeof styles>(
      featureToStyleMap
    )) {
      if (otherProps[propName as keyof Features]) {
        composedStyles.push(styles[styleName]);
      }
    }
  };
  const handleSpecialStyles = () => {
    if (otherProps.underline && otherProps.strikeThrough)
      //handle spacial style cases --->
      composedStyles.push(styles.underlineStrikeThrough);
  };

  composeStyles();
  handleSpecialStyles();

  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]} {...otherProps}>
        {otherProps.children}
      </RPDFText>
    </RPDFView>
  );
};
