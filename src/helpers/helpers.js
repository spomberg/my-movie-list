function moveElement(arr, index, position) {
  const element = arr.splice(index, 1)[0];

  arr.splice(index + position, 0, element);

  return arr;
}

module.exports = { moveElement };