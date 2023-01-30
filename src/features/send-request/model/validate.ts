import * as yup from 'yup';
import { PHONE_REGEXP } from '@/shared/lib/const';

export const validateSchema = yup
  .object({
    firstName: yup.string().required(),
    phone: yup.string().matches(PHONE_REGEXP, 'Phone number is not valid'),
    email: yup.string().email().required(),
  })
  .required();

export type FormData = yup.InferType<typeof validateSchema>;
