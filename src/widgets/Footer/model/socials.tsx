import FbIcon from '@/shared/assets/icons/socials/fb.svg';
import GitlabIcon from '@/shared/assets/icons/socials/gitlab.svg';
import LinkedInIcon from '@/shared/assets/icons/socials/linkedin.svg';
import TwitterIcon from '@/shared/assets/icons/socials/twitter.svg';
import React from 'react';

type SocialsIcons = {
  href: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};
export const socialsItems: SocialsIcons[] = [
  {
    href: 'https://www.facebook.com/',
    Icon: FbIcon,
  },
  {
    href: 'https://www.gitlab.com/',
    Icon: GitlabIcon,
  },
  {
    href: 'https://www.twitter.com/',
    Icon: TwitterIcon,
  },
  {
    href: 'https://www.linkedin.com/',
    Icon: LinkedInIcon,
  },
];
