import MainDeclare from "../Declares/MainDeclare";
import EquationView from "../views/EquationView";
export default class EquationService {
    private scene: Phaser.Scene;
    private declare: MainDeclare;
    private view: EquationView;
    constructor(scene: Phaser.Scene, declare: MainDeclare) {
        this.scene = scene;
        this.declare = declare;
        this.view = new EquationView(this.scene);
        this.createEquation();
    }

    private createEquation() {
        console.log("running");
        this.declare.equationContainer = this.scene.add.container(512, 580);

        // Danh sách các “node” cần vẽ, có thể mở rộng tuỳ ý
        const spaceX = 150; // khoảng cách giữa tâm hai phần tử
        const n = this.declare.elements.length;
        const totalWidth = (n - 1) * spaceX;
        const startX = -totalWidth / 2;

        // Tạo từng container con và add vào equationContainer
        for (let i = 0; i < n; i++) {
            const el = this.declare.elements[i];
            const posX = startX + i * spaceX;
            const posY = 20;

            // Tạo một container nhỏ chứa chữ hoặc gạch
            const node = this.scene.add.container(posX, posY);
            // this.view.draw(key)
            const graphic = this.view.draw(el.key);
            node.add([graphic]);

            // Bạn có thể setSize / setInteractive nếu muốn tương tác với từng ô
            // const w = graphic.displayWidth, h = graphic.displayHeight;
            // node.setSize(w, h).setInteractive();

            this.declare.equationContainer.add(node);
            if (el.key.startsWith("_")) {
                const bounds = graphic.getBounds();
                const pad = 20; // <— khoảng mở rộng thêm

                // Tạo zone lớn hơn
                const zone = this.scene.add
                    .zone(
                        posX,
                        50,
                        bounds.width + pad * 2,
                        bounds.height + pad * 2
                    )
                    .setOrigin(0.5)
                    .setRectangleDropZone(
                        bounds.width + pad * 2,
                        bounds.height + pad * 2
                    ).setData('id', el.id);
                
                this.declare.equationContainer.add(zone);
                this.declare.dropZones.push(zone);
                this.declare.equationContainer.setVisible(false);

                // // Debug: vẽ khung đỏ lớn hơn
                // const debugGfx = this.scene.add.graphics();
                // debugGfx.lineStyle(2, 0xff0000);
                // debugGfx.strokeRect(
                //     posX - (bounds.width + pad * 2) / 2,
                //     50 - (bounds.height + pad * 2) / 2,
                //     bounds.width + pad * 2,
                //     bounds.height + pad * 2
                // );
                // this.declare.equationContainer.add(debugGfx);
            }
        }
    }
}
