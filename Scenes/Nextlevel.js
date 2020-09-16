class Nextlevel extends Phaser.Scene {
    constructor() {
      super('nextlevel');
    }

    preload(){

    }

    create(){
       var gameover = this.add.text(25, 75, "¡FELICIDADES!", {fontSize: '64px', color: "#f2132d"});
       var reintentar = this.add.text(25, 400, "Pasando al proximo nivel..", {fontSize: '25px', color: "#f2132d"}); 
       var wait = this.time.addEvent({ delay: 3500, callback: carga, callbackScope: this, loop: false });
    function carga(){
        this.scene.stop();
        this.scene.launch('intermedio');
    }
    }

    update(){

    }
}