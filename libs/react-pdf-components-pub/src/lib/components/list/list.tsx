import { StyleSheet, View as RPDFView } from '@paladin-analytics/rpdf-renderer';
import { createContext, FC, ReactElement, useContext } from 'react';
import { addPropsToReactElement, LIST_ITEM_INDENT_WIDTH } from '../../utils';
import { ListItemProps } from '../list-item';

const LevelContext = createContext(0);
export const TypeContext = createContext('ol');

// utility function to add props to single and multiple children
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addPropsToChildren = (children: any) => {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, { index: 0 });
  }

  return children.map((childElement, index) =>
    addPropsToReactElement(childElement, { key: index, index })
  );
};

export interface ListProps {
  type: 'ul' | 'ol';
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
}

export const List: FC<ListProps> = ({ children, type }) => {
  const level = useContext(LevelContext);

  const styles = StyleSheet.create({
    list: {
      marginLeft: `${level * LIST_ITEM_INDENT_WIDTH}px`,
    },
  });

  return (
    <LevelContext.Provider value={level + 1}>
      <TypeContext.Provider value={type}>
        <RPDFView style={styles.list}>{addPropsToChildren(children)}</RPDFView>
      </TypeContext.Provider>
    </LevelContext.Provider>
  );
};
