import axios from 'axios';
import {
  add, multiply, processData, fetchData,
} from './functions';

jest.mock('axios');

describe('Should add two numbers', () => {
  it('Should sum two integers', () => {
    const result = add(1, 1);
    expect(result).toEqual(2);
  });

  it('Should sum two floats', () => {
    const result = add(50.5, 49.5);
    expect(result).toEqual(100);
  });

  it('Should sum negative numbers', () => {
    const result = add(-37, 49.5);
    expect(result).toEqual(12.5);
  });

  it('Should sum large numbers', () => {
    const result = add(1234567890, 987654321);
    expect(result).toEqual(2222222211);
  });

  it('Should sum integer and float', () => {
    const result = add(57, 15.9);
    expect(result).toEqual(72.9);
  });
});

describe('Should multiply two numbers', () => {
  it('Should multiply two integers', () => {
    const result = multiply(2, 2);
    expect(result).toEqual(4);
  });

  it('Should multiply two floats', () => {
    const result = multiply(50.5, 49.5);
    expect(result).toEqual(2499.75);
  });

  it('Should multiply negative numbers', () => {
    const result = multiply(-37, -49.5);
    expect(result).toEqual(1831.5);
  });

  it('Should multiply large numbers', () => {
    const result = multiply(12345, 54321);
    expect(result).toEqual(670592745);
  });

  it('Should multiply integer and float', () => {
    const result = multiply(57, 15.9);
    expect(result).toEqual(906.3000000000001);
  });

  it('Should multiply with 0', () => {
    const result = multiply(57, 0);
    expect(result).toEqual(0);
  });
});

describe('Should reduce the array', () => {
  it('Should reduce array with 2 elements', () => {
    const result = processData([1, 2]);
    expect(result).toEqual(3);
  });

  it('Should reduce array with a lot of elements', () => {
    const result = processData([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ]);
    expect(result).toEqual(465);
  });

  it('Should reduce with floats and integers as elements', () => {
    const result = processData([1, 2.9, 3, 4, 5, 6.7, 7, 8, 9, 10.1, 11]);
    expect(result).toEqual(67.7);
  });

  it('Should return empty array with 0 elements', () => {
    const result = processData([]);
    expect(result).toEqual(0);
  });

  it('Should reduce array with negative elements', () => {
    const result = processData([-1, -2, -5, -10, -1000, -600]);
    expect(result).toEqual(-1618);
  });

  it('Should reduce array with different number elements', () => {
    const result = processData([-1.6, 2, 0, -10, -1000, -600, -99.9]);
    expect(result).toEqual(-1709.5);
  });
});

describe('Should test api', () => {
  it('Should return a successful response if the GET request was successful', () => {
    const result = fetchData();
    console.log(result);
    expect(result).toBe('name');
  });
});
