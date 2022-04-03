/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene{
  constructor (){
    super({ key: 'splashScene'})
  }
  
  init (data){  
  }

  preload(){
    this.load.image('splashSceneBackground', 'Assets/logo.PNG')
    //this.load.audio('musicMenu', 'Assets/Sounds/alien.mp3')
    console.log('Splash Scene')

  }

  create (data){
    this.splashSceneBackgroundImage = this.add.sprite(0,0, 'splashSceneBackground').setScale(2)
    this.splashSceneBackgroundImage.x = 1920/2
    this.splashSceneBackgroundImage.y = 1080/2
    //musicMenu = this.sound.add('musicMenu')

  }

  update(time, delta){ 
    if(time == 0){
          musicMenu.play()
    }
    if(time >= 5000){
          this.scene.switch('titleScene')
    }
  }
 } 

  export default SplashScene
