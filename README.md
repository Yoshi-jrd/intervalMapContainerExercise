# Code Exercise for ElectroTempo, Inc.
9.15.21

# TODO
- Continue developing Edge Case Tests to ensure proper functionality.
- Develop UI/UX, continue expanding on 'game/adventure' premise.
- contnue refactoring where possible.
- continue researching if this is the best way to solve the problem under the requirements of the task.
  - use a different sort method?
  - is there a simpler way to run the search algorithm that will maintain functionality and requirements?
- place guard clause for empty inputs (doesn't break functionality and returns the default value of 0 reagardless. Adds unnecessary data to the container array :-( ).
- Improve functionality to replace and remove unecessary data from the array and/or manipulate the interval pairs to reduce the amount of data needing to be help in the array.
- Play around more with the CSS, it's just fun.

## Parameters
The task is to implement an interval_map container class which maps intervals of keys of class K to values of arbitrary class V. If you use JavaScript for your implementation, it's okay to use a third-party library that implements a sorted container like SortedMap. It will be up to you to select a library that meets the needs of the project. However, if you prefer another language, go ahead and use it instead.

The interval_map needs to implement the insertion method which takes a pair of K values K1,K2 and a single V value. The interval defined by the new pair overrides the existing interval(s). For example if there exists a 1,3 → 5 mapping and a 2,6 → 7 insertion is performed, a lookup of the value at 2.5 should return 7 not 5.
The lookup or retrieval method takes a single K value and returns the V value that corresponds to the interval that K falls into or a default value (which needs to be defined when the interval_map is instantiated) when no such interval exists. The lower limit of the interval is included and the upper is excluded, i.e. interval inclusion test is K1 <= K < K2
The complexity of both methods can be at most logarithmic in the size of the container (number of intervals).
The key class K implements comparison operators only. No arithmetic operations on keys can be used.


Here is a C++ example of the expected behavior where K and V are integers and the default value returned is 0


interval_map<int,int> myMap;

myMap.insert(make_pair(1,5),3);

myMap.insert(make_pair(4,8),9);

myMap.insert(make_pair(2,6),10);


myMap.at(0); // default value of 0

myMap.at(1); // 3

myMap.at(3); // 10

myMap.at(7); // 9

myMap.at(10); // 0

// Task Parameters
// 1. implement an interval_map container class
    //Which fullfills the following
    // A. has insertion METHOD. 
        // a. Parameters are ((k1, k2), v)
        // a. The interval defined by the new pair overrides the existing interval(s)
    // B. A lookup METHOD
        // a. Parameters are (K) and returns the V value that corresponds to the interval defined by the above method or a default value (which needs to be defined when the interval_map is instantiated) when no such interval exists (0).
    // C. The lower limit of the interval is included and the upper is excluded, i.e. interval inclusion test is K1 <= K < K2


Resources Utilized: MDN, Web3Schools, FreeCodeCamp, StackOverflow
