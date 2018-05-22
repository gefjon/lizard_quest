'use strict'

import 'babel-polyfill'
import medival_atlas_img from '../assets/medival.png'
import medival_atlas_json from '../assets/medival.json'

import(
  /*
  webpackChunkName: "phaser",
  webpackPrefetch: true,
  webpackPreload: true
  */
  'phaser'
)
  .then(Phaser => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    }

    const game = new Phaser.Game(config)

    function preload () {
      this.load.atlas('medival', medival_atlas_img, medival_atlas_json)
    }

    function create () {}
  })
