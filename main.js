function preload()
{

}
 function setup()
 {
     video= createCapture(VIDEO);
     video.size(500,500);
     video.hide();
     canvas = createCanvas(300, 300);
    canvas.center();
 }