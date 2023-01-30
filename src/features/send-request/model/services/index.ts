import { $api } from '@/shared/api';
import { FormData } from '../validate';

export const sendRequest = async (data: FormData) => {
  try {
    const result = await $api.post('/feedback', data);
    return result.data;
  } catch (e) {
    throw new Error('Error');
  }
};
