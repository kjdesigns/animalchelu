var soundArray;
var fireballMatching = fireballMatching || {};
fireballMatching.Game = {
    
    init:function(currentLevel){
        this.currentLevel = currentLevel || 0;
        
        this.map =[
            
                {
                    buttons:[{x:this.game.world.centerX-100,y:100,key:"babui",name:"babui"},{x:this.game.world.centerX+100,y:100,key:"paluma",name:"paluma"}],
                    rightAnswer:["paluma","babui"],
                    mustScore:1,
                    enemySpeed:100,
                    monsterImages:["enemy1"],
                    background:"background"
                },
            
                 {
                    buttons:[{x:this.game.world.centerX-100,y:100,key:"babui",name:"babui"},{x:this.game.world.centerX+100,y:100,key:"paluma",name:"paluma"}],
                    rightAnswer:["babui"],
                    mustScore:1,
                    enemySpeed:110,
                    monsterImages:["enemy1"],
                    background:"background"
                },
            
            
            
            
            
                {
                    buttons:[{x:this.game.world.centerX-100,y:100,key:"paluma",name:"paluma"},{x:this.game.world.centerX+100,y:100,key:"kulepbla",name:"kulepbla"}],
                    rightAnswer:["kulepbla","paluma"],
                    mustScore:1,
                    enemySpeed:120,
                    monsterImages:["enemy1"],
                    background:"background"
                },
            
            
                {
                    buttons:[{x:this.game.world.centerX-100,y:100,key:"maching",name:"maching"},{x:this.game.world.centerX+100,y:100,key:"kulepbla",name:"kulepbla"}],
                    rightAnswer:["maching","kulepbla"],
                    mustScore:1,
                    enemySpeed:130,
                    monsterImages:["enemy1"],
                    background:"background"
                },
                
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"babui",name:"babui"},{x:this.game.world.centerX,y:100,key:"maching",name:"maching"},{x:this.game.world.centerX+150,y:100,key:"paluma",name:"paluma"}],
                    rightAnswer:["babui","paluma"],
                    mustScore:2,
                    enemySpeed:200,
                    monsterImages:["enemy1"],
                    background:"background"
                },
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"maching",name:"maching"},{x:this.game.world.centerX,y:100,key:"kulepbla",name:"kulepla"},{x:this.game.world.centerX+150,y:100,key:"elephante",name:"elephante"}],
                    rightAnswer:["elephante","maching","kulepbla",],
                    mustScore:2,
                    enemySpeed:210,
                    monsterImages:["enemy1"],
                    background:"background"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"koneho",name:"koneho"},{x:this.game.world.centerX,y:100,key:"elephante",name:"elephante"},{x:this.game.world.centerX+150,y:100,key:"quinilo",name:"quinilo"}],
                    rightAnswer:["koneho","quinilo","elephante"],
                    mustScore:2,
                    enemySpeed:220,
                    monsterImages:["enemy1"],
                    background:"background3"
                },
            
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"galagu",name:"galagu"},{x:this.game.world.centerX,y:100,key:"elephante",name:"elephante"},{x:this.game.world.centerX+150,y:100,key:"guaka",name:"guaka"},
                    {x:this.game.world.centerX-300,y:100,key:"manok",name:"manok"}],
                    rightAnswer:["elephante","manok","galagu"],
                    mustScore:3,
                    enemySpeed:300,
                    monsterImages:["enemy1"],
                    background:"background3"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"guaka",name:"guaka"},{x:this.game.world.centerX,y:100,key:"maching",name:"maching"},{x:this.game.world.centerX+150,y:100,key:"quinilo",name:"quinilo"},
                    {x:this.game.world.centerX-300,y:100,key:"kulepbla",name:"kulepbla"}],
                    rightAnswer:["kulepbla","guaka","maching"],
                    mustScore:3,
                    enemySpeed:310,
                    monsterImages:["enemy2"],
                    background:"background3"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"paluma",name:"paluma"},{x:this.game.world.centerX,y:100,key:"chaka",name:"chaka"},{x:this.game.world.centerX+150,y:100,key:"guaka",name:"guaka"},
                    {x:this.game.world.centerX-300,y:100,key:"quinilo",name:"quinilo"}],
                    rightAnswer:["chaka","paluma","quinilo"],
                    mustScore:3,
                    enemySpeed:320,
                    monsterImages:["enemy2"],
                    background:"background3"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"elephante",name:"elephante"},{x:this.game.world.centerX,y:100,key:"gamson",name:"gamson"},{x:this.game.world.centerX+150,y:100,key:"galagu",name:"galagu"},
                    {x:this.game.world.centerX-300,y:100,key:"koneho",name:"koneho"}],
                    rightAnswer:["koneho","galagu","gamson"],
                    mustScore:3,
                    enemySpeed:330,
                    monsterImages:["enemy2"],
                    background:"background3"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"guaka",name:"guaka"},{x:this.game.world.centerX,y:100,key:"haggan",name:"haggan"},{x:this.game.world.centerX+150,y:100,key:"elephante",name:"elephante"},
                    {x:this.game.world.centerX-300,y:100,key:"babui",name:"babui"},
                    {x:this.game.world.centerX+300,y:100,key:"kulepbla",name:"kulepbla"}],
                    rightAnswer:["elephante","guaka","babui","haggan"],
                    mustScore:4,
                    enemySpeed:340,
                    monsterImages:["enemy2"],
                    background:"background3"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"chaka",name:"chaka"},{x:this.game.world.centerX,y:100,key:"fanihi",name:"fanihi"},{x:this.game.world.centerX+150,y:100,key:"monkey",name:"maching"},
                    {x:this.game.world.centerX-300,y:100,key:"guihan",name:"guihan"},
                    {x:this.game.world.centerX+300,y:100,key:"haggan",name:"haggan"}],
                    rightAnswer:["maching","guihan","fanihi","chaka"],
                    mustScore:4,
                    enemySpeed:350,
                    monsterImages:["enemy2"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"snake",name:"kulepbla"},{x:this.game.world.centerX,y:100,key:"cow",name:"guaka"},{x:this.game.world.centerX+150,y:100,key:"elephant",name:"elephante"},
                    {x:this.game.world.centerX-300,y:100,key:"sheep",name:"quinilo"},
                    {x:this.game.world.centerX+300,y:100,key:"octopus",name:"gamson"}],
                    rightAnswer:["kulepbla","elephante","guaka","quinilo"],
                    mustScore:4,
                    enemySpeed:360,
                    monsterImages:["enemy3"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-150,y:100,key:"pig",name:"babui"},{x:this.game.world.centerX,y:100,key:"cat",name:"katu"},{x:this.game.world.centerX+150,y:100,key:"bird",name:"paluma"},
                    {x:this.game.world.centerX-300,y:100,key:"dog",name:"galagu"},
                    {x:this.game.world.centerX+300,y:100,key:"turtle",name:"haggan"}],
                    rightAnswer:["paluma","galagu","katu","babui"],
                    mustScore:4,
                    enemySpeed:400,
                    monsterImages:["enemy3"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"fish",name:"guihan"},{x:this.game.world.centerX-200,y:100,key:"carabao",name:"carabao"},{x:this.game.world.centerX-50,y:100,key:"crab",name:"panglao"},
                    {x:this.game.world.centerX+75,y:100,key:"koneho",name:"koneho"},
                    {x:this.game.world.centerX+200,y:100,key:"manok",name:"manok"},
                    {x:this.game.world.centerX+350,y:100,key:"worm",name:"ulo"}],
                    rightAnswer:["ulo","panglao","carabao","guihan"],
                    mustScore:4,
                    enemySpeed:400,
                    monsterImages:["enemy3"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"duck2",name:"nga nga"},{x:this.game.world.centerX-200,y:100,key:"chick",name:"puyitos"},{x:this.game.world.centerX-50,y:100,key:"lizard",name:"gecko"},
                    {x:this.game.world.centerX+75,y:100,key:"worm",name:"ulo"},
                    {x:this.game.world.centerX+200,y:100,key:"snake",name:"kulepbla"},
                    {x:this.game.world.centerX+350,y:100,key:"maching",name:"maching"}],
                    rightAnswer:["puyitos","nga nga","gecko","ulo"],
                    mustScore:4,
                    enemySpeed:400,
                    monsterImages:["enemy3"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"crab",name:"panglao"},{x:this.game.world.centerX-200,y:100,key:"cat",name:"katu"},{x:this.game.world.centerX-50,y:100,key:"lizard",name:"gecko"},
                    {x:this.game.world.centerX+75,y:100,key:"koneho",name:"koneho"},
                    {x:this.game.world.centerX+200,y:100,key:"octopus",name:"gamson"},
                    {x:this.game.world.centerX+350,y:100,key:"whale",name:"bayena"}],
                    rightAnswer:["katu","bayena","panglao","gamson"],
                    mustScore:4,
                    enemySpeed:400,
                    monsterImages:["enemy4"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"carabao",name:"carabao"},{x:this.game.world.centerX-200,y:100,key:"babui",name:"babui"},{x:this.game.world.centerX-50,y:100,key:"paluma",name:"paluma"},
                    {x:this.game.world.centerX+75,y:100,key:"duck2",name:"nga nga"},
                    {x:this.game.world.centerX+200,y:100,key:"kulepbla",name:"kulepbla"},
                    {x:this.game.world.centerX+350,y:100,key:"manok",name:"manok"}],
                    rightAnswer:["babui","carabao","manok","nga nga"],
                    mustScore:4,
                    enemySpeed:400,
                    monsterImages:["enemy4"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"galagu",name:"galagu"},{x:this.game.world.centerX-200,y:100,key:"kulepbla",name:"kulepbla"},{x:this.game.world.centerX-50,y:100,key:"monkey",name:"maching"},
                    {x:this.game.world.centerX+75,y:100,key:"elephante",name:"elephante"},
                    {x:this.game.world.centerX+200,y:100,key:"quinilo",name:"quinilo"},
                    {x:this.game.world.centerX+350,y:100,key:"lizard",name:"gecko"}],
                    rightAnswer:["kulepbla","galagu","maching","quinilo","elephante"],
                    mustScore:5,
                    enemySpeed:400,
                    monsterImages:["enemy4"],
                    background:"background2"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"guaka",name:"guaka"},{x:this.game.world.centerX-200,y:100,key:"turtle",name:"haggan"},{x:this.game.world.centerX-50,y:100,key:"sheep",name:"quinilo"},
                    {x:this.game.world.centerX+75,y:100,key:"octopus",name:"gamson"},
                    {x:this.game.world.centerX+200,y:100,key:"chaka",name:"chaka"},
                    {x:this.game.world.centerX+350,y:100,key:"worm",name:"ulo"}],
                    rightAnswer:["guaka","haggan","gamson","quinilo","ulo"],
                    mustScore:5,
                    enemySpeed:400,
                    monsterImages:["enemy4"],
                    background:"background4"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"manok",name:"manok"},{x:this.game.world.centerX-200,y:100,key:"chaka",name:"chaka"},{x:this.game.world.centerX-50,y:100,key:"dog",name:"galagu"},
                    {x:this.game.world.centerX+75,y:100,key:"lizard",name:"gecko"},
                    {x:this.game.world.centerX+200,y:100,key:"whale",name:"bayena"},
                    {x:this.game.world.centerX+350,y:100,key:"cow",name:"guaka"}],
                    rightAnswer:["gecko","chaka","galagu","bayena","guaka"],
                    mustScore:5,
                    enemySpeed:400,
                    monsterImages:["enemy4","enemy3","enemy2","enemy1"],
                    background:"background4"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"bird",name:"paluma"},{x:this.game.world.centerX-200,y:100,key:"snake",name:"kulepbla"},{x:this.game.world.centerX-50,y:100,key:"elephante",name:"elephante"},
                    {x:this.game.world.centerX+75,y:100,key:"duck2",name:"nga nga"},
                    {x:this.game.world.centerX+200,y:100,key:"koneho",name:"koneho"},
                    {x:this.game.world.centerX+350,y:100,key:"crab",name:"panglao"}],
                    rightAnswer:["elephante","koneho","nga nga","kulepbla","paluma"],
                    mustScore:5,
                    enemySpeed:400,
                    monsterImages:["enemy4","enemy3","enemy2","enemy1"],
                    background:"background4"
                },
            
                {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"haggan",name:"haggan"},{x:this.game.world.centerX-200,y:100,key:"gamson",name:"gamson"},{x:this.game.world.centerX-50,y:100,key:"fanihi",name:"fanihi"},
                    {x:this.game.world.centerX+75,y:100,key:"chick",name:"puyitos"},
                    {x:this.game.world.centerX+200,y:100,key:"carabao",name:"carabao"},
                    {x:this.game.world.centerX+350,y:100,key:"pig",name:"babui"}],
                    rightAnswer:["babui","gamson","puyitos","haggan","carabao","fanihi"],
                    mustScore:6,
                    enemySpeed:400,
                    monsterImages:["enemy4","enemy3","enemy2","enemy1"],
                    background:"background4"
                },
            
                 {
                    buttons:[{x:this.game.world.centerX-350,y:100,key:"fish",name:"guihan"},{x:this.game.world.centerX-200,y:100,key:"monkey",name:"maching"},{x:this.game.world.centerX-50,y:100,key:"quinilo",name:"quinilo"},
                    {x:this.game.world.centerX+75,y:100,key:"koneho",name:"koneho"},
                    {x:this.game.world.centerX+200,y:100,key:"crab",name:"panglao"},
                    {x:this.game.world.centerX+350,y:100,key:"paluma",name:"paluma"}],
                    rightAnswer:["guihan","quinilo","maching","koneho","panglao","paluma"],
                    mustScore:6,
                    enemySpeed:400,
                    monsterImages:["enemy4","enemy3","enemy2","enemy1"],
                    background:"background4"
                },
               
            
            ];
            
        
        this.maxLevel=24;
    },
  
  create:function(){
      //variables
      this.canGoNextLevel = false;
      this.levelData = this.map[this.currentLevel];
      this.lives=2;
      this.failedLevel = false;
      this.score=0;
      this.bulletTime=0;
      this.random=this.game.rnd.integerInRange(0,this.levelData.rightAnswer.length-1);
      this.nextAnimal=0;
      this.ataniDeathTween = false;
   
      
      //BACKGROUND

      this.background = this.game.add.sprite(0,0,this.levelData.background);
      this.game.stage.backgroundColor="#8296d1";
      
      this.muteButton = this.game.add.button(20, 20, 'mute',toggleSound, this);
      
      this.player = this.game.add.sprite(100,this.game.height-200,"atani");
      this.game.physics.arcade.enable(this.player);
      this.player.scale.setTo(0.3);

      
      
      
      this.player.body.setSize(this.player.width*2,this.player.height*2,50,this.player.height/2);
     
      this.enemies = this.game.add.group();
      this.enemies.enableBody = true;
    
      this.bullets = this.game.add.group();
      this.bullets.enableBody = true;
    
      this.homeButton = this.game.add.button(this.game.world.width-50,50,"home",goHome,this);
      this.homeButton.scale.setTo(0.3);
      this.homeButton.anchor.setTo(0.5);
      
      //SOUNDS
      this.hit = this.game.add.audio("hit");
      this.wrong = this.game.add.audio("ahe");
      this.right = this.game.add.audio("hungan");
      this.zombie1 = this.game.add.audio("zombie");
      this.zombie2 = this.game.add.audio("zombie2");
      this.zombie3 = this.game.add.audio("zombie3");
      this.zombie4 = this.game.add.audio("zombie4");
      this.backgroundMusic = this.game.add.audio("backgroundMusic");
      this.backgroundMusic.loop=true
      this.backgroundMusic.volume=0.2
      this.backgroundMusic.play();
      
      
      this.zombieSound=[this.zombie1,this.zombie2,this.zombie3,this.zombie4];
      for(var i=0;i<this.zombieSound.length;i++){
          this.zombieSound[i].volume=0.6;
      }
	  
	  this.soundArray = [this.zombie1,this.zombie2,this.zombie3,this.zombie4,this.hit,this.wrong,this.backgroundMusic];
     soundArray=this.soundArray;
      this.hit.volume=0.4;
      this.right.volume=0.4;
      
      this.createEnemy();
      this.buildMap();
     
  }, 
  
  update:function(){
    this.game.physics.arcade.overlap(this.bullets, this.enemies, this.collisionHandler, null, this);  
    this.game.physics.arcade.overlap(this.player, this.bullets, this.killBulletAgainstPlayer, null, this); 
    
    
    this.game.physics.arcade.overlap(this.player,this.enemies, this.playerAndEnemyCollide, null, this); 
    
    this.checkIfEnemyIsDead();
    this.enablingAndDisablingOfButtons();
     
    if(this.game.sound.mute){
        this.muteButton.frame=1;
    }else{
        this.muteButton.frame=0;
    }
    
    
     
       
    
    
   
    
  },
  
  createEnemy:function(){
      
      this.enemy = this.enemies.getFirstExists(false);
      
      if(!this.enemy){
          this.enemy = new fireballMatching.Enemy(this.game,this.game.world.width,this.game.height-200,this.levelData.monsterImages[this.game.rnd.integerInRange(0,this.levelData.monsterImages.length-1)],this.levelData.enemySpeed);
          this.enemies.add(this.enemy);
          
      }else{
          
          this.enemy.reset(this.game.world.width,this.game.height-200);
          
      }
      
         this.enemy.key=this.levelData.monsterImages[this.game.rnd.integerInRange(0,this.levelData.monsterImages.length-1)];
      
         this.enemy.loadTexture(this.levelData.monsterImages[this.game.rnd.integerInRange(0,this.levelData.monsterImages.length-1)],0);
         this.enemy.body.velocity.x = -this.levelData.enemySpeed;
         this.enemy.animations.add("walk",[0,1],5,true);
         this.enemy.animations.play("walk");
         var tween = this.game.add.tween(this.enemy).to({angle:-5},500).to({angle:0},500).to({angle:5},500).to({angle:0},500);
         tween.loop();
         tween.start();
         
         this.game.time.events.add(Phaser.Timer.SECOND*1,function(){
            this.zombieSound[this.game.rnd.integerInRange(0,this.zombieSound.length-1)].play();
         },this)
               
  },
  
  
  
  collisionHandler:function(bullet,enemy){
    var data = this.levelData.rightAnswer;
    
    bullet.kill();
    enemy.kill();
      
    this.right.play();
    enemy.explosion();
      
    
    this.score++;
    //console.log(this.score + " is the current SCORE");
    
    if(this.player.alive && this.score!=this.levelData.mustScore && enemy.alive==false){
        this.nextAnimal++;
        
        var newRightAnswer = data[this.nextAnimal];
        this.text.text=newRightAnswer.toUpperCase();
        this.sound = this.game.add.audio(newRightAnswer);
        
        
        this.playAnimalSound(this.sound);
        
        this.createEnemy();
    }else if(this.currentLevel==this.maxLevel){
        this.game.state.start("win");
    }
    
    
  },
  
  killBulletAgainstPlayer:function(player,bullet){
    if(this.lives>0){
        bullet.kill();
        this.hit.play();
        
        this.playerTween = this.game.add.tween(this.player.scale).to({x:0.4,y:0.4},100).yoyo(true);
        this.playerTween.onComplete.add(function(){
            this.playerTween=this.game.add.tween(this.player).to({x:this.player.x-50},100,Phaser.Easing.Exponential.Out);
            this.playerTween.start();
        },this);
        
        this.playerTween.start();
    }
    else{
        this.backgroundMusic.stop();
        bullet.kill();
        player.kill();
        this.hit.play();
        this.disableAnimalButtons();
    }
    
     this.lives--;
     //console.log(this.lives);
  },
  
  createBullet:function(x,y,direction,key){
           
      var bullet = this.bullets.getFirstExists(false);
      if(!bullet){
          bullet = new fireballMatching.Bullet(this.game,x,y,key);
          this.bullets.add(bullet);
      }else{
          bullet.reset(x,y);
      }
      bullet.key = key
      bullet.loadTexture(key,0);
      bullet.body.velocity.x=300;
      bullet.body.velocity.x=direction;
      bullet.checkWorldBounds = true;
      bullet.outOfBoundsKill = true;
      
      this.game.add.tween(bullet).to({angle:360},1000).loop(true).start();
      this.enableAnimalButtons();
      
      
      
  },
  
  buildMap:function(){
      
      var data = this.levelData.rightAnswer;
      //added animal button on screen
      this.animalButtons = this.game.add.group();
      var button;
      this.levelData.buttons.forEach(function(element){
          button = this.game.add.sprite(element.x,element.y,element.key);
          button.anchor.setTo(0.5);
          button.scale.setTo(0.3);
          button.inputEnabled = true;
          button.alpha=0;
          button.name=element.name;
          this.animalButtons.add(button);
         
      },this);
   
      
      
      
      //add text to screen
      
      this.text = this.game.add.text(this.game.world.centerX,this.game.world.centerY-100,this.levelData.rightAnswer[this.nextAnimal].toUpperCase(),{font:"100px Arial",fill:"#000"});
      this.text.anchor.setTo(0.5);
      
      //SHOW THE CORRECT OR FAIL 
      this.showCorrect = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY-50,"correct");
      this.showCorrect.scale.setTo(0);
      this.showCorrect.anchor.setTo(0.5);
      this.nextArrow = this.game.add.sprite(this.showCorrect.x,this.showCorrect.y+200,"nextButton");
      this.nextArrow.anchor.setTo(0.5);
      this.nextArrow.scale.setTo(0);
      
      this.showFail = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY-50,"fail");
      this.showFail.scale.setTo(0);
      this.showFail.anchor.setTo(0.5)
      this.retry = this.game.add.sprite(this.showFail.x,this.showFail.y+200,"retry");
      this.retry.anchor.setTo(0.5);
      this.retry.scale.setTo(0);
      
      
      
         //add a tween to show the animal buttons
      var animalButtonsTween
      this.animalButtons.forEach(function(element) {
          animalButtonsTween=this.game.add.tween(element).to({alpha:1},800,"Linear",true);
      },this)
      
      
      
       //check each button for event
      this.animalButtons.forEach(function(element){
           element.events.onInputDown.add(this.checkAnswer,this);
          if(this.showCorrect.scale>0 || this.showFail.scale>0){
              element.inputEnabled = false;
          }
      },this)
      
      
      
      //play sounds
      this.sound = this.game.add.audio(this.levelData.rightAnswer[this.nextAnimal]); 
      this.playAnimalSound(this.sound);
      
    
     
     
      
  },
  
  checkAnswer:function(sprite){
      if(sprite.name==this.levelData.rightAnswer[this.nextAnimal]){
          //console.log("Match");
          //console.log(sprite.name);
          this.createBullet(this.player.x+110,this.player.y+20,this.levelData.enemySpeed+300,"star");
          this.game.add.tween(this.player).to({x:this.player.x-20},100).yoyo(true).start();
         //play a sound
          
          
        
          
         
      }else{
          //console.log("no match");
          this.createBullet(this.enemy.x-40,this.enemy.y+50,-(this.levelData.enemySpeed+300),"fireball");
          //play a sound
          this.wrong.play();
          //console.log(sprite.name);
          
      }
      
      
 
 
  },
  
  goToNextLevel:function(){
       this.backgroundMusic.stop();
     
          this.currentLevel++;
          this.canGoNextLevel = false;
          
          if(this.currentLevel >this.maxLevel){
				//console.log("Game Finished");
				
			}else{
				if(this.currentLevel >= localStorage.getItem('bestLevel')){
				localStorage.setItem('bestLevel', this.currentLevel);
			    }
				
			}
      //console.log(this.currentLevel + "is the currentLevel from the goToNextLevel function");
      this.nextAnimal=0;
      this.game.state.start("game",true,false,this.currentLevel);
  },
  
  checkIfEnemyIsDead:function(){
      
       
       if(this.enemy.alive==false && !this.canGoNextLevel && this.player.alive){
           this.canGoNextLevel=true;
           
           if(this.canGoNextLevel && this.score==this.levelData.mustScore){
               this.disableAnimalButtons();
                this.backgroundMusic.stop();
               var tween = this.game.add.tween(this.showCorrect.scale).to({x:2,y:2},500,Phaser.Easing.Bounce.Out,true);
               this.game.add.tween(this.nextArrow.scale).to({x:1,y:1},500,Phaser.Easing.Bounce.Out,true);
              
              tween.onComplete.add(function(){
                    
                this.nextArrow.inputEnabled = true;
                this.nextArrow.events.onInputDown.add(function(){
                    this.enableAnimalButtons();
                    this.nextAnimal=0;
                    this.game.state.start("game",true,false,this.currentLevel);
                    this.goToNextLevel();
                },this);
              },this);
               
           }
          
      }
      else if(this.player.alive==false && !this.failedLevel){
          //disable buttons because the player is dead and tween an animation
           this.backgroundMusic.stop();
          this.failedLevel = true;
          this.disableAnimalButtons();
              var failTween = this.game.add.tween(this.showFail.scale).to({x:2,y:2},500,Phaser.Easing.Bounce.Out,true);
             this.game.add.tween(this.retry.scale).to({x:1,y:1},500,Phaser.Easing.Bounce.Out,true);
             
          
              failTween.onComplete.add(function(){
                            
                this.retry.inputEnabled = true;
                this.retry.events.onInputDown.add(function(){
                    
                    this.enableAnimalButtons();
                    this.failedLevel=false;
                    this.nextAnimal=0;
                    this.game.state.start("game",true,false,this.currentLevel);
                },this);
              },this);
               
           
      }
      
  },
  
  disableAnimalButtons:function(){
      this.animalButtons.forEach(function(element){
          element.inputEnabled = false;
      },this);
  },
  
  enableAnimalButtons:function(){
      this.animalButtons.forEach(function(element){
          element.inputEnabled = true;
      },this);
  },
  
  playAnimalSound:function(sprite){
      //console.log(sprite);
      sprite.play();
      
  },
  
  playerAndEnemyCollide:function(player,enemy){
       this.disableAnimalButtons();
      this.ataniDeathTween=true;
      var tween=this.game.add.tween(player).to({x:player.x+this.game.rnd.between(-20,100),y:player.y-100,rotation:10},1000,Phaser.Easing.Linear.None,true);
     
      tween.onComplete.add(function(){
          player.kill();
      },this);
      enemy.kill();
      this.hit.play();
     
      
  },
  
  
  particleBurst:function(pointer) {

    //  Position the emitter where the mouse/touch event was
    emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 10);

},
    
    enablingAndDisablingOfButtons:function(){
        if(this.bullets.total>=1){
              this.disableAnimalButtons();
          }else{
              this.enableAnimalButtons();
          }

          if(this.bullets.total>=1 && this.mustScore==this.score || this.ataniDeathTween){
              this.disableAnimalButtons();
              this.bullets.forEachAlive(function(element){
                  element.kill();
              },this);
          }

          if(this.score==this.levelData.mustScore && this.player.alive){
              this.disableAnimalButtons();
          }
        
        if(this.player.alive==false){
            this.disableAnimalButtons();
        }
        
    },
    
    
    helpPanel:function(){
         this.showHelp=true;
        this.overlayGroup =this.game.add.group();
        
        this.overlay = this.add.bitmapData(this.game.width,this.game.height);
        this.overlay.ctx.fillStyle="#000";
        this.overlay.ctx.fillRect(0,0,this.game.width,this.game.height);
        
       
        
        //sprite for the overlay
        this.panel = this.add.sprite(0,this.game.height,this.overlay);
        this.panel.alpha=0.55;
        this.overlayGroup.add(this.panel);
        
        //overlay rasing tween animation
        var gameOverPanel = this.game.add.tween(this.overlayGroup).to({y:0},500);
        
       // var background = this.game.add.sprite(0,0,"howTo");
          var howToText = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+25,"howToText");
          howToText.anchor.setTo(0.5);
         
        this.overlayGroup.add(howToText);
          var pointer = this.game.add.sprite(600,100,"pointer");
        this.overlayGroup.add(pointer);

          var tween = this.game.add.tween(howToText).to({angle:-5},1000).to({angle:0},1000).to({angle:5},1000).to({angle:0},1000);
          tween.loop();
          tween.start();


          tween = this.game.add.tween(pointer).to({x:pointer.x+100,y:pointer.y+50},800,"Linear").yoyo(true);
          tween.loop();
          tween.start();
        
          this.game.input.onDown.addOnce(this.hidePanel,this);
        
        this.enemies.forEachAlive(function(element){
            element.body.velocity.x=0;
        },this);
       
    },
    
    hidePanel:function(){
        this.showHelp=false;
        this.overlayGroup.y=this.game.height;
        this.enemies.forEachAlive(function(element){
            element.body.velocity.x=-this.levelData.enemySpeed;
        },this);
       
        
    },
	
	stopSounds:function(){
		this.soundArray.forEach(function(element){
			element.stop();
		},this);
	},
        
};

var stopSounds= function(){
	this.soundArray.forEach(function(element){
		element.stop();
	},this)
}

var goHome= function(){
		stopSounds();
       this.game.state.start("mainMenu");
    }