+++
authors = ["B.E. Alejandro"]
title = "Autonomous Drone"
description = "The goal of this project is to develop a UAV"
date = 2024-05-19
[taxonomies]
tags = ["Idea", "Project", "drone"]
+++

## Project Summary

The goal of this project is to develop a **fixed-wing UAV** based on the **Eclipson Pathfinder** model for surveillance and reconnaissance missions. The aim is to create a system that can operate **fully autonomously**, respond to commands to reach specific waypoints, and, once in position, allow manual control or continue in automatic mode while analyzing the environment.

The system is designed to be **efficient and low-cost**, using only the essential components to maximize flight autonomy and functionality.

#Drone #UAV #Autonomy #Surveillance #ArduPilot #AI #RaspberryPi

---

## Key Features

### Autonomous Navigation
- Autonomous flight system with **Cube Orange + Here3 GPS**
- Ability to follow predefined routes with multiple waypoints
- Obstacle avoidance and alternative path algorithms

### Operating Modes
- **Autonomous mode**: Navigation to a designated point without human intervention
- **Loiter mode**: Holds position over the area of interest while analyzing the environment
- **Manual control**: Ability to take control using a **FrSky Taranis X9D** transmitter
- **Automatic return**: Returns to home on low battery or loss of signal

### Transmission and Analysis
- Real-time FPV video transmission via **DJI FPV Air Unit**
- Optional image analysis using **Raspberry Pi 4 + 4G/LTE module** for people and vehicle detection
- Bidirectional telemetry for monitoring and real-time adjustments

---

## Essential Components

### 1️⃣ Structure and Propulsion

| Component   | Specification             | Function                                   |
|-------------|---------------------------|--------------------------------------------|
| Frame       | **Eclipson Pathfinder**   | 3D-printed or kit aerodynamic structure    |
| Motor       | **T-Motor AT2312 KV1400** | Main propulsion with high efficiency       |
| Propeller   | **APC 7x4**               | Optimized for efficiency and thrust        |
| ESC         | **T-Motor 30A**           | Precise motor control                      |
| Servos      | **2x SG90 or MG90S**      | Flight surface control                     |
| Battery     | **3S 2200mAh - 4S 3300mAh** | 30–45 min flight autonomy                 |
| Power Module| **Holybro PM06**          | Power distribution and monitoring          |

### 2️⃣ Flight Controller and Navigation

| Component          | Specification                  | Function                                    |
|--------------------|--------------------------------|---------------------------------------------|
| Flight Controller  | **Cube Orange + Carrier Board**| System brain, flight processing              |
| GPS                | **Here3 GPS**                  | Precise positioning and navigation           |
| Airspeed Sensor    | **Digital airspeed sensor**    | Measures relative airspeed                   |

### 3️⃣ Communication and Control

| Component    | Specification                                 | Function                          |
|--------------|------------------------------------------------|----------------------------------|
| RC System    | **FrSky Taranis X9D + R9 Slim+ SBUS Receiver** | Manual backup control             |
| Telemetry    | **SiK Radio 915MHz or RFD900x**                | Bidirectional data communication  |
| FPV System   | **DJI FPV Air Unit**                           | Real-time video transmission      |

### 4️⃣ Vision and Processing (Optional)

| Component   | Specification        | Function                           |
|-------------|-----------------------|-----------------------------------|
| Computer    | **Raspberry Pi 4**    | Image and data processing          |
| Software    | **YOLOv8 lightweight**| Real-time object detection         |
| Connectivity| **4G/LTE USB module** | Long-distance data transmission    |

---

## Detailed Operating Modes

1. **Autonomous Mode**
  - Drone takes off and follows a predefined route to the target point
  - Maintains constant altitude and airspeed
  - Adjusts parameters according to environmental conditions

2. **Loiter Mode**
  - Holds circular or stationary pattern over the target area
  - Adjustable radius and speed for surveillance needs
  - Optimizes energy consumption for extended on-station time

3. **Manual Control**
  - Operator can take over with the FrSky transmitter at any time
  - Smooth transition between autonomous and manual modes
  - Telemetry alerts for the operator

4. **FPV Mode**
  - Real-time video streaming with DJI FPV
  - Low latency for precise control
  - On-screen telemetry overlay

5. **Automatic Return**
  - Triggered by command, low battery, or signal loss
  - Calculates optimal return path considering wind and obstacles
  - Automatic landing at home position

---

## Implementation Plan

### Phase 1: Construction
- [x] Assemble UAV with minimum components
- [x] Integrate propulsion and control systems
- [x] Install flight controller and sensors

### Phase 2: Configuration
- [x] Configure and calibrate Cube Orange with ArduPilot
- [x] Program basic missions and flight parameters
- [x] Tune PID for optimal stability

### Phase 3: Testing
- [x] Conduct controlled flight tests
- [x] Validate autonomous navigation with waypoints
- [x] Test safety and recovery systems

### Phase 4: Optimization
- [x] Integrate DJI FPV system
- [x] Implement image analysis (optional)
- [x] Optimize power consumption and endurance

---

> [!NOTE] 
> This project must comply with local civil aviation regulations for UAVs. Check flight restrictions, registration requirements, and weight limits before operating.

---

## Resources and References

- [ArduPilot Official Documentation](https://ardupilot.org/plane/)
- [Eclipson Pathfinder Specifications](https://www.eclipson-airplanes.com/)
- [Cube Orange Setup Guide](https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview)
- [YOLOv8 on Raspberry Pi Tutorial](https://github.com/ultralytics/ultralytics)

For budget details and estimated costs, see [Budget](@/blog/drone/presupuesto.md).


