import CaesarCipherService from "./caesar-cipher-service";

// interface CaesarCipherArguments {
//     encrypt?: string,
//     decrypt?: string,
//     key?: string,
//     crack?: boolean
// }

const caesarCipherService = new CaesarCipherService();

// const args = parse<CaesarCipherArguments>({
//     encrypt: { type: String, optional: true },
//     decrypt: { type: String, optional: true },
//     key: { type: String, optional: true },
//     crack: { type: Boolean, optional: true }
// });

// todo change key from number to string/character
// implement a crack functionality... there's only 26 characters... or keys... 

// console.log(caesarCipherService.encrypt("abcdefg", 1));
// console.log(caesarCipherService.encrypt("abcdefg", 25));
// console.log(caesarCipherService.encrypt("zyx", 5));

// console.log(caesarCipherService.decrypt("abcdefg", 1));
// console.log(caesarCipherService.decrypt("abcdefg", 25));
// console.log(caesarCipherService.decrypt("zyx", 5));

// console.log(caesarCipherService.bruteforce("hufaopun jvumpkluaphs"));
// console.log(caesarCipherService.bruteforce("Jhlzhy jpwoly: Lujvkl huk kljvkl vuspul"));

console.log(caesarCipherService.crack("Jhlzhy jpwoly: Lujvkl huk kljvkl vuspul", 'caesar cipher: encode and decode online'));
// console.log(caesarCipherService.encrypt("a b c d e f g", 1));
// console.log("a b c d e f g".toLowerCase().split('').join(''));