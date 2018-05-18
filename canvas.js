"use strict";

function Canvas2D() {
    this._canvas = null;
    this._canvasContext = null;
    this._canvasOffset = Vector2.zero;
}

Canvas2D.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
};


Canvas2D.prototype.drawImage = function (sprite, position, rotation, scale, origin) {

    this._canvasContext.drawImage(sprite, 0, 0,
        sprite.width, sprite.height,
        -origin.x * scale, -origin.y * scale,
        sprite.width * scale, sprite.height * scale);
};