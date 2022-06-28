class Stick {
    constructor (position) {
        this.position = position;
        this.rotation = 0;
    }

    // update method is called every frame (see detailed description in the dock) 
    update (delta) {
        
    }

    // draws sprite every frame
    draw () {
        Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
    }
}
