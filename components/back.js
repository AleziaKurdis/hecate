"use strict";
//
//  back.js
//
//  Created by Alezia Kurdis, May 2nd, 2021.
//  Copyright 2021 Vircadia and contributors.
//  Copyright 2024 Overte e.V.
//
//  3d portals to go back.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
(function(){

    var ROOT = Script.resolvePath('').split("back.js")[0];
    var teleporterSoundFileUrl = ROOT + "tpsound.mp3";
    var teleportSound;


    function playSound() {
        Audio.playSound(teleportSound, { volume: 0.3, localOnly: true });
    };
    
    this.preload = function(entityID) {
        teleportSound = SoundCache.getSound(teleporterSoundFileUrl);
        
    }

    this.enterEntity = function(entityID) {
        
        playSound();

        var timer = Script.setTimeout(function () {
            location.goBack();
        }, 3000);            
         
      
    }; 
    
    this.leaveEntity = function(entityID) {
        //do nothing.
    };
    
    
})
