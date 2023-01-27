import { StaticImageData } from 'next/dist/client/image';

interface StaticRequire {
  default: StaticImageData;
}

export type StaticImport = StaticRequire | StaticImageData;