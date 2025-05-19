export default class InstructionTextService {
    constructor() {}

    getText(index: number) {
        const Texts = [
            "Working on it",
            "Sort the counters and place the numbers to make an equation that matches the counters.",
            "Good work! Pick a number to play again.",
        ];
        return Texts[index];
    }
}
