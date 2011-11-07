var rpg = new Rpg("canvas_rpg");
function startGame() {
    loadMaps();
    rpg.setCanvasSize("fullscreen");
    rpg.setLang("en");
    Input.lock(rpg.canvas, true);
}
