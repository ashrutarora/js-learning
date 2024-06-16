// How does JS run behind the scenes

/*
JS execution context
Whenever JavaScript code is executed,

    1) {} - a Global Execution Context is created -  This context includes the global object, and within this context, the this variable refers to the global object.
    
    2) Functional Execution Context

    3) Eval Execution Context

To run a file in js, its divided into 2 phases

    1) Memory Creation Phase - Only the memory is allocated for all the variables in the file

        a) Global Memory Context is created
        b) Memory Allocation
            -- Variables - declared using var are initialized with undefined.
            -- Functions - declarations are fully hoisted, meaning the entire function is available in memory.
            -- let & const - hoisted but are not initialized, placed in a “temporal dead zone” until they are initialized.


    2) Execution Phase - In this phase, the JavaScript engine executes the code line by line.

    	a) Variable Assignment: Variables are assigned their actual values.
		b) Function Calls: Functions are executed.

*/

// Lets understand this with an example

let val1 = 10
let val2 = 5

function addNum(num1, num2){

    total = num1 + num2
    return num1 + num2
}

result1 = addNum(val1, val2)
result2 = addNum(5, 2)


/*
1) Global Execution context is setup

2) Memory Phase 
    a) val1, val2 --> variables declared but not initialized or its initialized to "UNDEFINED"
    b) addNum --> function is declared and its definition is stored in memory.
    c) result1, result2 --> variables declared but not initialized or its initialized to "UNDEFINED"
    d) total --> implicitly declared within the function but not initialized (it’s part of the global context).

3) Execution Phase
    a) val1 --> initialized to 10
    b) val2 --> initialized to 5
    c) addNum --> function is already hoisted and available to use, so nothing changes here.

    d) result1 --> Functional execution context is created
        -- New variable env
        -- Execution Thread 

        Now Memory Phase and Execution Phase inside the function

        Memory Phase -
            -- val1, val2, total = undefined
        
        Execution Phase - 
            -- num1 = 10
            -- num2 = 5
            -- total = 15
        
        Total is returned to Global Executional Context
        Then the new function execution context is deleted for that function
        
    e) Repeat for result2
*/