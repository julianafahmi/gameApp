export class UI{
   displayDataGame(data){
    let gameBox=``;
    for(let i=0;i< data.length;i++){
        gameBox+=`<div class="col-12 col-md-6 col-lg-4 col-xl-3 g-4">
            <div data-id="${data[i].id}" class="card text-center  bg-transparent">
            

              <div class="card-body text-white">
                <img class="object-fit-cover card-img-top h-100" src="${data[i].thumbnail}" alt="">
                <div class="d-flex justify-content-between pt-3">
                  <p class="card-title " id="gameName">${data[i].title}</p>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <div id="gameDescription" class="text-center">
                  ${data[i].short_description.split(" ", 9)}
                </div>

              </div>
              <div class="card-footer small d-flex justify-content-between">
                <span class="badge badge-color" id="gameNameFooter">${data[i].genre}</span>
                <span class="badge badge-color" id="method">${data[i].platform}</span>
              </div>
            </div>

          </div>`
    }
    document.querySelector("#gameData").innerHTML=gameBox;
   }

   displayDetails(data){
    const content=`  <div class="col-md-4">
          
          <img src="${data.thumbnail}" class="pt-3" alt="">

        </div>
        <div class="col-md-8">
          <h3>Title:${data.title}</h3>
          <p>Category:
            <span class="badge text-bg-primary">${data.genre}</span>
          </p>
          <p>Platform:
            <span class="badge text-bg-primary">${data.platform}</span>
          </p>
          <p>Status:
            <span class="badge text-bg-primary">${data.status}</span>
          </p>
          <p class="small">${data.description}</p>

            <a href="${data.game_url}" class="btn btn-outline-warning"> Show game </a>

        </div>`

        document.getElementById("detailsOfGame").innerHTML = content;
   }
}