var config = {
    type: Phaser.AUTO.FIT,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
        
    },
    scene: [Teaser,lvl1, lvl2, Nextlevel, Intermedio, WIN]
};
var game = new Phaser.Game(config);
var f = 1;
var puntos = 0;
