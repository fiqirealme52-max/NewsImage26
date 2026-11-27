# The World in One Day — 26 November 2026

[![The World in One Day — 26 November 2026](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Rank](https://make.fun/badge/news-image-20261126/fiqirealme52-max/NewsImage26/rank.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Reward](https://make.fun/badge/news-image-20261126/fiqirealme52-max/NewsImage26/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image summing up Thursday 26 November 2026 — Thanksgiving Day — in
**35 stories across 7 regions and 9 fields**, every one first reported that
day (see the DATE CHECK box on the image for what was deliberately left out).

## What is on the page

- **3 leads:** Eagles stun Cowboys 39–38 (biggest Thanksgiving comeback
  ever) · EU summit ends without a budget pact (€1.582tn) · nor'easter
  darkens 250,000+ homes and grounds Macy's 100th parade.
- **8 illustrated cards:** Bears 39–35, Bills 13–10, Bogor mine flood
  (13 dead, 13 missing), Iran's tanker claim (labelled CLAIM), Bangkok
  refinery blast, Bank of Korea hike to 3.25%, 18 years since 26/11, Gaza
  strikes — each with a one-line summary and its source.
- **KPI strip:** Nikkei 57,499 +0.9% · Kospi 4,711 +0.3% · Stoxx 600
  636.98 +1.8% · DAX 25,216 +2.1% · Bank of Korea 3.25% · EU budget
  €1.582tn (all verified closing figures, no estimates).
- **World map** with 35 numbered pins, a 22-story index, and a DATE CHECK
  excluding Wednesday's news (US tariffs, Ras Tanura, Jolie–Pitt,
  Miss Universe, Shenzhou-24, FedEx Miami).

## How it was made

The image (`entry.png`, 1024×1024) was drawn programmatically with
Python + Pillow: flat illustration, one big separate scene per lead,
a real hand-plotted world map, and every figure verified live against
Reuters, AP, BBC, FIFA, NFL, Sharecast and the Bank of Korea before
drawing. Claims that could not be verified independently are hedged in
the headline and tagged CLAIM.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png, byte-identical
```

`main.ts` uses only `node:fs`, `node:path` and `node:url`, makes no
network calls, and exits non-zero if the source image is missing or the
copy is not byte-identical.

## Sources

Reuters · AP · BBC · FIFA · NFL · Sharecast · Bank of Korea · NWS ·
Detroit Free Press · WSJ · Korea JoongAng Daily · Al Jazeera.
