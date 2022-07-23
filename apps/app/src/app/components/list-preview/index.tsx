import {
  List,
  ListItem,
  Page,
  TextNode,
  View,
} from '@paladin-analytics/react-pdf-components';
import { FC } from 'react';

const SIZE = 20;

const lorem =
  ' Ut enim ad minim veniam, quis nostrud Duis  in culpa qui officia deserunt mollit anim id est laborum.';

const ListPreview: FC = () => {
  return (
    <Page wrap size="A4">
      <View
        style={{
          marginLeft: '100px',
          marginRight: '100px',
        }}
      >
        <List type="ol" style={{ fontSize: 11 }}>
          {[...Array(SIZE)].map(() => {
            return (
              <ListItem>
                <View>
                  <TextNode>{lorem}</TextNode>
                </View>
                <List type="ol" style={{ fontSize: 11 }}>
                  <ListItem>
                    <View></View>
                    <List type="ol" style={{ fontSize: 11 }}>
                      {[...Array(SIZE)].map(() => {
                        return (
                          <ListItem>
                            <TextNode>qweqweqwe</TextNode>
                          </ListItem>
                        );
                      })}
                    </List>
                  </ListItem>
                </List>
              </ListItem>
            );
          })}
        </List>
      </View>
    </Page>
  );
};

export default ListPreview;
