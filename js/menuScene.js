/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene{
  constructor (){
    super({ key: 'menuScene'})

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data){
  }

  preload(){
    this.load.image('menuSceneBackground', 'Assets/aliens_screen_image2.jpg')
    this.load.image('startButton', 'Assets/start.png')
    console.log('Menu Scene')
  }


  create (data){
    this.menuSceneBackgroundImage = this.add.sprite(0,0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920/2
    this.menuSceneBackgroundImage.y = 1080/2

    this.startButton = this.add.sprite(1920/2, (1080/2) +100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true})
    this.startButton.on('pointerDown', () => this.clickButton())
    
  }

  update(time, delta){ 
  }

  clickButton(){
    this.scene.start('gameScene')
  }
 } 

  export default MenuScene
