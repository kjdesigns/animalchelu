var fireballMatching = fireballMatching || {};
fireballMatching.Boot = {
    
    init:function(){
  
        
        
    },
    
    preload:function(){
        this.game.load.image("ibb","assets/ibbturtle2.png");
        this.game.load.image("ibb2","assets/ibbturtle.png");
    },
    
    create:function(){
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        if(!this.game.device.desktop){
            this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.setMinMax(this.game.width/2,this.game.height/2,this.game.width*2,this.game.height*2);
            document.body.style.backgroundColor="#000000";
        }
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
//        this.game.scale.pageAlignHorizontally = true;
//        this.game.scale.pageAlignVertically = true;
//        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        this.game.state.start("preload");
       
    }
    
}