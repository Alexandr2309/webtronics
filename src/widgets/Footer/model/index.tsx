import {
  getRouteAbout,
  getRouteReview,
  getRouteQuestions,
  getRouteSteps,
} from '@/shared/lib/const';
import { getRouteGallery } from '@/shared/lib/const';

interface FooterLink {
  path: string;
  text: string;
}

export const footerItems: FooterLink[] = [
  {
    path: getRouteAbout(),
    text: 'About Us',
  },
  {
    path: getRouteSteps(),
    text: 'Steps',
  },
  {
    path: getRouteQuestions(),
    text: 'FAQs',
  },
  {
    path: getRouteReview(),
    text: 'Review',
  },
  {
    path: getRouteGallery(),
    text: 'Gallery',
  },
];
