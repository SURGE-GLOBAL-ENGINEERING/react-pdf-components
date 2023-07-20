import { Text as RPDFText, StyleSheet } from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { FC } from 'react';
import { Item } from '../list-item';

interface FootnoteProps {
  reference: string;
  note: any;
  style?: RPDFStyles;
}
//helo

export const Footnote: FC<FootnoteProps> = ({ reference, note, style }) => {
  // used to get the list item type if the current is a list item

  const composedStyles: {
    [key: string]: string | number | boolean | undefined;
  }[] = [];

  type Features = {
    superscript?: boolean;
    subscript?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
    smallCaps?: boolean;
  };

  const {
    bold,
    italic,
    underline,
    monospace,
    smallcaps,
    subscript,
    superscript,
    strikethrough,
    sansserif,
    text
  } = note;

  const props = {
    bold: bold,
    italic: italic,
    underline: underline,
    fontSize: 12,
    smallCaps: smallcaps,
    subscript: subscript,
    superscript: subscript,
    strikeThrough: strikethrough,};

    
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

    const composeStyles = () => {
      // composedStyles.push({
      //   ...styles.baseStyles,
      //   fontSize: props.fontSize,
      // });

      if (style && Array.isArray(style)) {
        composedStyles.push(...(style as []));
      } else {
        composedStyles.push({ ...style });
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

    composeStyles();

    console.log("composed Styles", ...composedStyles)


  return (
    <RPDFText
      footnote={() => (
        <Item prefix={`${reference}.`} style={style}>
          <RPDFText style={{ ...Object.assign({}, ...composedStyles) }} orphans={0}>
            {text}
          </RPDFText>
        </Item>
      )}
      style={{ ...style, fontVariant: 'superscript' }}
    >
      {reference}{' '}
    </RPDFText>
  );
};
