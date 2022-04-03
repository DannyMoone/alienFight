/* global Phaser*/

//Cpyright (c) 2022 Turing Games All rights reserved
//
// Created by: Daniel Murillo
// Created on: Apr 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene{
  constructor (){
    super({ key: 'titleScene'})

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.tittleSceneTextStyle = { font:'200px Times', fill:'#fde4b9', align:'center', fontFamily:'Verdana', offsetX:'5'}
  }

  init (data){
  }

  preload(){
    this.load.image('titleSceneBackground', 'Assets/aliens_screen_image.jpg')
    console.log('Title Scene')
  }

  create (data){
    this.titleSceneBackgroundImage = this.add.sprite(0,0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920/2
    this.titleSceneBackgroundImage.y = 1080/2

    this.titleSceneText = this.add.text(1920/2, (840), 'Space Aliens', this.tittleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta){ 
        if(time >= 9000){
          this.scene.switch('menuScene')
  }
 } 
}

  export default TitleScene
