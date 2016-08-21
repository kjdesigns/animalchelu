var fireballMatching = fireballMatching || {};
fireballMatching.kjdesigns = {
  create:function(){
       this.game.add.sprite(0,0,'');
      this.game.stage.backgroundColor="#FFFFFF";
      this.logo = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"kjdesigns");
      this.logo.anchor.setTo(0.5);
      this.logo.scale.setTo(0.4);
      
//       this.mainText = this.add.bitmapText(this.world.centerX,this.game.world.centerY+200,"font","TOUCH TO START",50);
//            this.mainText.anchor.setTo(0.5);
//            this.mainText.smoothed = false;
      
       this.mainText = this.add.text(this.world.centerX,this.game.world.centerY+200,"TOUCH TO START",{font:"50px Arial",fill:"#000000"});
            this.mainText.anchor.setTo(0.5);
            
            
        this.mainText.inputEnabled = true;
        this.game.input.onDown.add(function(){
            this.startGame();
        },this);
        //this.mainText.tint="#000000";
      
  },
  
  startGame:function(){
      this.game.state.start("howTo");
  }
    
    
    
};