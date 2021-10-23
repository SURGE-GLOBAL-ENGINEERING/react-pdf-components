import { List, ListItem, Page, TextNode } from '@atticus/react-pdf-components';
import { FC } from 'react';

const ListPreview: FC = () => {
  return (
    <Page wrap size="A4">
      <List type="ol">
        <ListItem>
          <TextNode>chapter 1</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>chapter 2</TextNode>
          <List type="ol">
            <ListItem>
              <TextNode>section 1</TextNode>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <TextNode>chapter 3</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>chapter 4</TextNode>
          <List type="ol">
            <ListItem>
              <TextNode>section 1</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>section 2</TextNode>
              <List type="ol">
                <ListItem>
                  <TextNode>sub section 1</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section 2</TextNode>
                  <List type="ol">
                    <ListItem>
                      <TextNode>section 1</TextNode>
                    </ListItem>
                    <ListItem>
                      <TextNode>section 2</TextNode>
                      <List type="ul">
                        <ListItem>
                          <TextNode>sub section 1</TextNode>
                        </ListItem>
                        <ListItem>
                          <TextNode>sub section 2</TextNode>
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <TextNode>section 3</TextNode>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <TextNode>chapter 5</TextNode>
        </ListItem>
      </List>
    </Page>
  );
};

export default ListPreview;
