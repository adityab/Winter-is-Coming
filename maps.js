function loadMaps() {	
// Home side
    rpg.loadMap('Homeside', {
		tileset: '015-ForestTown01.png',
        autotiles: [
                    '001-G_Water01.png',
                    '004-G_Ground02.png'
                   ],
			player:  {
				x: 16, 
				y: 14, 
				filename: 'Old-Man.png'
			},
            transfert: [{
                x: 11,
                y: 12,
                map: 'Inside-home',
                x_final: 8,
                y_final: 11,
            }]
		}, activateMap('Homeside'));

// Inside home
    rpg.prepareMap('Inside-home', {
		tileset: '016-ForestTown02.png',
        autotiles: [
                    '052-Carpet02.png'
                   ],
            transfert: [{
                x: 8,
                y: 13,
                map: 'Homeside',
                x_final: 11,
                y_final: 14,
            }]
		}, activateMap('Inside-home'));
}

function activateMap(name) {
    
}
