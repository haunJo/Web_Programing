let m = new Map();
// set : 새로운 key와 value를 갖는 element를 추가하는 method
m.set('dog', '멍멍멍');
m.set('cat', '야옹야옹');
m.set('mouse', '찍찍');

//let m = new Map([['dog', '멍멍멍'],['cat', '야옹야옹'],['mouse', '찍찍']]);

console.log(m.size);  // 3
console.log(m.get('dog'));
console.log(m.has('cat'));

for (let key of m.keys()) {
  console.log(key);
}

for(let value of m.values()) {
  console.log(value);
}

for (let [key, value] of m) {
  console.log(value);
}

m.delete('dog');
console.log(m.size);

m.clear();
console.log(m.size);
