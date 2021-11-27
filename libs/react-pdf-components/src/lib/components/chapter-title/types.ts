export interface ThemeConfig {
  themeId: string;
  baseFontSize: number;
  printBaseFont: string;
  layout: string;
  titleCard: {
    chapterNumber: boolean;
    title: boolean;
    subtitle: boolean;
    image: boolean;
  };
  beginFirstSentence: string;
  paragraph: {
    paragraphSpacing: number;
    indent: number;
    hyphens: boolean;
    justify: boolean;
  };
  // baseFontSize: number,
  // printBaseFont: string,
  firstParagraph: {
    uppercaseFourWords: boolean;
    indent: number;
    dropcap: boolean;
  };
  ornamentalBreakImage: string;
  ornamentalBreakWidth: number;
  titleAlignment?: 'left' | 'center' | 'right' | 'justify';
  chapterNumbering: string;
  trim: {
    height: number;
    width: number;
  };
  margin: {
    bottom: number;
    top: number;
    outer: number;
    inner: number;
  };
  _id: string;
  bookId: string;
  createdAt: Date;
  lastUpdateAt: Date;
  modifiedAt?: Date;
  startPage?: string;
  lastSuccessfulSync?: Date;
  allChangesSynced?: boolean;
  /*
  header: {
      innerHeight: number,
      marginBottom: number,
      right: string[],
      left: string[]
  }
  footer: {
      innerHeight: number;
      marginTop: number;
      right: string[];
      left: string[];
  }
  */
  headerFooterLayoutId?: string;
}

export interface ThemeBase {
  _id: string;
  name: string;

  fonts: {
    family: string;
    variation: string;
    url: string;
  }[];

  css: string;
  image?: CustomImages;
  properties?: CustomThemeHeader;
  // properties
  createdAt?: Date;
  lastUpdateAt?: Date;

  modifiedAt?: Date;
  lastSuccessfulSync?: Date;
  allChangesSynced?: boolean;

  // methods
}

export interface CustomImages {
  chapterId: string;
  url: string;
  background: boolean;
  colored: 'all' | 'print';
  width?: number;
  placement?:
    | 'above-chapter-no'
    | 'above-chapter-title'
    | 'below-chapter-title'
    | 'below-subtitle';
  alignment?: 'left' | 'center' | 'right';
  printExtent?: 'margins' | 'full-bleed';
}

export interface CustomThemeHeader {
  layout: 'no-image' | 'background-image' | 'image-element';
  image: CustomImages;
  individualChapterImage: boolean;
  chapterNo: {
    font: string;
    size: number;
    align: 'left' | 'center' | 'right';
    width: number;
  };
  chapterTitle: {
    font: string;
    size: number; //(font-size: em)
    align: 'left' | 'center' | 'right';
    width: number;
  };
  chapterSubtitle: {
    font: string;
    size: number; //(font-size: em)
    align: 'left' | 'center' | 'right';
    width: number;
  };
  header: {
    font: string;
    size: number;
  };
  footer: {
    font: string;
    size: number;
  };
}

type ChapterType =
  | 'uncategorized'
  | 'chapter'
  | 'custom'
  | 'half-title'
  | 'title'
  | 'toc'
  | 'endnotes'
  | 'image'
  | 'about-author'
  | 'copyrights'
  | 'epigraph'
  | 'foreword'
  | 'introduction'
  | 'preface'
  | 'prologue'
  | 'epilogue'
  | 'afterword'
  | 'acknowledgments'
  | 'also-by'
  | 'dedication'
  | 'blurbs'
  | 'volume';

export interface ChapterBody {
  _id: string;
  bookId: string;
  children: any;

  lastUpdateAt?: Date;
  createdAt?: Date;

  lastSuccessfulSync?: Date;
  allChangesSynced?: boolean;
}

export interface ChapterMeta {
  _id: string;
  bookId: string;
  title: string;
  type: ChapterType;
  numbered?: boolean;
  hidden?: boolean;
  subtitle?: string;
  image: string;
  index: number;
  templateId?: string;
  includeIn?: 'all' | 'ebook' | 'print' | 'none';
  startOn?: 'right' | 'left' | 'any';

  /**
   * Used to specify the hierarchy to represent relationships
   * between `volumes`, `parts` and `chapters`
   */
  parentChapterId?: string;
  /**
   * Author of a `volume`
   */
  author?: string;
  /**
   * Cover page image of a `volume`
   */
  coverPageImage?: {
    imageUrl: string;
  };

  fullpageImage?: {
    imageUrl: string;
    printExtent: 'margins' | 'full-bleed';
    verticalAlignment?: 'top' | 'center' | 'bottom' | '';
  };

  lastUpdateAt?: Date;
  createdAt?: Date;

  lastSuccessfulSync?: Date;
  allChangesSynced?: boolean;
}

export interface Chapter extends ChapterBody, ChapterMeta {}
