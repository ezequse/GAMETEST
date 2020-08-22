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
    scene: [Teaser,Inicio]
};
var game = new Phaser.Game(config);

