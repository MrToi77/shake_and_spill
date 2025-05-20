import CircleView from "../views/CircleView";
import MainDeclare from "../Declares/MainDeclare";
export default class CircleService {
    private scene: Phaser.Scene;
    private view: CircleView;
    private declare: MainDeclare;

    constructor(scene: Phaser.Scene, declare: MainDeclare) {
        this.scene = scene;
        this.view = new CircleView(this.scene);
        this.declare = declare;
        this.declare.circlesContainer = this.scene.add.container(0, 0);
    }

    makeShuffledBooleanArray(quantity1: number, quantity2: number): boolean[] {
        // 1) Tạo mảng [true, true, …, false, false, …]
        const arr = [
            ...Array(quantity1).fill(true),
            ...Array(quantity2).fill(false),
        ];

        // 2) Xáo mảng bằng Fisher–Yates (Phaser util)
        Phaser.Utils.Array.Shuffle(arr);

        return arr;
    }

    randomQuantity(total: number) {
        const quantity1 = Math.floor(Math.random() * (total));

        const quantity2 = total - quantity1;

        return [quantity1, quantity2];
    }

    createCircle(total: number) {
        const spaceX = 75;
        this.declare.gapOfCircles = spaceX; // khoảng cách giữa tâm hai phần tử
        const n = total;
        const totalWidth = (n - 1) * spaceX;
        const startX = (this.scene.scale.width - totalWidth) / 2;
        this.declare.circlesContainer.setPosition(startX, 500);
        this.declare.StartX = startX;

        const [quantity1, quantity2] = this.randomQuantity(total);
        const shuffled = this.makeShuffledBooleanArray(quantity1, quantity2);
        this.declare.Answers = [quantity1, quantity2];
        let index = 0;
        let color: string;
        const length = shuffled.length;
        for (let i = 0; i < length; i++) {
            const posX = i * spaceX;
            if(shuffled[i]){
                color = 'red';
            }else{
                color = 'yellow';
            }
            const circle = this.view.createCircle(color, posX);
            this.declare.positionOfCircles.push(
                new Phaser.Math.Vector2(posX, 0)
            );
            circle.setData("index", i);
            circle.setData("circle", true);
            circle.setInteractive({ draggable: true, useHandCursor: true });
            circle.on("pointerover", () =>
                this.scene.input.setDefaultCursor("pointer")
            );
            circle.on("pointerout", () =>
                this.scene.input.setDefaultCursor("default")
            );
            circle.setData("StartX", posX);
            circle.setData("StartY", 0);
            this.declare.circlesContainer.add([circle]);
        }
    }
}
