import MainDeclare from "../Declares/MainDeclare";
import DragTextView from "../views/DragTextView";
export default class DragNumberService {
    private scene: Phaser.Scene;
    private declare: MainDeclare;
    private view: DragTextView;

    constructor(scene: Phaser.Scene, declare: MainDeclare) {
        this.scene = scene;
        this.declare = declare;
        this.view = new DragTextView(this.scene);
        this.createDragNumbers();
        this.createNonDragNumbers();
    }

    public createDragNumber(num: number, positionX: number) {
        const txt = this.view.drawNumber(num);
        txt.setInteractive({ draggable: true, useHandCursor: true });
        txt.on("pointerover", () =>
            this.scene.input.setDefaultCursor("pointer")
        );
        txt.on("pointerout", () =>
            this.scene.input.setDefaultCursor("default")
        );

        txt.x = positionX;
        txt.y = 0;
        // Lưu số để kiểm tra sau này nếu cần
        txt.setData("StartX", txt.x);
        txt.setData("StartY", txt.y);
        txt.setData("value", num);
        this.declare.numberDragContainer.add(txt);
    }
    private createDragNumbers() {
        // Tạo container cho các số , để kéo thả
        this.declare.numberDragContainer = this.scene.add.container(512, 740);
        const spaceNum = 70;
        const startNumX = (-(this.declare.numbers.length - 1) * spaceNum) / 2;

        this.declare.numbers.forEach((num, idx) => {
            const txt = this.view.drawNumber(num);
            // Cho phép kéo
            txt.setInteractive({ draggable: true, useHandCursor: true });
            txt.on("pointerover", () =>
                this.scene.input.setDefaultCursor("pointer")
            );
            txt.on("pointerout", () =>
                this.scene.input.setDefaultCursor("default")
            );
            txt.x = startNumX + idx * spaceNum;
            txt.y = 0;

            // Lưu số để kiểm tra sau này nếu cần
            txt.setData("StartX", txt.x);
            txt.setData("StartY", txt.y);
            txt.setData("value", num);
            this.declare.numberDragContainer.add(txt);
            this.declare.numberDragContainer.setVisible(false);
        });
    }

    private createNonDragNumbers() {
        // Tạo container cho các số , để kéo thả
        this.declare.numberNonDragContainer = this.scene.add.container(
            512,
            740
        );
        const spaceNum = 70;
        const startNumX = (-(this.declare.numbers.length - 1) * spaceNum) / 2;

        this.declare.numbers.forEach((num, idx) => {
            const txt = this.view.drawNumber(num);
            txt.x = startNumX + idx * spaceNum;
            txt.y = 0;
            this.declare.numberNonDragContainer.add(txt);
            this.declare.numberNonDragContainer.setVisible(false);
        });
    }
}
