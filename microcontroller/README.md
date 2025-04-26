# Microcontroller LED Binary Message Display

This project demonstrates how to use a microcontroller (ESP32) to display a binary representation of a message using an LED. The LED blinks in a pattern corresponding to the binary encoding of the message.

## Features

- Converts a string message into its binary representation.
- Uses an LED to visually display the binary sequence (ON for `1`, OFF for `0`).
- Implements a delay between each binary state for clear visibility.

## Components Used

- **ESP32 Microcontroller**: Executes the code and controls the LED.
- **LED**: Displays the binary sequence.
- **Resistor**: Limits current to the LED to prevent damage.

## How It Works

1. The `getMessage()` function simulates receiving a message (e.g., "Hello World!").
2. The `toBinary()` function converts the message into its binary representation.
3. The binary sequence is iterated, and the LED is turned ON for `1` and OFF for `0` with a delay of 0.5 seconds between states.

## Circuit Diagram

The circuit includes:
- An ESP32 microcontroller.
- An LED connected to GPIO pin 21.
- A resistor in series with the LED to limit current.

Refer to the `diagram.json` file for the detailed circuit layout.

## Simulation

This project can be simulated on [Wokwi](https://wokwi.com). The simulation file is available in `wokwi-project.txt`.

## How to Run

1. Connect the components as per the circuit diagram.
2. Upload the `main.py` script to the ESP32 microcontroller.
3. Power the ESP32 and observe the LED blinking in the binary pattern of the message.

## Files

- `main.py`: Contains the Python code for the microcontroller.
- `diagram.json`: Describes the circuit layout for simulation.
- `wokwi-project.txt`: Link to simulate the project on Wokwi.

## License

This project is licensed under the MIT License.