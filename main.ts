for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 95)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 95)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    basic.pause(450)
}
maqueen.motorStop(maqueen.Motors.M1)
maqueen.motorStop(maqueen.Motors.M2)
