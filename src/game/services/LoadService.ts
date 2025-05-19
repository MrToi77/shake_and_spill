export default class LoadService{
    private scene: Phaser.Scene;
    constructor(scene: Phaser.Scene){
        this.scene = scene;
        this.preload();
    }

    private preload(){
        this.scene.load.image('background', 'assets/background.png');
        this.scene.load.image('equation', 'assets/equation.png');
        this.scene.load.spritesheet('belt', 'assets/belt.png', {
            frameWidth: 148,
            frameHeight: 82,
        });
        this.scene.load.spritesheet('blow', 'assets/blow.png', {
            frameWidth: 66,
            frameHeight: 52
        });
        this.scene.load.spritesheet('clock', 'assets/clock.png', {
            frameWidth: 90,
            frameHeight: 49
        });
        this.scene.load.spritesheet('lever', 'assets/lever.png', {
            frameWidth: 80,
            frameHeight: 87,
        });
        this.scene.load.spritesheet('arrow', 'assets/arrow.png', {
            frameWidth: 40,
            frameHeight: 30,
        });
        this.scene.load.spritesheet('duck', 'assets/duck.png', {
            frameWidth: 102,
            frameHeight: 101,
        });
        this.scene.load.spritesheet('energy', 'assets/energy.png', {
            frameWidth: 84,
            frameHeight: 50,
        });
        this.scene.load.spritesheet('equalizer_display', 'assets/equalizer_display.png', {
            frameWidth: 112,
            frameHeight: 34,
        });
        this.scene.load.spritesheet('emotion', 'assets/emotion.png', {
            frameWidth: 104,
            frameHeight: 40,
        });
        this.scene.load.spritesheet('tv_display', 'assets/tv.png', {
            frameWidth: 76,
            frameHeight: 55,
        });
        this.scene.load.spritesheet('geometry', 'assets/star.png', {
            frameWidth: 46,
            frameHeight: 42,
        });
        this.scene.load.spritesheet('engine', 'assets/engine.png', {
            frameWidth: 80,
            frameHeight: 86,
        });
        this.scene.load.spritesheet('pink_tube', 'assets/pink_tube.png', {
            frameWidth: 100,
            frameHeight: 69,
        });
        this.scene.load.spritesheet('plant', 'assets/plant.png', {
            frameWidth: 122,
            frameHeight: 129,
        });
        this.scene.load.spritesheet('red_button', 'assets/tab.png', {
            frameWidth: 58,
            frameHeight: 53,
        });
        this.scene.load.spritesheet('paper', 'assets/paper.png', {
            frameWidth: 79,
            frameHeight: 68,
        });
        this.scene.load.spritesheet('hi_five', 'assets/hand.png', {
            frameWidth: 103,
            frameHeight: 132,
        });
        this.scene.load.spritesheet('spiral', 'assets/spiral.png', {
            frameWidth: 84,
            frameHeight: 85,
        });
        this.scene.load.spritesheet('fan', 'assets/fan.png', {
            frameWidth: 54,
            frameHeight: 50,
        });
        this.scene.load.spritesheet('cup', 'assets/cup.png', {
            frameWidth: 270,
            frameHeight: 275,
        });
        this.scene.load.image('buttonFrame', 'assets/button_choice.png');

        this.scene.load.image('red', 'assets/obstacle1.png');
        
        this.scene.load.image('yellow', 'assets/obstacle2.png');
    }
}