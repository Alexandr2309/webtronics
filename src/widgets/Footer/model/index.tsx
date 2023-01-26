import { HeaderLink } from '@/widgets/Header/model/types';
import {
  getRouteAbout,
  getRouteReview,
  getRouteQuestions,
  getRouteSteps,
} from '@/shared/lib/const';
import { getRouteGallery } from '@/shared/lib/const';

export const footerItems: HeaderLink[] = [
  {
    path: getRouteAbout(),
    text: 'About as',
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
