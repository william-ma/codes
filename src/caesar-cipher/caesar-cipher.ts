import CaesarCipherService from "./caesar-cipher-service";

const caesarCipherService = new CaesarCipherService();

console.log(caesarCipherService.encrypt("abcdefg", 1));
console.log(caesarCipherService.encrypt("abcdefg", 25));
console.log(caesarCipherService.encrypt("zyx", 5));

console.log(caesarCipherService.decrypt("abcdefg", 1));
console.log(caesarCipherService.decrypt("abcdefg", 25));
console.log(caesarCipherService.decrypt("zyx", 5));