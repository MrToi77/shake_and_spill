export default class MainDeclare{
    public buttonsContainer: Phaser.GameObjects.Container;
    public amountOfChoice: number = 10;
    public blow: Phaser.GameObjects.Sprite;
    public clock: Phaser.GameObjects.Sprite;
    public lever: Phaser.GameObjects.Sprite;
    public arrow: Phaser.GameObjects.Sprite;
    public duck: Phaser.GameObjects.Sprite;
    public energy: Phaser.GameObjects.Sprite;
    public equalizer_display: Phaser.GameObjects.Sprite;
    public emotion: Phaser.GameObjects.Sprite;
    public tv_display: Phaser.GameObjects.Sprite;
    public geometry: Phaser.GameObjects.Sprite;
    public engine: Phaser.GameObjects.Sprite;
    public pink_tube: Phaser.GameObjects.Sprite;
    public plant: Phaser.GameObjects.Sprite;
    public red_button: Phaser.GameObjects.Sprite;
    public paper: Phaser.GameObjects.Sprite;
    public hi_five: Phaser.GameObjects.Sprite;
    public belt: Phaser.GameObjects.Sprite;
    public spiral: Phaser.GameObjects.Sprite;
    public fan: Phaser.GameObjects.Sprite;
    public cup: Phaser.GameObjects.Sprite;
    public equationContainer: Phaser.GameObjects.Container;
    public dropZones: Phaser.GameObjects.Zone[] = [];
    public elements = [
      { key: '______', id: 'underline' },
      { key: '+',     id: 'operator'  },
      { key: '______', id: 'underline' },
      { key: '=',     id: 'operator'  },
      { key: '______', id: 'underline3' },
    ];
    public numberDragContainer: Phaser.GameObjects.Container;
    public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public circlesContainer: Phaser.GameObjects.Container;
    public trueAnswer = true;
    public numberNonDragContainer: Phaser.GameObjects.Container;
    public Answers: [number, number];
    public checkID: string;
    public total: number = 7;
    public countPlaced: number = 0;
    public instructionText: Phaser.GameObjects.Text;
    public currentPositionCircleX: number;
    public currentPositionCircleY: number;
    public positionOfCircles: Phaser.Math.Vector2[] = [];
    public StartX: number;
    public gapOfCircles: number;
    public destroyedList: Phaser.GameObjects.Container[] = [];
}