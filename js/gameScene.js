/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Game Scene

class GameScene extends Phaser.Scene{
  constructor (){
    super({ key: 'gameScene'})
  }

  init (data){
  }

  preload(){
    console.log('Game Scene')
  }

  create (data){
    this.gameSceneBackgroundImage = this.add.sprite(0,0, 'gameSceneBackground')
    this.gameSceneBackgroundImage.x = 1920/2
    this.gameSceneBackgroundImage.y = 1080/2
  }

  update(time, delta){ 
  }
 } 

  export default GameScene
