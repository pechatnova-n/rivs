import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/select/select';
import { accordion } from '../blocks/accordion-ui/accordion-ui';
import { inputReset } from './components/inputReset';
import { modals } from '../blocks/modals/modals';
import { barbaUi } from './libs/barba';

document.addEventListener('DOMContentLoaded', function () {
  // barbaUi();

  commonFunction();
});

// Функция для вызова при переходе между страницами
export const commonFunction = () => {
  inputReset();
  select();
  accordion();
  modals();
};
