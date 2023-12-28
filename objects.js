let person1 ={
    name:'john',
    age:'20',
    city:'texas'

}

let person2={
    name:'satya',
    age:'24',
    city:'vij'
}
// person1
console.log(Object.keys(person1));
console.log(Object.values(person1));
// length
console.log(Object.keys(person1).length);
console.log(Object.values(person1).length);

// PERSON2
console.log(Object.keys(person2));
console.log(Object.values(person2));

// length

console.log(Object.keys(person2).length);
console.log(Object.values(person2).length);


// accessing the objects

// 1.dot Notation 
// 2.bracket notation 

// dot notation 

console.log(person1.name);
console.log(person2.name);

// bracket notation 

console.log(person1['city']);
console.log(person2['city']);

// changing object properties

person1.name = "JOhnny deep";
console.log(person1);

person2.city ="AMerica";
console.log(person2);

// for in loop = iterate over an objects

for (let key in person1) {
    console.log(key,person1[key]);
}

// hasownproperty

console.log(person1.hasOwnProperty('age'));
console.log(person2.hasOwnProperty('age'));

