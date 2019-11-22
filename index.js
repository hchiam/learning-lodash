const _ = require('lodash');

// say hi 3 times:
_.times(3, () => { console.log('hi'); });

console.log('{} is empty:' + _.isEmpty({}));

console.log('range 5:' + _.range(5));

const array = [[1, 2], [3, 4], [5, 6]];
console.log('flatten arrays:' + _.flatten(array));

const letters = ['a', 'b', 'c'];
console.log('instead of a boilerplate for loop:');
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  console.log(letter);
}
console.log('you can use _.each:');
_.each(letters, (letter) => {
  console.log(letter);
});
console.log('and get index and array too:');
_.each(letters, (letter, index, letters) => {
  console.log(index, letter, letters);
});

const sillyEJSTemplate = '<p><%= data =></p>';
const data = { text: 'something goes here' };
const filledTemplate = _.template(sillyEJSTemplate, data);
// filledTemplate -> <p>something goes here</p>
// document.body.appendChild(filledTemplate);

const filteredLetters = _.filter(letters, (letter, index, letters) => {
  return letter === 'b';
});
console.log('should just get b:' + filteredLetters);

const fancierTemplate = _.template(
  '<% _.each(letters, function(letter) { %>' +
    '<li><%= letter %></li>' +
  '<% }); %>'
);
const content = fancierTemplate({
  letters: _.filter(letters, function(letter) {
    return letter === 'b';
  })
});
// document.body.appendChild(content);

const objectToDeepClone = [{ 'a': 1 }, { 'b': 2 }];
const deepClone = _.cloneDeep(objectToDeepClone);
const shallowClone = objectToDeepClone;
shallowClone[0] = 1;
console.log('editing shallow clone affects original: \n\t' +
    (shallowClone === objectToDeepClone));
console.log('deep clone is unaffected: \n\t' +
    (deepClone !== objectToDeepClone));

const fiveZerosArray = _.times(5, _.constant(0));
console.log('fiveZerosArray:' , fiveZerosArray);

const users = [
  { 'user': 'Aladdin', 'active': true },
  { 'user': 'Batman', 'active': false },
  { 'user': 'Cookie Monster', 'active': true }
];

console.log('get first match:\n', _.find(users, u => u.active));

console.log(_.sortedUniq([1, 2, 3, 3, 3]));
console.log(_.sortedUniq('abccc'));

// // if using jQuery:
// $(window).on('resize', _.debounce(callbackAfterDelay, 150));
// function callbackAfterDelay() {
//   console.log('You resized!');
// }

const sillyArray = [1, 2, 3, 4];
let reductionResults = _.reduce(sillyArray, function(result, value, key) {
  return result + value;
}, 0);
console.log(`sum of array ${sillyArray} = 10: ${10 === reductionResults}`);

const myObject = { 'a': 1, 'b': 2, 'c': 1 };
reductionResults = _.reduce(myObject, function(result, value, key) {
  if (!(value in result)) result[value] = []; // since result starts as {}
  result[value].push(key); // create object that groups keys per value
  return result;
}, {});
console.log(reductionResults);
