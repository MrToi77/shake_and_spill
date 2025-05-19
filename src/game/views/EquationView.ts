export default class EquationView{
    private scene: Phaser.Scene;
    constructor(scene: Phaser.Scene){
        this.scene = scene;
    }
    public draw(text: string){
        const draw = this.scene.add.text(0, 0, `${text}`, {
            fontFamily: 'Arial',
            fontSize: '60px',
            fontStyle: 'bold',
            align: 'center',
            color:      "#000"
        }).setOrigin(0.5, 0);
        return draw;
    }
}