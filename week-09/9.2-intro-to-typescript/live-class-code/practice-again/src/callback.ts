function runCbAfterOneSec(fn: () => void) {
  setTimeout(fn, 1000);
}
