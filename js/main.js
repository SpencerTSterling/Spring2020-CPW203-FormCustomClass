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
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
function displayGame(myGame) {
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    var priceInput = getById("price");
    var ratingInput = getById("rating");
    var isDigital = getById("online");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.isOnlineOnly = isDigital.checked;
    return game;
}
