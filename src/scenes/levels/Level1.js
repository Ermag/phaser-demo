import backgroundImg from '../../assets/background.jpg'

class Level1 extends Phaser.Scene {
    constructor () {
        super('Level1')
    }

    init(data) {}

    preload () {
        this.load.image('background', backgroundImg)
    }

    create (data)  {
        this.add.sprite(0, 0, 'background').setOrigin(0, 0)
    }
    
    update(time, delta) {}
}


export default Level1