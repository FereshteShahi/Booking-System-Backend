import { ReactNode } from 'react';
import de from '../data/de.json';
import tr from '../data/tr.json';

// Define the structure of your page content
type Content = {
  quoteHomeAuthor: string;
  quoteHome: string;
  buttonText: string;
  name: ReactNode;
  title: string;
  description?: string;
  content?: string;
  therapie1?: string;
  content1?: string;
  quoteTherapie1?: string;
  quoteTherapie1Author?: string;
  content2?: string;
  therapie2?: string;
  quoteTherapie2?: string;
  quoteTherapie2Author?: string;
  content3?: string;
  therapie3?: string;
  quoteTherapie3?: string;
  quoteTherapie3Author?: string;
  wordcloudPhoto?: string;
  cost1?: string;
  cost2?: string;
  cost3?: string;
  costButton?: string;
  title2?: string;
  conditions?: string;
  condition1?: string;
  condition2?: string;
  condition3?: string;
  condition4?: string;
  contactButton?: string;
  namePlaceholder?: string;
  vorname?: string;
  vornamePlaceholder?: string;
  telefonnummer?: string;
  telefonnummerPlaceholder?: string;
  email?: string;
  emailPlaceholder?: string;
  nachricht?: string;
  nachrichtPlaceholder?: string;
  button?: string;
  angeboteInfoTitle?: string;
  angeboteInfoContent1?: string;
  angeboteInfoContent2?: string;
  angeboteInfoContent3?: string;
  angeboteInfoContent4?: string;
  angeboteInfoContent5?: string;
  quoteAbout?:string;
  quoteAboutAuthor?:string;
  titleAbout?:string;
  studium?:string;
  contentAbout1?:string;
  contentAbout2?:string;
  Berufstaetigkeit?:string;
  Berufstaetigkeitjahr1?:string;
  Berufstaetigkeittext1?:string;
  Berufstaetigkeitjahr2?:string;
  Berufstaetigkeittext2?:string;
  Berufstaetigkeitjahr3?:string;
  Berufstaetigkeittext3?:string;
  Qualifikationen?:string;
  Qualifikationen1?:string;
  Qualifikationen2?:string;
  Qualifikationen3?:string;
  Qualifikationen4?:string;
  Qualifikationen5?:string;
  Qualifikationen6?:string;
  Qualifikationen7?:string;
  description1?:string;
  jobtitle?: string;
  address?: string;
  telefon?: string;
  responsible?: string;
  responsibleName?: string;
  
  titleDatenschutz?:string,
  datenschutztext?:string;

  Verantwortlich?:string;
  nameD?:string;
  addresse?:string;
  ort?:string;
  telefone?:string;
  emailD?:string;

  hosting?:string;
  hoster?:string;
  hoster1?:string;
  hoster2?:string;
  hoster3?:string;
  hoster4?:string;
  hoster5?:string;

  verschlüsselung?:string;
  verschlüsselungtext?:string;

  erhebung?:string;
  erhebung0?:string;
  erhebung1?:string;
  erhebung2?:string;
  erhebung3?:string;
  erhebung4?:string;
  erhebungText?:string;

  rechte?:string;
  rechtetext?:string;
  rechte1?:string;
  rechte2?:string;
  rechte3?:string;
  rechte4?:string;
  rechte5?:string;
  rechte6?:string;

  wiederspruchrecht?:string;
  wiederspruchrechttext?:string;
  muster?:string;
  an?:string;
  betreff?:string;
  betreftext?:string;

  änderung?:string;
  änderungtext?:string;

};


type Pages = 'home' | 'about' | 'contact' | 'quotes' | 'angebote'| 'costs'|'aboutpage'| 'kontaktpage'| 'impressum'|'datenschutz' | 'login'| 'registerPatient'; 


const deData = de as Record<string, any>;
const trData = tr as Record<string, any>;

export function getContent(lang: 'de' | 'tr', page: Pages): Content {
  const data = lang === 'de' ? deData : trData;
  return data[page];
}
