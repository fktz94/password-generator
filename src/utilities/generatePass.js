const options = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '~`!@#$%^&*()_-+={[}]|:;"<,>.?/\''
};

function checkOptionsUtilization(includes, password) {
  if (includes.find((item) => item === 'uppercase') && !/[A-Z]/.test(password)) return false;
  if (includes.find((item) => item === 'lowercase') && !/[a-z]/.test(password)) return false;
  if (includes.find((item) => item === 'numbers') && !/[\d]/.test(password)) return false;
  if (
    includes.find((item) => item === 'symbols') &&
    !/[~`!@#$%^&*()_\-+={[}\]|:;"<,>.?'\\/]/.test(password)
  )
    return false;
  return true;
}

export default function generatePass(includes = [], length = 0) {
  if (includes.length === 0) throw new Error('Must select at least one option');
  if (length === 0) throw new Error('Minimum character length = 5');

  let string = '';
  for (let i = 0; i < includes.length; i += 1) {
    string += options[includes[i]];
  }

  let password = '';
  for (let i = 0; i < length; i += 1) {
    const rndmNbr = Math.floor(Math.random() * string.length);
    password += string[rndmNbr];
  }

  if (checkOptionsUtilization(includes, password)) {
    return password;
  }
  return generatePass(includes, length);
}

//

//  OPCION 'DINÁMICA' QUE NO SUPE COMO IMPLEMENTAR :

// const randomSymbol = () => {
//   const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/\'';
//   const randomNumber = Math.floor(Math.random() * symbols.length);
//   console.log(symbols[randomNumber]);
// };
// const randomUppercase = () => {
//   const randomNumber = Math.floor(Math.random() * 25) + 65;
//   console.log(String.fromCharCode(randomNumber));
// };
// const randomLowercase = () => {
//   const randomNumber = Math.floor(Math.random() * 25) + 97;
//   console.log(String.fromCharCode(randomNumber));
// };
// const randomNumber = () => {
//   const randomNr = Math.floor(Math.random() * 9);
//   console.log(randomNr);
// };
