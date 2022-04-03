/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene{
  constructor (){
    super('splashScene')
  }

  init (data){
    this.load.image('./Assets/logo.PNG')
  }

  preload(){

    console.log('Splash Scene')
  }

  create (data){
  }

  update(time, delta){ 
  }
 } 

  export default SplashScene
