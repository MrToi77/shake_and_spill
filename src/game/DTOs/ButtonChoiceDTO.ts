export default class ButtonChoiceDTO{
    public _positionX: number;
    public _positionY: number;
    public _value: number;
    public _texture: Phaser.GameObjects.Text;
    public _buttonFrame: Phaser.GameObjects.Image;
    public _setSizeX: number;
    public _setSizeY: number;


	constructor(positionX: number, positionY: number, value: number, texture: Phaser.GameObjects.Text, buttonFrame: Phaser.GameObjects.Image) {
        this._positionX = positionX;
        this._positionY = positionY;
        this._value = value;
        this._texture = texture;
        this._buttonFrame = buttonFrame;
        this._setSizeX = 300;
        this._positionY = 300;
	}
	
}