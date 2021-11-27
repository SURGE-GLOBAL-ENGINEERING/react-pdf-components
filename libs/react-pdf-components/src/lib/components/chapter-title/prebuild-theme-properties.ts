import { CustomThemeHeader } from './types';

export interface ExtraProps {
  textTransform: 'capitalize' | 'uppercase' | 'lowercase';
  fontWaight: number;
  borderTop: number | string;
  borderBottom: number | string;
  borderColor: string;
  color: string;
  paddingTop: number | string;
}

type ExtraPropItem = {
  // eslint-disable-next-line no-unused-vars
  [item in keyof Pick<
    CustomThemeHeader,
    'chapterNo' | 'chapterTitle' | 'chapterSubtitle'
  >]?: Partial<ExtraProps>;
};

export interface PrebuildThemeProperties {
  [name: string]: Partial<CustomThemeHeader> & {
    extra?: ExtraPropItem;
  };
}
