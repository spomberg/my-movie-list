import { moveElement, isDuplicate, removeMovie } from "./helpers";

test("moveElement moves element up", () => {
  const mockArr = [1, 2, 3, 4];
  const input = moveElement(mockArr, 2, -1);
  const result = [1, 3, 2, 4];
  
  expect(input).toEqual(result);
})


test("isDuplicate returns true when the id is already in the list", () => {
  const mockList = [
    { id: 71407 },
    { id: 87028 },
    { id: 94901 }
  ]
  const input = isDuplicate(mockList, 94901);

  expect(input).toEqual(true);
})

test("isDuplicate returns false when the id is not in the list", () => {
  const mockList = [
    { id: 71407 },
    { id: 87028 },
    { id: 94901 }
  ]
  const input = isDuplicate(mockList, 11111);

  expect(input).toEqual(false);
})

test("removeMovie returns an array without the movie id entered", () => {
  const mockList = [
    { id: 71407 },
    { id: 87028 },
    { id: 94901 }
  ]

  const expectedOutput = [
    { id: 71407 },
    { id: 94901 }
  ]

  const input = removeMovie(mockList, 87028);

  expect(input).toEqual(expectedOutput);
})

test("removeMovie returns an identical array if the movie id is not present", () => {
  const mockList = [
    { id: 71407 },
    { id: 87028 },
    { id: 94901 }
  ]

  const input = removeMovie(mockList, 11111);

  expect(input).toEqual(mockList);
})