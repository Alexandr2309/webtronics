import React from 'react';
import AngularIcon from '../assets/angular.svg';
import JSIcon from '../assets/js.svg';
import ReactIcon from '../assets/react.svg';
import VueIcon from '../assets/vue.svg';
export interface ProgrammingCard {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export const progTechnologies: ProgrammingCard[] = [
  {
    Icon: AngularIcon,
    label: 'Angular',
  },
  {
    Icon: ReactIcon,
    label: 'React',
  },
  {
    Icon: VueIcon,
    label: 'Vue',
  },
  {
    Icon: JSIcon,
    label: 'JavaScript',
  },
];
