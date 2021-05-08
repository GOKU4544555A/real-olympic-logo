canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 2
ctx.arc(200, 200, 100, 0, 2 * Math.PI)
ctx.stroke()
color="black"
ctx.beginPath()
ctx.strokeStyle= color
ctx.lineWidth=2
ctx.arc(425,200,100,0,2 * Math.PI)
ctx.stroke()
color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(650,200,100,0,2 * Math.PI)
ctx.stroke()
color="yellow"
ctx.beginPath()
ctx.strokeStyle=color
color.lineWidth=2
ctx.arc(310,300,100,0,2 * Math.PI)
ctx.stroke()
color="green"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(525,300,100,0,2 * Math.PI)
ctx.stroke()