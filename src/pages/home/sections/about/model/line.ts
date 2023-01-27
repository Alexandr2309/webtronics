import React from 'react';
import CurvedLine from '@/shared/assets/icons/lines/curved_line.svg';
import StraightLine from '@/shared/assets/icons/lines/straight_line.svg';

export const lineStack: {
  Line: React.VFC<React.SVGProps<SVGSVGElement>>;
  cls?: string;
}[] = [
  {
    Line: CurvedLine,
    cls: 'curved_line',
  },
  {
    Line: StraightLine,
    cls: 'straight_line',
  },
  {
    Line: CurvedLine,
    cls: 'rotate_line',
  },
];
