/**text taken from
 * --> https://www.w3schools.com/jsref/jsref_isnan_number.asp
 * --> https://www.loginradius.com/blog/engineering/checking-for-nan-in-javascript/
 */

/**NaN ---> Not a Number
 * -Some few examples that appear NaN
 *   -Erroneous calculations such as 0/0
 *   -parseInt() with characters
 *
 * 
 *HOW TO CHECK IF A NUMBER IS NaN?
 * --> Number.isNaN(); --Number.isNaN() returns true if 
 * a number is Not-a-Number.
 */

 Number.isNaN(123); //false
 Number.isNaN(0/0); //true
 Number.isNaN("123"); //false
 Number.isNaN(''); //false
