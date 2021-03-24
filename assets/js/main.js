// <!-- Descrizione
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. -->

var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      imgs: [
        'https://www.wallpapertip.com/wmimgs/3-35636_download-nature-wallpapers-full-hd-1080p-photo-desktop.jpg',
        'https://i.pinimg.com/originals/25/2d/e9/252de9410dba461a7f27d9b7eebad0e2.jpg',
        'https://wallpapercave.com/wp/wp2809570.jpg',
      ]
    }
  }
);
