import {
  List,
  ListItem,
  Page,
  TextNode,
} from '@paladin-analytics/react-pdf-components';
import { FC } from 'react';

const ListPreview: FC = () => {
  return (
    <Page wrap size="A4">
      <List type="ol" style={{ fontFamily: 'EmilysCandy', fontSize: 11 }}>
        <ListItem>
          <TextNode>Part 1</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 2</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 3</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 4</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 5</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 6</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 7</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 8</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 9</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 10</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 11</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 12</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 13</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 14</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 15</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 16</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 17</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 18</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 19</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>Part 20</TextNode>
          <List type="ol">
            <ListItem>
              <TextNode>Part 1</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 2</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 3</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 4</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 5</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 6</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 7</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 8</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 9</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 10</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 11</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 12</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 13</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 14</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 15</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 16</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 17</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 18</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 19</TextNode>
            </ListItem>
            <ListItem>
              <TextNode>Part 20</TextNode>
            </ListItem>
          </List>
        </ListItem>
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
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
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
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <TextNode>section 3</TextNode>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
                <ListItem>
                  <TextNode>sub section x</TextNode>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <TextNode>chapter 5</TextNode>
        </ListItem>
      </List>
      <List type="ul">
        <ListItem>
          <TextNode>sub section 1</TextNode>
        </ListItem>
        <ListItem>
          <TextNode>sub section 2</TextNode>
        </ListItem>
      </List>
    </Page>
  );
};

export default ListPreview;
