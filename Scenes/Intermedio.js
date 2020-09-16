class Intermedio extends Phaser.Scene {
    constructor() {
      super('intermedio');
    }

    preload(){

    }

    create(){
       var gameover = this.add.text(25, 75, "¡YA NO TE QUEDAN VIDAS!", {fontSize: '64px', color: "#f2132d"});
       var reintentar = this.add.text(25, 400, "Presiona para volver a intentarlo", {fontSize: '25px', color: "#f2132d"});
       var f = 1;
       reintentar.setInteractive();
       reintentar.on("pointerdown", () => {
        this.scene.stop();
        this.scene.launch('lvl1');
        puntos = 0;
        f = 1;
    });


    }

    update(){

    }
}