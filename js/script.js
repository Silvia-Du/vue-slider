/*
Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/
const app = new Vue({
    el: '#app',

    data: {

        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        
        activeThumb : 0,
        counter : 10,
    },

    methods : {

        checkClick(index){
            console.log(index);
            this.activeThumb = index;
            console.log(this.activeThumb);
        },

        switchUp(){
            this.activeThumb --;
            if(this.activeThumb < 0){
                this.activeThumb = this.slides.length -1;
            }
        },

        switchDown(){
            this.activeThumb ++;
            if(this.activeThumb > this.slides.length -1){
                console.log('eccoci');
                this.activeThumb = 0;
            }
        }
        
    },
    
    //se quella grande e quella piccola sono uguali allora > la class Active <
    // al click raccolgo l'index dell'img cliccata e lo do come valore al value di active Thumb

    mounted(){

        const clock = setInterval(()=> {

            if(this.counter> 0){
                console.log(this.counter--);
                this.switchDown();
            }

            if(this.counter === 0){
                clearInterval(clock);
                console.log('fine');
            }
        }, 2000);
    }

})