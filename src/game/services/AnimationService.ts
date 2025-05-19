import MainDeclare from "../Declares/MainDeclare";
export default class AnimationService {
    private scene: Phaser.Scene;
    private declare: MainDeclare;

    constructor(scene: Phaser.Scene, declare: MainDeclare) {
        this.declare = declare;
        this.scene = scene;
        this.createAnims();
    }
    private createAnims() {
        const offsetY = 50;
        const background = this.scene.add
            .image(512, 200 - offsetY, "background")
            .setDepth(0);
        this.declare.blow = this.scene.add
            .sprite(802, 110 - offsetY, "blow")
            .setDepth(1);
        this.declare.clock = this.scene.add.sprite(353, 303 - offsetY, "clock");
        this.declare.lever = this.scene.add.sprite(720, 160 - offsetY, "lever");
        this.declare.arrow = this.scene.add.sprite(351, 112 - offsetY, "arrow");
        this.declare.duck = this.scene.add.sprite(219, 216 - offsetY, "duck");
        this.declare.energy = this.scene.add.sprite(
            216,
            98 - offsetY,
            "energy"
        );
        this.declare.equalizer_display = this.scene.add.sprite(
            217,
            153 - offsetY,
            "equalizer_display"
        );
        this.declare.emotion = this.scene.add.sprite(
            644,
            272 - offsetY,
            "emotion"
        );
        this.declare.tv_display = this.scene.add.sprite(
            798,
            169 - offsetY,
            "tv_display"
        );
        this.declare.geometry = this.scene.add.sprite(
            798,
            172 - offsetY,
            "geometry"
        );
        this.declare.engine = this.scene.add.sprite(
            790,
            274 - offsetY,
            "engine"
        );
        this.declare.pink_tube = this.scene.add.sprite(
            169,
            300 - offsetY,
            "pink_tube"
        );
        this.declare.plant = this.scene.add.sprite(354, 213 - offsetY, "plant");
        this.declare.red_button = this.scene.add.sprite(
            719,
            204 - offsetY,
            "red_button"
        );
        this.declare.paper = this.scene.add
            .sprite(779, 113 - offsetY, "paper")
            .setDepth(0);
        this.declare.hi_five = this.scene.add.sprite(
            660,
            135 - offsetY,
            "hi_five"
        );
        this.declare.belt = this.scene.add.sprite(548, 215 - offsetY, "belt");
        this.declare.spiral = this.scene.add
            .sprite(646, 215 - offsetY, "spiral")
            .setDepth(2);
        this.declare.fan = this.scene.add.sprite(247, 303 - offsetY, "fan");
        this.declare.cup = this.scene.add.sprite(505, 225 - offsetY, "cup");
        // create Anims
        this.createAnim(this.declare.blow, "blow", "blow-anim", 0, 4);//

        this.createAnim(this.declare.clock, "clock", "clock-anim", 0, 4);//

        this.createAnim(this.declare.lever, "lever", "lever-anim", 0, 4);//

        this.createAnim(this.declare.arrow, "arrow", "arrow-anim", 0, 4);//

        this.createAnim(this.declare.duck, "duck", "duck-anim", 0, 4);//

        this.createAnim(this.declare.energy, "energy", "energy-anim", 0, 4);//

        this.createAnim(
            this.declare.equalizer_display,
            "equalizer_display",
            "equalizer_display-anim",
            0,
            14
        );//

        this.createAnim(this.declare.emotion, "emotion", "emotion-anim", 0, 4);

        this.createAnim(
            this.declare.tv_display,
            "tv_display",
            "tv_display-anim",
            0,
            4
        );

        this.createAnim(
            this.declare.geometry,
            "geometry",
            "geometry-anim",
            0,
            4
        );

        this.createAnim(this.declare.engine, "engine", "engine-anim", 0, 4);

        this.createAnim(
            this.declare.pink_tube,
            "pink_tube",
            "pink_tube-anim",
            0,
            4
        );

        this.createAnim(this.declare.plant, "plant", "plant-anim", 0, 4);//

        this.createAnim(
            this.declare.red_button,
            "red_button",
            "red_button-anim",
            0,
            4
        );

        this.createAnim(this.declare.paper, "paper", "paper-anim", 0, 14);//

        this.createAnim(this.declare.hi_five, "hi_five", "hi_five-anim", 0, 4);

        this.createAnim(this.declare.belt, "belt", "belt-anim", 0, 4);

        this.createAnim(this.declare.spiral, "spiral", "spiral-anim", 0, 4);

        this.createAnim(this.declare.fan, "fan", "fan-anim", 0, 4);

        this.createAnim(this.declare.cup, "cup", "cup-anim", 0, 14);
    }

    private createAnim(
        object: Phaser.GameObjects.Sprite,
        key: string,
        anim_key: string,
        start: number,
        end: number,
    ) {
        this.scene.anims.create({
            key: anim_key,
            frames: this.scene.anims.generateFrameNumbers(key, {
                start: start,
                end: end,
            }),
            frameRate: 10,
            repeat: 0,
        });

        object.on(`animationcomplete-${anim_key}`, () => {
            object.setFrame(0);
        });
    }
}
