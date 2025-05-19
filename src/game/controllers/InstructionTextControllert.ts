import InstructionTextView from "../views/InstructionTextView";
import InstructionTextService from "../services/InstructionTextService";
import MainDeclare from "../Declares/MainDeclare";
export default class InstructionController{
    private scene: Phaser.Scene;
    private view: InstructionTextView;
    private declare: MainDeclare;
    private service: InstructionTextService;

    constructor(scene: Phaser.Scene, declare: MainDeclare){
        this.scene = scene;
        this.declare = declare;
        this.service = new InstructionTextService();
        this.initialText();
    };

    private initialText(){
        this.declare.instructionText = this.scene.add.text(512, 425, 'Pick a number to start.', {
            fontFamily: 'Arial',
            fontSize: '25px',
            align: 'center', 
            color: '#000'
        }).setOrigin(0.5, 0.5);
    }

    setFirstText(){
        this.declare.instructionText.setText(this.service.getText(0));
    }

    setSecondText(){
        this.declare.instructionText.setText(this.service.getText(1));
    }

    setThirdText(){
        this.declare.instructionText.setText(this.service.getText(2));
    }
}