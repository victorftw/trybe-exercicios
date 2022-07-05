function addButtonDarkMode() {
  const darkMode = document.querySelector('.darkmode-container');
  const buttonDarkMode = document.createElement('button');
  buttonDarkMode.innerText = 'clique';
  buttonDarkMode.classList = 'btn darkMode';
  darkMode.appendChild(buttonDarkMode);
}

addButtonDarkMode();

function addButtonTextColor() {
  const colorText = document.querySelector('.colortext-container');
  const buttonColorText = document.createElement('button');
  buttonColorText.innerText = 'clique';
  buttonColorText.classList = 'btn textColor';
  colorText.appendChild(buttonColorText);
}

addButtonTextColor();

function addButtonFontSize() {
  const fontSize = document.querySelector('.fontsize-container');
  const buttonFontSize = document.createElement('button');
  buttonFontSize.innerText = 'clique';
  buttonFontSize.classList = 'btn fontSize';
  fontSize.appendChild(buttonFontSize);
}

addButtonFontSize();

function addButtonSpaceLines() {
  const spaceLines = document.querySelector('.spacelines-container');
  const buttonSpaceLines = document.createElement('button');
  buttonSpaceLines.innerText = 'clique';
  buttonSpaceLines.classList = 'btn spaceLines';
  spaceLines.appendChild(buttonSpaceLines);
}

addButtonSpaceLines();

function addButtonFontFamily() {
  const fontfamily = document.querySelector('.fontfamily-container');
  const buttonFontFamily = document.createElement('button');
  buttonFontFamily.innerText = 'clique';
  buttonFontFamily.classList = 'btn fontFamily';
  fontfamily.appendChild(buttonFontFamily);
}

addButtonFontFamily();

const darkMode = document.querySelector('.darkMode');

function darkModeOn() {
  const corpo = document.querySelector('body');
  corpo.style.backgroundColor = '#17171c';
  const main = document.querySelector('main');
  main.style.backgroundColor = '#17171c';
}

function darkModeOff() {
  const corpo = document.querySelector('body');
  corpo.style.backgroundColor = 'white';
  const main = document.querySelector('main');
  main.style.backgroundColor = 'rgb(245, 243, 243)';
}

function darkModeOnOff() {
  let onOff = localStorage.getItem('darkMode');
  if (onOff === 'false') {
    darkModeOn();
    localStorage.setItem('darkMode', 'true');
  } else {
    darkModeOff();
    localStorage.setItem('darkMode', 'false');
  }
}

darkMode.addEventListener('click', darkModeOnOff);

const colorText = document.querySelector('.textColor');

function colorTextOn() {
  const corpo = document.querySelector('body');
  corpo.style.color = 'chartreuse';
}

function colorTextOff() {
  const corpo = document.querySelector('body');
  corpo.style.color = 'black';
}

function colorTextOnOff() {
  let onOff = localStorage.getItem('colorText');
  if (onOff === 'false') {
    colorTextOn();
    localStorage.setItem('colorText', 'true');
  } else {
    colorTextOff();
    localStorage.setItem('colorText', 'false');
  }
}

colorText.addEventListener('click', colorTextOnOff);

const fontSize = document.querySelector('.fontSize');

function fontSizeOn() {
  const corpo = document.querySelector('body');
  corpo.style.fontSize = '22px';
}

function fontSizeOff() {
  const corpo = document.querySelector('body');
  corpo.style.fontSize = '16px';
}

function fontSizeOnOff() {
  let onOff = localStorage.getItem('fontSize');
  if (onOff === 'false') {
    fontSizeOn();
    localStorage.setItem('fontSize', 'true');
  } else {
    fontSizeOff();
    localStorage.setItem('fontSize', 'false');
  }
}

fontSize.addEventListener('click', fontSizeOnOff);

const spaceLines = document.querySelector('.spaceLines');

function spaceLinesOn() {
  const main = document.querySelector('main');
  main.style.lineHeight = '35px';
}

function spaceLinesOff() {
  const main = document.querySelector('main');
  main.style.lineHeight = '25px';
}

function spaceLinesOnOff() {
  let onOff = localStorage.getItem('spaceLines');
  if (onOff === 'false') {
    spaceLinesOn();
    localStorage.setItem('spaceLines', 'true');
  } else {
    spaceLinesOff();
    localStorage.setItem('spaceLines', 'false');
  }
}

spaceLines.addEventListener('click', spaceLinesOnOff);

const fontFamily = document.querySelector('.fontFamily');

function fontFamilyOn() {
  const content = document.querySelector('.content');
  content.style.fontFamily = 'Bebas Neue';
}

function fontFamilyOff() {
  const content = document.querySelector('.content');
  content.style.fontFamily = 'Times New Roman';
}

function fontFamilyOnOff() {
  let onOff = localStorage.getItem('fontFamily');
  if (onOff === 'false') {
    fontFamilyOn();
    localStorage.setItem('fontFamily', 'true');
  } else {
    fontFamilyOff();
    localStorage.setItem('fontFamily', 'false');
  }
}

fontFamily.addEventListener('click', fontFamilyOnOff);

window.onload = function () {
  if (localStorage.getItem('darkMode') === 'true') {
    darkModeOn();
  }
  if (localStorage.getItem('colorText') === 'true') {
    colorTextOn();
  }
  if (localStorage.getItem('fontSize') === 'true') {
    fontSizeOn();
  }
  if (localStorage.getItem('spaceLines') === 'true') {
    spaceLinesOn();
  }
  if (localStorage.getItem('fontFamily') === 'true') {
    fontFamilyOn();
  }
};
