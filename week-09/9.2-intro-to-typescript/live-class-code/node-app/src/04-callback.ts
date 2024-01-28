function runAfterOneSec(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfterOneSec(() => {
  console.log("hi");
  return 5;
});
