export default class CircleView{
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene){
        this.scene = scene;
    }

    createCircle(color: string, positionX: number){
         const circle = this.scene.add.image(positionX, 0, `${color}`).setOrigin(0.5, 0.5);
         return circle;
    }
}