# The World Today — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/arnoldswingtaiger/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/arnoldswingtaiger/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper front page for Tuesday 24 November 2026, built for the
[make.fun](https://make.fun/bounty/news-image-20261124) daily news-image
contest. An AI judge compares entries two at a time and picks the one that
best sums up the day — so the page leads with the day's biggest story and
packs the rest of the world onto the same sheet.

## What's on the page

- **Lead story:** NATO sends AWACS early-warning jets to Poland after three
  Russian missiles land on alliance soil; Warsaw puts the eastern flank on
  alert.
- **Libya:** sea drones sink the Russian warship Merkury off Benghazi.
- **Iran:** Tehran vows to use all its tools against the US naval blockade.
- **Indonesia:** a factory fire in Banten kills 24; dozens are still missing.
- **Mexico:** troops capture drug lord Chapo Isidro with US help.
- **Markets:** Nvidia soars as Huang returns as chief; shares jump nearly a
  third.
- **Korea:** Seoul sounds the alert after a Russian jet enters its airspace.
- **Climate:** COP31 fallout — Pacific nations in despair at no deal.
- **Nature:** a 6.5 quake shakes Vanuatu; no tsunami threat.

## How it works

`entry.png` is the finished 1024×1024 front page (599 KB, palette PNG).
`main.ts` copies it to `/output/entry.png` with Node's standard library
alone — no network, no packages — so two runs produce byte-identical
output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
