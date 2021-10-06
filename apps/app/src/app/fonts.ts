interface BulkLoad {
    family: string;
    fonts: {
        src: string;
        fontStyle?: string;
        fontWeight?: string | number;
        [key: string]: any;
    }[];
}
export const editorFonts: BulkLoad[] = [
    {
        family: "RockSalt",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/RockSalt-Regular.ttf", }],
    }, {
        family: "Cantarell",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Cantarell-Regular.ttf", }],
    }, {
        family: "RobotoCondensed",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-Regular.ttf", }],
    }, {
        family: "Roboto-Light",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Roboto-Light.ttf", }],
    }, {
        family: "Poppins",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Poppins-Regular.ttf", }],
    }, {
        family: "LifeSaversBold",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/LifeSavers-Bold.ttf", }],
    }, {
        family: "Delius",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Delius-Regular.ttf", }],
    }, {
        family: "Crushed",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Crushed-Regular.ttf", }],
    }, {
        family: "HelveticaNeue",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/HelveticaNeue-Regular.ttf", }],
    }, {
        family: "Selima",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Selima-Regular.ttf", }],
    }, {
        family: "Spartan",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Spartan-Regular.ttf", }],
    }, {
        family: "GreatVibes",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/GreatVibes-Regular.ttf", }],
    }, {
        family: "Cinzel",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Cinzel-Regular.ttf", }],
    }, {
        family: "CinzelDecorative",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/CinzelDecorative-Regular.ttf", }],
    }, {
        family: "AlegreyaSansSC",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Regular.ttf", }],
    }, {
        family: "Alegreya",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Alegreya-Regular.ttf", }],
    }, {
        family: "Marcellus",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Marcellus-Regular.ttf", }],
    }, {
        family: "EuphoriaScript",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/EuphoriaScript-Regular.ttf", }],
    }, {
        family: "VollkornSC-Bold",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/VollkornSC-Bold.ttf", }],
    }, {
        family: "Megrim",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Megrim-Regular.ttf", }],
    }, {
        family: "Quantico",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Quantico-Regular.ttf", }],
    }, {
        family: "EmilysCandy",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/EmilysCandy-Regular.ttf", }],
    }, {
        family: "Raleway",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Raleway-Regular.ttf", }],
    }, {
        family: "PressStart2P",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/PressStart2P-Regular.ttf", }],
    }, {
        family: "Anton",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Anton-Regular.ttf", }],
    }, {
        family: "Audiowide",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Audiowide-Regular.ttf", }],
    }, {
        family: "Aldrich",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Aldrich-Regular.ttf", }],
    }, {
        family: "Oswald",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Oswald-Regular.ttf", }],
    }, {
        family: "BigShouldersDisplay",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/BigShouldersDisplay-Regular.ttf", }],
    }, {
        family: "Montserrat",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Montserrat-Regular.ttf", }],
    }, {
        family: "Forum",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Forum-Regular.ttf", }],
    }, {
        family: "SpecialElite",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/SpecialElite-Regular.ttf", }],
    }, {
        family: "Syncopate",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Syncopate-Regular.ttf", }],
    }, {
        family: "Voltaire",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/Voltaire-Regular.ttf", }],
    }, {
        family: "SixCaps",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/SixCaps-Regular.ttf", }],
    }, {
        family: "OldStandardTT",
        fonts: [{ src: "https://atticus-content.s3.amazonaws.com/fonts/OldStandardTT-Regular.ttf", }],
    },

    // Print Fonts
    {
        family: 'Open Sans',
        fonts: [
            {
                src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',
                fontStyle: 'italic',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
                fontWeight: 600,
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600italic.ttf',
                fontWeight: 600,
                fontStyle: 'italic',
            },
        ],
    },

    {
        family: 'PT Sans',
        fonts: [
            {
                src: 'https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf',
            },
        ],
    },

    {
        family: 'Courier',
        fonts: [
            {
                src: 'https://cdn.jsdelivr.net/npm/@typopro/web-courier-prime@3.7.5/TypoPRO-CourierPrime-Regular.ttf',
            },
        ],
    }

];


