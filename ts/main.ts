class VideoGame{
    title: string;
    price: number;
    rating: string;
    genre: string;
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
     resetErrorMessage();    

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}



function getById(id:string){
    return document.getElementById(id);
}

// ADD VALIDATION CODE
function isAllDataValid(){
    let dataValid = true;

    if (!isTextPresent("title", "Please put the game's title")){
        dataValid = false;
    }
    if (!isTextPresent("price", "Please put the game's price")){
        dataValid = false;
    }

    if (!isOptionSelected("genre", "Please choose the game's genre")){
        dataValid = false;
    }

    if (!isOptionSelected("rating", "Please choose the game's rating")){
        dataValid = false;
    }

    return dataValid;

}

function isOptionSelected(id:string, errMsg:string):boolean{
    let selectBox = getById(id) as HTMLSelectElement
    let selectBoxValue = selectBox.value;

    if ( selectBox.value != "no-selection") {
        return true;
    } else {
        let errorBox = <HTMLElement>getById("validation-summary")
        let errorMessage = document.createElement("p");
        errorMessage.innerText = errMsg;
        errorBox.appendChild(errorMessage);    
        return false;
    }

}



/**
 * Will check to see if text is present in the text boxes
 * and if there is no text, an error message will display above
 * the form in the validation-summary div
 * @param id id of the text box input 
 * @param errMsg message depicting the error the user made
 */
function isTextPresent(id:string, errMsg:string):boolean{
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value.trim();
    if (textBoxValue == "") {
        let errorBox = <HTMLElement>getById("validation-summary")
        let errorMessage = document.createElement("p");
        errorMessage.innerText = errMsg;
        errorBox.appendChild(errorMessage);
        return false;
    } else{
        return true;
    }
}

/**
 * Emptys the validation-summary div of all error messages
 */
function resetErrorMessage(){
    let errorMessage = <HTMLElement>getById("validation-summary");
    errorMessage.innerText = "";
}

function getVideoGame():VideoGame{
    // create game
    let game = new VideoGame();
    // populate with data from the form
    let titleInput = <HTMLInputElement>getById("title");
    let priceInput = <HTMLInputElement>getById("price");
    let ratingInput = <HTMLInputElement>getById("rating");
    let genreInput = <HTMLInputElement>getById("genre");
    let isDigital = <HTMLInputElement>getById("online");


    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.genre = genreInput.value;
    game.isOnlineOnly = isDigital.checked;

    // return game
    return game;
}

function displayGame(myGame:VideoGame):void{
    //Display Video Game below the form
    let displayDiv = getById("display");

    // create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // create paragraph with game details
    let gameInfo = document.createElement("p");
    // detailing if the game is or isn't online only
    let notDigitalDisplay = "";
    if (myGame.isOnlineOnly){
        notDigitalDisplay = "This is a digital only game";
    } else {
        notDigitalDisplay = "You may purchase a digital or physical copy";
    }
    gameInfo.innerText = `${myGame.title} is a ${myGame.genre} game
        and has a rating of ${myGame.rating}. 
        It costs $${myGame.price.toFixed(2)}. 
        ${notDigitalDisplay}.`; 

    // add <h2> in the <div id="display"> 
    displayDiv.appendChild(gameHeading);

    // add p in the div
    displayDiv.appendChild(gameInfo);
}
