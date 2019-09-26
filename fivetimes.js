function fivetimes(list) {
  return _.map(list, (element) => {
    const newElement = `${element} `.repeat(5);
    return newElement.substring(0, newElement.length - 1);
  });
}

let list = ['foo', 'bar bar'];
console.log(fivetimes(list));

list = ['a', 'b', 'c'];
console.log(fivetimes(list));
