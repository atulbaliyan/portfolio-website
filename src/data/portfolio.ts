export const links = {
  github: 'https://github.com/atulbaliyan',
  email: 'mailto:atulbaliyan2004@gmail.com',
  play: 'https://play.google.com/store/apps/details?id=com.baliyan_2004.WallpaperHub',
  resume: `${import.meta.env.BASE_URL}resume/Atul_Baliyan_Resume.pdf`,
};
export const sections = ['About', 'Work', 'Toolbox', 'Experience', 'Contact'] as const;
export interface Project { name: string; category: string; description: string; stack: string[]; source: string; }
export const projects: Project[] = [
  {name:'WallpaperHub',category:'MOBILE APP · LIVE ON GOOGLE PLAY',description:'A fresh perspective. Every time you unlock. Discover, search and save beautiful wallpapers, with favorites that stay with you and caching that keeps things quick.',stack:['React Native','Expo','TypeScript','Pexels API'],source:'https://github.com/atulbaliyan/WallpaperHub'},
  {name:'PDF Master',category:'MOBILE APP · DOCUMENT UTILITIES',description:'From a camera roll to a document, without the friction. Scan, compress and create multi-page PDFs with native device APIs and offline storage.',stack:['React Native','Expo','TypeScript'],source:'https://github.com/atulbaliyan/PDFMaster'},
  {name:'Handwritten Equation Solver',category:'PYTHON · COMPUTER VISION',description:'Turn a handwritten equation into a little clarity. An image-to-math OCR pipeline with a Streamlit interface and symbolic solving powered by SymPy.',stack:['Python','OpenCV','Streamlit','SymPy'],source:'https://github.com/atulbaliyan/handwritten-equation-solver'},
];
export const toolbox = [
 {title:'Mobile',items:['React Native','Expo','Expo Router','React Navigation','Android SDK','Expo EAS']},
 {title:'Languages',items:['TypeScript','JavaScript','Python','C / C++','SQL']},
 {title:'Backend & APIs',items:['Django','Flask','Node.js','MySQL','REST APIs']},
 {title:'Tools & testing',items:['Git / GitHub','Playwright','Puppeteer','Postman']},
];
