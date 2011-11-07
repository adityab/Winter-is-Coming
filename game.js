var rpg = new Rpg("canvas_rpg");
function startGame() {
    loadMaps();
    rpg.setCanvasSize("fullscreen");
    Input.lock(rpg.canvas, true);
}
