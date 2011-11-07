function loadMaps() {	
// Home side
    rpg.loadMap('Homeside', {
		tileset: '015-ForestTown01.png',
        autotiles: [
                    'water.png',
                    'ground.png'
                   ],
        events: ['signhome'],
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
            y_final: 11
        },
        {
            x: 37,
            y: 12,
            map: 'Crossroads',
            x_final: 1,
            y_final: 17
        }
        ]
	}, init);

// Inside home
    rpg.prepareMap('Inside-home', {
		tileset: '016-ForestTown02.png',
        autotiles: [
                    'wall.png',
                    'carpet.png'
                   ],
        transfert: [{
            x: 8,
            y: 13,
            map: 'Homeside',
            x_final: 11,
            y_final: 14
        }]
	});

// Crossroads

    rpg.prepareMap('Crossroads', {
		tileset: 'forest.png',
        autotiles: [
                    'road.png',
                    'tree-forest.png',
                    'ground.png'
                   ],
        events: ['crossroadsign'],
        transfert: [{
            x: 0,
            y: 17,
            map: 'Homeside',
            x_final: 36,
            y_final: 12
        }
        ]
	});
}

function init() {
    
    rpg.player.setTypeMove("tile");
    rpg.player.useMouse(true);
    rpg.setScreenIn("Player");
}
