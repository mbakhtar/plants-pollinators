let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(bugVisits)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
