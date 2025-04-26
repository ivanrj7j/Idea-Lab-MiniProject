from machine import Pin
from utime import sleep

def getMessage():
    # used to simualte recieving a message from another server 
    return "Hello World!"

def toBinary(inputString):
    binaryString = ''
    for char in inputString:
        binaryString += '{0:08b}'.format(ord(char))
    return binaryString.strip()


led = Pin(21, Pin.OUT)

for state in toBinary(getMessage()):
    if state == '1':
        led.on()
    else:
        led.off()
    sleep(0.5)
