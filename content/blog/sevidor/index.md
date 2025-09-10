+++
authors = ["B.E. Alejandro"]
title = "Personal Server Project"
description = "A project to create a personal server by reusing a computer with FreeBSD, using jails and binaries for a secure and efficient installation."
date = 2025-04-30
[taxonomies]
tags = ["Idea", "Project", "Server"]
+++

## Objective

This project consists of creating a personal server from a reused computer, implementing the FreeBSD operating system. By using **jails** (FreeBSD native containers) and binary compilation, all necessary instances have been installed to create a fully functional, secure, and efficient server for personal use.

---

## Base System

**FreeBSD** is an advanced operating system used to power modern servers, desktops, and embedded platforms. It has been continuously developed by a large community for over thirty years. Its advanced networking, security, and storage features make it the platform of choice for many high-traffic websites and widely used embedded networking and storage devices.

### Enabled Configurations

- **ZFS File System** for:
  - Automatic snapshots
  - Data recovery
  - Data integrity
  - Transparent compression

- **Security updates** using `freebsd-update`:
  - Automatic patches
  - Vulnerability mitigation
  - Kernel updates

---

## Implemented Services

### Network and Access

| Service | Description | Status |
|---------|-------------|--------|
| **SSH** | Secure remote access with key authentication | ✅ Active |
| **WireGuard** | VPN for secure access to server services | ✅ Active |
| **CloudFlare** | Reverse proxy and DDoS protection | ✅ Configured |

### Web Services

| Service | Description | Status |
|---------|-------------|--------|
| **Nginx** | High-performance web server | ✅ Active |
| **PostgreSQL** | Database management system | ✅ Active |
| **Nextcloud** | Personal cloud storage | ✅ Active |
| **Let's Encrypt** | Free HTTPS certificates | ✅ Configured |
| **Bitwarden** | Password manager | ✅ Active |
| **Synapse** | Matrix messaging server | ✅ Active |
| **PHP** | Dynamic processing for web applications | ✅ Active |

### Security

| Service | Description | Status |
|---------|-------------|--------|
| **pf** | Advanced firewall | ✅ Configured |
| **fail2ban** | Protection against brute-force attacks | ✅ Active |
| **ClamAV** | Lightweight antivirus | ✅ Active |

### Administration Tools

| Tool | Description | Status |
|------|-------------|--------|
| **ports** | Binary compilation system | ✅ Configured |
| **htop** | Interactive process monitor | ✅ Installed |
| **tmux** | Terminal session manager | ✅ Configured |
| **ZFS snapshots** | Incremental backup system | ✅ Automated |

### Backup and Monitoring

| Service | Description | Status |
|---------|-------------|--------|
| **Restic** | Encrypted backup system | ✅ Configured |
| **Netdata** | Real-time monitoring | ✅ Active |

### Containers and Virtualization

| Technology | Description | Status |
|------------|-------------|--------|
| **bastilleBSD** | Jail manager (FreeBSD containers) | ✅ Configured |
| **bhyve** | Native FreeBSD hypervisor | ✅ Installed |

---

## Important Notes

> - In FreeBSD, it is often better to compile software from ports for maximum customization.
> - Packages (pkg) are very fast and efficient for standard installations.
> - FreeBSD documentation is considered one of the best in the world: [Official Documentation](https://docs.freebsd.org/)

---

## System Architecture

```
                    +------------------+
                    |   Proxy Inverso  |
                    |     (Nginx)      |
                    +--------+---------+
                             |
           +----------------++-----------------+
           |                |                  |
+----------v------+ +-------v--------+ +-------v--------+
|   Nextcloud     | |    Synapse     | |   Bitwarden    |
| (Almacenamiento)| | (Mensajería)   | | (Contraseñas)  |
+----------+------+ +-------+--------+ +-------+--------+
           |                |                  |
           +----------------v------------------+
                            |
                    +-------v--------+
                    |   PostgreSQL   |
                    | (Base de datos)|
                    +----------------+
```


---

## Implementation Checklist

- [x] Install the operating system
- [x] First boot and updates
- [x] Basic security
- [x] Web server
- [x] Install PostgreSQL (Nextcloud + Synapse)
- [x] Install Nextcloud
- [x] Install Synapse
- [x] Install Element
- [x] Install Matrix Bridges
- [x] Isolation using Jails

---

## Next Steps

1. **Performance Optimization**
- Fine-tuning kernel parameters
- ZFS optimization for specific use case
- Performance analysis with specialized tools

2. **Service Expansion**
- Implement a more complete monitoring system
- Configure automatic alerts
- Integration with external services

3. **Documentation**
- Create a disaster recovery manual
- Document maintenance procedures
- Record specific configurations

---

## References and Resources

- [FreeBSD Handbook](https://docs.freebsd.org/en/books/handbook/)
- [bastilleBSD Getting Started Guide](https://bastillebsd.org/getting-started/)
- [ZFS Documentation](https://docs.freebsd.org/en/books/handbook/zfs/)
- [Nginx Configuration Guide](https://docs.nginx.com/nginx/admin-guide/)
