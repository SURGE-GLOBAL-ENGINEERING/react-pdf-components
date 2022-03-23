import { StyleSheet, View as RPDFView } from '@paladin-analytics/rpdf-renderer';
import { Style as RPDFStyles } from '@paladin-analytics/rpdf-types';
import { createContext, FC, ReactElement, useContext } from 'react';
import { addPropsToReactElement, LIST_ITEM_INDENT_WIDTH } from '../../utils';
import { ListItemProps } from '../list-item';

export const LevelContext = createContext<number>(0);
export const TypeContext = createContext<'ol' | 'ul'>('ol');
export const StyleContext = createContext<RPDFStyles | undefined>({});

// utility function to add props to single and multiple children
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addPropsToChildren = (children: any) => {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, { index: 1 });
  }

  return children.map((childElement, index) =>
    addPropsToReactElement(childElement, { key: index, index: index + 1 })
  );
};

export interface ListProps {
  type: 'ul' | 'ol';
  children?: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
  style?: RPDFStyles | RPDFStyles[];
}

export const List: FC<ListProps> = ({ children, type, style }) => {
  const level = useContext(LevelContext);

  const getStyles = () => {
    if (!style) return {};
    if (Array.isArray(style)) {
      return style.reduce((pre, curr) => Object.assign(pre, curr), {});
    }
    return style;
  };

  const styles = StyleSheet.create({
    list: {
      marginLeft: `${LIST_ITEM_INDENT_WIDTH}pt`,
      ...getStyles(),
    },
  });

  return (
    <LevelContext.Provider value={level + 1}>
      <TypeContext.Provider value={type}>
        <StyleContext.Provider value={getStyles()}>
          <RPDFView style={styles.list}>
            {addPropsToChildren(children)}
          </RPDFView>
        </StyleContext.Provider>
      </TypeContext.Provider>
    </LevelContext.Provider>
  );
};
