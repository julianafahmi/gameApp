import { UI } from "./ui.js";

export class Details{
    constructor(id){
        this.ui=new UI ();
        document.querySelector("#closeBtn").addEventListener("click",()=>{
            document.querySelector(".games").classList.remove("d-none")
        document.querySelector("#gameDetails").classList.add("d-none")
        })
        this.getDetails(id);
    }

    getDetails(gameId){
        const loading=document.querySelector(".loading");
        loading.classList.remove("d-none");
//        const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '72f103f031msh253a9c868fe6787p17dde5jsnf763c49013b9',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

//         const api= await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options)
//         const response = await api.json();
//         console.log(response);
//         this.ui.displayDetails(response);

//     }

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '72f103f031msh253a9c868fe6787p17dde5jsnf763c49013b9',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

 fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
    .then((response) => response.json())
    .then((response) => this.ui.displayDetails(response))
    .catch((err) => console.error(err))
    .finally(() => {
       loading.classList.add("d-none");
    });
}


}
