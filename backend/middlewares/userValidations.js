const {body} = require("express-validator");

const userCreateValidation = () => {
    return [
     body("name")
        .isString()
        .withMessage("O nome é obrigatório.")
        .isLength({min:3})
        .withMessage("O nome precisa ter no mínimo três caracteres."),
      body("email")
        .isString()
        .withMessage("O e-mail é obrigatório.")
        .isEmail()
        .withMessage("Insira um e-mail válido."),
      body("password")
      .isString()
      .withMessage("A senha é obrigatória")
      .isLength({min:5})
      .withMessage("Asenha precisa ter no mínimo 5 caracteres."),
      body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value,{req}) => {
        if (value != req.body.password) {
            throw new Error("As senhas não são iguais.")
        }
        return true;
      })
    ];
};

const loginValidation = () =>{
  return[
    body("email")
        .isString()
        .withMessage("O e-mail é obrigatório")
        .isEmail()
        .withMessage("Insira um e-mail válido."),
    body("password")
    .isString().withMessage("A senha é obrigatória"),
  ];
};

module.exports = {
    userCreateValidation,
};