import MainDeclare from "../Declares/MainDeclare";
import DragNumberService from "../services/DragNumberSevice";
import InstructionController from "./InstructionTextControllert";
export default class DragController {
    private scene: Phaser.Scene;
    private declare: MainDeclare;
    private service: DragNumberService;
    private instructionController: InstructionController;

    constructor(scene: Phaser.Scene, declare: MainDeclare, instructionController: InstructionController) {
        this.scene = scene;
        this.declare = declare;
        this.service = new DragNumberService(this.scene, this.declare);
        this.instructionController = instructionController;
        this.intialDragAndDropEvent();
    }

    // Thiết lập sự kiện drag & drop
    intialDragAndDropEvent() {
        this.scene.input.on("dragstart", (pointer: any, gameObject: any) => {
            // Đưa object lên top layer khi drag
            this.scene.children.bringToTop(gameObject);
        });

        this.scene.input.on(
            "drag",
            (pointer: any, gameObject: any, dragX: number, dragY: number) => {
                gameObject.x = dragX;
                gameObject.y = dragY;
                this.declare.circlesContainer.bringToTop(gameObject);
            }
        );

        this.scene.input.on(
            "drop",
            (
                pointer: any,
                gameObject: any,
                dropZone: Phaser.GameObjects.Zone
            ) => {
                // Khi thả đúng vào dropZone, snap về giữa zone
                this.declare.trueAnswer = true;
                this.declare.checkID = dropZone.getData("id");
                const number = gameObject.getData("value");
                const wx = dropZone.getBounds().centerX;
                const wy = dropZone.getBounds().centerY;
                const localX = wx - this.declare.numberDragContainer.x;
                const localY = wy - this.declare.numberDragContainer.y;
                gameObject.x = localX;
                gameObject.y = localY - 10;
                this.checkAnswer(number);
            }
        );

        this.scene.input.on(
            "dragend",
            (pointer: any, gameObject: any, dropped: boolean) => {
                if (gameObject.getData("circle")) {
                    const container = this.declare.circlesContainer;
                    const gap = this.declare.gapOfCircles;

                    const oldIndex = gameObject.getData("index");
                    // Tính index mới dựa vào vị trí x
                    const localX = gameObject.x - container.x;
                    const rawIdx = localX/gap;
                    const maxIndex = this.declare.total - 1;
                    const newIndex = Phaser.Math.Clamp(Math.round(rawIdx), 0, maxIndex);
                    if (newIndex !== oldIndex) {
                        // Xóa khỏi mảng cũ, chèn vào vị trí mới
                        container.remove(gameObject);
                        container.addAt(
                            gameObject,
                            newIndex
                        );
                        container.list.forEach((ci, i) => ci.setData('index', i))
                    }
                    container.list.forEach(
                            (gameObject) => {
                                const index = gameObject.getData('index');
                                const tx = this.declare.gapOfCircles * index;
                                this.scene.tweens.add({
                                    targets: gameObject,
                                    x: tx,
                                    y: 0,
                                    duration: 200,
                                });
                            }
                        );
                        return;
                }
                if (!dropped || !this.declare.trueAnswer) {
                    // Nếu không thả lên zone nào, trả về vị trí gốc
                    this.scene.tweens.add({
                        targets: gameObject,
                        x: gameObject.getData("StartX"),
                        y: gameObject.getData("StartY"),
                        duration: 300,
                        ease: "Linear",
                    });
                } else {
                    const value = gameObject.getData("value");
                    gameObject.disableInteractive(); // không kéo lại
                    this.declare.destroyedList.push(gameObject);
                    this.declare.countPlaced += 1;
                    this.service.createDragNumber(
                        value,
                        gameObject.getData("StartX")
                    );
                }
                if(this.declare.countPlaced === 3){
                    this.instructionController.setThirdText();
                    this.declare.buttonsContainer.setVisible(true);
                    this.declare.countPlaced = 0;
                }
            }
        );
    }
    checkAnswer(number: number) {
        if (this.declare.checkID === "underline3") {
            if (number !== this.declare.total) {
                this.declare.trueAnswer = false;
                console.log("false");
            }
        } else {
            if (!this.declare.Answers.includes(number)) {
                this.declare.trueAnswer = false;
                console.log("false");
            } else {
                const id = this.declare.Answers.indexOf(number);
                if (id !== -1) {
                    this.declare.Answers.splice(id, 1);
                }
            }
        }
    }
}
