import firebase from 'firebase/app';
import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import apiKeys from '../db/apiKeys.json';
import createNavbar from './styles/components/Navbar/navbar';
import loginButton from './styles/components/Auth/auth';
import authHelpers from './helpers/authHelpers';
import friendsPage from './styles/components/FriendsPage/friendsPage';
import showAddForm from './styles/components/AddEditFriends/addEditFriends';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(friendsPage);
  loginButton();
  $('#show-friend-form').on('click', showAddForm);
};

initializeApp();
