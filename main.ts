let text = ""
basic.forever(function () {
    text = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(text)
    serial.writeLine(text)
})
