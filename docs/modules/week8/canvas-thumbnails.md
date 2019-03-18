# Working with Canvas and Videos

Be sure to refer back to the [Canvas Page from Week 1](../week1/canvas.md). At the bottom of the page there is a section on reading and writing values in the pixels on the Canvas.

<YouTube
    title="Video Frame Grabs and Binary Files on Canvas"
    url="https://www.youtube.com/embed/_2SvAepbCSg"
/>

If you want to create a series of thumbnails on a canvas element then you need to calculate the positions and size for each thumbnail.

The example below is loading 3 image files called `image1.jpg`, `image2.jpg`, and `image3.jpg`. As each image has been loaded, we collect the width and height of each image plus a reference to the image element. After all three have been loaded then the `addThumbnails` function gets called.

Using two nested loops we loop once for each row and once for each column. The `ctx.drawImage()` method takes 9 parameters. First is the image source. The next four parameters describe what part of the original image to extract. Since we want all the thumbnails to be the same size and aspect ratio we multiply the height by 0.75. The final four parameters are the destination information. They describe where to place the extracted images. They will all have the same width and height but the starting (x,y) coordinates will change for each one. The x coordinate will be the column counter times 300. The y coordinate will be the row counter times 200.

```js
let canvas, ctx, img1, img2, img3;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 600;
  img1 = document.createElement("img");
  img2 = document.createElement("img");
  img3 = document.createElement("img");
  img1.addEventListener("load", trackLoads);
  img2.addEventListener("load", trackLoads);
  img3.addEventListener("load", trackLoads);
  img1.src = "./img/image1.jpg";
  img2.src = "./img/image2.jpg";
  img3.src = "./img/image3.jpg";
});

function trackLoads(ev) {
  let imgObj = {
    sw: ev.target.naturalWidth,
    sh: ev.target.naturalHeight * (3 / 4),
    img: ev.target
  };
  console.log(imgObj);
  images.push(imgObj);
  if (images.length === 3) {
    addThumbnails();
  }
}

function addThumbnails() {
  //image has been loaded to the document.
  //add 12 copies of the images to the canvas 4 columns x 3 rows
  //each thumbnail will be 300px wide by 200px high
  //calculate the part of the image to use as the thumbnail
  let dx = 0;
  let dy = 0;
  let imgCount = 0;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      dx = c * 300; // 0, 300, 600, 900
      dy = r * 200; // 0, 200, 400
      let imgObj = images[Math.floor(imgCount % 3)];
      imgCount++;
      // image 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3
      ctx.drawImage(imgObj.img, 0, 0, imgObj.sw, imgObj.sh, dx, dy, 300, 200);
      // ctx.drawImage( source, sx, sy, sw, sh, dx, dy, dw, dh)
    }
  }
}
```

<YouTube
    title="How to place thumbnails on a canvas"
    url="https://www.youtube.com/embed/JId538COVW4"
/>

## Return

[Back to Week 8 Module Home](./README.md)
