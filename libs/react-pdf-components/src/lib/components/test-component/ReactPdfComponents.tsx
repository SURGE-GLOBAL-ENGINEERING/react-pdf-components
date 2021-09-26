import './ReactPdfComponents.module.scss';
import { Text, View } from '@react-pdf/renderer';
/* eslint-disable-next-line */
export interface ReactPdfComponentsProps {}

export function ReactPdfComponents(props: ReactPdfComponentsProps) {
  return (
    <View>
      <Text> Hello World! </Text>
    </View>
  );
}

export default ReactPdfComponents;
