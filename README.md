# The World in One Day — 26 November 2026

[![The World in One Day — 26 November 2026](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Rank](https://make.fun/badge/news-image-20261126/fiqirealme52-max/NewsImage26/rank.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Reward](https://make.fun/badge/news-image-20261126/fiqirealme52-max/NewsImage26/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image summing up Thursday 26 November 2026 — Thanksgiving Day — in
**41 stories across 9 regions and 18 fields**, every one first reported that
day (see the DATE CHECK box on the image for what was deliberately left out).

## What is on the page

- **3 leads:** nor'easter leaves 250,000+ homes without power · Italy says
  Iranian drones killed two technicians in Kuwait (labelled CLAIM — Iran
  denies it) · EU summit ends with no budget deal (€1.582tn budget, €45bn
  Ukraine loan undecided).
- **10 illustrated cards:** Macy's 100th parade postponed to Saturday ·
  Bank of Korea lifts its rate to 3.25% · Kim urges wider tactical nuclear
  deployment · Bogor mine flood (13 dead, 13 missing) · Gaza strikes kill at
  least 9 · Spain's De Cos picked to run the ECB · Israel threatens to
  displace a million Gazans · Russian missiles strike Kyiv overnight · India
  marks 18 years since the 26/11 Mumbai attacks · Gukesh and Sindarov draw
  Game 3 of the world chess title match in Geneva.
  Each card carries a status chip, a one-line summary and its source.
- **KPI strip:** 250,000+ US customers without power · 2 Italian technicians
  killed in Kuwait · €1.582tn EU budget left unagreed · 12,021 Ebola cases
  in DR Congo · Bank of Korea 3.25% · Eagles 39–38 (all verified figures,
  no estimates).
- **Region bar** with counts that add up to 41, a UTC timeline of the day,
  a **world map** with 13 numbered pins (one per picture story), a 28-story
  index, and a DATE CHECK excluding Wednesday's news (US tariffs, Ras Tanura,
  Jolie–Pitt, Miss Universe, Shenzhou-24, FedEx Miami).

## How it was made

The image (`entry.png`, 1024×1024) was drawn programmatically with
Python + Pillow: flat illustration, one big separate scene per lead,
a real hand-plotted world map, and every figure verified live against
Reuters, AP, BBC, FIFA, the Bank of Korea, NWS, the WSJ and Al Jazeera
before drawing. Claims that could not be verified independently are
hedged in the headline and tagged CLAIM.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png, byte-identical
```

`main.ts` uses only `node:fs`, `node:path` and `node:url`, makes no
network calls, and exits non-zero if the source image is missing or the
copy is not byte-identical.

## Sources

Reuters · AP · BBC · CNN · WSJ · BOK · FIFA · NWS · Al Jazeera · Euronews ·
AFP · SCMP · ONS · AAP.
