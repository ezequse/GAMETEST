class Teaser extends Phaser.Scene {
  constructor() {
    super('teaser');
  }

  preload ()
  {   
    this.load.atlas('asset',
    'Atlas/prueba.png',
    'Atlas/prueba.json'); 
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");
    var uno = this.add.sprite(200,250, 'asset', 'one.png').setDisplaySize(128, 128);
    var dos = this.add.sprite(600,250, 'asset', 'two.png').setDisplaySize(128, 128);
    this.add.text(25, 75, "SELECCIONA TU NIVEL", {fontSize: '64px', color: "#f2132d"});
    this.add.text(25, 400, "Utiliza A y D para ir de izquierda a derecha", {fontSize: '25px', color: "#f2132d"});
    this.add.text(25, 450, "Alpha 1.0", {fontSize: '25px', color: "#f2132d"});
    var escena = 1;
      uno.setInteractive();
      uno.on("pointerdown", () => {
        escena = 1;
        this.scene.start('lvl1');
      });
      dos.setInteractive();
      dos.on("pointerdown", () => {
        escena = 2;
        this.scene.start('lvl2');
        
      }); 

    }

  update() {
    
  }  
  
}