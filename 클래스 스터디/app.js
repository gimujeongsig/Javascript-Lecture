let player1 = new Object();
player1.name = '장병준'
player1.job = '서울역 땅거지'
player1.race = '한국인'
player1.stats = {
    STR: 1, // 힘
    DEX: 100, // 민첩
    CON: 1000, // 체력
    INT: 100, // 지능
    WIS: 50, // 지혜
    CHA: 0, // 매력
}

let player2 = {
name: '황현준',
job: '공무원',
race: '판다족',
stats: {
    STR: 0.1, // 힘
    DEX: 10, // 민첩
    CON: 100, // 체력
    INT: 10, // 지능
    WIS: 1, // 지혜
    CHA: 11, // 매력
    }
}


let player3 = new playerFunc(
    "이민준",
    "퐁퐁남",
    "씨껌",
    {
        STR: 10, // 힘
        DEX: 60, // 민첩
        CON: 70, // 체력
        INT: 40, // 지능
        WIS: 30, // 지혜
        CHA: 25, // 매력
    }
)

function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function() { return this.name; }
    this.getjob = function() {  return this.job; }
    this.getRace = function() { return this.race; }
    this.setName = function(name) { this.name = name; }
    this.setjob = function(job) {   this.job = job; }
    this.setRace = function(race) { this.race = race; }
}

console.log(player3.getName())

let now = new Date();
console.log(now)

let stu1 = new Map();

//set
stu1.set('id',0);
stu1.set('이름','제임스');
stu1.set('전공','컴공');
//배열
let stu2 = new Map([
    ['id', 0],
    ['이름', '제임스'],
    ['전공', '컴공']
]);

//get
console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

// delete
stu1.delete('전공');
console.log(stu1);

// clear
stu1.clear();
console.log(stu1)

player1.age = 200
player2.age = 200
player3.age = 200

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.age = 100
player2.age = 100
player3.age = 100

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.sayHello = function() {
    console.log("hello")
}
player2.sayHello = function() {
    console.log("hello")
}
player3.sayHello = function() {
    console.log("hello")
}

player1.sayHello();
player2.sayHello();
player3.sayHello();

let person = {
    name: "john Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ": " + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}

function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job");

let cars = [
    { brand: "페라리", model: "911"},
    { brand: "포드", model: "머스탱"},
    { brand: "닷지", model: "차저"}
]

for(let i=0; i>cars.length; i++) {
    console.log(cars[i].model)
}