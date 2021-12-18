import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Campo obrigatório",
  },
  string: {
    email: 'Email inválido',
  },
});

export { Yup };
 