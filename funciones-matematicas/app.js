const num1 = 9824;
const num2 = 777;
const num3 = 36325;

const add = (num1,num2) => {
    const result = num1 + num2;
    console.log(result);
    multiply(result, num3);
    return result;
}

const multiply = (result, num3)  => {
    const resultMutiply = result * num3;
    console.log(resultMutiply);
    return resultMutiply;
}

add(num1, num2);




