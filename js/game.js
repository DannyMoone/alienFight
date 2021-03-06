/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is Paser3 configuration file


//paso 1 importamos escena
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'


//paso 2 (Referencia) Escenas del juego
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()

//* Game scene*/
const config = {
  type: Phaser.AUTO, 
  pixelArt: true,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade:  {
      debug: true
    }
  },
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config)


//paso 3 (agregar escena particular) Cargamos escena
game.scene.add('splashScene' , splashScene)
game.scene.add('titleScene' , titleScene)
game.scene.add('menuScene' , menuScene)
game.scene.add('gameScene' , gameScene)

// start tittle
game.scene.start('splashScene')
