import Button from '../../entities/Button'
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
        const playButton = new Button({
            scene: this,
            key: 'button',
            x: 140,
            y: 180
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