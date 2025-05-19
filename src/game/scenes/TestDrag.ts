// export default class DragAndSnapScene extends Phaser.Scene {
//   private numbersContainer!: Phaser.GameObjects.Container;
//   private equationContainer!: Phaser.GameObjects.Container;
//   private dropZones: Phaser.GameObjects.Zone[] = [];

//   constructor(){
//     super("TestDrag");
//   }

//   preload() {
//     // Nếu có assets nào cần load (font custom, hình frame, v.v.) thì load ở đây
//   }

//   create() {
//     // 1. Tạo vùng chứa equation (gồm gạch chân và vùng thả)
//     this.equationContainer = this.add.container(512, 400);
//     const elements = ["_____", "+", "_____", "=", "_____"];
//     const spaceX   = 120;
//     const n        = elements.length;
//     const totalW   = (n - 1) * spaceX;
//     const startX   = - totalW / 2;

//     for (let i = 0; i < n; i++) {
//       const key  = elements[i];
//       const posX = startX + i * spaceX;

//       // 1a: Vẽ gạch hoặc ký hiệu
//       const graphic = this.add.text(0, 0, key, {
//         fontFamily: "Arial", fontSize: "40px", color: "#000", fontStyle: "bold",
//       }).setOrigin(0.5);
//       const holder = this.add.container(posX, 0).add(graphic);
//       this.equationContainer.add(holder);

//       // 1b: Nếu đây là gạch chân (ký tự '_'), tạo drop zone phía trên nó
//       if (key.startsWith("_")) {
//   const bounds = graphic.getBounds();
//   const pad    = 20;  // <— khoảng mở rộng thêm

//   // Tạo zone lớn hơn
//   const zone = this.add.zone(posX, 0,
//     bounds.width  + pad * 2,
//     bounds.height + pad * 2
//   )
//   .setOrigin(0.5)
//   .setRectangleDropZone(
//     bounds.width  + pad * 2,
//     bounds.height + pad * 2
//   );

//   this.equationContainer.add(zone);
//   this.dropZones.push(zone);

//   // Debug: vẽ khung đỏ lớn hơn
//   const debugGfx = this.add.graphics();
//   debugGfx.lineStyle(2, 0xff0000);
//   debugGfx.strokeRect(
//     posX - (bounds.width  + pad * 2) / 2,
//     0    - (bounds.height + pad * 2) / 2,
//     bounds.width  + pad * 2,
//     bounds.height + pad * 2
//   );
//   this.equationContainer.add(debugGfx);
// }
//     }

//     // Tạo container cho các số , để kéo thả
//     this.numbersContainer = this.add.container(512, 100);
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // ví dụ: 3 số cần điền vào 3 gạch chân
//     const spaceNum = 100;
//     const startNumX = - (numbers.length - 1) * spaceNum / 2;

//     numbers.forEach((num, idx) => {
//       const txt = this.add.text(0, 0, num.toString(), {
//         fontFamily: "Arial", fontSize: "36px", color: "#0066cc", fontStyle: "bold",
//       }).setOrigin(0.5);
//       // Cho phép kéo
//       txt.setInteractive({ draggable: true });
//       this.numbersContainer.add(txt);
//       txt.x = startNumX + idx * spaceNum;
//       txt.y = 0;

//       // Lưu số để kiểm tra sau này nếu cần
//       txt.setData('StartX', txt.x);
//       txt.setData('StartY', txt.y);
//       txt.setData("value", num);
//     });

//     // Thiết lập sự kiện drag & drop
//     this.input.on("dragstart", (pointer: any, gameObject: any) => {
//       // Đưa object lên top layer khi drag
//       this.children.bringToTop(gameObject);
//     });

//     this.input.on("drag", (pointer: any, gameObject: any, dragX: number, dragY: number) => {
//       gameObject.x = dragX;
//       gameObject.y = dragY;
//     });

//     this.input.on("drop", (pointer: any, gameObject: any, dropZone: Phaser.GameObjects.Zone) => {
//       // Khi thả đúng vào dropZone, snap về giữa zone
//       const number = gameObject.getData('value');
//       const wx = dropZone.getBounds().centerX;
//       const wy = dropZone.getBounds().centerY; 
//       const localX = wx - this.numbersContainer.x;
//       const localY = wy - this.numbersContainer.y;
//         gameObject.x = localX;
//         gameObject.y = localY;
//         this.checkAnswer(number);
//     //   gameObject.disableInteractive(); // nếu không muốn kéo lại
//     });

//     this.input.on("dragend", (pointer: any, gameObject: any, dropped: boolean) => {
//       if (!dropped) {
//         // Nếu không thả lên zone nào, trả về vị trí gốc
//         this.tweens.add({
//           targets: gameObject,
//           x: gameObject.getData('StartX'),
//           y: gameObject.getData('StartY'),
//           duration: 300,
//           ease: "Back.easeOut",
//         });
//       }
//     });
//   }
//   checkAnswer(number: number){
//     if(number !== 0){
//         console.log('false');
//     }
//   }
// }
// SortScene.ts
import Phaser from 'phaser';

type ColorType = 'yellow'|'red';

export default class SortScene extends Phaser.Scene {
  private circles: Phaser.GameObjects.Arc[] = [];
  private readonly startX   = 150;
  private readonly gap      = 120;
  private readonly yCircles = 100;
  private readonly colors: ColorType[] = ['yellow','red','red','red','yellow'];

  constructor() {
    super({ key: 'SortScene' });
  }

  create(): void {
    // --- 1) Tạo 5 circle thẳng hàng, gán data.index và draggable ---
    this.colors.forEach((color, idx) => {
      const x = this.startX + this.gap * idx;
      const fill   = color === 'yellow' ? 0xFFFF00 : 0xFF0000;
      const stroke = color === 'yellow' ? 0xD4AF37 : 0xAA0000;

      const c = this.add.circle(x, this.yCircles, 30, fill)
        .setStrokeStyle(4, stroke)
        .setInteractive({ draggable: true });

      c.setData('color', color);
      c.setData('index', idx);

      this.input.setDraggable(c);
      this.circles.push(c);
    });

    // --- 2) Khi drag: cho circle follow chuột ---
    this.input.on('drag', (ptr: any, obj: Phaser.GameObjects.GameObject, dragX: any, dragY: any) => {
      const c = obj as Phaser.GameObjects.Arc;
      c.x = dragX;
      c.y = dragY;
    });

    // --- 3) Khi dragend: tính toán reorder và tween mọi circle về chỗ ---
    this.input.on('dragend', (ptr: any, obj: Phaser.GameObjects.GameObject) => {
      const c        = obj as Phaser.GameObjects.Arc;
      const oldIndex = c.getData('index') as number;

      // Tính index mới dựa vào vị trí x
      const rawIdx   = (c.x - this.startX) / this.gap;
      const newIndex = Phaser.Math.Clamp(Math.round(rawIdx), 0, this.circles.length - 1);

      if (newIndex !== oldIndex) {
        // 1. Xóa khỏi mảng cũ, chèn vào vị trí mới
        this.circles.splice(oldIndex, 1);
        this.circles.splice(newIndex, 0, c);
        // 2. Cập nhật lại data.index cho tất cả
        this.circles.forEach((ci, i) => ci.setData('index', i));
      }

      // 3. Tween mọi circle về vị trí startX + gap*index, yCircles
      this.circles.forEach(ci => {
        const i       = ci.getData('index') as number;
        const targetX = this.startX + this.gap * i;
        this.tweens.add({
          targets: ci,
          x: targetX,
          y: this.yCircles,
          duration: 200,
          ease: 'Power2'
        });
      });
    });
  }
}
