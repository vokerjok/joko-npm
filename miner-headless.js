import puppeteer from "puppeteer";
import { execSync, spawn } from "child_process";

console.log("🚀 Launching Joko Web Miner in headless Chromium...");

try {
  // cari lokasi chromium dari sistem
  const chromiumPath = execSync("which chromium").toString().trim();
  console.log("✅ Using system Chromium:", chromiumPath);

  // buat port acak antara 8000–9000
  const serverPort = Math.floor(Math.random() * 1000) + 8000;
  const serverUrl = `http://127.0.0.1:${serverPort}/index.html`;

  console.log(`🌐 Starting local server on port ${serverPort}...`);
  const server = spawn("python3", ["-m", "http.server", serverPort, "--bind", "127.0.0.1"], {
    cwd: process.cwd(),
    stdio: "inherit"
  });

  // tunggu server siap
  await new Promise(r => setTimeout(r, 2000));

  console.log("🌐 Opening:", serverUrl);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: chromiumPath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--remote-debugging-port=0"
    ]
  });

  const page = await browser.newPage();
  page.on("console", msg => console.log("[MINER]", msg.text()));

  await page.goto(serverUrl, { waitUntil: "load" });
  console.log("✅ Miner started (headless mode active)");

} catch (err) {
  console.error("❌ Failed to start headless miner:", err);
}
