import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  username: yup.string().required(),
  score: yup.number().integer().nullable(),
  status: yup.string().required(),
  game_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
