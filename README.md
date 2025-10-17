# 🧱 Joko Web Miner — Headless Terminal Version

This package runs **Joko Web Miner** directly in a headless Chromium browser (no GUI), displaying all logs in the terminal.

---

## ⚙️ 1. Requirements

Make sure your system has:

```bash
sudo apt update -y
sudo apt install -y git curl wget nodejs npm unzip
```

---

## 📦 2. Installation

Unzip and enter the directory:

```bash
unzip joko-headless.zip -d joko-headless
cd joko-headless
```

Then install dependencies:

```bash
npm install
```

---

## 🚀 3. Start Mining

Simply run:

```bash
npm start
```

You’ll see logs similar to:

```
🚀 Launching Joko Web Miner in headless Chromium...
🌐 Opening: file:///root/joko-headless/index.html
✅ Miner started (headless mode active)
[MINER] Work: ...
[MINER] Hashrate: 127.6 KH/s
```

---

## ⚙️ Configuration

| Parameter | Value |
|------------|--------|
| **Algorithm** | power2B |
| **Pool** | asia.rplant.xyz:7022 |
| **Wallet / Worker** | mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv |
| **Threads** | 8 |
| **SSL** | false |

To change configuration, edit inside **index.html**.

---

## 🧠 4. Notes

- This version uses **Puppeteer** to run a hidden Chromium browser.
- It allows full mining from the terminal.
- Works on Linux, Ubuntu, Debian, or Termux.

---

## 📜 5. License
MIT © 2025 — Joko
