"use strict";
//
//  teleporter.js
//
//  Created by Alezia Kurdis, April 19th, 2021.
//  Copyright 2021 Vircadia and contributors.
//  Copyright 2024 Overte e.V.
//
//  Generic 3d portals.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
(function(){

    var ROOT = Script.resolvePath('').split("teleporter.js")[0];
    var teleporterSoundFileUrl = ROOT + "tpsound.mp3";
    var teleportSound;
    var portalData;
    var placeHistorySettingValue;
    var placeHistorySettingName = "3D_GOTO_PLACES_HISTORY";
    var defaultPlaceHistorySettingValue = { "visitedPlacesHistory": [] };
    var MAX_PLACE_HISTORY_ELEMENTS = 30;

    function playSound() {
        Audio.playSound(teleportSound, { volume: 0.3, localOnly: true });
    };
    
    this.preload = function(entityID) {
        teleportSound = SoundCache.getSound(teleporterSoundFileUrl);

        var properties = Entities.getEntityProperties(entityID, "userData");
        portalData = JSON.parse(properties.userData);
        
        placeHistorySettingValue = Settings.getValue(placeHistorySettingName, defaultPlaceHistorySettingValue); 
    }

    this.enterEntity = function(entityID) {


      if (portalData.address.length > 0) {
        playSound();

        updateVisitedPlacesHistorySetting(portalData.placeID);
        
        var timer = Script.setTimeout(function () {
            Window.location = "hifi://" + portalData.address;
        }, 3000);

      }
      
    }; 
    
    this.leaveEntity = function(entityID) {
        //do nothing.
    };
    
    function updateVisitedPlacesHistorySetting(id) {
        var newVisitedPlacesHistory = [];
        newVisitedPlacesHistory.push(id);

        for (var j = 0; j < placeHistorySettingValue.visitedPlacesHistory.length; j++) {
            if (newVisitedPlacesHistory.length < MAX_PLACE_HISTORY_ELEMENTS) {
                newVisitedPlacesHistory.push(placeHistorySettingValue.visitedPlacesHistory[j]);
            } else {
                break;
            }
        }

        var newSettingValue = { "visitedPlacesHistory": newVisitedPlacesHistory };
        Settings.setValue(placeHistorySettingName, newSettingValue);
    }
    
})
