import MainDeclare from "../Declares/MainDeclare";
import CircleService from "../services/CircleService";
import InstructionController from "./InstructionTextControllert";
export default class AnimationController {
    private declare: MainDeclare;
    private scene: Phaser.Scene;
    private circleService: CircleService;
    private instructionController: InstructionController;
    constructor(scene: Phaser.Scene, declare: MainDeclare, instructionController: InstructionController) {
        this.declare = declare;
        this.scene = scene;
        this.circleService = new CircleService(this.scene, this.declare);
        this.instructionController = instructionController;
    }

    playAnims() {
        this.instructionController.setFirstText();
        this.declare.energy.play("energy-anim");
        this.declare.energy.once("animationcomplete", () => {
            this.declare.equalizer_display.play('equalizer_display-anim');
            this.declare.duck.play('duck-anim');
            this.declare.duck.once('animationcomplete', () => {
                this.declare.pink_tube.play('pink_tube-anim');
                this.declare.fan.play('fan-anim');
                this.declare.clock.play('clock-anim');
                this.declare.clock.once('animationcomplete', () => {
                    this.declare.engine.play('engine-anim');
                    this.declare.engine.once('animationcomplete', () => {
                        this.declare.tv_display.play('tv_display-anim');
                        this.declare.geometry.play('geometry-anim');
                        this.declare.plant.play('plant-anim');
                        this.declare.arrow.play('arrow-anim');
                        this.declare.geometry.once('animationcomplete', () => {
                            this.declare.blow.play('blow-anim');
                            this.declare.paper.play('paper-anim');
                            this.declare.red_button.play('red_button-anim');
                            this.declare.red_button.once('animationcomplete', () => {
                                this.declare.spiral.play('spiral-anim');
                                this.declare.hi_five.play('hi_five-anim');
                                this.declare.emotion.play('emotion-anim');
                                this.declare.emotion.once('animationcomplete', () => {
                                    this.declare.belt.play('belt-anim');
                                    this.declare.cup.play('cup-anim');
                                    this.declare.lever.play('lever-anim');
                                    this.declare.cup.once('animationcomplete', () => {
                                        this.circleService.createCircle(this.declare.total);
                                        this.instructionController.setSecondText();
                                        this.declare.circlesContainer.setVisible(true);
                                        this.declare.equationContainer.setVisible(true);
                                        this.declare.numberDragContainer.setVisible(true);
                                        this.declare.numberNonDragContainer.setVisible(true);
                                    })
                                })
                            })
                        })
                    })
                })
            });
                
        });
    }
}
