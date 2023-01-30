import { memo } from 'react';
import { SendRequest } from '@/features/send-request';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import cls from './styles.module.scss';

export interface ContactUsProps {
  className?: string;
}

export const ContactUs = memo((props: ContactUsProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.root, {}, [className])} id="contact_us">
      <Container className={cls.wrapper}>
        <div className={cls.content_wrapper}>
          <Text
            title='Contact us'
            size={TextSize.X}
            align={TextAlign.CENTER}
            className={cls.title}
          />
          <span className={cls.text}>
            Do you have any kind of help please contact with us.
          </span>
          <SendRequest />
        </div>
      </Container>
    </section>
  );
});
