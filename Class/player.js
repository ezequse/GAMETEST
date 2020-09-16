class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture)

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        
        
        //Movimiento del player izquierda.
        config.scene.input.keyboard.on('keydown_A',this.Izquierda,this);
        config.scene.input.keyboard.on('keyup_A',this.Freno,this);  
        config.scene.input.keyboard.on('keydown_D',this.Derecha,this);  
        config.scene.input.keyboard.on('keyup_D',this.Freno,this);  
        
        this.setDisplaySize(75, 32);
    }
            
      
    Izquierda(){
        this.body.setVelocityX(-250);
    }
    
    Derecha(){
        this.body.setVelocityX(250);
    }

    Freno(){
        this.body.setVelocityX(0);
    }
    
    


}

