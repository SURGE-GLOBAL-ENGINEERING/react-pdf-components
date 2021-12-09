import { ChapterProps } from '@paladin-analytics/react-pdf-components';

type LayoutChapterProperties = Pick<
  ChapterProps,
  | 'pageNumberAlignment'
  | 'pageNumberPosition'
  | 'evenPageHeaderText'
  | 'oddPageHeaderText'
  | 'pageHeaderAlignment'
>;

const getLayoutChapterProperties = (
  layout: string,
  author: string,
  title: string,
  chapter: string
): LayoutChapterProperties => {
  switch (layout) {
    case 'layout5':
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'top',
        evenPageHeaderText: title,
        oddPageHeaderText: chapter,
        pageHeaderAlignment: 'center',
      };
    case 'layout6':
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'top',
        evenPageHeaderText: title,
        oddPageHeaderText: chapter,
        pageHeaderAlignment: 'outside',
      };
    case 'layout1':
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'top',
        evenPageHeaderText: author,
        oddPageHeaderText: title,
        pageHeaderAlignment: 'center',
      };
    case 'layout2':
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'top',
        evenPageHeaderText: author,
        oddPageHeaderText: title,
        pageHeaderAlignment: 'outside',
      };
    case 'layout3':
      return {
        pageNumberAlignment: 'center',
        pageNumberPosition: 'bottom',
        evenPageHeaderText: author,
        oddPageHeaderText: title,
        pageHeaderAlignment: 'outside',
      };
    case 'layout4':
      return {
        pageNumberAlignment: 'center',
        pageNumberPosition: 'bottom',
        evenPageHeaderText: author,
        oddPageHeaderText: title,
        pageHeaderAlignment: 'center',
      };
    case 'layout7':
      return {
        pageNumberAlignment: 'center',
        pageNumberPosition: 'bottom',
        evenPageHeaderText: '',
        oddPageHeaderText: '',
        pageHeaderAlignment: 'center',
      };
    case 'layout8':
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'bottom',
        evenPageHeaderText: '',
        oddPageHeaderText: '',
        pageHeaderAlignment: 'center',
      };
    default:
      return {
        pageNumberAlignment: 'outside',
        pageNumberPosition: 'bottom',
        evenPageHeaderText: '',
        oddPageHeaderText: '',
        pageHeaderAlignment: 'center',
      };
  }
};

export { getLayoutChapterProperties };
