/*

a2 ≤ ab ≤ b2
We know that N = a * b, so by replacing a * b with N, the following relation is obtained:

a2 ≤ N ≤ b2
Taking the square root of the equation, considering both a and b as positive numbers, we get:

a ≤ sqrt(N) ≤ b
So, according to the above relation, it can be concluded that one of the factors of a non-prime number will definitely be less than or equal to sqrt(N).

So, while checking from 2 to the sqrt(N), if we find a number that is a factor of the N, it would mean that the number has more than 2 factors, so that number would not be a prime number. 

Otherwise, if we do not find any factor of N, that implies that the N has only 2 factors, 1 and itself, thus it is a prime number.

*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
