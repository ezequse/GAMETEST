class Inicio extends Phaser.Scene {
    constructor() {
      super('inicio');
    }
    init(data){
      this.data.set('escena', data);
    }
    preload (){
      this.load.atlas('asset',
        'Atlas/prueba.png',
        'Atlas/prueba.json');
      this.load.tilemapTiledJSON('nivel1', 'Maps/nivel1.json');
      this.load.tilemapTiledJSON('nivel2', 'Maps/nivel2.json');
      this.load.image('tiles', 'Maps/default_name.png');
      this.textures.addSpriteSheetFromAtlas("Defensorizquierda", {frameHeight: 32, frameWidth: 32, atlas: "prueba", frame: "Defensorizquierda"});
      console.log(this.textures.list);
      this.anims.create({
        key: "A",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("Defensorizquierda",{
          frames: [17, 16, 15, 14]
        })
      })
    }

    create() {
      var cursors = this.input.keyboard.createCursorKeys(); 
      
      
      
      var escena = this.data.get('escena');

      if (escena != 2){
        alert("NOTA IMPORTANTE: EN ESTE NIVEL LOS BLOQUES ROMPIBLES NO TENDRAN COLISIONES, SOLO LOS BLOQUES SOLIDOS, CON EL FIN DE QUE SE VEA EL MOVIMIENTO DE LA PELOTA.");
        var mapa = this.make.tilemap({key:'nivel1'});
        var tileset = mapa.addTilesetImage('default_name', 'tiles');
        var background = mapa.createDynamicLayer('background', tileset, 0 ,0);
        var solidos = mapa.createDynamicLayer('solidos', tileset,0, 0);
        var rompibles = mapa.createDynamicLayer('rompibles', tileset, 0, 0);
        var pelota = this.physics.add.sprite(100,200, 'asset', 'pelota.png').setDisplaySize(20, 20);
        var player = this.physics.add.sprite(400,445, 'asset', 'Defensorquieto.png').setDisplaySize(75, 32);
        solidos.setCollisionByExclusion([-1]);
        
        //this.physics.add.collider(pelota, solidos);
        
        
        this.physics.add.collider(player, pelota);
        this.physics.add.collider(rompibles, pelota);
        player.setImmovable(true);
        player.setCollideWorldBounds(true);
        pelota.setCollideWorldBounds(true);
        pelota.setBounce(1);
        //Arranca movimiento de pelota.
        pelota.setVelocity(120, 120);
        this.physics.add.collider(solidos, pelota);
  
        //Movimiento del player izquierda.
        this.input.keyboard.on('keydown_A', function (event) {
          player.body.setVelocityX(-250);
          
          
      });
  
        // Se para el movimiento.
        this.input.keyboard.on('keyup_A', function (event) {
          player.body.setVelocityX(0);
          
      });
        
        
      //Movimiento del player derecha.
      this.input.keyboard.on('keydown_D', function (event) {
        player.body.setVelocityX(250);
        
    });
  
      // Se para el movimiento.
      this.input.keyboard.on('keyup_D', function (event) {
        player.body.setVelocityX(0);
        
    });
      } else {
        alert("NOTA IMPORTANTE: EN ESTE NIVEL CADA BLOQUE CUENTA CON SUS RESPECTIVAS COLISIONES.")
        var mapa = this.make.tilemap({key:'nivel2'});
        var tileset = mapa.addTilesetImage('default_name', 'tiles');
        var background = mapa.createDynamicLayer('background', tileset, 0 ,0);
        var solidos = mapa.createDynamicLayer('solidos', tileset,0, 0);
        var rompibles = mapa.createDynamicLayer('rompibles', tileset, 0, 0);
        var pelota = this.physics.add.sprite(100,200, 'asset', 'pelota.png').setDisplaySize(20, 20);
        var player = this.physics.add.sprite(400,445, 'asset', 'Defensorquieto.png').setDisplaySize(75, 32);
        solidos.setCollisionByExclusion([-1]);
        rompibles.setCollisionByExclusion([-1]);
        this.physics.add.collider(player, pelota);
        this.physics.add.collider(rompibles, pelota);
        player.setImmovable(true);
        player.setCollideWorldBounds(true);
        pelota.setCollideWorldBounds(true);
        pelota.setBounce(1);
        //Arranca movimiento de pelota.
        
          pelota.setVelocity(120, 120);
          
          
          this.physics.add.collider(solidos, pelota);
    
          //Movimiento del player izquierda.
          this.input.keyboard.on('keydown_A', function (event) {
            player.body.setVelocityX(-250);
            
            
        });
    
          // Se para el movimiento.
          this.input.keyboard.on('keyup_A', function (event) {
            player.body.setVelocityX(0);
            
        });
          
          
        //Movimiento del player derecha.
        this.input.keyboard.on('keydown_D', function (event) {
          player.body.setVelocityX(250);
          
      });
    
        // Se para el movimiento.
        this.input.keyboard.on('keyup_D', function (event) {
          player.body.setVelocityX(0);
          
      });
      }


      
     
    }
      
       update() {
      


       }

    }

