import logoImg from '../../assets/logo.png'
import buttonSprite from '../../assets/buttons.png'

class SplashScreen extends Phaser.Scene {
    constructor () {
        super('Splash')
    }

    init(data) {}

    preload () {
        this.load.spritesheet('button', buttonSprite, { frameWidth: 193, frameHeight: 71 })
        this.load.image('logo', logoImg)
    }

    create (data)  {
        // this.add.existing(new buttonSprite(100, 100, 'button'), function () { // do smth })
        const playButton = this.add.sprite(100, 100, 'button', 0).setInteractive()

        playButton.on('pointerover', function () {
            this.setFrame(2)
        })

        playButton.on('pointerout', function () {
            this.setFrame(0)
        })

        playButton.on('pointerdown', function () {
            this.setFrame(1)
        })

        playButton.on('pointerup', function () {
            this.scene.start('Level1')
        }, this)

        const logo = this.add.image(400, 150, 'logo')

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        })
    }
    
    update(time, delta) {}
}


export default SplashScreen