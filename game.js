function startGame() {
    var rpg = new Rpg("canvas_rpg");
	
    rpg.loadMap('Homeside', {
		tileset: '015-ForestTown01.png',
			player:  {
				x: 16, 
				y: 14, 
				filename: 'Old-Man.png'
			}
		}, function () { 
			rpg.setScreenIn("Player"); 
        });

}
