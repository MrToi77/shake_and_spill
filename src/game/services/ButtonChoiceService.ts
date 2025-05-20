import MainDeclare from "../Declares/MainDeclare";
import ButtonChoiceDTO from "../DTOs/ButtonChoiceDTO";
import AnimationController from "../controllers/AnimationController";
export default class ButtonChoiceService {
    private declare: MainDeclare;
    private scene: Phaser.Scene;
    private AnimController: AnimationController;
    constructor(scene: Phaser.Scene, declare: MainDeclare, AnimController: AnimationController) {
        this.scene = scene;
        this.declare = declare;
        this.AnimController = AnimController;
        this.createChoiceButtons();
    }

    // ... giữ nguyên import và class như cũ ...

private createChoiceButtons() {

    const spaceX = 85;
    const n = this.declare.amountOfChoice;

    // Tính tổng khoảng cách giữa nút trái nhất và phải nhất
    const totalWidth = (n - 1) * spaceX;
    // Offset để căn giữa: bắt đầu vẽ từ bên trái dịch vào nửa tổng
    const startX = (this.scene.scale.width - totalWidth) / 2;

    this.declare.buttonsContainer = this.scene.add.container(startX, 350);

    [1,2,3,4,5,6,7,8,9,10].forEach((num, idx) => {
        const value     = num;
        const positionX = idx * spaceX;
        const positionY = 0;

        // Tạo text + frame
        const text  = this.scene.add.text(0, 0, `${value}`, {
                        fontSize: "30px",
                        fontStyle: "bold",
                        color: "#000",
                        fontFamily: "Arial",
                        align: "center",
                    })
                    .setOrigin(0.5)
                    .setDepth(1)
                    .setResolution(2);

        const frame = this.scene.add.image(0, 0, 'buttonFrame')
                        .setScale(0.35)
                        .setOrigin(0.5)
                        .setDepth(0);

        // Container cho từng button
        const btn = this.scene.add.container(positionX, positionY);
        btn.add([ frame, text ]);

        // Dùng kích thước frame đã scale để set hit‑area
        const w = frame.displayWidth;
        const h = frame.displayHeight;
        btn.setSize(w, h)
           .setInteractive();  // Phaser dùng hit‑area vừa setSize

        // Events hover & click
        btn.setData("value", value);
        btn.on("pointerover",  () => this.scene.input.setDefaultCursor("pointer"));
        btn.on("pointerout",   () => this.scene.input.setDefaultCursor("default"));
        btn.on("pointerdown",  () => {
            this.declare.buttonsContainer.setVisible(false);
            this.declare.total = btn.getData('value');
            this.declare.destroyedList.forEach((object) => {
                        object.destroy();
                    });
            this.declare.circlesContainer.removeAll(true);
            this.declare.equationContainer.setVisible(false);
            this.declare.numberDragContainer.setVisible(false);
            this.declare.numberNonDragContainer.setVisible(false);
            this.AnimController.playAnims();
        });


        // Thêm vào container chính
        this.declare.buttonsContainer.add(btn);
    });
}

}
