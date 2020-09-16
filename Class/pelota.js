class Pelota extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture)
        
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        
        
        //Movimiento del player izquierda.
        config.scene.input.keyboard.on('keyup_SPACE',this.Arranque,this);
        this.setDisplaySize(20, 20);
    }
    
    Arranque(){
        if (f == 1){
        this.body.setVelocity(50, -200);
        f = 2;
        }
    }
}