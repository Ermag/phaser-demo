import Phaser from 'phaser'
import Scenes from './scenes'

const GAME = new Phaser.Game({
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 800,
	height: 600,
	scene: Scenes
})

export default GAME
