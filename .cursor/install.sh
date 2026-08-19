#!/usr/bin/env bash
# Idempotent Cloud Agent setup for the portfolio (Next.js 15 + Bun).
set -euo pipefail

# 1. Ensure Bun (the pinned package manager) is installed.
if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
fi

# Make Bun available on PATH for install/start/terminals shells.
export BUN_INSTALL="${BUN_INSTALL:-$HOME/.bun}"
export PATH="$BUN_INSTALL/bin:$PATH"
sudo ln -sf "$BUN_INSTALL/bin/bun" /usr/local/bin/bun
sudo ln -sf "$BUN_INSTALL/bin/bunx" /usr/local/bin/bunx

bun --version

# 2. Install project dependencies from the committed lockfile.
cd "$(dirname "$0")/.."
bun install --frozen-lockfile
