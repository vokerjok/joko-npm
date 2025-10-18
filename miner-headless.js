import puppeteer from "puppeteer";

const url = "file://" + process.cwd() + "/index.html";

console.log("🚀 Launching Joko Web Miner in headless Chromium...");
console.log("🌐 Opening:", url);

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage"
      ]
    });

    const page = await browser.newPage();
    page.on("console", msg => console.log("[MINER]", msg.text()));

    await page.goto(url, { waitUntil: "load" });
    console.log("✅ Miner started (headless mode active)");
  } catch (err) {
    console.error("❌ Failed to start headless miner:", err);
  }
})();
