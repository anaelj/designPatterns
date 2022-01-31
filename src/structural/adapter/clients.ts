import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

const email = 'anael@teste.com.br';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('email válido! class');
  } else {
    console.log('email inválido. class');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('email válido! - fn');
  } else {
    console.log('email inválido. -fn');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
