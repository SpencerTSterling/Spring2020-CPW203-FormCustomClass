class VideoGame{
    title: string;
    price: number;
    rating: string;
    isOnlineOnly: boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario Bros.";
myGame.rating = "E";
myGame.isOnlineOnly = true;
myGame.price = 60;
*/

window.onload = function(){
    let addBtn = <HTMLElement> document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    //alert("button works");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

// ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}

function displayGame(myGame:VideoGame):void{
    //Display Video Game below the form
}


function getById(id:string){
    return document.getElementById(id);
}

function getVideoGame():VideoGame{
    // create game
    let game = new VideoGame();
    // populate with data from the form
    let titleInput = <HTMLInputElement>getById("title");
    let priceInput = <HTMLInputElement>getById("price");
    let ratingInput = <HTMLInputElement>getById("rating");
    let isDigital = <HTMLInputElement>getById("online");


    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.isOnlineOnly = isDigital.checked;

    // return game
    return game;
}