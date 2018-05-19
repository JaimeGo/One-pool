function handleMouseMove(evt){
	let x=evt.pageX
	let y= evt.pageY

	Mouse.position=new Vector2()
}

function handleMouseDown(evt){

	handleMouseMove(evt)

	if (evt.which === 1) {
        if (!Mouse._left.down)
            Mouse._left.pressed = true;
        Mouse._left.down = true;
    } else if (evt.which === 2) {
        if (!Mouse._middle.down)
            Mouse._middle.pressed = true;
        Mouse._middle.down = true;
    } else if (evt.which === 3) {
        if (!Mouse._right.down)
            Mouse._right.pressed = true;
        Mouse._right.down = true;
    }

}


function MouseHandler(){
	this.left=new ButtonState()
	this.middle=new ButtonState()
	this.right=new ButtonState()

	this.position=new Vector2()

	document.onmousemove=handleMouseMove
	document.onmousedown=handleMouseDown
	document.onmouseup=handleMouseUp

}

let Mouse=new MouseHandler()
