# 🧱 Joko Web Miner — Terminal Mining Setup Guide

Custom CPU web miner by **Joko**  
Mining directly from **terminal (Node.js)** using **power2B algorithm** on **RPlant Asia Pool**.

---

## 🧩 1. System Requirements

Pastikan sistem kamu sudah memiliki:

| Komponen | Rekomendasi | Keterangan |
|-----------|-------------|-------------|
| **OS** | Linux / Ubuntu / Debian / Termux | Bisa juga Windows dengan Node.js |
| **CPU** | Dual-core atau lebih | Mining lebih cepat dengan lebih banyak thread |
| **RAM** | Minimal 1 GB | |
| **Internet** | Stabil | Diperlukan koneksi ke pool |

---

## ⚙️ 2. Install Basic Tools

### 🐧 Untuk Linux / Ubuntu / Termux:
Jalankan perintah berikut:
```bash
sudo apt update -y
sudo apt install -y git curl wget nodejs npm unzip
```

Cek versi Node.js & npm:
```bash
node -v
npm -v
```
Harus muncul versi, misalnya:
```
v20.x.x
10.x.x
```

---

## 📦 3. Download Joko Web Miner

Kamu bisa **download dari ZIP** atau **clone dari GitHub**:

### 🔹 Jika file ZIP sudah ada:
```bash
unzip joko-web.zip -d joko-web
cd joko-web
```

### 🔹 Jika mau clone dari GitHub:
```bash
git clone https://github.com/vokerjok/joko-npm.git
cd joko-npm
```

---

## 🛠️ 4. Install Dependencies

```bash
npm install
```

Ini akan mengunduh semua paket yang dibutuhkan (Rollup, Socket.io, dsb).

---

## 🧱 5. Build Library (Opsional)

Kalau kamu ingin rebuild file `dist/joko.mjs`, jalankan:
```bash
npm run build
```

---

## 🚀 6. Jalankan Miner

Cukup jalankan:
```bash
npm start
```

Output akan muncul seperti ini:
```
🚀 Starting Joko Web Miner (terminal-mode)
Pool: asia.rplant.xyz:7022 | Worker: mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv | Algo: power2B | Threads: 8
🧱 New work: ...
⚡ Hashrate: 126.40 KH/s
```

---

## 💡 7. Informasi Konfigurasi

| Parameter | Nilai |
|------------|--------|
| **Pool** | `asia.rplant.xyz:7022` |
| **Wallet / Worker** | `mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv` |
| **Algoritma** | `power2B` |
| **Threads** | `8` |
| **SSL** | `false` |

Kamu bisa mengubah konfigurasi ini di file:
```
miner.js
```

---

## ⚠️ 8. Jika Gagal di Node.js

Library `dist/joko.mjs` awalnya dibuat untuk **browser (Web Worker)**.  
Jika Node.js muncul error seperti:
```
ReferenceError: Worker is not defined
```

Gunakan mode browser/headless:
```bash
npx http-server . -p 8080
```
Lalu buka:
👉 http://localhost:8080/index.html

Atau jalankan versi headless (bisa aku bantu buatkan `miner-headless.js`).

---

## 🧾 9. Autostart Saat Boot (Opsional)

Agar otomatis mining saat server menyala:
Tambahkan ke `.bashrc` atau `.profile`:
```bash
cd /path/ke/joko-web && npm start &
```

---

## 🧠 10. Troubleshooting

| Masalah | Solusi |
|----------|---------|
| Error “Worker not defined” | Gunakan browser mode / headless Puppeteer |
| Hashrate 0 | Pastikan port dan server pool benar |
| Tidak connect ke pool | Cek firewall, koneksi internet |
| CPU 0% | Pastikan thread tidak 0 dan mining benar jalan |

---

## 📜 11. License
MIT © 2025 — Joko
