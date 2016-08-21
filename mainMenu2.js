var fireballMatching = fireballMatching || {};
fireballMatching.mainMenu2 = {
    
    
    create:function(){
        this.currentPage=2
        var background = this.game.add.sprite(0,0,"background");
        this.muteButton = this.game.add.button(20, 20, 'mute', this.toggleSound, this);
        
        this.nextButton = this.game.add.button(30,this.game.world.centerY,"arrow",this.goToNextPage,this);
        this.nextButton.anchor.setTo(0.5);
        this.nextButton.scale.setTo(-1,1)
        
     
        
         var logo = this.game.add.sprite(this.game.world.centerX,50,"logo");
        logo.anchor.setTo(0.5);
        
        this.counter = 12;
		this.buttons =[];
		this.buttonGrp =  this.game.add.group();
        
        if(this.game.device.localStorage)
		{
			var bestLevel = localStorage.getItem('bestLevel');
			if(bestLevel == null)
			{
				localStorage.setItem('bestLevel', 1);
				this.level = 1;
			}else
			{
					this.level = localStorage.getItem('bestLevel');
			}
		
		}
		
		
		for(var i=0; i<3;i++)
			{
				
				for(var t=0; t<4;t++)
				{
					var but = this.game.add.sprite(150+t*200,160+i*140, 'latte');
					
					this.counter ++;
					//text =''+counter;
					but.name = 'but_'+this.counter;
					but.lev = this.counter;
					this.txt = this.game.add.text(150+t*200 + 60, 160+i*140+60, this.counter, {font:"18px Arial",fill:"#000"});
					this.buttons.push(but);
					
				
					if(this.counter<= localStorage.getItem('bestLevel'))
					{ 
					but.inputEnabled = true;
					but.events.onInputDown.add(this.listener,this);
					}else
					{
						but.inputEnabled = false;
						but.alpha =0.5;
						
					}
					
				
				
    				this.buttonGrp.add(but);
    				this.buttonGrp.add(this.txt);
				}
				
			}
		
    },
    
    listener:function(target){
    	this.currentLevel=target.lev-1;
    	console.log(this.currentLevel);
    	this.game.state.start("game",true,false,this.currentLevel);
    },
    
    toggleSound:function(){
        this.game.sound.mute=!this.game.sound.mute;
        this.muteButton.frame=this.game.sound.mute ? 1 : 0;
        
    },
     goToNextPage:function(){
       
        this.game.state.start("mainMenu");
    }
    
    
    

    
}
