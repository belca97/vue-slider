// inizializzo lo script di vue per poter utilizzare il framework

const vue = new Vue(
    {
        el : '#root',
        data :{
            // definisco il mio array di oggetti nella quale farò riferimento nel mio html
            items : [
                {
                    url:'img/01.jpg',
                    name:'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url:'img/02.jpg',
                    name:'Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    url:'img/03.jpg',
                    name:'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url:'img/04.jpg',
                    name:'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url:'img/05.jpg',
                    name:'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }                
            ],

            indicatore: 0,
            clock : ""
        
        },

        mounted: function (){
            this.gestioneDelTempo();
        },

        //definisco due funzioni per lo scorrere delle immagini nella parte thumbs

        methods: {
            previous (){

                this.indicatore--;
                if (this.indicatore < 0){
                    this.indicatore = this.items.length - 1;
                }
            },

            next (){
                this.indicatore++
                if (this.indicatore == this.items.length){
                    this.indicatore = 0;
                }
            },

            gestioneClick(indice){
                this.indicatore = indice;
            },

            gestioneDelTempo () {
                this.clock = setInterval(this.next, 3000);             
            },
            stopGestioneDelTempo (){
                clearInterval(this.clock);
            },
        }
    }
);