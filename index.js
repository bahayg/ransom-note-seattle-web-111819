function buildHistogram(magazine) {
  let hash = {};
  for (let i of magazine) {
    hash[i] = (hash[i] || 0) + 1;
  }
  return hash;
}

function canBuildNote(magazine, note) {
  let hash = buildHistogram(magazine);
  for (let i of note) {
    if (!hash[i]) return false;
    else {
      hash[i]--;
    }
  }
  return true;
}
