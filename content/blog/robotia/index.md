+++
authors = ["B.E. Alejandro"]
title = "TARS - Intelligent Robotic Assistant"
description = "This project aims to create a functional replica of TARS"
date = 2024-05-23
[taxonomies]
tags = ["Idea", "Project", "robot"]
+++

## Project Summary

This project aims to create a functional replica of TARS, the assistant robot featured in the movie *Interstellar*. The system is powered by artificial intelligence, allowing it to hold natural conversations and emulate emotional responses. The design is based on the [Hackster.io project](https://www.hackster.io/charlesdiaz/how-to-build-your-own-replica-of-tars-from-interstellar-224833#cad), with significant improvements in mobility, interaction, and AI capabilities.

---

## Project Versions

### TARS V1

The initial version was my first attempt at a self-propelled miniature replica. Although many implemented ideas were untested, it served as a fundamental base for further development.

#### Main Components
- **Computer**: Raspberry Pi 3B+ with Raspbian
- **Servomotors**: Four high-torque metal gear servos
- **Controller**: Adafruit PCA-9685 for servo management
- **Power Supply**: Two 8-cell NiMH battery packs (7.2 V) in parallel
- **Display**: 5" HDMI monitor
- **Control**: Bluetooth controller 8BitDo Zero 2

#### Structure
The V1 chassis was built with a spine-like framework using aluminum extrusion "spines" as the structural base. 3D-printed polycarbonate pieces were mounted on this base to define the robot's general shape and drivetrain.

#### Identified Limitations
- Heavy, jerky steps due to NiMH battery weight
- Poor weight distribution (heavy components concentrated in torso)
- Underdeveloped walking program
- 3D-printed components prone to breaking on impact

---

## Control System

### Software Architecture

The control system is organized into three main layers:

1. **Servo Controller**: Manages basic servo movements
2. **Servo Abstractor**: Combines basic movements to create complex functions
3. **TARS Runner**: Handles communication with the remote control and command execution

#### Servo Abstractor
This program takes basic servo movements and combines them to automate complex motion functions:

```python
import time 
import TARS_Servo_Controller3
    
def stepForward():
    TARS_Servo_Controller3.height_neutral_to_up()
    TARS_Servo_Controller3.torso_neutral_to_forwards()
    TARS_Servo_Controller3.torso_bump()
    TARS_Servo_Controller3.torso_return()
    
def turnRight():
    TARS_Servo_Controller3.neutral_to_down()
    TARS_Servo_Controller3.turn_right()
    TARS_Servo_Controller3.down_to_neutral()
    TARS_Servo_Controller3.neutral_from_right()
    
def turnLeft(): 
    TARS_Servo_Controller3.neutral_to_down()
    TARS_Servo_Controller3.turn_left()
    TARS_Servo_Controller3.down_to_neutral()
    TARS_Servo_Controller3.neutral_from_left()
    
def pose():
    TARS_Servo_Controller3.neutral_to_down()
    TARS_Servo_Controller3.torso_neutral_to_backwards()
    TARS_Servo_Controller3.down_to_up()

def unpose():
    TARS_Servo_Controller3.torso_return2()

```

## Planned Improvements for TARS V2

### Hardware
- Replace NiMH batteries with lighter LiPo packs
- Improve structural design for better weight distribution
- Higher precision, lower-consumption servos
- Higher-resolution OLED display with lower energy consumption

### Software
- Integrate conversational AI model based on transformers
- Voice recognition system for spoken commands
- Facial expressions on display for emotional communication
- Enhanced walking algorithms for smoother movement

### Interaction
- Ability to answer complex questions
- Adjustable personality parameters (humor, sarcasm, etc.)
- Facial recognition to identify users
- Integration with home automation systems

---

## Technical Challenges

### Mobility
The main challenge has been the lifting mechanism. In the initial version, the legs contacted the ground and got stuck, preventing walking. The solution was to enlarge rectangular channels in the square holes through which the main shaft rotates, allowing both the shaft and legs to move vertically relative to the torso module.

### Balance and Stability
Weight distribution and center of gravity are critical for proper function. Careful component placement is required to avoid falling during movement.

### Power Consumption
Battery life is limited due to high servo power usage. Optimizing energy consumption is a priority for future versions.

---

## Next Steps

### Structural Redesign
- Optimize weight distribution
- Reduce total system weight
- Improve durability of critical components

### Mobility Enhancements
- Develop more efficient walking algorithms
- Implement obstacle detection
- Add capability to navigate various terrains

### Advanced AI Integration
- Implement conversational model using LLM
- Develop voice recognition system
- Create visual interface for facial expressions

### Energy Optimization
- Transition to LiPo batteries
- Implement power-saving modes
- Optimize electronic component consumption

---

> [!TIP]  
> "I don't need a robot to tell me how important humans are." – Cooper, *Interstellar*

---

## References and Resources
- [Original Hackster.io Project](https://www.hackster.io/charlesdiaz/how-to-build-your-own-replica-of-tars-from-interstellar-224833#cad)
