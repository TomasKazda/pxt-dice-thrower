namespace custom {
    let throwBlocker: boolean = false;
    let diceMax: number = 6;
    let diceValue: number = randint(1, diceMax);
    const maxValue: number = 99;

    const handleDec = () => {
        if (diceMax > 2) diceMax -= 1;
        whaleysans.showNumber(diceMax);
    }
    const handleInc = () => {
        if (diceMax < maxValue) diceMax += 1;
        whaleysans.showNumber(diceMax);
    }
    const handleUnblock = () => {
        throwBlocker = false;
        basic.showString("-", 0);
    }
    const handleShake = () => {
        if (!throwBlocker) {
            throwBlocker = true;
            diceValue = randint(1, diceMax);
        }
        whaleysans.showNumber(diceValue);
    }

    //input.onButtonPressed(Button.A, handleDec);
    //input.onButtonPressed(Button.B, handleInc);
    //input.onLogoEvent(TouchButtonEvent.Pressed, handleUnblock);
    //input.onGesture(Gesture.Shake, handleShake);
}
