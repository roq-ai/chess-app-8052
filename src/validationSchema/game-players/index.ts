import * as yup from 'yup';

export const gamePlayerValidationSchema = yup.object().shape({
  game_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
