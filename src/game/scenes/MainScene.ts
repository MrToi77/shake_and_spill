import MainDeclare from "../Declares/MainDeclare";
import ButtonChoiceController from "../controllers/ButtonChoiceController";
import LoadService from "../services/LoadService";
import AnimationService from "../services/AnimationService";
import EquationController from "../controllers/EquationController";
import DragController from "../controllers/DragController";
import CircleService from "../services/CircleService";
import InstructionController from "../controllers/InstructionTextControllert";
import AnimationController from "../controllers/AnimationController";
export default class MainScene extends Phaser.Scene{
    private declare : MainDeclare;
    constructor() {
        super('MainScene');
        this.declare = new MainDeclare();
    }

    preload(){
        const loadService = new LoadService(this);
    }

    create(){

        // const equation = this.add.image(512, 600, 'equation');

        const Anims = new AnimationService(this, this.declare);

        const instructionTextController = new InstructionController(this, this.declare);

        const animationController = new AnimationController(this, this.declare, instructionTextController);

        const ButtonController = new ButtonChoiceController(this, this.declare, animationController);

        const equation = new EquationController(this, this.declare);

        const dragNumberController = new DragController(this, this.declare, instructionTextController);


    }
}