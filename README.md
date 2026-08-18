# RA ATUM Website Pro

Modular static website for the RA ATUM ecosystem. This repository preserves the established visual system, animations, media, and responsive behavior while separating page CSS and JavaScript for easier editing.

## Verified project identity

- Original Made-in-India Layer-1 with a C++ core
- Working network: RA ATUM HEKA127
- Chain ID: `127`
- Native gas coin: `RA` (`NativeGasAsset`, 1,000,000,000 supply, 0 decimals)
- RA KIDS asset: `RAK` (`NativeLedgerAsset`, 1,000,000,000 supply, 0 decimals)
- Address format: `ra` followed by 40 lowercase hexadecimal characters
- Current status: controlled multi-validator working testnet; mainnet remains a future milestone

## Structure

- `index.html` — main website
- One HTML document for every navigation, homepage-category, ecosystem, and footer destination
- `css/` — page-specific stylesheets
- `js/` — page-specific interaction and animation files
- Root media files — original logo, RAROBO media, whitepaper, favicons, and supporting assets

There is no bundler or framework requirement. All routes are normal static HTML files.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Vercel

Import this repository as a new Vercel project. Use the default static settings:

- Framework preset: `Other`
- Build command: leave empty
- Output directory: leave empty
- Root directory: repository root

The site can be deployed without environment variables.

## Editing rule

Update a page in the repository root, then edit its matching file in `css/` and `js/`. Preserve the existing video sources, animation behavior, and responsive breakpoints unless a deliberate redesign is approved.
