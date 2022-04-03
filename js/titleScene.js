/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene{
  constructor (){
    super({ key: 'titleScene'})
  }

  init (data){
    this.camera.main.setBackgroundColor('#ffffff')
  }

  preload(){
    console.log('title Scene')
  }

  create (data){
  }

  update(time, delta){ 
  }
 } 

  export default TitleScene
