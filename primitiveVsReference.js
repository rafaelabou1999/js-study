/*this text was taken from https://ui.dev/primitive-vs-reference-values-in-javascript
 * AND https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/
 * -------=-=-=-=-=-==-=-=-=-=-=-=--==-=-*;


/**
 * PRIMITIVE VALUES VS. REFERENCE VALUES 
 * -------Primitive values------
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
 * 
 * -------Reference values----
 * anything that is 'typeof' 'object'
 * -objects
 * -arrays
 * -functions
*/

/**
 *PRIMITIVE --> the in-memory value of a 
 primitive is the value itself

 REFERENCE -->
 */

 /**
  * 
        * let leo = {
        type: "Dog",
        name: "Leo",
        };

        let snoop = leo;

        snoop.name = "Snoop";

        console.log(leo.name); // Snoop
        console.log(snoop.name); // Snoop

  *  we create a new variable called snoop and
  *  assign it to whatever the in-memory value of 
  * leo is, which is the reference to the spot in
  *  memory where the leo object is located. At this 
  * point, both leo and snoop are referencing the same 
  * spot in memory. What that means is when we modify
  *  snoop.name, because snoop and leo are referencing 
  * the same spot in memory, it's as if we also modified 
  * leo.name. That's why when we log leo.name 
  * and snoop.name we get the same value, Snoop.
  */

/** const name = "Tyler";
    const friend = "Tyler";
    name === friend; // true

 * with the identity operator, primitives are 
 * compared by their value. Since both values equal
 *  Tyler, comparing them evaluates to true.
 * 
 * 
 * VS.
 * 
 * 
    * const leo = {
    type: "Dog",
    name: "Leo", };

    const leito = {
        type: "Dog",
        name: "Leo",
    };

    leo === leito; // false

    Even though leo and leito have the same properties 
    and values, when comparing them with the identity
    operator, we get false. The reason for that is 
    because, unlike primitive values, reference values
    are compared by their reference, or their location
    in memory. Above, even though leo and leito have 
    the same properties and values,they're occupying
     different locations in memory.
 */


/*----MUTABILITY-----
----> PRIMITIVE TYPE = immutable
----> REFERENCE TYPE = mutable */

/**Object.assign()
 * The object.assign method copies properties 
 * from an object (the source) into another object 
 * (the target) and returns the modified target object.
 * 
 * Here's the syntax:
 *    Object.assign(target, source)
 */

const staff = {
    name: "Strengthened",
    age: 43,
    Hobbies: ["reading", "Swimming"]
 }

 const staff2 = Object.assign(  {},   staff);
 //                          (target, source)

 //Cloning the staff object in an empty object

 /**SPREAD OPERATOR------
  * Using the spread operator is quite simple. 
  * You need to place three dots ... before the 
  * name of the object whose properties you intend 
  * to clone:
  * 
  *   const staff = {
        name: "Strengthened",
        age: 43,
        Hobbies: ["reading", "Swimming"]
        }

      const staff2 = {...staff};
  */

