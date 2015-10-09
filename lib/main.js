var game = new Phaser.Game(800, 592, Phaser.AUTO, '', { preload: preload, create: create, update: update });

WebFontConfig = {

    active: function() { game.time.events.add(Phaser.Timer.SECOND, create); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['VT323']
    }

};

function preload() {
  game.load.script('VT323', '//fonts.googleapis.com/css?family=VT323');
	game.load.image('laser', 'images/game3/laser.png');
	game.load.spritesheet('cowboy', 'images/game3/large_sprite.png', 192, 192);
	game.load.tilemap('map', 'images/game3/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('ground', 'images/game3/ground_tileset.png');
	game.load.image('background', 'images/game3/desert.png');
  game.load.image('taco', 'images/game3/taco_game.png');
	game.load.image('trumpenemy', 'images/game3/trump.png');
	game.load.spritesheet('kaboom', 'images/game3/explosion.png', 150, 180);
	game.load.image('button', 'images/game3/play.png');
}

var text = null;
var player;
var cursors;
var tacos;
var tacoScore = 0;
var tacoScoreText;
var trumpScore = 0;
var trumpScoreText;
var lasers;
var laserTime = 0;
var trump
var trumps
var explosions
var fireButton
var direction = "right";
var button;

function create() {
  //  Enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 1200;
	//  Load Tiled json file for placement "directions"
  map = game.add.tilemap('map');
	//  Load game layers
  layerbackground = map.createLayer('desert_layer');
	layerground = map.createLayer('ground_layer');
	sand = map.addTilesetImage('ground_tileset', 'ground');
	map.addTilesetImage('desert_tileset', 'background');
  layerbackground.resizeWorld();
  layerbackground.wrap = true;
	//  Make ground solid
	map.setCollisionByExclusion([0],true, 'ground_layer')
	//  Laser stuff
  lasers = game.add.group();
  lasers.enableBody = true;
  lasers.physicsBodyType = Phaser.Physics.ARCADE;
  lasers.createMultiple(30, 'laser');
  lasers.setAll('anchor.x', 0.5);
  lasers.setAll('anchor.y', 1);
  lasers.setAll('outOfBoundsKill', true);
  lasers.setAll('checkWorldBounds', true);
	//  Let the game know we are going to use directional controls
  cursors = game.input.keyboard.createCursorKeys();
  //  Add our heroes, Dude n Dino (DD)
  player = game.add.sprite(200, game.world.height - 200, 'cowboy');
  //  Enable physics on DD
  game.physics.arcade.enable(player);
	//  Camera follows DD
	player.anchor.setTo(0.5,0.5);
	game.camera.follow(player);
  //  DD physics properties. Give a slight bounce
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;
	//  DD can walk
	player.animations.add('walk', [5,6,7,8], 10, true);
	//  DD had a smaller collision area
	player.body.width=22;
	//  Add Trumps
	trump = game.add.sprite('trumpenemy');
	game.physics.arcade.enable(trump);
	trumps = game.add.group();
	trumps.enableBody = true;
	//  Add Explosions
	explosions = game.add.group();
  explosions.createMultiple(30, 'kaboom');
	explosions.forEach(setupTrump, this);
  //  Add some tacos to collect
  tacos = game.add.group();
  //  Enable physics for tacos
  tacos.enableBody = true;
  //  Create tacos evenly spaced apart
  for (var i = 0; i < 60; i++) {
    //  Create a taco inside of the 'tacos' group
    var taco = tacos.create(i * 300, 0, 'taco');
    //  Let gravity do its thing
    taco.body.gravity.y = 300;
    //  This just gives each taco a slightly random bounce value
    taco.body.bounce.y = 0.3 + Math.random() * 0.2;
  }
	//  Taco physics
	game.physics.arcade.enable(taco);
	//  Put some Trumps in the mix
	for (var i = 0; i < 10; i++) {
    //  Create a Trump inside of the 'Trumps' group
    var trump = trumps.create(i * 1000, 0, 'trumpenemy');
    //  Let gravity do its thing
    trump.body.gravity.y = 300;
    //  Bouncing Trumps
    trump.body.bounce.y = 0.3 + Math.random() * 0.2;
  }
	//  Trump physics
	game.physics.arcade.enable(trump);
  //  The score

  tacoScoreText = game.add.text(16, 16, "Tacos Eaten: 0");
  tacoScoreText.font = 'VT323';
  tacoScoreText.fontSize = 40;
	tacoScoreText.fixedToCamera = true;
	trumpScoreText = game.add.text(16, 50, "Trumps Zapped: 0");
  trumpScoreText.font = 'VT323';
  trumpScoreText.fontSize = 40;
	trumpScoreText.fixedToCamera = true;
	button = game.add.button(650, 16, 'button', actionOnClick);
	button.fixedToCamera = true;



	function actionOnClick () {
		// game.destroy();
    location.reload();
	}

  //  Our controls
  cursors = game.input.keyboard.createCursorKeys();
	//  Spacebar shoots
	fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function setupTrump (trump) {
  // trump.anchor.x = 0.5;
  trump.anchor.y = 0.5;
  trump.animations.add('kaboom');
}

function update() {
	//  Allow things to be on the ground
	game.physics.arcade.collide(player, layerground);
	game.physics.arcade.collide(tacos, layerground);
	game.physics.arcade.collide(trumps, layerground);
  //  Checks to see if the DD overlaps with any of the tacos, if they do call the collectTaco function
  game.physics.arcade.overlap(player, tacos, collectTaco, null, this);
  //  Reset DD's velocity (movement)
  player.body.velocity.x = 0;
	//  Directional movement
	if (cursors.left.isDown ){   //  Move to the left
    player.scale.x = -1;
    player.body.velocity.x = -300;
    player.animations.play('walk');  //  Now play the animation named "walk"
		direction = "left";  //  Allows us to know what direction DD is facing for laser shots
  }
  else if (cursors.right.isDown){  //  Move to the right
    player.scale.x = 1;
    player.body.velocity.x= 300;
    player.animations.play('walk');
		direction = "right";
  }
  else {
    player.loadTexture('cowboy', 6);   //  This loads the frame 6 of the spritesheet  (stand)
  }
  if (cursors.up.isDown){
    player.loadTexture('cowboy', 5);   //  This loads the frame 5 (jump) of the spritesheet
    if(player.body.onFloor()){  //  This checks if DD is on the floor (we don't allow airjumps)
      player.body.velocity.y = -800;   //  Change the y velocity to -800 means "jump!"
    }
  }
  //  Allow DD to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down)
  {
    player.body.velocity.y = -350;
  }
	//  Camera follows
	if (cursors.left.isDown)
  {
    game.camera.x -= 8;
  }
  else if (cursors.right.isDown)
  {
    game.camera.x += 8;
  }
  if (cursors.up.isDown)
  {
    game.camera.y -= 8;
  }
  else if (cursors.down.isDown)
  {
    game.camera.y += 8;
  }
	//  Firing
	if (fireButton.isDown)
	{
		fireLaser();
	}
	//  DD can shoot Trumps
	game.physics.arcade.overlap(lasers, trumps, collisionHandler, null, this);
}

function collisionHandler (laser, trump){
  //  When a laser hits a Trump we kill them both
  laser.kill();
  trump.kill();

  //  Increase the score
  trumpScore += 1;
	trumpScoreText.text = 'Trumps Zapped: ' + trumpScore;

  //  And create an explosion
  var explosion = explosions.getFirstExists(false);
  explosion.reset(trump.body.x, trump.body.y);
  explosion.play('kaboom', 30, false, true);
  // if (trumps.countLiving() == 0)
  // {
  //     score += 1000;
  //     scoreText.text = scoreString + score;
	//
  //     enemyBullets.callAll('kill',this);
  //     stateText.text = " You Won, \n Click to restart";
  //     stateText.visible = true;
	//
  //     //the "click to restart" handler
  //     game.input.onTap.addOnce(restart,this);
  // }
}

function resetLaser (laser){
    //  Called if the laser goes out of the screen
    laser.kill();
}

function fireLaser (){
  //  To avoid them being allowed to fire too fast we set a time limit
  if (game.time.now > laserTime)
  {
    //  Grab the first laser we can from the pool
    laser = lasers.getFirstExists(false);
    // laser.checkWorldBounds = true;
    // laser.events.outOfBoundsKill = true;
    if (laser){
			//  Shoot to the left
			if (direction === "left") {
				//  Determine where lasers come out of
        laser.reset(player.x + -80, player.y + -16);
				laser.body.gravity.x = -100000;
        laserTime = game.time.now + 200;
			}
			//  Shoot to the right
			else if (direction === "right") {
				laser.reset(player.x + 80, player.y + -16);
				laser.body.gravity.x = 100000;
        laserTime = game.time.now + 200;
			}
    }
  }
}

function collectTaco (player, taco){
  //  Removes the taco from the screen
  taco.kill();
  //  Update the score
  tacoScore += 1;
  tacoScoreText.text = 'Tacos Eaten: ' + tacoScore;
}
