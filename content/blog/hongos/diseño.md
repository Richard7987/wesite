+++
authors = ["B.E. Alejandro"]
title = "Design"
description = "Design of the cubes"
date = 2025-06-14
[taxonomies]
tags = ["Idea", "Project"]
+++

This system is composed of **autonomous modular cubes**, a **centralized intelligent shelf**, and a **control interface via app** that allows for easy scaling of the cultivation laboratory.


## 1. 📦 [Cube Design](@/blog/hongos/hardware.md)

Each cube will be a [modular package](@/blog/hongos/cubos.md) that integrates sensors, actuators, and connectivity.

### 🧊 Physical structure:
- **Containment box:**
  - Material: Plastic or acrylic with thermal insulation.
  - Modular and ventilated design.

### 📡 Internal components:
- **🌫 Humidity sensor:** To automatically control the humidifier.
- **🧪 CO₂ sensor:** Ensures an optimal gaseous environment.
- **🔥 Heating system:** Controlled by a temperature sensor.
- **💨 Fans:** Facilitate air circulation and gas control.
- **📷 Integrated camera:** For visual monitoring with AI analysis.
- **🔌 Power connection:** Each cube has its own power source or adapter.
- **📶 Communication port:** Data transmission via Wi-Fi, MQTT, or another protocol.


## 2. 🗄️ [Intelligent Vertical Shelf](@/blog/hongos/estante.md)

### 🧩 Physical support:
- **Mounting rails:** Allow for easy insertion/removal of cubes.
- **Central management platform:**
  - Processing, automation, and power distribution.
  - Possible use of a Raspberry Pi or other microcontroller as the system's brain.

### ⚡ Backup power:
- **UPS system (batteries):** Maintains operation during power outages.


## 3. 📱 Interface and Automation

A mobile/web application will be the main interface for controlling the ecosystem:

- **👤 Configuration by species:**
  - When adding a cube, the user selects the mushroom (e.g., *Sinocubila*, *Cordyceps*, *Lion's Mane*).
  - The AI automatically adjusts the optimal parameters for its growth.

- **📈 Real-time visualization:**
  - Temperature, humidity, and CO₂ graphs.
  - Automatic notifications about harvest, abnormal status, etc.

- **🌱 Ready harvest detection:**
  - Computer vision and machine learning detect the growth and maturity status of the crop.


## 4. 🧩 Modularity and Scalability

- **🚀 Basic start:**
  - The system will start with **5 modular cubes**.

- **🔄 Frictionless expansion:**
  - Only requires adding additional cubes and configuring them in the app to scale the system.
  - All control remains centralized and automated.


> 🔧 The design is intended to combine technology, efficiency, and ease of use, allowing for a highly professional and automated home cultivation.

{% alert(important=true) %}
For back to the main blog click here [Automated Mushroom Cultivation System](@/blog/hongos/index.md)
{% end %}
