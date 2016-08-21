var fireballMatching = fireballMatching || {};
fireballMatching.howTo = {
	preload:function(){
		if(screen.width<1500){
			this.game.scale.forceOrientation(true,false);
		}
	},
	
  create:function(){
      var background = this.game.add.sprite(0,0,"howTo");
      var howToText = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+25,"howToText");
      howToText.anchor.setTo(0.5);
      
      var pointer = this.game.add.sprite(600,100,"pointer");
      
      
      var tween = this.game.add.tween(howToText).to({angle:-5},1000).to({angle:0},1000).to({angle:5},1000).to({angle:0},1000);
      tween.loop();
      tween.start();
      
//      tween = this.game.add.tween(pointer).to({x:pointer.x+100,y:pointer.y+50},800).to({x:pointer.x-100,y:pointer.y-50},800);
//      tween.loop();
//      tween.start();
      
      
      tween = this.game.add.tween(pointer).to({x:pointer.x+100,y:pointer.y+50},800,"Linear").yoyo(true);
      tween.loop();
      tween.start();
      
      this.game.input.onDown.add(function(){
          this.game.state.start("mainMenu");
      },this);
      
	  this.setListeners();
  },
  
  setListeners:function(){
       if(screen.width<1500){
           this.game.scale.enterIncorrectOrientation.add(this.wrongWay,this);
       } 
        
        this.game.scale.leaveIncorrectOrientation.add(this.rightWay,this);
    },
    
    wrongWay:function(){
        document.getElementById("wrongWay").style.display="block";
		this.game.paused = true;
		
    },
    rightWay:function(){
        document.getElementById("wrongWay").style.display="none";
		this.game.paused = false;
    },
  
    
    
};