import axios from 'axios';

// mathFunctions.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// dataProcessor.ts

export function processData(data: number[]): number {
  return data.reduce((acc, num) => acc + num, 0);
}

// apiService.ts

export async function fetchData(): Promise<string> {
  const response = await axios.get('https://rickandmortyapi.com/api');
  return response.data;
}
