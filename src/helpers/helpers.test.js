import { moveElement } from "./helpers";

test("moveElement moves element up", () => {
  const mockArr = [1, 2, 3, 4];
  const input = moveElement(mockArr, 2, -1);
  const result = [1, 3, 2, 4];
  
  expect(input).toEqual(result);
})