const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

const app = Vue.createApp({
    data(){
        return{
            slides,
            slidesIndex: 0
        };
    },
    scorrimento: {
        next(){
            this.slidesIndex = (this.slidesIndex+1) % this.slides.length; // questo mi permette di ricominciare il giro delle immagini ogni volta che lo slidesIndex diviso con slides.lenght da resto 0.
        },
        pre(){
            this.slidesIndex = (this.slidesIndex - 1 + this.slides.length) % this.slides.length; //questo mi permette di tornare al lenght corrispondente allo slideIndex ma se è sotto lo 0, quindi -1 riparte dall'ultimo della lista.
        }
    }
});
app.mount('#app');