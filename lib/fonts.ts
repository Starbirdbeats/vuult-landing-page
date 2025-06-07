import { Antic_Slab, Cormorant, Oswald, Cormorant_Upright } from 'next/font/google';

export const anticSlab = Antic_Slab({ weight: '400', subsets: ['latin'] });
export const oswald = Oswald({ weight: ['400', '700'], subsets: ['latin'] });
export const cormorant = Cormorant({ subsets: ['latin'] });
export const cormorantUpright = Cormorant_Upright({
  weight: ['400', '700'], subsets: ['latin'],
});