const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./House and Garden.jpg")
ASSET_MANAGER.queueDownload("./OwlFlyRight.png")
ASSET_MANAGER.queueDownload("./headturn.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new OwlFlyRight(gameEngine));
	gameEngine.addEntity(new HeadTurn(gameEngine));
	gameEngine.addEntity(new Background());


	gameEngine.init(ctx);

	gameEngine.start();
});
