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
  
  function makeDraggable(el) {
    let isDragging = false;
    let offsetX, offsetY;
  
    el.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - el.getBoundingClientRect().left;
      offsetY = e.clientY - el.getBoundingClientRect().top;
      el.style.position = 'absolute';
      el.style.zIndex = '1000';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        el.style.left = `${e.clientX - offsetX}px`;
        el.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
  
  // Aplica solo a los popups 2 y 3
  makeDraggable(popup);
  makeDraggable(musicBox);  

// Play/Pausa de la canción
togglePlayBtn.addEventListener('click', () => {
  if (audioPlayer.paused) audioPlayer.play();
  else audioPlayer.pause();
});

const titles = [
  "💖🐻 bear bday!!!",
  "🎂🧸 i love u so much!",
  "🧸💕"
];

let currentTitle = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const title = titles[currentTitle];

  if (typing) {
    charIndex++;
    if (charIndex > title.length) {
      typing = false;
      setTimeout(typeEffect, 1000); // espera antes de borrar
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      typing = true;
      currentTitle = (currentTitle + 1) % titles.length;
    }
  }

  document.title = title.substring(0, charIndex);
  setTimeout(typeEffect, 150);
}

typeEffect();
