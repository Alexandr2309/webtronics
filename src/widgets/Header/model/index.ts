import {
  getRouteAbout,
  getRoutePrograms,
  getRouteQuestions,
  getRouteSteps,
  getRouteGetInTouch,
} from '@/shared/lib/const';
import { HeaderLink } from './types';

export const headerItems: HeaderLink[] = [
  {
    path: getRouteAbout(),
    text: 'About',
  },
  {
    path: getRoutePrograms(),
    text: 'Programs',
  },
  {
    path: getRouteSteps(),
    text: 'Steps',
  },
  {
    path: getRouteQuestions(),
    text: 'Questions',
  },
  {
    path: getRouteGetInTouch(),
    text: 'Get in touch',
  },
];
