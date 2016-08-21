var fireballMatching = fireballMatching || {};
fireballMatching.Win ={
    create:function(){
       var background = this.game.add.sprite(0,0,"win");
       var gameOver=this.game.add.sprite(this.game.world.centerX,200,"gameOver");
       gameOver.anchor.setTo(0.5);
      
      this.homeButton = this.game.add.button(this.game.world.width-50,50,"home",goHome,this);
      this.homeButton.scale.setTo(0.3);
      this.homeButton.anchor.setTo(0.5);
        
        
        var atani = this.game.add.sprite(this.game.world.centerX,this.game.world.height-200,"atani");
        atani.anchor.setTo(0.5);
        
       
    }
    
    
};