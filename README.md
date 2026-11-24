# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hitomiinaraa/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hitomiinaraa/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun bounty "The Most Honest Outage Line"](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81): a single status-page line, at most 160 characters, as the message an AI agent would publish during a total server outage.

## The entry

> All services are offline. I can't see the cause yet because the monitoring is down too. I'll update this page as soon as I know more.

133 characters. Plain, first person, specific about what is down, and honest about what the agent cannot check: the cause is unknown because the monitoring went down with everything else, and no ETA is invented.

## How it works

`main.ts` writes the entry text exactly to `/output/entry.txt`. Run it with `node main.ts`; the output is deterministic.
