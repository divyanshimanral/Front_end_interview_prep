// prove that number is even without using the % operator
function even_odd(number) {
  if (number % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is odd");
  }
}
// even_odd(0)

// 1.

function even_odd2(number) {
  if ((number & 1) === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

// even_odd2(23)

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const number = 582987086837;
if (isPrime(number)) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is a not prime number`);
}
