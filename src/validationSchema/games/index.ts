import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  rules: yup.string().nullable(),
  player_limit: yup.number().integer().nullable(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
  admin_id: yup.string().nullable().required(),
});
