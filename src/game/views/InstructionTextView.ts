export default class InstructionTextView{
    private scene: Phaser.Scene;
    private text: Phaser.GameObjects.Text;
    constructor(scene: Phaser.Scene, text: Phaser.GameObjects.Text, positionX: number, positionY: number, initialText: string) {
        this.scene = scene;
        this.text = text;
        this.initialText(this.text, positionX, positionY, initialText);
    }

    private initialText(text: Phaser.GameObjects.Text, positionX: number, positionY: number, initialText: string){
        this.text = this.scene.add.text(positionX, positionY, initialText, {
            fontFamily: 'Arial',
            fontSize: '25px',
            align: 'center', 
            color: '#000'
        }).setOrigin(0.5, 0.5);
    }
}