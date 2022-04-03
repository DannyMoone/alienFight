/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is Paser3 configuration file


//* Game scene*/
const config = {
  type: Phaser.AUTO, 
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade:  {
      debug: true
    }
  },

  backgroundColor: 0x5f6e7a,
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

const game = new Phaser.Game(config)
console.log(game)