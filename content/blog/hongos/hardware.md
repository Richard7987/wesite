+++
authors = ["B.E. Alejandro"]
title = "Hardware"
description = "Hardware of the mushroom cultivation system."
date = 2025-06-14
[taxonomies]
tags = ["Idea", "Project"]
+++

Each modular cube is an autonomous unit designed to provide a controlled and optimal environment for mushroom cultivation. Its key elements are described below:

## 1. 🧱 Cube Structure

- **🔧 Material**:
  - Resistant plastic or acrylic (lightweight, durable, and insulating).

- **📐 Estimated Size**:
  - Between **30 and 40 cm per side**.

- **🧊 Thermal Insulation**:
  - The cube will have a double wall with **insulating material** (trunk type) to conserve the internal temperature, especially useful if heating or cooling systems are integrated.


## 2. 🔌 Internal Components

### 🔍 Sensors
- **💧 Humidity Sensor** (DHT22 or similar):
  - Measures and regulates humidity by controlling the humidifier.
- **🌡️ Temperature Sensor** (DHT22 or DS18B20):
  - Detects thermal changes and activates heating if necessary.
- **🫁 CO₂ Sensor** (MH-Z19 or similar):
  - Monitors carbon dioxide levels to ensure proper aeration.

### ⚙️ Actuators
- **💨 Compact Humidifier**:
  - Small, quiet, and automatic according to humidity sensor data.
- **🔥 Heating Element (resistor or heating mat)**:
  - Heats the interior if the temperature drops below the defined threshold.
- **🌬️ Low-Consumption Fan**:
  - Promotes air exchange and prevents stagnant humidity zones.

### 🎥 Camera (optional)
- **Infrared Vision Camera**:
  - Connected to an AI system that analyzes the growth, color, and size of the mushroom using *machine learning* models to predict the optimal harvest time.


## 3. 🌐 Connectivity and Power

### 📡 Network Connection
- **Wi-Fi Module (ESP32 or similar)**:
  - To send sensor data to the central unit via **MQTT**, **HTTP**, or **WebSockets**.

### 🔋 Power
- **Individual Power Port**:
  - Each cube connects to the shelf for power and energy backup.
- **Regulated Source**:
  - Adapter with thermal and overload protection.


## 4. 🧩 Accessibility and Modularity

### 🛠️ Mounting System
- **Guides or Rails**:
  - So that the cubes can easily slide in and out of the vertical shelf.

### 🔗 Quick Connectivity
- **Standard Connection Port** (USB or magnetic pins):
  - Allows for quick integration of power and communication with the central system.


> ✅ A modular and standardized design will facilitate the scalability of the system and the maintenance of each unit.


{% alert(important=true) %}
For back to the main blog click here [Automated Mushroom Cultivation System](@/blog/hongos/index.md)
{% end %}
