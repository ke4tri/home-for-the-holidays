import 'jquery';
import 'bootstrap';
import './index.scss';
import createNavbar from './styles/components/Navbar/navbar';

const initializeApp = () => {
  createNavbar();
};

initializeApp();
