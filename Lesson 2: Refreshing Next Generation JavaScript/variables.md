# var, let and const

There are 3 main differences between var, let and const. That differences are respecting their scope, use and hoisting.

- **Scope** esentially  means where the variable are available for use.
- **Hoisting** is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- **Block** is a chunk of code bounded by  { }. A block lives in curly braces, anything within curly braces is a block.

## var

*var* declarations are globally scoped or function/locally scoped.

The scope is **global** when a var variable is declared ouside a function. 
Meaning any variable declared outside a function block is available for use in the whole window.

*var* is **function scoped** when it's declared within a function. This means that it's available and can be accesed only within that function.

**var can be re-declared and updated** 
This means we can do this within the same scope and wont't get an error.

*var* variables are hoisted to the top of their scope and initialised with a value of undefined.

## let

*let* is now preferred for variable declaration.

**let is block scoped**
A variable declared in a block with *let* is only available for use within that block.

**let can be updated but not re-declared** 
Unlike var, *let* cannot be re-declared within its scope.
This is one of the advantages of *let*, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.

**Hoisting of let**
Like var, *let* declarations are hoisted to the top. Unlike var which is initialised as undefined, the *let* keyword is not initialised (throws a Reference Error).

## const

Variables declared with the *const* maintain constant values.

**const declarations are block scoped**
Like let, *const* declarations can only be accesed within the block they were declared.

**const cannot be updated or re-declared**
Every const declaration must be initialised at the time of declaration.

**Hoisting of const**
Just like let, *const* declarations are hoisted to the top but are not initialised.



# In summary

- **var** declarations are globally scoped or function scoped, while **let** and **const** are block scoped.
- **var** variables can be updated and re-reclared within its scope. **let** variables can be updated but not re-declared. **const** variables cannot be updated or re-declared.
- They are all hosted to the top of their scope. But while **var** variables are initialised with *undefined*, **let** and **const** variables are not initialised.
- While **var** and **let** can be declared without being initialised, **const** must be initialised during declaration.
