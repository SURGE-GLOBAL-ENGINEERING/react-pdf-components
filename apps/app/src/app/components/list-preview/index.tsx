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
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
          {[...Array(SIZE)].map((x, i) => {
            // if (i === 5) {
            //   return (
            //     <List type="ul">
            //       {[...Array(SIZE / 2)].map((x, i) => {
            //         if (i === 5) {
            //           return (
            //             <List type="ol">
            //               {[...Array(SIZE / 2)].map((x) => {
            //                 if (i === 5) {
            //                   return (
            //                     <ListItem>
            //                       <TextNode>{lorem}</TextNode>
            //                     </ListItem>
            //                   );
            //                 }
            //                 return (
            //                   <ListItem>
            //                     <TextNode>{lorem}</TextNode>
            //                   </ListItem>
            //                 );
            //               })}
            //             </List>
            //           );
            //         }

            //         return (
            //           <ListItem>
            //             <TextNode>{lorem}</TextNode>
            //           </ListItem>
            //         );
            //       })}
            //     </List>
            //   );
            // }

            return (
              <ListItem>
                <TextNode>{lorem}</TextNode>
              </ListItem>
            );
          })}
        </List>
        {/* <List type="ul" style={{ fontSize: 24 }}>
          {[...Array(SIZE)].map((x) => (
            <ListItem>
              <TextNode>{lorem}</TextNode>
            </ListItem>
          ))}
        </List> */}
      </View>
    </Page>
  );
};

export default ListPreview;
