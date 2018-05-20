const DELTA=0.98
function GameWorld(){
	this.whiteball=new Ball(new Vector2(413,413))
	this.stick=new Stick(new Vector2(413,413), this.whiteball.shoot.bind(this.whiteball))
	

}


GameWorld.prototype.update=function(){
	this.stick.update()
	this.whiteball.update(DELTA)
}

GameWorld.prototype.draw=function(){

	Canvas.drawImage(sprites.background,{x:0,y:0},{x:0,y:0},0,{x:1280,y:650})
	this.stick.draw()
	this.whiteball.draw()
}