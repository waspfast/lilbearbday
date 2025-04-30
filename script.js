// Referencias a DOM
const menu = document.getElementById('menu');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const popup = document.getElementById('popup');
const musicBox = document.getElementById('musicBox');
const closePopupBtn = document.getElementById('closePopup');
const closeMusicBtn = document.getElementById('closeMusic');
const audioPlayer = document.getElementById('audioPlayer');
const togglePlayBtn = document.getElementById('togglePlay');

let hideTimeout;

// Mostrar/ocultar icon2 y icon3 con retardo
menu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);  // Cancela cualquier ocultación pendiente
  icon2.classList.add('visible');
  icon3.classList.add('visible');
});

menu.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    icon2.classList.remove('visible');
    icon3.classList.remove('visible');
  }, 300);  // Espera 300 ms antes de ocultar
});

// Click en "2": abre popup de texto
// Mostrar el popup (cuando clickeas en "2" o "3")
icon2.addEventListener('click', () => {
    popup.style.display = 'block'; // Asegura que el popup esté en el flujo
    setTimeout(() => {
      popup.classList.add('active');
    }, 10); // Delay pequeño para que se aplique la transición
  });
  
  // Cerrar el popup
  closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('active'); // Comienza la transición de salida
    setTimeout(() => {
      popup.style.display = 'none'; // Oculta después de la animación
    }, 400); // Asegura que el popup se ocultará después de la animación
  });
  

// Click en "3": abre popup de música
// Mostrar el popup de música cuando se hace clic en el icono 3
icon3.addEventListener('click', () => {
    musicBox.style.display = 'block'; // Asegúrate de que el popup esté en el flujo
    setTimeout(() => {
      musicBox.classList.add('active'); // Añadir la clase active para mostrar el popup con animación
    }, 10); // Delay pequeño para asegurar que la transición de la animación se aplica
  });  

// Cerrar popups
// Cerrar el popup de música
closeMusicBtn.addEventListener('click', () => {
    musicBox.classList.remove('active'); // Quita la clase active para iniciar la animación de salida
    setTimeout(() => {
      musicBox.style.display = 'none'; // Oculta el popup después de la animación
    }, 400); // Este tiempo debe coincidir con la duración de la animación
  });
  

// Play/Pausa de la canción
togglePlayBtn.addEventListener('click', () => {
  if (audioPlayer.paused) audioPlayer.play();
  else audioPlayer.pause();
});
