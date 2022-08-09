function moveElement(arr, index, position) {
  const element = arr.splice(index, 1)[0];

  arr.splice(index + position, 0, element);

  return arr;
}

function isDuplicate(list, movieID) {
  
  for (let index = 0; index < list.length; index++) {
    if (movieID === list[index].id) {
      return true;
    }
  }
  
  return false;
}

function removeMovie(list, movieID) {
  return list.filter(movie => movie.id !== movieID)
}

module.exports = { moveElement, isDuplicate, removeMovie };