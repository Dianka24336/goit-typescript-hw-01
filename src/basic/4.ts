// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
export function showMessage(message: string):void {
  console.log(message);
}

export function calc(num1: number, num2: number): number {
  return num1 + num2;
}

export function customError():never {
  throw new Error("Error");
}
 
