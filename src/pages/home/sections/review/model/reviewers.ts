import ManFirst from '@/shared/assets/images/review/man1.png';
import ManSecond from '@/shared/assets/images/review/man2.png';
import WomenFirst from '@/shared/assets/images/review/woman1.png';
import { StaticImport } from '@/shared/config';

interface Reviewers {
  source: string | StaticImport;
  id: number;
  cls?: string;
}

export const reviewers: Reviewers[] = [
  {
    source: ManFirst,
    id: 1,
  },
  {
    source: ManSecond,
    id: 2,
    cls: 'position'
  },
  {
    source: WomenFirst,
    id: 3,
  },
];
