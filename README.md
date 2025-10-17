# Joko Web Miner - Terminal-ready Package

This archive contains a prepared package to run the **Joko web miner** in terminal mode.

## Included
- `package.json` (scripts: `build`, `start`)
- `rollup.config.js`
- `miner.js` (configured to use algorithm **power2B**, worker **mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv**, pool **asia.rplant.xyz:7022**, 8 threads)
- `dist/joko.mjs` (library — included if present)

## Quick start
```bash
unzip joko-web.zip -d joko-web
cd joko-web
npm install
# only needed if you want to rebuild dist from source:
# npm run build
npm start
```

## Important compatibility note
The `dist/joko.mjs` library was originally written for browser environments and uses **Web Workers** and browser globals (`window`, `Worker`). Running it directly under Node.js may fail due to missing browser APIs.

If `npm start` fails with errors about `window` or `Worker`, you have two options:

1. **Run in a browser** (recommended):
   - Serve the folder and open `index.html` in a browser:
     ```bash
     npx http-server . -p 8080
     # open http://localhost:8080/index.html
     ```

2. **Run inside a headless browser** (works headless in terminal):
   - Use `puppeteer` to open the demo page and keep it running (I can provide a script if you want).

If you'd like, I can:
- provide a Puppeteer script that runs the miner in headless Chromium so it behaves like "terminal-only" (but actually runs in a headless browser), **or**
- adapt the library to Node.js by porting worker logic to `worker_threads` (this requires more changes).

Tell me which option you prefer and I will include it.

