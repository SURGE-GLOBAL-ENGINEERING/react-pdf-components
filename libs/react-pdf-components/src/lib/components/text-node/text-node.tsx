import ReactPDF, {
  StyleSheet,
  Text as RPDFText,
} from '@paladin-analytics/rpdf-renderer';
import { FunctionComponent } from 'react';

type Features = {
  superscript?: boolean;
  subscript?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
  smallCaps?: boolean;
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
  strikeThrough: {
    textDecoration: 'line-through',
  },
  smallCaps: {
    fontVariant: 'small-caps',
  },
  baseStyles: {},

  // special styles
  underlineStrikeThrough: {
    textDecoration: 'underline line-through',
  },
});

const featureToStyleMap: Record<keyof Features, keyof typeof styles> = {
  superscript: 'superscript',
  subscript: 'subscript',
  bold: 'bold',
  italic: 'italic',
  underline: 'underline',
  strikeThrough: 'strikeThrough',
  smallCaps: 'smallCaps',
};

export interface TextNodeProps extends ReactPDF.TextProps, Features {
  fontSize?: number;
  lineHeight?: number;
  breakIfLastOnPage?: boolean;
}

export const TextNode: FunctionComponent<TextNodeProps> = ({
  style,
  orphans = 2,
  widows = 2,
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
    //handle spacial style cases
    const { underline, strikeThrough } = otherProps;
    if (underline && strikeThrough) {
      composedStyles.push(styles.underlineStrikeThrough);
    }
  };

  composeStyles();
  handleSpecialStyles();

  return (
    <RPDFText
      widows={widows}
      orphans={orphans}
      style={[...composedStyles]}
      {...otherProps}
    >
      {otherProps.children}
    </RPDFText>
  );
};
