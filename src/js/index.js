import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/select/select';
import { accordion } from '../blocks/accordion-ui/accordion-ui';
import { inputUi } from '../blocks/input/input';

document.addEventListener('DOMContentLoaded', function () {
  select();
  inputUi();
  accordion();
});
