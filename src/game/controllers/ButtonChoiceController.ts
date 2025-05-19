import MainDeclare from "../Declares/MainDeclare";
import ButtonChoiceService from "../services/ButtonChoiceService";
import AnimationController from "./AnimationController";
export default class ButtonChoiceController{
    private scene: Phaser.Scene;
    private declare: MainDeclare;
    private service: ButtonChoiceService;

    constructor(scene: Phaser.Scene, declare: MainDeclare, AnimController: AnimationController){
        this.scene = scene;
        this.declare = declare;
        this.service = new ButtonChoiceService(this.scene, this.declare, AnimController);
    }

}