function draw() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 50, 50);
        }
        img.src = 'hero.png';
    }
}

