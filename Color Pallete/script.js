document.addEventListener('DOMContentLoaded', function () {
  const colorPickerContainer = document.getElementById('colorPickerContainer');
  const optionsContainer = document.getElementById('optionsContainer');
  const plainOptionsContainer = document.getElementById('plainOptionsContainer');
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const colorDisplay = document.getElementById('colorDisplay');
  const plainBtn = document.getElementById('plainBtn');
  const gradientBtn = document.getElementById('gradientBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const gradientType = document.getElementById('gradientType');
  const randomGradientBtn = document.getElementById('randomGradientBtn');
  const randomColorBtn = document.getElementById('randomColorBtn');

  function setPlainBackground() {
      const colorValue = color1.value;
      document.body.style.background = colorValue;
      colorDisplay.innerText = `${colorValue}`;
  }


  function setGradientBackground() {
    const gradientColor1 = color1.value;
    const gradientColor2 = color2.value;
    // Applying linear gradient that smoothly transitions between two colors
    const gradient = `linear-gradient(to right, ${gradientColor1}, ${gradientColor2})`;
    document.body.style.background = gradient;
    colorDisplay.innerText = `${gradientColor1} to ${gradientColor2}`;
}



  function generateRandomColor() {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      color1.value = randomColor;
      setPlainBackground();
  }

  function generateRandomGradient() {
      const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
      color1.value = randomColor1;
      color2.value = randomColor2;
      setGradientBackground();
  }

  plainBtn.addEventListener('click', function () {
      colorPickerContainer.style.display = 'block';
      optionsContainer.style.display = 'none';
      plainOptionsContainer.style.display = 'block';
  });

  gradientBtn.addEventListener('click', function () {
      colorPickerContainer.style.display = 'block';
      optionsContainer.style.display = 'block';
      plainOptionsContainer.style.display = 'none';
  });

  darkModeBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      darkModeBtn.innerHTML = isDarkMode ? '<i class="far fa-moon"></i>' : '<i class="far fa-sun"></i>';
  });

  randomColorBtn.addEventListener('click', generateRandomColor);
  randomGradientBtn.addEventListener('click', generateRandomGradient);

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
      darkModeBtn.innerHTML = '<i class="far fa-moon"></i>';
  }

  color1.addEventListener('input', function () {
      if (!gradientBtn.classList.contains('active')) {
          setPlainBackground();
      } else {
          // Do not change the background immediately when selecting the first color for gradient
          // Only update the gradient when both colors are selected
      }
  });

  color2.addEventListener('input', function () {
      setGradientBackground();
  });

  gradientType.addEventListener('change', function () {
      if (gradientBtn.classList.contains('active')) {
          setGradientBackground();
      }
  });

  // Initially, hide the second color picker and options container
  color2.style.display = 'none';
  optionsContainer.style.display = 'none';

  // Event listener for plainBtn click
  plainBtn.addEventListener('click', function () {
      color2.style.display = 'none';
  });

  // Event listener for gradientBtn click
  gradientBtn.addEventListener('click', function () {
      color2.style.display = 'block';
  });
});



function name (){
    
}
const name = function()