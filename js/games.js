import {UI} from "./ui.js";
import {Details} from "./details.js";


export class games{
    constructor(){
        this.getGame("mmorpg");
        document.querySelectorAll(".navMenu a").forEach((link) => {
            link.addEventListener("click",(e)=>{
                document.querySelector(".navMenu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGame(e.target.dataset.category);
            });
            
            
            
            
        });
        this.ui=new UI();

    }

   async getGame(category){
        const loading=document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '72f103f031msh253a9c868fe6787p17dde5jsnf763c49013b9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api= await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
        const response = await api.json();
        console.log(response);
        this.ui.displayDataGame(response);
        this.startEvent();
        loading.classList.add("d-none");



        
    }

    startEvent(){
        document.querySelectorAll(".card").forEach((item)=>{
            item.addEventListener("click",()=>{
                const id=item.dataset.id;
                this.showDetails(id)
            })
        })
    }

    showDetails(gameId){
        const details = new Details(gameId);
        document.querySelector(".games").classList.add("d-none")
        document.querySelector("#gameDetails").classList.remove("d-none")
    }
}