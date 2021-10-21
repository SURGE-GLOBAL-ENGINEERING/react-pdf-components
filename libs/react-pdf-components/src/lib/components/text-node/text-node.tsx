import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
  View as RPDFView,
} from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent, useContext } from 'react';
import { TypeContext } from '../list';
import './text-node.module.scss';

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
  index?: number;
}

export const TextNode: FunctionComponent<TextNodeProps> = (props) => {
  // used to get the list item type if the current is a list item
  const type = useContext(TypeContext);
  const composedStyles: { [key: string]: string | number | undefined }[] = [];

  const composeStyles = () => {
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

  const renderListItemPrefix = () => {
    // TODO: fix bullet size to be clear and fix alignment
    // TODO: check 2 number case - starting from 10
    if (type) {
      if (type === 'ul') {
        return <RPDFText style={{ fontSize: '16px' }}>• </RPDFText>;
      }
      if (props.index) {
        return <RPDFText>{props.index}. </RPDFText>;
      }
    }
    return null;
  };

  return (
    <RPDFView>
      <RPDFText style={[...composedStyles]} {...props}>
        {renderListItemPrefix()}
        {props.children}
      </RPDFText>
    </RPDFView>
  );
};
