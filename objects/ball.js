class Ball {
    constructor (position, color) {
        this.position = position;

        // get ball sprite by its color
        this.sprite = getBallSpriteByColor(color);
    }

    // update method is called every frame (see detailed description in the dock) 
    update (delta) {
        
    }

    // draws sprite every frame
    draw () {
        Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
    }
}
