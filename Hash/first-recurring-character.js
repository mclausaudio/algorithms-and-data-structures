//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  const hash = {};
  
  for (let i = 0; i <input.length;i++) {
    if (hash[input[i]]) {
      return input[i];
    } else {
      hash[input[i]] = true;
    }
  }
  return undefined;
}

console.log( firstRecurringCharacter([2,5,1,2,3,5,1,2,4]) );
// => 2
console.log( firstRecurringCharacter([2,1,1,2,3,5,1,2,4]) );
// => 1
console.log( firstRecurringCharacter([2,3,4,5]));
// => undefined
console.log( firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));
// => 5