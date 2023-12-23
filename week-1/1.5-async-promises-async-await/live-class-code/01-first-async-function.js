// Write a simple async function that prints the sum of all the numbers till n

function findSum(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += i;
  }
  return answer;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); // the result will be logged after 1s
console.log("I ran before the setTimeout"); // this line will run first

// There is a way to block line 16 getting executed for some time. Just make the control busy executing a very expensive/demanding function or lines of code whose output is delayed due to the time it will take the machine to execute those lines of code. Hence, the control will get blocked for some time. Dumb way, but works!!
