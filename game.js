var rpg = new Rpg("canvas_rpg");
function startGame() {
    loadMaps();
    Input.lock(rpg.canvas, true);
}
