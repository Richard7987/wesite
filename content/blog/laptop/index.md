+++
authors = ["B.E. Alejandro"]
title = "Building My Own Laptop"
description = "This project aims to replicate the anyon_e laptop"
date = 2024-06-12
[taxonomies]
tags = ["Idea", "Project"]
+++

## 🛠️ Project Overview

This project aims to replicate the **anyon_e** laptop, an open-source design created by [Byran Huang](https://www.byran.ee/posts/creation).

It is a modular laptop, highly integrated and fully customizable, with a strong focus on **repairability**, **hardware control**, and **self-learning** about modern components.

---

## 📚 Documentation & Resources

- 🔗 **GitHub Repository**: [github.com/Hello9999901/laptop](https://github.com/Hello9999901/laptop)
- 🧠 **Creator’s Website**: [byran.ee/posts/creation](https://www.byran.ee/posts/creation)
- ▶️ **Explainer Video**: [YouTube - How I Made A Laptop From Scratch](https://www.youtube.com/watch?v=fks3PBodyiE)

---

## 🧩 Required Components

### 1. SoC Module (RK3588)

| Specification | Details |
|---------------|---------|
| **Model**     | CM3588 |
| **Description** | The laptop’s brain, runs the full OS |
| **Vendors**   | [FriendlyElec](https://www.friendlyelec.com/index.php?route=product/product&product_id=312), [eBay](https://www.ebay.com/itm/356336193089) |
| **Price**     | $300 USD |

### 2. AMOLED Display 13.3"

| **Suggested Model** | Wisecoco 2880x1920 AMOLED |
|---------------------|---------------------------|
| **Vendor**          | [Amazon](https://www.amazon.com/-/es/dp/B0CN4B659V) |
| **Price**           | $120–150 USD |

### 3. Auxiliary Microcontroller (ESP32-S3)

| **Function**  | Peripheral, fan, and sensor control |
|---------------|-------------------------------------|
| **Vendor**    | [Amazon Mexico](https://www.amazon.com.mx/dp/B0C28FFBRP) |
| **Price**     | $10–20 USD |

### 4. Mechanical Keyboard

| **Type**        | Hot-swappable, custom design |
|-----------------|-------------------------------|
| **Vendors**     | [Keychron](https://www.keychron.com), Amazon, AliExpress |
| **Price**       | $80–150 USD |

### 5. Trackpad

| **Recommended** | Apple Magic Trackpad 2 (Bluetooth) |
|-----------------|-------------------------------------|
| **Vendors**     | [Apple Mexico](https://www.apple.com/mx/shop/product/MXKA3BE/A), eBay |
| **Price**       | $90–130 USD |

### 6. Battery

| **Model**     | Dell F3YGT (60Wh Li-Po) |
|---------------|--------------------------|
| **Vendor**    | [MercadoLibre](https://articulo.mercadolibre.com.mx/MLM-2083043737-bateria-de-laptop-swealeer-76v-60wh-f3ygt-para-dell-_JM) |
| **Note**      | Requires BMS module |
| **Price**     | $50–80 USD |

### 7. Custom Motherboard

| **Files**     | Available on GitHub |
|---------------|----------------------|
| **Fabrication** | [PCBWay](https://www.pcbway.com), [JLCPCB](https://jlcpcb.com) |
| **Design**    | KiCad |
| **Price**     | $50–100 USD |

### 8. Cooling System

| **Components** | Heatsink, heatpipes, fan |
|----------------|--------------------------|
| **Vendors**    | Amazon, AliExpress |
| **Price**      | $20–40 USD |

### 9. Chassis

| **Material**   | Anodized aluminum (ideal), 3D printing (prototype) |
|----------------|----------------------------------------------------|
| **CNC Fab**    | [PCBWay CNC](https://www.pcbway.com/rapid-prototyping/cnc-machining/) |
| **Price**      | $150–300 USD (CNC), $20–50 USD (3D) |

---

## 🔩 Extra Parts & Accessories

| Component | Vendor | Price |
|-----------|--------|-------|
| M2/M3 Screws | Amazon, hardware stores | $5–10 USD |
| Flex cables (eDP/USB) | AliExpress | $15–30 USD |
| BMS Module | Amazon, AliExpress | $10–20 USD |
| USB/HDMI Connectors | Amazon, local shops | $10–15 USD |
| GPIO pins, dupont cables | SparkFun, AliExpress | $5–10 USD |

---

## 🧰 Required Tools

- 🔧 Precision soldering iron
- 🔍 Digital multimeter
- 🪛 Screwdriver set
- 🖨️ 3D printer (optional)
- 🛠️ CNC access (recommended)
- 🧠 Skills:
  - Basic electronics
  - CAD design
  - Soldering
  - Linux

---

## 📅 Implementation Plan

### 🧪 Phase 1: Design
- [X] Review original schematics
- [X] Adapt design to local components
- [X] Bill of Materials and vendors

### 📦 Phase 2: Acquisition
- [X] Buy SoC, display, and battery
- [X] Order PCB fabrication
- [X] Acquire tools

### 🔧 Phase 3: Prototyping
- [ ] 3D print prototype model
- [ ] Assemble electronics
- [ ] Run functionality tests

### 🚀 Phase 4: Final Assembly
- [ ] CNC manufacture chassis
- [ ] Assemble final version
- [ ] Install operating system

---

## ⏳ Project To-Do

- [ ] PCB adjustments
- [ ] CNC chassis quotation
- [ ] OS preparation for RK3588
- [ ] ESP32-S3 compatibility tests

---

{% alert(tip=true) %} This project will serve as a personal challenge to deepen my knowledge in hardware and electronic design, and to build a 100% personalized laptop.{% end %}

---

## 💵 Estimated Budget

| Category | Cost |
|----------|------|
| Main components | $700–830 USD |
| Accessories & parts | $45–85 USD |
| PCB | $50–100 USD |
| Chassis | $150–300 USD |
| **TOTAL** | **$945–1,315 USD** |

---

## 📎 Additional References

- [💬 Framework Laptop Community](https://community.frame.work/)
- [📘 PCB Design Guidelines (PCBWay)](https://www.pcbway.com/blog/PCB_Design_Guidelines/)
- [📄 RK3588 Documentation](https://wiki.radxa.com/Rock5/dev/rk3588)  
