document.querySelector('#js-theme-changer').addEventListener('click', toggleTheme);

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }
})();

// function to toggle between light and dark theme
function toggleTheme() {
  const themeBtn = document.querySelector('#js-theme-changer');
  if (localStorage.getItem('theme') === 'theme-dark') {
    themeBtn.innerText = 'Dark';  
    setTheme('theme-light');
  } else {
    themeBtn.innerText = 'Light';  
    setTheme('theme-dark');
  }
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
