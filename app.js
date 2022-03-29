import './js/theme.js';
import { getUserData } from './js/getUserData.js';
import { showUserData } from './js/showUserData.js';

document.getElementById('github-searchbar').addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputValue = document.getElementById('searchbar-value').value;
  
  //Gets all user data related to the Github user's account
  const user =  await getUserData(inputValue);

  //Extracts the relevant user data and populates the UI.
  showUserData(user);
})

