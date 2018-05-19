"use strict";

function Canvas2D() {
    this._canvas = document.getElementById("screen");
    this._canvasContext = this._canvas.getContext('2d');
    this._canvasOffset = Vector2.zero;
}

Canvas2D.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
};


Canvas2D.prototype.drawImage = function (image, position, rotation, scale, origin) {

    this._canvasContext.drawImage(image, 0, 0,
        sprite.width, sprite.height,
        -origin.x * scale, -origin.y * scale,
        sprite.width * scale, sprite.height * scale);
};

let Canvas=new Canvas2D()

let image=new Image()
image.src="./assets/sprites/spr_backgound.png"