var fireballMatching = fireballMatching || {};
fireballMatching.Bullet=function(game,x,y,key){
    Phaser.Sprite.call(this,game,x,y,key);
    
     this.game = game;
   
    //enable physics
    this.game.physics.arcade.enable(this);
    this.game.add.existing(this);
    
   
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    
  
    
    
    
};

fireballMatching.Bullet.prototype = Object.create(Phaser.Sprite.prototype);
fireballMatching.Bullet.prototype.constructor = fireballMatching.Bullet;

