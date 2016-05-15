export function addRain(game) {

    let rainParticle = game.add.bitmapData(15, 50)

    rainParticle.ctx.rect(0, 0, 15, 50)
    rainParticle.ctx.fillStyle = '#9cc9de'
    rainParticle.ctx.fill()

    let emitter = game.add.emitter(game.world.centerX, -300, 150)

    emitter.width = game.world.width
    emitter.angle = 5

    emitter.makeParticles(rainParticle)

    emitter.minParticleScale = 0.1
    emitter.maxParticleScale = 0.3

    emitter.setYSpeed(600, 1000)
    emitter.setXSpeed(0, 0)

    emitter.minRotation = 0
    emitter.maxRotation = 0

    emitter.start(false, 1600, 5, 0)
}

export function addSnow(game) {

    let snowParticle = game.add.bitmapData(20, 20)

    snowParticle.circle(10, 10, 10)
    snowParticle.ctx.fillStyle = '#9cc9de'
    snowParticle.ctx.fill()

    let emitter = game.add.emitter(game.world.centerX, -300, 1000)

    emitter.width = game.world.width
    emitter.angle = 0

    emitter.makeParticles(snowParticle)

    emitter.minParticleScale = 0.1
    emitter.maxParticleScale = 0.4

    emitter.setYSpeed(5, 20)
    emitter.setXSpeed(0, 0)

    emitter.minRotation = 0
    emitter.maxRotation = 0

    emitter.start(false, 10000, 5, 0)
}
