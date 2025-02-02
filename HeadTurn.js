class HeadTurn {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./headturn.png"), 0, 0, 63.5, 66, 3, 0.175)

        this.x = 700;
        this.y = 460;
        this.speed = 0;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}