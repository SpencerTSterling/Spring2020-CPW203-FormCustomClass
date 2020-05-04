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

function getVideoGame():VideoGame{
    // create game
    // populate with data from the form
    // return game
    return VideoGame;
}