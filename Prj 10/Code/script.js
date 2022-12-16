// In the Name of Allah

// Project Title : Prj 10
// Programming Software : Visual Studio Code , Version 1.73.1
// Programming language : JavaScript
// Programmer : Sina Zakizadeh
// Other Projects : https://github.com/SinaZakizadeh/JavaScript-Projects.git

// Project Description :

// Use a switch statement to log the following string for the given 'language':
// chinese : 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

// Project Solution :

const language = prompt(
  'Choose a language ? ( chinese , spanish , english , hindi , arabic , ...  '
);
switch (language) {
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great Language too 😀');
}
