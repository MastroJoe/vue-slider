// <!-- Descrizione
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. -->

var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      // title: 'Mountain Slider',
      imgs: [
        'https://www.wallpapertip.com/wmimgs/3-35636_download-nature-wallpapers-full-hd-1080p-photo-desktop.jpg',
        'https://wallpapercave.com/wp/wp2438908.jpg',
        'https://wallpapercave.com/wp/wp2809570.jpg',
      ]
    },
    methods: {
      // creo funzione per scorrere a dx al click delle icone
      next: function () {
        // utilizzo index
        if (this.index < this.imgs.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
      },
      // creo funzione per scorrere a sx al click delle icone
      prev: function (){
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.imgs.length - 1;
        }
      },
      // creo funzione per attivare il dot corrispondente
      active: function (index){
      this.index = index;
      },
    }
  }
);
