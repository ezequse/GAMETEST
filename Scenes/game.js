var config = {
    type: Phaser.AUTO.FIT,
    width: 800,
    height: 600,
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

