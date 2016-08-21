var fireballMatching = fireballMatching || {};
fireballMatching.Enemy=function(game,x,y,key){
    Phaser.Sprite.call(this,game,x,y,key);
    
     this.game = game;
   
    //enable physics
    this.game.physics.arcade.enable(this);
    this.game.add.existing(this);
    
   
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.scale.setTo(0.5);
  
    
    
    
};

fireballMatching.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
fireballMatching.Enemy.prototype.constructor = fireballMatching.Enemy;

fireballMatching.Enemy.prototype.explosion=function(){
    
        var emitter = this.game.add.emitter(this.x+50, this.y+50, 100);
    emitter.makeParticles('square2');
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity = 0;
    emitter.start(true, 500, null, 100);
    
    
}