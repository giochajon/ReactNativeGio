#!/usr/bin/env bash
#
# Updates README.md's "Last updated" line and opens a PR, as a way to
# add activity to the GitHub contribution graph.
#
# Usage: scripts/contribute.sh [soft|medium|hard]
#
#   soft   (default) - 1 commit  -> lightest contribution square
#   medium           - 8 commits -> darker green square
#   hard             - 25 commits -> darkest square
#
# How this actually affects the graph:
#   GitHub counts a contribution for each commit authored under your
#   GitHub account's email that ends up on the repo's default branch
#   (via direct push, or via a merged PR), plus PR/issue activity.
#   The square's shade is a per-day count bucketed relative to your
#   own contribution history - so more commits landing on the default
#   branch on the same day = darker square.
#
#   This script only opens a PR; it does not merge it. When you merge:
#     - "Squash and merge" collapses all commits into one -> only 1
#       contribution, regardless of the level you picked.
#     - "Merge commit" or "Rebase and merge" preserve every individual
#       commit -> you get the full count, and thus the intended shade.
#   So for medium/hard to actually show up darker, merge with one of
#   the non-squash strategies.

set -euo pipefail

LEVEL="${1:-soft}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
README="$REPO_ROOT/README.md"

case "$LEVEL" in
  soft)   COMMITS=1 ;;
  medium) COMMITS=8 ;;
  hard)   COMMITS=25 ;;
  *)
    echo "Usage: $0 [soft|medium|hard]" >&2
    exit 1
    ;;
esac

cd "$REPO_ROOT"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash your changes first." >&2
  exit 1
fi

git fetch origin
git checkout master
git pull --ff-only origin master

BRANCH="contrib/update-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BRANCH"

for i in $(seq 1 "$COMMITS"); do
  TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%S.%NZ")"
  sed -i "s|^Last updated:.*|Last updated: ${TIMESTAMP}|" "$README"
  git add "$README"
  git commit -m "chore: contribution update ($LEVEL, ${i}/${COMMITS})" --quiet
done

git push -u origin "$BRANCH"

gh pr create \
  --base master \
  --head "$BRANCH" \
  --title "chore: README contribution update ($LEVEL)" \
  --body "Automated README timestamp update ($LEVEL: $COMMITS commit(s)) via scripts/contribute.sh. Merge with a non-squash strategy to preserve all $COMMITS commits on the contribution graph."

echo "Done. Opened PR for branch $BRANCH with $COMMITS commit(s)."
