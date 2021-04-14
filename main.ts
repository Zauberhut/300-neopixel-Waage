input.onButtonPressed(Button.A, function () {
    AnzahlPixel += -1
})
function Display () {
    if (onoff == 1) {
        if (Position >= striplaenge * 0.75) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . . .
                . . . . .
                . . # . .
                `)
        } else if (Position >= striplaenge * 0.5) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (Position >= striplaenge * 0.25) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    AnzahlPixel += 1
})
function colorshuffle () {
    randomcolor = randint(1, 2)
    if (randomcolor == 1) {
        rot = 200
        gruen = 240
        blau = 0
    } else if (randomcolor == 2) {
        rot = 0
        gruen = 200
        blau = 0
    } else if (randomcolor == 3) {
        rot = 0
        gruen = 200
        blau = 0
    } else if (randomcolor == 4) {
        rot = 0
        gruen = 200
        blau = 200
    } else if (randomcolor == 5) {
        rot = 0
        gruen = 0
        blau = 200
    } else if (randomcolor == 6) {
        rot = 200
        gruen = 0
        blau = 200
    } else {
        rot = 200
        gruen = 200
        gruen = 200
    }
}
let blau = 0
let gruen = 0
let rot = 0
let randomcolor = 0
let Position = 0
let onoff = 0
let striplaenge = 0
striplaenge = 150
let strip = neopixel.create(DigitalPin.P0, striplaenge, NeoPixelMode.RGB)
let range = strip.range(0, 60)
let AnzahlPixel = 3
onoff = 1
Position = strip.length() - strip.length()
randomcolor = 1
let tempo = 1
basic.forever(function () {
    strip.clear()
    Position += -1 * tempo
    Position = Math.constrain(Position, 0, striplaenge - AnzahlPixel)
    if (input.isGesture(Gesture.Shake)) {
        colorshuffle()
    }
    AnzahlPixel = Math.constrain(AnzahlPixel, 1, striplaenge)
    for (let Index = 0; Index <= striplaenge; Index++) {
        strip.setPixelColor(Index, neopixel.rgb(0, 0, 25))
    }
    for (let Index = 0; Index <= AnzahlPixel - 1; Index++) {
        strip.setPixelColor(Index + Position, neopixel.rgb(rot, gruen, blau))
    }
    strip.show()
})
basic.forever(function () {
	
})
