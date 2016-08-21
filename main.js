var fireballMatching = fireballMatching || {};
//fireballMatching.dim = fireballMatching.getGameLandscapeDimensions(960,640);
//fireballMatching.game = new Phaser.Game(fireballMatching.dim.w,fireballMatching.dim.h,Phaser.AUTO);
fireballMatching.game = new Phaser.Game(960,640,Phaser.CANVAS);
fireballMatching.game.state.add("boot",fireballMatching.Boot);
fireballMatching.game.state.add("preload",fireballMatching.Preload);
fireballMatching.game.state.add("mainMenu",fireballMatching.mainMenu);
fireballMatching.game.state.add("mainMenu2",fireballMatching.mainMenu2);
fireballMatching.game.state.add("win",fireballMatching.Win);
fireballMatching.game.state.add("howTo",fireballMatching.howTo);
fireballMatching.game.state.add("kjdesigns",fireballMatching.kjdesigns);
fireballMatching.game.state.add("game",fireballMatching.Game);

fireballMatching.game.state.start("boot");
