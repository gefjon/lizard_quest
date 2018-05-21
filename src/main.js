'use strict'

import 'babel-polyfill'

import(/* webpackChunkName: "phaser", webpackPrefetch: true */ 'phaser')
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

    function preload () {}

    function create () {}
  })
