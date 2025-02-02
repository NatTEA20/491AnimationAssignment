class Background {
    constructor() {
        this.spritesheet = ASSET_MANAGER.getAsset("./House and Garden.jpg");
    };

    update() {
    };

    draw(ctx) {
        console.log("Drawing background", this.spritesheet.width, this.spritesheet.height);
        ctx.drawImage(this.spritesheet, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };
}