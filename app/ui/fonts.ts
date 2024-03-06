import { 
    Dancing_Script, 
    Oswald, 
    Barlow_Condensed,
    Merriweather,
} from 'next/font/google';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });
//export const oswald = Oswald({ subsets: ['latin'] });

export const merriweather = Merriweather({
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  });

  export const oswald = Oswald({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
  });

  export const barlow = Barlow_Condensed({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  });