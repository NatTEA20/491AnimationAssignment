class OwlFlyRight {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./OwlFlyRight.png"), 8.9, 0, 57.5, 66, 3, 0.15)

        this.x = 0;
        this.y = 40;
        this.speed = 200;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}