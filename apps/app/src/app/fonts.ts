/**
 * Register all the fonts used for themes
 *
 * Ex :-
 * {
 *  family: string
 *  fonts: [
 *     { src: "https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf" },
 *     { src: "https://atticus-content.s3.amazonaws.com/fonts/PTSans-Bold.ttf", fontWeight: 900 }, required for bold fonts
 *     { src: "https://atticus-content.s3.amazonaws.com/fonts/PTSans-Italic.ttf", fontStyle: "italic" }, required for italic fonts
 *     { src: "https://atticus-content.s3.amazonaws.com/fonts/PTSans-BoldItalic.ttf", fontWeight: 900, fontStyle: "italic" } required for bold and italic fonts
 *  ]
 * }
 *
 */

interface FontSource {
  src: string;
  fontStyle?: string;
  fontWeight?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface BulkLoad {
  family: string;
  fonts: FontSource[];
}

type FontDataFont = Pick<FontSource, 'fontStyle' | 'fontWeight'> & {
  fileName: string;
  [key: string]: any;
};

export interface FontsData {
  family: string;
  fonts: FontDataFont[];
}

const fontsData: FontsData[] = [
  {
    family: 'RockSalt',
    fonts: [{ fileName: 'RockSalt-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Benne',
    fonts: [{ fileName: 'Benne-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Delius',
    fonts: [{ fileName: 'Delius-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Crushed',
    fonts: [{ fileName: 'Crushed-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'HelveticaNeue',
    fonts: [{ fileName: 'HelveticaNeue-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Selima',
    fonts: [{ fileName: 'Selima-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'GreatVibes',
    fonts: [{ fileName: 'GreatVibes-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Marcellus',
    fonts: [{ fileName: 'Marcellus-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'EuphoriaScript',
    fonts: [{ fileName: 'EuphoriaScript-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Megrim',
    fonts: [{ fileName: 'Megrim-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'EmilysCandy',
    fonts: [{ fileName: 'EmilysCandy-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'PressStart2P',
    fonts: [{ fileName: 'PressStart2P-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Anton',
    fonts: [{ fileName: 'Anton-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Audiowide',
    fonts: [{ fileName: 'Audiowide-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Aldrich',
    fonts: [{ fileName: 'Aldrich-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Forum',
    fonts: [{ fileName: 'Forum-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'SpecialElite',
    fonts: [{ fileName: 'SpecialElite-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Voltaire',
    fonts: [{ fileName: 'Voltaire-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'SixCaps',
    fonts: [{ fileName: 'SixCaps-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'TheanoDidot',
    fonts: [{ fileName: 'TheanoDidot-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'YoungSerif',
    fonts: [{ fileName: 'YoungSerif-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'CinzelDecorative',
    fonts: [
      { fileName: 'CinzelDecorative-Regular.ttf', fontWeight: 400 },
      { fileName: 'CinzelDecorative-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'Cinzel',
    fonts: [
      { fileName: 'Cinzel-Regular.ttf', fontWeight: 400 },
      { fileName: 'Cinzel-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'BigShouldersDisplay',
    fonts: [
      { fileName: 'BigShouldersDisplay-Regular.ttf', fontWeight: 400 },
      { fileName: 'BigShouldersDisplay-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'Syncopate',
    fonts: [
      { fileName: 'Syncopate-Regular.ttf', fontWeight: 400 },
      { fileName: 'Syncopate-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'LifeSaversBold',
    fonts: [
      { fileName: 'LifeSavers-Regular.ttf', fontWeight: 400 },
      { fileName: 'LifeSavers-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'VollkornSC',
    fonts: [
      { fileName: 'VollkornSC-Regular.ttf', fontWeight: 400 },
      { fileName: 'VollkornSC-Bold.ttf', fontWeight: 900 },
    ],
  },
  {
    family: 'Spartan',
    fonts: [
      { fileName: 'Spartan-Regular.ttf', fontWeight: 400 },
      { fileName: 'Spartan-Bold.ttf', fontWeight: 900 },
      { fileName: 'Spartan-Light.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'OldStandardTT',
    fonts: [
      { fileName: 'OldStandardTT-Regular.ttf', fontWeight: 400 },
      { fileName: 'OldStandardTT-Bold.ttf', fontWeight: 900 },
      { fileName: 'OldStandardTT-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Cardo',
    fonts: [
      { fileName: 'Cardo.ttf', fontWeight: 400 },
      { fileName: 'Cardo-Bold.ttf', fontWeight: 900 },
      { fileName: 'Cardo-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'CrimsonPro',
    fonts: [
      { fileName: 'CrimsonPro-Regular.ttf', fontWeight: 400 },
      { fileName: 'CrimsonPro-Bold.ttf', fontWeight: 900 },
      { fileName: 'CrimsonPro-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'LibreBaskerville',
    fonts: [
      { fileName: 'LibreBaskerville.ttf', fontWeight: 400 },
      { fileName: 'LibreBaskerville-Regular.otf', fontWeight: 400 },
      { fileName: 'LibreBaskerville-Bold.otf', fontWeight: 900 },
      { fileName: 'LibreBaskerville-Italic.otf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'LibreCaslon',
    fonts: [
      { fileName: 'LibreCaslon.ttf', fontWeight: 400 },
      { fileName: 'LibreCaslon-Regular.otf', fontWeight: 400 },
      { fileName: 'LibreCaslon-Bold.otf', fontWeight: 900 },
      { fileName: 'LibreCaslon-Italic.otf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Lora',
    fonts: [
      { fileName: 'Lora-Regular.ttf', fontWeight: 400 },
      { fileName: 'Lora-Bold.ttf', fontWeight: 900 },
      { fileName: 'Lora-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Rosario',
    fonts: [
      { fileName: 'Rosario-Regular.ttf', fontWeight: 400 },
      { fileName: 'Rosario-Bold.ttf', fontWeight: 900 },
      { fileName: 'Rosario-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Spectral',
    fonts: [
      { fileName: 'Spectral-Regular.ttf', fontWeight: 400 },
      { fileName: 'Spectral-Bold.ttf', fontWeight: 900 },
      { fileName: 'Spectral-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'SourceSansPro',
    fonts: [
      { fileName: 'SourceSansPro-Regular.otf', fontWeight: 400 },
      { fileName: 'SourceSansPro-Bold.otf', fontWeight: 900 },
      { fileName: 'SourceSansPro-It.otf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Cantarell',
    fonts: [
      { fileName: 'Cantarell-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Cantarell-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Cantarell-Bold.ttf', fontWeight: 900 },
      { fileName: 'Cantarell-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'RobotoCondensed',
    fonts: [
      { fileName: 'RobotoCondensed-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'RobotoCondensed-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'RobotoCondensed-Bold.ttf', fontWeight: 900 },
      { fileName: 'RobotoCondensed-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Roboto-Light',
    fonts: [
      { fileName: 'Roboto-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Roboto-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Roboto-Bold.ttf', fontWeight: 900 },
      { fileName: 'Roboto-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Roboto',
    fonts: [
      { fileName: 'Roboto-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Roboto-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Roboto-Bold.ttf', fontWeight: 900 },
      { fileName: 'Roboto-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Roboto',
    fonts: [
      {
        fileName: 'Roboto-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Roboto-Bold.ttf', fontWeight: 900 },
      { fileName: 'Roboto-Italic.ttf', fontStyle: 'italic' },
      { fileName: 'Roboto-Regular.ttf' },
      { fileName: 'Roboto-Regular.ttf', fontWeight: 400 },
    ],
  },
  {
    family: 'Poppins',
    fonts: [
      { fileName: 'Poppins-Light.ttf', fontWeight: 300 },
      { fileName: 'Poppins-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Poppins-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Poppins-Bold.ttf', fontWeight: 900 },
      { fileName: 'Poppins-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'AlegreyaSansSC',
    fonts: [
      { fileName: 'AlegreyaSansSC-Light.ttf', fontWeight: 300 },
      { fileName: 'AlegreyaSansSC-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'AlegreyaSansSC-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'AlegreyaSansSC-Bold.ttf', fontWeight: 900 },
      { fileName: 'AlegreyaSansSC-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Alegreya',
    fonts: [
      { fileName: 'Alegreya-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Alegreya-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Alegreya-Bold.ttf', fontWeight: 900 },
      { fileName: 'Alegreya-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Quantico',
    fonts: [
      { fileName: 'Quantico-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Quantico-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Quantico-Bold.ttf', fontWeight: 900 },
      { fileName: 'Quantico-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Raleway',
    fonts: [
      { fileName: 'Raleway-Light.ttf', fontWeight: 300 },
      { fileName: 'Raleway-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Raleway-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Raleway-Bold.ttf', fontWeight: 900 },
      { fileName: 'Raleway-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Oswald',
    fonts: [
      { fileName: 'Oswald-Regular.ttf', fontWeight: 400 },
      { fileName: 'Oswald-Bold.ttf', fontWeight: 900 },
      { fileName: 'Oswald-Light.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Montserrat',
    fonts: [
      { fileName: 'Montserrat-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'Montserrat-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'Montserrat-Bold.ttf', fontWeight: 900 },
      { fileName: 'Montserrat-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'EBGaramond',
    fonts: [
      { fileName: 'EBGaramond.ttf', fontWeight: 400 },
      {
        fileName: 'EBGaramond-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'EBGaramond-Bold.ttf', fontWeight: 900 },
      { fileName: 'EBGaramond-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'PTSans',
    fonts: [
      { fileName: 'PTSans-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'PTSans-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'PTSans-Bold.ttf', fontWeight: 900 },
      { fileName: 'PTSans-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'PT Sans',
    fonts: [
      { fileName: 'PTSans-Regular.ttf', fontWeight: 400 },
      {
        fileName: 'PTSans-BoldItalic.ttf',
        fontStyle: 'italic',
        fontWeight: 900,
      },
      { fileName: 'PTSans-Bold.ttf', fontWeight: 900 },
      { fileName: 'PTSans-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'Allura',
    fonts: [{ fileName: 'Allura-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'BlackOpsOne',
    fonts: [{ fileName: 'BlackOpsOne-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'DelaGothicOne',
    fonts: [{ fileName: 'DelaGothicOne-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'EBGaramond12',
    fonts: [
      { fileName: 'EBGaramond12-Regular.ttf', fontWeight: 400 },
      { fileName: 'EBGaramond12-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'OpenDyslexic',
    fonts: [
      { fileName: 'OpenDyslexic-Regular.ttf', fontWeight: 400 },
      { fileName: 'OpenDyslexic-Bold.ttf', fontWeight: 900 },
      { fileName: 'OpenDyslexic-Italic.ttf', fontStyle: 'italic' },
    ],
  },
  {
    family: 'OpenSans',
    fonts: [{ fileName: 'OpenSans-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'Open Sans',
    fonts: [{ fileName: 'OpenSans-Regular.ttf', fontWeight: 400 }],
  },
  {
    family: 'LifeSavers',
    fonts: [
      { fileName: 'LifeSavers-Regular.ttf', fontWeight: 400 },
      { fileName: 'LifeSavers-Bold.ttf', fontWeight: 900 },
    ],
  },
];

const withRegularFontAsItalicFont = (fonts: FontDataFont[]) => {
  // Get font with fontWeight 400
  const font = fonts.find(({ fontWeight }) => fontWeight === 400);
  if (!font) return fonts;
  const { fileName } = font;
  // Add this font as Italic font
  const _fonts = [...fonts, { fileName, fontStyle: 'italic' }];
  return _fonts;
};

const hasItalicFont = (fonts: FontDataFont[]) => {
  return fonts.findIndex(({ fontStyle }) => fontStyle === 'italic') !== -1;
};

const addFallbacksForMissingStyles = (fonts: FontDataFont[]) => {
  if (!hasItalicFont(fonts)) {
    /**
     * Use same font with fontWeight 400 as Italic font
     */
    return withRegularFontAsItalicFont(fonts);
  }
  return fonts;
};

const editorFonts = fontsData.map(({ family, fonts }) => {
  const _fonts = addFallbacksForMissingStyles(fonts).map((font) => ({
    ...font,
    src: `https://atticus-content.s3.amazonaws.com/fonts/${font.fileName}`,
  }));
  return {
    family,
    fonts: _fonts,
  } as BulkLoad;
});

export { editorFonts };
