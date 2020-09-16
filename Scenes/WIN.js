class WIN extends Phaser.Scene {
  constructor() {
    super('win');
  }

  preload(){

  }

  create(){
     var gameover = this.add.text(25, 75, "¡HAS GANADO! CLICK PARA REINICIAR", {fontSize: '32px', color: "#f2132d"});
     var f = 1;
     gameover.setInteractive();
     gameover.on("pointerdown", () => {
      this.scene.stop();
      this.scene.launch('teaser');
      puntos = 0;
      f = 1;
  });


  }

  update(){

  }
}