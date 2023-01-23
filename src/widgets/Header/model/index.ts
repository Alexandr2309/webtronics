import { HeaderLink } from '@/widgets/Header/model/types';
import {
  getRouteAbout,
  getRoutePrograms,
  getRouteQuestions,
  getRouteSteps,
  getRouteGetInTouch,
} from '@/shared/const/route';

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
