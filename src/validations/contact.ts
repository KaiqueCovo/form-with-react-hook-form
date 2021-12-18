import { Yup } from "./yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  cellphone: Yup.string().required().min(11, 'Telefone inválido'),
  job: Yup.string().required(),
});
