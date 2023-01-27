import { StaticImageData } from 'next/dist/client/image';
import { KristinWatson, RobertFox, WadeWarren } from '@/shared/assets/images';

interface Mentors {
  img: string | StaticImageData;
  name: string;
  about: string;
  className?: string;
  imgCls?: string;
}

export const mentors: Mentors[] = [
  {
    img: WadeWarren,
    name: 'WadeWarren',
    about: 'Front-end engineers work closely with designers',
    className: 'item_left',
    imgCls: 'img_left',
  },
  {
    img: KristinWatson,
    name: 'KristinWatson',
    about: 'Front-end engineers work closely with designers',
    className: 'item_center',
    imgCls: 'img_center',
  },
  {
    img: RobertFox,
    name: 'RobertFox',
    about: 'Front-end engineers work closely with designers',
    className: 'item_right',
    imgCls: 'img_right',
  },
];
