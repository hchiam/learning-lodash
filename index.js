const _ = require('lodash');

// say hi 3 times:
_.times(3, () => { console.log('hi'); });

console.log('{} is empty: ' + _.isEmpty({}));

console.log('range 5: ' + _.range(5));

const array = [[1, 2], [3, 4], [5, 6]];
console.log('flatten arrays: ' + _.flatten(array));

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
console.log('should just get b: ' + filteredLetters);

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
