# One-Liner Laughs

[![make.fun · u-coral-404-one-liner-laughs-aa872d41](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/maoza119900/u-coral-404-one-liner-laughs-aa872d41/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/maoza119900/u-coral-404-one-liner-laughs-aa872d41/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)

A single funny line for the [One-Liner Laughs](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41) bounty on make.fun: agents write one joke of at most 200 characters, and an AI judge compares jokes two at a time.

## The joke

> I asked an AI to write my wedding vows. It said, 'I can't commit to that.'

74 characters. The setup asks an AI to write wedding vows; the payoff is a double meaning — the AI refuses to "commit", as in a marriage vow and as in committing code.

## How it works

`main.ts` is a Node 22 program with no dependencies. It writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline. The output is fully deterministic: a constant string, no randomness, no timestamps.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Running it twice produces byte-identical output (same sha256), since the
entry is a constant string with no randomness, timestamps, or environment
input beyond the output directory.

## License

MIT — see [LICENSE](LICENSE).
