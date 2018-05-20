const BALL_ORIGIN=new Vector2(25,25)

function Ball(position){
	this.position=position
	this.velocity=new Vector2()
}

Ball.prototype.update=function(delta, stick){
	this.velocity=this.velocity.mult(delta)

	if (this.position.x>1215) this.velocity.x=-this.velocity.x
	if (this.position.x<65) this.velocity.x=-this.velocity.x
	if (this.position.y>585) this.velocity.y=-this.velocity.y
	if (this.position.y<65) this.velocity.y=-this.velocity.y


	this.position=this.position.addTo(this.velocity)
	
	if (this.velocity.x<0.01 && this.velocity.y<0.01){
		stick.position.x=this.position.x
		stick.position.y=this.position.y
	}

	let blackPoints=[]
	blackPoints.push([70,70])
	blackPoints.push([1210,70])
	blackPoints.push([70,580])
	blackPoints.push([640,70])
	blackPoints.push([640,580])
	blackPoints.push([1210,580])
	for (let point of blackPoints){

		if(Math.abs(this.position.x-point[0]) <10 && Math.abs(this.position.y-point[1])<10){
			console.log("POINT",point)
		this.position.x=350
		this.position.y=330
		this.velocity.x=0
		this.velocity.y=0
	}
	}
	

}
Ball.prototype.draw=function(){
	Canvas.drawImage(sprites.whiteball,this.position,BALL_ORIGIN)
}
Ball.prototype.shoot=function(power,rotation,){
	console.log("SHOOT!")
	this.velocity=new Vector2(power*Math.cos(rotation),power*Math.sin(rotation))
	console.log(rotation,Math.cos(rotation),Math.sin(rotation), this.velocity)

}