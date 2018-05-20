function GameWorld(){
	this.stick=new Stick(new Vector2(413,413))
	this.whiteball=new Ball(new Vector2(413,413))
}


GameWorld.prototype.update=function(){
	this.stick.update()
	this.whiteball.update()
}

GameWorld.prototype.draw=function(){

	Canvas.drawImage(sprites.background,{x:0,y:0},{x:0,y:0})
	this.stick.draw()
	this.whiteball.draw()
}