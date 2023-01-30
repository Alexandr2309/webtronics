import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { validateSchema, FormData } from '../model';
import { sendRequest } from '../model';
import cls from './styles.module.scss';

export interface SendRequestProps {
  className?: string;
}

export const SendRequest = memo((props: SendRequestProps) => {
  const { className } = props;
  const [isModal, setIsModal] = useState(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validateSchema),
  });
  const onSubmit = async (data: FormData) => {
    const res = await sendRequest(data);

    if (res.id) {
      resetField('firstName');
      resetField('phone');
      resetField('email');
      setIsModal(true);
    }
  };

  const onCloseModal = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <form
      className={classNames(cls.root, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder='Name'
        errMsg={errors.firstName?.message}
        {...register('firstName')}
      />
      <Input
        {...register('phone')}
        placeholder='Phone'
        errMsg={errors.phone?.message}
      />
      <Input
        {...register('email')}
        placeholder='E-mail'
        errMsg={errors.email?.message}
      />
      <Button className={cls.btn} type='submit'>
        Send
      </Button>
      {isModal && (
        <Modal isOpen={isModal} onClose={onCloseModal}>
          <div className={cls.modal}>
            <div className={cls.success}>
              Данные успешно отправлены на сервер!
            </div>
            <Button className={cls.close} onClick={onCloseModal}>
              Закрыть окно
            </Button>
          </div>
        </Modal>
      )}
    </form>
  );
});
