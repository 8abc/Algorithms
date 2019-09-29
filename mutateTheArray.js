// ------------ TASK -------------
// Given an integer n and the array a of the length n,
// your task is to apply the following mutation to a:

// Array a mutates into a new array b of the length n
// For each i from 0 to n-1, b[i] = a[i - 1] + a[i] + a[i + 1]
// If some element in the sum a[ i - 1] + a[i] + a[i + 1]
// does not exist, it should be set to 0
// Ex) b[0] should be equal to 0 + a[0] + a[1]
// ------------ EXAMPLES -------------
// For n = 5 and a = [4, 0, 1, -2, 3] the output
// should be mutateTheArray(n, a) = [a, 5, -1, 2, 1]

// b[0] = - + a[0] + a[1] = 0 + 4 + 0 = 4
// b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// b[2] = a[1] + a[2] + a[3] = 0 + 1 _ (-2) = -1
// b[3] = a [2] + a[3] + a[4] = 1 + (-2) +3 = 2
// b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1

// so the resulting array after the mutation will be
// [4, 5, -1, 2, 1]
// ------------ APPROACH -------------

// ------------ SOLUTION -------------
