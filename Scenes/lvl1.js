class lvl1 extends Phaser.Scene {
    constructor() {
      super('lvl1');
    }
    
    preload (){
      this.load.image('jugador', 'assets/Defensorquieto.png');
      this.load.image('pelota', 'assets/pelota.png');
      
      this.load.image('corazon', 'assets/assetsseparados/heart.png');
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
      
        alert("NOTA IMPORTANTE: EN ESTE NIVEL CADA BLOQUE CUENTA CON SUS RESPECTIVAS COLISIONES.")
        var mapa = this.make.tilemap({key:'nivel2'});
        var tileset = mapa.addTilesetImage('default_name', 'tiles');
        var background = mapa.createDynamicLayer('background', tileset, 0 ,0);
        var solidos = mapa.createDynamicLayer('solidos', tileset,0, 0);
        var rompibles = mapa.createDynamicLayer('rompibles', tileset, 0, 0);
        let pelota = new Pelota({scene:this,x:400,y:400, texture:'pelota'});
        //var player = this.physics.add.sprite(400,445, 'asset', 'Defensorquieto.png').setDisplaySize(75, 32);
        let player = new Player({scene:this,x:400,y:445, texture:'jugador'});
        var vida = 4;
        var heart = this.add.image(26 ,560, 'corazon').setScale(0.1);
        var heart2 = this.add.image(55 ,560, 'corazon').setScale(0.1);
        var heart3 = this.add.image(84 ,560, 'corazon').setScale(0.1);
        solidos.setCollisionByExclusion([-1]);
        //rompibles.setCollisionByExclusion([-1]);
        this.physics.add.collider(player, pelota);
        //this.physics.add.collider(rompibles, pelota);
        player.body.setImmovable(true);
        player.body.setCollideWorldBounds(true);
        pelota.body.setCollideWorldBounds(true);
        pelota.body.setBounce(1);
        rompibles.setCollisionBetween(10, 25);
        


        var puntosTxt = this.add.text(15, 490, 'Puntos: ' + puntos, {fill: '#ffffff' });
        var Vidatxt = this.add.text(15, 520, 'Vida: ', {fill: '#ffffff' });
        var controls = this.add.text(345, 520, '<= A - D => ', {fill: '#ffffff' });
        var controls2 = this.add.text(295, 560, 'ESPACIO PARA COMENZAR.. ', {fill: '#ffffff' });



        //Arranca movimiento de pelota.
        
          pelota.body.setVelocity(0, 0);

          rompibles.setTileIndexCallback(10, choque, this);
          rompibles.setTileIndexCallback(15, choque, this);
          rompibles.setTileIndexCallback(20, choque, this);
          rompibles.setTileIndexCallback(21, choque, this);
          rompibles.setTileIndexCallback(22, choque, this);
          rompibles.setTileIndexCallback(23, choque, this);
          background.setTileIndexCallback(18, reinicio, this);
          
          this.physics.add.collider(solidos, pelota);
          this.physics.add.collider(pelota, background);
          this.physics.add.collider(rompibles, pelota);
          
          
         

          function choque (sprite, tile)
          {
            puntos +=10;
            if (puntos == 600){
              this.scene.stop();
              this.scene.launch('lvl2');
              f = 1;
              }
            puntosTxt.setText('Puntos: ' + puntos);
            console.log(puntos);
            rompibles.removeTileAt(tile.x, tile.y);
           }
      
          
      
          function perdiste(){
            vida = 4;
            f = 1;
            this.scene.stop();
            this.scene.launch('intermedio');
          }
              function reinicio (sprite, tile){
             f = 1;
              pelota.x = 400;
             pelota.y = 400;
            pelota.body.setVelocity(0, 0);
            heart3.destroy();
            vida --;
            if (vida == 3){
              heart3.destroy();
            } else if (vida == 1){
              heart2.destroy();
            } else if (vida == 0){
              heart.destroy();
              this.cameras.main.fadeOut(1500);
              var gameover = this.time.addEvent({ delay: 1500, callback: perdiste, callbackScope: this, loop: false });
            }
        
         
        //var win = this.time.addEvent({ delay: 1, callback: ganaste, callbackScope: this, loop: true });
      
  
      }
      
    }
    
      
       update() {
      


       }

    }

