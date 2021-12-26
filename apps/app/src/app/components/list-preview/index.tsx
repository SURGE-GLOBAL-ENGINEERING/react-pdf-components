import {
  List,
  ListItem,
  Page,
  TextNode,
} from '@paladin-analytics/react-pdf-components';
import { FC } from 'react';

const ListPreview: FC = () => {
  const longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
    'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const items: string[] = [];
  for (let i = 0; i < 500; i += 1) items.push(`Hello there ${i + 1}`);

  return (
    <Page wrap size="A4">
      <List type="ul">
        <ListItem>
          <TextNode>sub section 1</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>sub section 2</TextNode>
          <ListItem>
            <TextNode>sub section 2.1</TextNode>
            <ListItem>
              <TextNode>sub section 2.1.1</TextNode>
              <ListItem>
                <TextNode>sub section 2.1.1.1</TextNode>
                <ListItem>
                  <TextNode>sub section 2.1.1.1.1</TextNode>
                </ListItem>
              </ListItem>
            </ListItem>
          </ListItem>
        </ListItem>
      </List>

      <List type="ol" style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}>
        {items.slice(0, 2).map((upperItem, upperIndex) => (
          <ListItem key={upperIndex}>
            <>
              <TextNode>{upperItem}</TextNode>
              <List
                type="ol"
                style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}
              >
                {items.slice(0, 2).map((item, index) => (
                  <ListItem key={index}>
                    <TextNode>{item}</TextNode>
                    <List
                      type="ol"
                      style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}
                    >
                      {items.slice(0, 8).map((item2, index2) => (
                        <ListItem key={index2}>
                          <TextNode>{item2}</TextNode>
                          <List
                            type="ol"
                            style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}
                          >
                            {items.slice(0, 8).map((item3, index3) => (
                              <ListItem key={index3}>
                                <TextNode>{item3}</TextNode>
                              </ListItem>
                            ))}
                          </List>
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                ))}
              </List>
            </>
          </ListItem>
        ))}
      </List>

      <List type="ol" style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}>
        {items.slice(0, 25).map((item, index) => (
          <ListItem key={index}>
            <TextNode>{item}</TextNode>
          </ListItem>
        ))}
      </List>

      <List type="ol" style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}>
        {items.slice(0, 125).map((item, index) => (
          <ListItem key={index}>
            <TextNode>{Math.random() > 0.5 ? item : longText}</TextNode>
          </ListItem>
        ))}
      </List>

      <List type="ol" style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}>
        {items.slice(0, 3125).map((item, index) => (
          <ListItem key={index}>
            <TextNode>{item}</TextNode>
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

export default ListPreview;
