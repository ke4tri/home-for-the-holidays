import firebase from 'firebase/app';
import 'jquery';
import 'bootstrap';
import './index.scss';
import apiKeys from '../db/apiKeys.json';
import createNavbar from './styles/components/Navbar/navbar';
import loginButton from './styles/components/Auth/auth';
import checkLoginStatus from './helpers/authHelpers';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  checkLoginStatus();
  loginButton();
};

initializeApp();
