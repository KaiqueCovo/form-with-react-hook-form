import { Yup } from "./yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  cellphone: Yup.string().required(),
  job: Yup.string().required(),
});
