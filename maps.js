function loadMaps() {	
// Home side
    rpg.loadMap('Homeside', {
		tileset: '015-ForestTown01.png',
        autotiles: [
                    'water.png',
                    'ground.png'
                   ],
        events: ['instructions', 'signhome'],
        bgm: { mp3: 'Home' },
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
        bgm: { mp3: 'Home' },
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
        events: ['entercrossroads', 'crossroadsign', 'civilian1'],
        bgm: { mp3: 'Forest' },
        transfert: [
        {
            x: 0,
            y: 17,
            map: 'Homeside',
            x_final: 36,
            y_final: 12
        },
        {
            x: 23,
            y: 0,
            map: 'Port-Road',
            x_final: 13,
            y_final: 17
        },
        {
            x: 24,
            y: 0,
            map: 'Port-Road',
            x_final: 13,
            y_final: 17
        },
        {
            x: 49,
            y: 17,
            map: 'Wizard',
            x_final: 1,
            y_final: 3
        },
        {
            x: 49,
            y: 18,
            map: 'Wizard',
            x_final: 1,
            y_final: 3
        }
        ]
	});

    rpg.prepareMap('Port-Road', {
		tileset: 'forest-road.png',
        autotiles: [
                    'grass.png',
                    'grassground.png'
                   ],
        events: ['portroadsign'],
        bgm: { mp3: 'Forest' },
        transfert: [
        {
            x: 13,
            y: 19,
            map: 'Crossroads',
            x_final: 23,
            y_final: 2
        },
        {
            x: 0,
            y: 4,
            map: 'Port-Knox',
            x_final: 48,
            y_final: 32
        }
        ]
	});

    rpg.prepareMap('Port-Knox', {
		tileset: 'port-town.png',
        autotiles: [
                    'ocean.png',
                    'portborder.png'
                   ],
        events: [ 'guy' ],
        bgm: { mp3: 'Home' },
        transfert: [
        {
            x: 49,
            y: 32,
            map: 'Port-Road',
            x_final: 1,
            y_final: 4
        }
        ]
    });
    
    rpg.prepareMap('Wizard', {
		tileset: 'wizardfort.png',
        events: [ 'wizard' ],
        bgm: { mp3: 'Wizard' },
        transfert: [
        {
            x: 0,
            y: 3,
            map: 'Crossroads',
            x_final: 48,
            y_final: 18
        }
        ]
    });
}

function init() {
    
    rpg.player.setTypeMove("tile");
    rpg.player.useMouse(true);
    rpg.setScreenIn("Player");
}
