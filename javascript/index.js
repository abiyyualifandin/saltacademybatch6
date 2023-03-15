console.log('Salt Academy Batch 6 -- Latihan Javascript');

console.log('------------------------------------');
console.log('VARIABLE');
console.log('------------------------------------');

let drink = 'coca cola';
var food = 'nasi padang';

function changeVar() {
    food = 'nasi campur';
    drink = 'fanta';
}

function changeLet() {
    drink = 'pepsi';
}

changeVar();
changeLet();

console.log(food);
console.log(drink);

const phone = 'samsung';
console.log(phone);

console.log('------------------------------------');
console.log('JS DATA TYPE');
console.log('------------------------------------');
// Define variable
const thisBoolean = true;
const thisNull = null;
var thisUndefined;
const thisNumber = 10;
const thisString = 'Hallo';
const thisSymbol = Symbol();
const thisObject = {
    name: 'John',
    age: 25,
    foods: [
        'nasi padang',
        'bakso',
        'nasi bebek'
    ]
};

const saltAcademyStudents = [
    {
        name: 'Chaidesar',
        status: 'Lajang'
    },
    {
        name: 'Yuda',
        status: 'Menikah'
    }
]

const thisArray = ['gajah', 'sapi', 'ayam'];
function thisFunctionObject(x) {
    console.log(x * 2 + 10);
};

// Output from variable
console.log(thisBoolean);
console.log(thisNull);
console.log(thisUndefined);
console.log(thisNumber);
console.log(thisString);
console.log(thisSymbol);

console.log('--- OBJECT ---');
console.log(thisObject);
console.log(thisObject.age);
console.log(thisObject.foods[1]);

console.log('--- ARRAY ---');
console.log(thisArray);
console.log(thisArray[1]);
console.log(saltAcademyStudents[0].status);

thisFunctionObject(5);

console.log('------------------');
console.log('OPERATORS');
console.log('------------------');
console.log('--- ARITMATICS ---');
console.log(1 + 1);

console.log('--- COMPARASSION ---');
console.log(2 == 2);
console.log(2 === 2);

console.log(2 != 9);
console.log(2 !== 3);

console.log(3 > 3);
console.log(3 >= 3);

console.log(3 < 3);
console.log(3 <= 3);

console.log('--- LOGICAL ---');
console.log(2 == 2 && 3 == 3 && 5 == 5);
console.log(2 == 1 || 3 == 4 || 5 == 7);
console.log(true);

console.log('--- ASSIGNMENT ---');
let x = 10;
console.log(x += 8); //x = 18
console.log(x -= 17); //x = 1

console.log('------------------');
console.log('CONDITIONAL');
console.log('------------------');
console.log('--- IF/ELSE ---');
if (2 == 3) {
    console.log('ini hasil dari if pertama')
} else if (3 == 3) {
    console.log('ini hasil dari if kedua')
} else if (4 == 4) {
    console.log('ini hasil dari if ketiga')
} else {
    console.log('ini hasil dari else')
}

console.log('--- SWITCH/CASE ---');
const fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('case apple');
        break;
    case 'mango':
        console.log('case mango');
        break;
    default:
        console.log('case break');
        break;
}

console.log('--- TERNARY ---');
console.log(2 == 3 ? 'betul' : 'salah');

console.log('------------------');
console.log('LOOP');
console.log('------------------');
console.log('--- FOR ---');

for (i = 1; i <= 10; i++) {
    console.log('for ke - ', i);
}

console.log('--- WHILE ---');
let j = 1;
while (j <= 10) {
    console.log('while ke - ', j);
    j++
}

console.log('--- FOR IN ---');
let arrayOfNumber = [11, 12, 13, 14];
for (const key in arrayOfNumber) {
    console.log(arrayOfNumber[key]);
}

console.log('--- FOR OFF ---');
for (const iterator of arrayOfNumber) {
    console.log(iterator);
}