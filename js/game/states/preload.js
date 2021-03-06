// Creating the preload state
SpaceChase.Preload = function () {
   this.ready = false;
};

// Extending the prototype for the preload state
SpaceChase.Preload.prototype = {

	// Loading all the assets that we will need in the game
   preload: function () {

		// Loading images --> (key, location)
      this.load.image('ground', 'assets/images/dirt.gif');
      this.load.image('background', 'assets/images/space.png');

		// Loading spritesheets --> (key, location, frame width, frame height, number of frames)
      this.load.spritesheet('stars', 'assets/images/stars.png', 65.14, 78, 7);
      this.load.spritesheet('player', 'assets/images/spaceship.png', 64, 29, 4);
      this.load.spritesheet('ufo', 'assets/images/ufo.png', 40, 30, 6);
		this.load.spritesheet('boss','assets/images/boss.png', 40, 30, 6);
		this.load.spritesheet('missile','assets/images/missile.png',361, 217, 4);
      this.load.spritesheet('explosion','assets/images/explode.png',26,26,6);

		// Loading audio files --> (key, loacation)
      this.load.audio('gameMusic',['assets/audio/theme.ogg', 'assets/audio/theme.mp3']);
      this.load.audio('rocket',['assets/audio/launch.ogg', 'assets/audio/launch.mp3']);
      this.load.audio('star', ['assets/audio/star.ogg', 'assets/audio/star.mp3']);
      this.load.audio('death', ['assets/audio/explosion.ogg', 'assets/audio/explosion.mp3']);
		this.load.audio('missile', ['assets/audio/flap.ogg', 'assets/audio/flap.mp3']);

		// Loading third-party font --> (key, asset, XML mapping)
      this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

      // Specifying the callback that will be triggered when
		// the asset loading was completed --> (method to fire, context)
      this.load.onLoadComplete.add(this.onLoadComplete, this);
   },

	// Creating a loading text
   create: function () {

		// Creating a sprite for the game logo --> (x-coord, y-coord, key)
      this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		// Setting the anchor of the game logo to be in the center of the image
      this.logo.anchor.setTo(0.5);

      // adding a loading text to the game --> (x-coord,y-coord,key,text value, font size)
      this.loadingText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Loading', 32);
      this.loadingText.x = this.game.width / 2;
      this.loadingText.y = this.game.height / 2 + this.logo.height / 2;

		// adding animation to the loading text --> (object).to(properties, duration,ease,autostart,delay,repeat,yoyo effect)
		this.game.add.tween(this.loadingText).to({x: this.loadingText.x-200}, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
   },

	// This method is executed 60 times per second
   update: function () {
		// Checking if all the assests were loaded successfully
      if (this.cache.isSoundDecoded("gameMusic") && this.ready === true) {
			// Launching the "MainMenu" state --> (key)
         this.state.start('MainMenu');
      }
   },

	// The callback function
   onLoadComplete: function () {
      this.ready = true;
   }
};
