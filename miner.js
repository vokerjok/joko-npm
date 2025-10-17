import * as joko from "./dist/joko.mjs";

const stratum = {
  server: "asia.rplant.xyz",
  port: 7022,
  worker: "mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv",
  password: "x",
  ssl: false
};

const THREADS = 8;

console.log("🚀 Starting Joko Web Miner (terminal-mode)");
console.log(`Pool: ${stratum.server}:${stratum.port} | Worker: ${stratum.worker} | Algo: power2B | Threads: ${THREADS}`);

try {
  const threads = joko.start(
    joko.power2B,        // algorithm
    stratum,             // pool config
    null,                // log (unused)
    8,             // threads
    work => console.log("🧱 New work:", work && work.jobId ? work.jobId : "[work]"),
    hashrate => console.log("⚡ Hashrate:", (hashrate && hashrate.hashrateKHs) ? hashrate.hashrateKHs + " KH/s" : JSON.stringify(hashrate)),
    error => console.error("❌ Error:", error)
  );
  console.log("✅ Miner started with threads:", threads);
} catch (err) {
  console.error("⛔ Failed to start miner in Node.js. Error:", err);
  console.error("");
  console.error("Note: the library is primarily browser-based (uses Web Workers and window).");
  console.error("If this fails, run the demo in a browser (open index.html) or use a headless browser (puppeteer).");
  process.exit(1);
}
