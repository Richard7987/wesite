+++
authors = ["B.E. Alejandro"]
title = "Cubes"
description = "This system is composed of autonomous modular cubes."
date = 2025-06-14
[taxonomies]
tags = ["Idea", "Project"]
+++

This system is composed of **autonomous modular cubes**, a **centralized intelligent shelf**, and a **control interface via app** that allows for easy scaling of the cultivation laboratory.

## 1. 📦 Cube Design

Each cube will be a fully autonomous "modular package" that integrates sensors, actuators, and connectivity.

### 🧊 Physical Structure:

- **Containment Box:**
    - Material: Plastic or acrylic with thermal insulation
    - Modular and ventilated design

### 📡 Internal Components:

- **🌫 Humidity Sensor:** To automatically control the humidifier
- **🧪 CO₂ Sensor:** Ensures an optimal gaseous environment
- **🔥 Heating System:** Controlled by a temperature sensor
- **💨 Fans:** Facilitate air circulation and gas control
- **📷 Integrated Camera:** For visual monitoring with AI analysis
- **🔌 Power Connection:** Each cube has its own power source or adapter
- **📶 Communication Port:** Data transmission via Wi-Fi, MQTT, or another protocol

## 2. 🗄️ Intelligent Vertical Shelf

### 🧩 Physical Support:

- **Mounting Rails:** Allow for easy insertion/removal of cubes
- **Central Management Platform:**
    - Processing, automation, and power distribution
    - Possible use of a Raspberry Pi or other microcontroller as the system's brain

### ⚡ Backup Power:

- **UPS System (batteries):** Maintains operation during power outages

## 3. 📱 Interface and Automation

A mobile/web application will be the main interface for controlling the ecosystem:

### 👤 Configuration by Species:

- When adding a cube, the user selects the mushroom (e.g., _Sinocubila_, _Cordyceps_, _Lion's Mane_)
- The AI automatically adjusts the optimal parameters for its growth

### 📈 Real-Time Visualization:

- Temperature, humidity, and CO₂ graphs
- Automatic notifications about harvest, abnormal status, etc.

### 🌱 Ready Harvest Detection:

- Computer vision and machine learning detect the growth and maturity status of the crop

## 4. 🧩 Modularity and Scalability

### 🚀 Basic Start:

- The system will start with **5 modular cubes**

### 🔄 Frictionless Expansion:

- Only requires adding additional cubes and configuring them in the app to scale the system
- All control remains centralized and automated

---

> 🔧 The design is intended to combine technology, efficiency, and ease of use, allowing for a highly professional and automated home cultivation.

## Related Links

- [Hardware](@/blog/hongos/hardware.md)
- [Design](@/blog/hongos/diseño.md)
- [Shelf](@/blog/hongos/estante.md)

---

{% alert(important=true) %}
For back to the main blog click here [Automated Mushroom Cultivation System](@/blog/hongos/index.md)
{% end %}
