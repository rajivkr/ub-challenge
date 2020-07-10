import findStartingElem from './findStartingElem';

describe('findStartingPosition problem testcases', () => {
  it('should return starting position of the trip', () => {
    expect(
      findStartingElem([
        ['Cologne', 'Berlin'],
        ['Munich', 'Cologne'],
        ['YourPlace', 'Munich']
      ])
    ).toEqual('YourPlace');
    expect(
      findStartingElem([
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D']
      ])
    ).toEqual('A');
    expect(
      findStartingElem([
        ['D', 'E'],
        ['F', 'D'],
        ['E', 'X']
      ])
    ).toEqual('F');
  });
});
