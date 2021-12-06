interface BulkLoad {
  family: string;
  fonts: {
    src: string;
    fontStyle?: string;
    fontWeight?: string | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
}

export const editorFonts: BulkLoad[] = [
  {
    family: 'RockSalt',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/RockSalt-Regular.ttf',
      },
    ],
  },
  {
    family: 'Benne',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Benne-Regular.ttf',
      },
    ],
  },
  {
    family: 'Delius',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Delius-Regular.ttf',
      },
    ],
  },
  {
    family: 'Crushed',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Crushed-Regular.ttf',
      },
    ],
  },
  {
    family: 'HelveticaNeue',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/HelveticaNeue-Regular.ttf',
      },
    ],
  },
  {
    family: 'Selima',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Selima-Regular.ttf',
      },
    ],
  },
  {
    family: 'GreatVibes',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/GreatVibes-Regular.ttf',
      },
    ],
  },
  {
    family: 'Marcellus',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Marcellus-Regular.ttf',
      },
    ],
  },
  {
    family: 'EuphoriaScript',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EuphoriaScript-Regular.ttf',
      },
    ],
  },
  {
    family: 'Megrim',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Megrim-Regular.ttf',
      },
    ],
  },
  {
    family: 'EmilysCandy',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EmilysCandy-Regular.ttf',
      },
    ],
  },
  {
    family: 'PressStart2P',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/PressStart2P-Regular.ttf',
      },
    ],
  },
  {
    family: 'Anton',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Anton-Regular.ttf',
      },
    ],
  },
  {
    family: 'Audiowide',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Audiowide-Regular.ttf',
      },
    ],
  },
  {
    family: 'Aldrich',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Aldrich-Regular.ttf',
      },
    ],
  },
  {
    family: 'Forum',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Forum-Regular.ttf',
      },
    ],
  },
  {
    family: 'SpecialElite',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/SpecialElite-Regular.ttf',
      },
    ],
  },
  {
    family: 'Voltaire',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Voltaire-Regular.ttf',
      },
    ],
  },
  {
    family: 'SixCaps',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/SixCaps-Regular.ttf',
      },
    ],
  },
  {
    family: 'TheanoDidot',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/TheanoDidot-Regular.ttf',
      },
    ],
  },
  {
    family: 'YoungSerif',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/YoungSerif-Regular.ttf',
      },
    ],
  },
  {
    family: 'CinzelDecorative',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/CinzelDecorative-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/CinzelDecorative-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'Cinzel',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cinzel-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cinzel-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'BigShouldersDisplay',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/BigShouldersDisplay-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/BigShouldersDisplay-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'Syncopate',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Syncopate-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Syncopate-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'LifeSaversBold',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LifeSavers-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LifeSavers-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'VollkornSC-Bold',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/VollkornSC-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/VollkornSC-Bold.ttf',
        fontWeight: 900,
      },
    ],
  },
  {
    family: 'Spartan',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spartan-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spartan-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spartan-Light.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'OldStandardTT',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OldStandardTT-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OldStandardTT-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OldStandardTT-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'Cardo',
    fonts: [
      { src: 'https://atticus-content.s3.amazonaws.com/fonts/Cardo.ttf' },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cardo-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cardo-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'CrimsonPro',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'LibreBaskerville',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Regular.otf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Bold.otf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Italic.otf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'LibreCaslon',
    fonts: [
      { src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon.ttf' },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Regular.otf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Bold.otf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Italic.otf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'Lora',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Lora-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Lora-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Lora-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'Rosario',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Rosario-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Rosario-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Rosario-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'Spectral',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spectral-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spectral-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Spectral-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'SourceSansPro',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-Regular.otf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-Bold.otf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-It.otf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'Cantarell',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cantarell-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cantarell-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cantarell-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Cantarell-Regular.ttf',
      },
    ],
  },
  {
    family: 'RobotoCondensed',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-Regular.ttf',
      },
    ],
  },
  {
    family: 'Roboto-Light',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Roboto-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Roboto-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Roboto-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Roboto-Regular.ttf',
      },
    ],
  },
  {
    family: 'Poppins',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Poppins-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Poppins-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Poppins-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Poppins-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Poppins-Light.ttf',
        fontWeight: 400,
      },
    ],
  },
  {
    family: 'AlegreyaSansSC',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Light.ttf',
        fontWeight: 400,
      },
    ],
  },
  {
    family: 'Alegreya',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Alegreya-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Alegreya-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Alegreya-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Alegreya-Regular.ttf',
      },
    ],
  },
  {
    family: 'Quantico',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Quantico-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Quantico-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Quantico-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Quantico-Regular.ttf',
      },
    ],
  },
  {
    family: 'Raleway',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Raleway-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Raleway-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Raleway-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Raleway-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Raleway-Light.ttf',
        fontWeight: 400,
      },
    ],
  },
  {
    family: 'Oswald',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Oswald-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Oswald-Light.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Oswald-Regular.ttf',
      },
    ],
  },
  {
    family: 'Montserrat',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Montserrat-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Montserrat-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Montserrat-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Montserrat-Regular.ttf',
      },
    ],
  },
  {
    family: 'EBGaramond',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond-Italic.ttf',
        fontStyle: 'italic',
      },
      { src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond.ttf' },
    ],
  },
  {
    family: 'PTSans',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/PTSans-BoldItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/PTSans-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/PTSans-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf',
      },
    ],
  },
  /// EXTRA
  {
    family: 'Allura',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/Allura-Regular.ttf',
      },
    ],
  },
  {
    family: 'BlackOpsOne',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/BlackOpsOne-Regular.ttf',
      },
    ],
  },
  {
    family: 'DelaGothicOne',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/DelaGothicOne-Regular.ttf',
      },
    ],
  },
  {
    family: 'EBGaramond12',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond12-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/EBGaramond12-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
  {
    family: 'OpenDyslexic',
    fonts: [
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Regular.ttf',
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Bold.ttf',
        fontWeight: 900,
      },
      {
        src: 'https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  },
];
