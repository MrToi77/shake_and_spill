import EquationService from "../services/EquationService";
import MainDeclare from "../Declares/MainDeclare";
export default class EquationController{
    private service: EquationService;
    private declare: MainDeclare;
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, declare: MainDeclare){
        this.scene = scene;
        this.declare = declare;
        this.service = new EquationService(this.scene, this.declare);
    }

    
}