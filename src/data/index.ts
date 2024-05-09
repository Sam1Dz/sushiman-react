import Sushi10 from '../assets/sushi-10.png';
import Sushi11 from '../assets/sushi-11.png';
import Sushi12 from '../assets/sushi-12.png';

// Type Definition
export type TCards = {
  imgSrc: string;
  alt: string;
  title: string;
  rating: string;
  price: string;
  active: boolean;
};

export const TrendingSushi = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi',
];

export const TrendingDrink = [
  'Oruncha',
  'Ofukucha',
  'Sakura Tea',
  'Kombu-cha',
  'Aojiru',
  'Mugicha',
];

export const Cards: TCards[] = [
  {
    imgSrc: Sushi12,
    alt: 'sushi-12',
    title: 'Chezu Sushi',
    rating: '4.9',
    price: '$21.00',
    active: false,
  },
  {
    imgSrc: Sushi11,
    alt: 'sushi-11',
    title: 'Original Sushi',
    rating: '5.0',
    price: '$19.00',
    active: true,
  },
  {
    imgSrc: Sushi10,
    alt: 'sushi-10',
    title: 'Ramen Densetsu',
    rating: '4.7',
    price: '$30.00',
    active: false,
  },
];
