export default class ButtonChoiceView{
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene){
        this.scene = scene;
    }

    public createButtonChoiceView(){
        // const text = this.scene.add.text(0, 0, `${value}`,{
        //     fontSize: '20px',
        //     fontStyle: 'bold',
        //     color: '#000',
        //     fontFamily: 'Arial',
        // }).setOrigin(0.5, 0.5).setDepth(1);

        const frame = this.scene.add.image(0, 0, 'buttonFrame').setScale(0.3).setDepth(0).setOrigin(0.5);

        return frame;
    }
}