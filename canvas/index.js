// onload
// 1. canvas
// 2. context
// 3. draw
// 4. drawImage


// javascript onload event
// The onload event occurs when an object has been loaded.

// onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');

  if (!canvas) {
    console.log('Canvas not supported');
    console.error('Canvas not supported');
    return;
  }
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    console.log(ctx);
    ctx.fillRect(10, 20, 50, 50);
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(10, 20, 50, 50);
    ctx.strokeStyle = 'rgb(0, 182, 0)';
    ctx.lineWidth = 5;
    ctx.strokeRect(9, 19, 52, 52); // draws an outline of the rectangle
  }


});

