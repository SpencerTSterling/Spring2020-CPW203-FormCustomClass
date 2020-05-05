var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    resetErrorMessage();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var dataValid = true;
    if (!isTextPresent("title", "Please put the game's title")) {
        dataValid = false;
    }
    if (!isTextPresent("price", "Please put the game's price")) {
        dataValid = false;
    }
    return dataValid;
}
function isTextPresent(id, errMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value.trim();
    if (textBoxValue == "") {
        var errorBox = getById("validation-summary");
        var errorMessage = document.createElement("p");
        errorMessage.innerText = errMsg;
        errorBox.appendChild(errorMessage);
        return false;
    }
    else {
        return true;
    }
}
function resetErrorMessage() {
    var errorMessage = getById("validation-summary");
    errorMessage.innerText = "";
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    var priceInput = getById("price");
    var ratingInput = getById("rating");
    var genreInput = getById("genre");
    var isDigital = getById("online");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.genre = genreInput.value;
    game.isOnlineOnly = isDigital.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isOnlineOnly) {
        notDigitalDisplay = "This is a digital only game";
    }
    else {
        notDigitalDisplay = "You may purchase a digital or physical copy";
    }
    gameInfo.innerText = myGame.title + " is a " + myGame.genre + " game\n        and has a rating of " + myGame.rating + ". \n        It costs $" + myGame.price.toFixed(2) + ". \n        " + notDigitalDisplay + ".";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
