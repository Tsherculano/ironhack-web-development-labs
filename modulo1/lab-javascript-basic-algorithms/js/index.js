// Iteration 1: Names and Input
let hacker1 = 'Henrique Mendes';
let hacker2 = 'Fulano de Talsss';

const hacker1Sentence = "The driver's name is" + ' ' + hacker1;
const hacker2Sentence = `The navigator's name is ${hacker2}`;

console.log(hacker1Sentence);
console.log(hacker2Sentence);
// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker2Length > hacker1Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
let hacker1CaptilizedName = '';

for (let i = 0; i < hacker1.length; i += 1) {
  if (i === hacker1.length - 1) {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()}`;
  } else {
    hacker1CaptilizedName += `${hacker1[i].toUpperCase()} `;
  }
  
}

// Bonus 1:

const sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi non felis eleifend, quis interdum enim vulputate. Curabitur turpis nunc, fermentum a nisi in, imperdiet luctus felis. Mauris eget feugiat odio. Etiam scelerisque elit vitae odio efficitur, at tempor tellus hendrerit. Praesent metus urna, scelerisque non posuere ut, suscipit ut arcu. Ut vel consectetur ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed nibh metus. Proin ex nibh, ultricies non elit vitae, tempus varius sem. Sed lobortis placerat semper. Cras diam dolor, fringilla vel est ac, pellentesque tristique lectus. Nullam efficitur magna id diam bibendum tincidunt. Sed pretium lorem nec dui tincidunt, sed mattis mi euismod. Aliquam in congue nisi. Integer orci sapien, eleifend et tempor quis, feugiat sit amet mi. Suspendisse convallis, felis vitae ullamcorper egestas, ipsum velit venenatis elit, at hendrerit ligula velit sit amet lectus.
Vivamus sagittis ante orci, ut molestie massa sodales non. Praesent ac ex at eros semper scelerisque. Phasellus nec quam dapibus, viverra dui eu, porta est. Suspendisse nec condimentum nisl, at tincidunt metus. In auctor nisl eget nisi ultricies dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum congue nisi eget hendrerit egestas.
Suspendisse at purus at eros dapibus varius vel in magna. Morbi non dictum purus, in posuere erat. Duis vel mauris blandit, euismod augue id, lobortis neque. Nulla sodales, justo ut sagittis varius, diam quam consequat ipsum, non tincidunt libero dolor at dui. Aliquam tristique ipsum sem, in euismod sem scelerisque pharetra. Praesent sodales eu risus at vestibulum. Vivamus diam ante, rutrum eget condimentum nec, pharetra a dui. Mauris ac mauris pellentesque, finibus velit vitae, pulvinar libero. Nunc massa arcu, vulputate vel dignissim non, tristique eu urna. Duis eu congue mauris. Nunc tincidunt dolor dolor, et congue risus congue non. Mauris sed mi mauris. Vivamus egestas blandit fermentum. Ut at lacus in massa pretium dictum. Integer nisl ex, accumsan vel lobortis et, egestas et sem.`

let wordsCount = 1;

for (let i = 0; i < sentence.length; i += 1) {
  if(sentence[i] === ' ') {
    wordsCount += 1;
  }
}

const wordsQuantity = sentence.split(' ').length;

console.log(wordsCount)
console.log(wordsQuantity);

// Bonus 2:

const phraseToCheck = 'akldsjdm u89sudoasdumas09odia90id9a0i()U(*&)(ID()sadjmasdi  adosi,aspodi';

// Converter as letras da string para caixa baixa - OK
// Fazer um loop na string resultante - OK
// Dentro do loop, fazer a verificação do intervalo numérico (97 até 122) referente a cada caractere usando o charCodeAt() - OK
// Caso esteja dentro deste intervalo, concatenar em uma nova string que deverá começar vazia - OK
// Montar outra string, sendo ela o inverso da string montada anteriormente sem os caracteres especiais - OK
// Checar se as duas strings são iguais e printar no console - OK

const lowerCaseString = phraseToCheck.toLowerCase();
let onlyLettersString = '';

for (let i = 0; i < lowerCaseString.length; i += 1) {
  const charCode = lowerCaseString.charCodeAt(i)

  if (charCode >= 97 && charCode <= 122) {
    onlyLettersString += lowerCaseString[i];
  }
}

let reversedString = '';

for (let i = onlyLettersString.length - 1; i >= 0; i -= 1) {
  reversedString += onlyLettersString[i];
}

console.log(onlyLettersString === reversedString);
