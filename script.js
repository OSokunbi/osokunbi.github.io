function setTheme() {
  // localStorage.clear();
  var theme = localStorage.getItem('theme');


  if (theme) {
    if (theme == "dark-theme") {
      document.getElementById('body').classList.add('dark-theme');
      document.getElementById('theme-icon').setAttribute('name','sunny-outline');
    }

    if (theme == "light-theme") {
      document.getElementById('body').classList.add('light-theme');
      document.getElementById('theme-icon').setAttribute('name','moon-outline');
    } 
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.getElementById('body').classList.add('dark-theme');
      document.getElementById('theme-icon').setAttribute('name','sunny-outline');
    } else {
      document.getElementById('body').classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
      document.getElementById('theme-icon').setAttribute('name','moon-outline');
    }
  }
}

setTheme();	

function changeTheme() {
  if (document.getElementById('body').classList.contains('light-theme')) {
    document.getElementById('body').classList.remove('light-theme');
    document.getElementById('body').classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    console.log('user change, set to dark-theme')
    document.getElementById('theme-icon').setAttribute('name','sunny-outline');
  } else {
    document.getElementById('body').classList.remove('dark-theme');
    document.getElementById('body').classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    console.log('user change, set to light-theme')
    document.getElementById('theme-icon').setAttribute('name','moon-outline');
  }	
}

var isPlaying = false;
var audio = document.querySelector('audio');

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if(e.keyCode == "32") {
    toggleMusic();
    document.getElementById("music").scrollIntoView()
  }
}
  function toggleMusic() {
    audio.volume = 0.05;
    if (isPlaying) {
       document.getElementById('sound').setAttribute('name','play');
       audio.pause();
       console.log('audio paused')
    } else {
       document.getElementById('sound').setAttribute('name','pause');
       audio.play();
       console.log('audio playing')
    }

    isPlaying = !isPlaying;
  }
