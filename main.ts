enum RadioMessage {
    Play01 = 34283,
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    Farbe = receivedNumber
    if (receivedNumber == 3) {
        serialmp3.playMp3TrackFromFolder(2, 1, Mp3Repeat.Forever)
    } else if (receivedNumber == 1) {
        serialmp3.playMp3TrackFromFolder(1, 1, Mp3Repeat.Forever)
    } else if (receivedNumber == 0) {
        serialmp3.playMp3TrackFromFolder(3, 1, Mp3Repeat.Forever)
    } else {
        serialmp3.runMp3Command(Mp3Command.PAUSE)
    }
})
function Play () {
	
}
let Farbe = 0
radio.setGroup(1)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.forever(function () {
    basic.showNumber(Farbe)
})
basic.forever(function () {
	
})
