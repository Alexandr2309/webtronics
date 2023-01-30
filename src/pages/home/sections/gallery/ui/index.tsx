import Image from 'next/image';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import DeveloperOne from '../assets/deloper4.png';
import DeveloperTwo from '../assets/developer1.png';
import DeveloperThree from '../assets/developer2.png';
import DeveloperFour from '../assets/developer3.png';
import cls from './styles.module.scss';

export interface GalleryProps {
  className?: string;
}

const FIRST_TEXT =
  'By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. ';
const SECOND_TEXT =
  'If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.';

export const Gallery = memo((props: GalleryProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.root, {}, [className])} id='gallery'>
      <Blur position='top' className={cls.blur} />
      <Blur position='bottom' className={cls.blur} />
      <Container>
        <Text
          title={`Gallery`}
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <div className={cls.wrapper}>
          <div className={cls.block}>
            <Text text={FIRST_TEXT} size={TextSize.M} className={cls.text} />
            <Image
              src={DeveloperOne}
              alt='developer'
              className={classNames(cls.img, {}, [cls.img_first])}
            />
            <Text
              text={SECOND_TEXT}
              size={TextSize.M}
              className={cls.second_text}
            />
          </div>
          <div className={cls.block}>
            <Image
              src={DeveloperTwo}
              alt='developer'
              className={classNames(cls.img, {}, [cls.img_second])}
            />
          </div>
          <div className={`${cls.block} ${cls.small_imgs}`}>
            <Image
              src={DeveloperThree}
              alt='developer'
              className={classNames(cls.img, {}, [cls.img_third])}
            />
            <Image
              src={DeveloperFour}
              alt='developer'
              className={classNames(cls.img, {}, [cls.img_four])}
            />
          </div>
        </div>
      </Container>
    </section>
  );
});
