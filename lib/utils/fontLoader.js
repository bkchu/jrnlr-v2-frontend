const FontFaceObserver = require('fontfaceobserver');

const loadFonts = async () => {
  const fonts = [
    {
      fontName: 'Merriweather',
      fontUrl:
        'https://fonts.googleapis.com/css?family=Merriweather&display=swap'
    },
    { fontName: 'Inter', fontUrl: 'https://rsms.me/inter/inter.css' }
  ];
  const fontsToLoad = fonts.map(({fontName, fontUrl}) => {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const font = new FontFaceObserver(fontName);

    return font.load()
  });

  await Promise.all(fontsToLoad);
  
  fonts.forEach(font => {
    document.documentElement.classList.add(font.fontName.toLowerCase());
  })
};

export default loadFonts;
