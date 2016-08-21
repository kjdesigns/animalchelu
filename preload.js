var fireballMatching = fireballMatching || {};
fireballMatching.Preload = {
    
    preload:function(){
        
        this.game.stage.backgroundColor = "#4488AA";
        this.preloadBg = this.add.sprite(this.game.world.centerX-150,150, 'ibb');
		this.preloadBar = this.add.sprite(this.game.world.centerX-150,150, 'ibb2');
		this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.image("babui","assets/pig.png");
        this.game.load.image("paluma","assets/parrot.png");
        this.game.load.image("kulepbla","assets/snake.png");
        this.game.load.image("maching","assets/monkey.png");
        this.game.load.image("elephante","assets/elephant.png");
        this.game.load.image("koneho","assets/rabbit.png");
        this.game.load.image("quinilo","assets/sheep.png");
        this.game.load.image("manok","assets/chicken.png");
        this.game.load.image("galagu","assets/dog.png");
        this.game.load.image("guaka","assets/cow.png");
        this.game.load.image("chaka","assets/mouse.png");
        this.game.load.image("gamson","assets/octopus.png");
        this.game.load.image("haggan","assets/turtle.png");
        this.game.load.image("guihan","assets/fish.png");
        this.game.load.image("fanihi","assets/bat.png");
        
        this.game.load.image("pig","assets/pig2.png");
        this.game.load.image("bird","assets/bird.png");
        this.game.load.image("cat","assets/cat.png");
        this.game.load.image("dog","assets/dog2.png");
        this.game.load.image("turtle","assets/turtle2.png");
        this.game.load.image("snake","assets/snake2.png");
        this.game.load.image("cow","assets/cow2.png");
        this.game.load.image("elephant","assets/elephant2.png");
        this.game.load.image("monkey","assets/monkey2.png");
        this.game.load.image("sheep","assets/sheep2.png");
        this.game.load.image("octopus","assets/octopus2.png");
        this.game.load.image("fish","assets/fish2.png");
        this.game.load.image("worm","assets/worm.png");
        this.game.load.image("chick","assets/chick.png");
        this.game.load.image("carabao","assets/carabao.png");
     
        this.game.load.image("duck2","assets/duck2.png");
        this.game.load.image("lizard","assets/lizard.png");
        this.game.load.image("whale","assets/whale.png");
        this.game.load.image("crab","assets/crab.png");
        
        
        this.game.load.image("star","assets/star.png");
        this.game.load.image("fireball","assets/fireball.png");
        this.game.load.image("gameOver","assets/gameOver.png");
        this.game.load.image("win","assets/win.jpg");
        this.game.load.image("mainMenu","assets/mainMenu.jpg");
        this.game.load.image("latte","assets/latte.png");
        this.game.load.image("home","assets/home.png");
        this.game.load.image("howTo","assets/howTo.png");
        this.game.load.image("howToText","assets/text.png");
        this.game.load.image("pointer","assets/pointer.png");
        this.game.load.image("logo","assets/logo.png");
        this.game.load.image("arrow","assets/arrow.png");
        this.game.load.image("help","assets/help.png");
        this.game.load.image("background2","assets/background2.png");
        this.game.load.image("background3","assets/background3.png");
        this.game.load.image("background4","assets/background4.png");
     
        
        
        this.game.load.image("square2","assets/square2.png");
        this.game.load.image("background","assets/background.png");
        this.game.load.image("atani","assets/atani.png");
        this.game.load.image("correct","assets/correct.png");
        this.game.load.image("nextButton","assets/nextButton.png");
        this.game.load.image("fail","assets/chagi.png");
        this.game.load.image("retry","assets/retry.png");
        
        this.game.load.image("kjdesigns","assets/kjdesigns.png");
        
        
        //SOUNDS
        this.game.load.audio("babui","assets/sounds/pig.ogg");
        this.game.load.audio("paluma","assets/sounds/bird.ogg");
        this.game.load.audio("kulepbla","assets/sounds/snake.ogg");
        this.game.load.audio("maching","assets/sounds/monkey.ogg");
        this.game.load.audio("elephante","assets/sounds/elephant.ogg");
        this.game.load.audio("koneho","assets/sounds/rabbit.ogg");
        this.game.load.audio("quinilo","assets/sounds/sheep.ogg");
        this.game.load.audio("manok","assets/sounds/chicken.ogg");
        this.game.load.audio("galagu","assets/sounds/dog.ogg");
        this.game.load.audio("guaka","assets/sounds/cow.ogg");
        this.game.load.audio("chaka","assets/sounds/mouse.ogg");
        this.game.load.audio("gamson","assets/sounds/octopus.ogg");
        this.game.load.audio("haggan","assets/sounds/turtle.ogg");
        this.game.load.audio("guihan","assets/sounds/fish.ogg");
        this.game.load.audio("fanihi","assets/sounds/bat.ogg");
        
        this.game.load.audio("katu","assets/sounds/cat.ogg");
        this.game.load.audio("ulo","assets/sounds/worm.ogg");
        this.game.load.audio("carabao","assets/sounds/carabao.ogg");
        this.game.load.audio("panglao","assets/sounds/crab.ogg");
        this.game.load.audio("gecko","assets/sounds/lizard.ogg");
        this.game.load.audio("nga nga","assets/sounds/duck.ogg");
        this.game.load.audio("puyitos","assets/sounds/babyChick.ogg");
        this.game.load.audio("bayena","assets/sounds/whale.ogg");
        
        this.game.load.audio("ahe","assets/sounds/ahe.ogg");
        this.game.load.audio("hungan","assets/sounds/correct.ogg");
        this.game.load.audio("zombie","assets/sounds/zombie.ogg");
        this.game.load.audio("zombie2","assets/sounds/zombie2.ogg");
        this.game.load.audio("zombie3","assets/sounds/zombie3.ogg");
        this.game.load.audio("zombie4","assets/sounds/zombie4.ogg");
        this.game.load.audio("hit","assets/sounds/hit.ogg");
        
        this.game.load.audio("backgroundMusic","assets/sounds/backgroundMusic.ogg");
        
        //SPRITESHEET
        this.game.load.spritesheet("enemy1","assets/enemy1.png",135,146);
        this.game.load.spritesheet("enemy2","assets/enemy2.png",135,146);
        this.game.load.spritesheet("enemy3","assets/enemy3.png",135,146);
        this.game.load.spritesheet("enemy4","assets/enemy4.png",135,146);
        this.game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
    },
    create:function(){
        this.game.state.start("kjdesigns");
    
    }
    
}