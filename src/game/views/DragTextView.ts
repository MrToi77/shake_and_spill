export default class DragTextView{
    private scene: Phaser.Scene;
    constructor(scene: Phaser.Scene){
        this.scene = scene;
    }

    public drawNumber(number: number){
        const numb = this.scene.add.text(0, 0, `${number}`,{
            fontFamily: 'Arial',
            fontSize: '70px',
            fontStyle: 'bolder',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        return numb;
    }
}