class CaesarCipherService {

    private keyMap: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    public encrypt(plaintext: string, key: number): string {

        if (key >= this.keyMap.length || key <= -this.keyMap.length) {
            console.error("Invalid key length:", key);
            return '';
        }

        return plaintext.toLowerCase().split('')
            .map(c => (
                this.isAlphabetLetter(c)
                    ? this.keyMap[((c.charCodeAt(0) - 'a'.charCodeAt(0)) + key) % this.keyMap.length]
                    : c
            ))
            .join('');
    }

    public decrypt(ciphertext: string, key: number): string {

        if (key >= this.keyMap.length || key <= -this.keyMap.length) {
            console.error("Invalid key length:", key);
            return '';
        }

        return ciphertext.toLowerCase().split('')
            .map(c => {

                if (!this.isAlphabetLetter(c)) {
                    return c;
                }

                let index: number = c.charCodeAt(0) - 'a'.charCodeAt(0) - key;
                if (index < 0) {
                    index += this.keyMap.length;
                }
                return this.keyMap[index % this.keyMap.length];
            })
            .join('');
    }

    public bruteforce(ciphertext: string): { plaintext: string, key: number }[] {

        let tries: { plaintext: string, key: number }[] = [];
        for (let i = -this.keyMap.length + 1; i < this.keyMap.length; i++) {
            tries.push({
                plaintext: this.decrypt(ciphertext, i),
                key: i
            });
        }
        return tries;
    }

    /**
     * 
     * @param ciphertext 
     * @param plaintext 
     * @returns the key
     */
    public crack(ciphertext: string, plaintext: string): number | null {
        const key = this.bruteforce(ciphertext).find(value => value.plaintext === plaintext)?.key;
        if (!key) {
            console.error("Couldn't find key");
            return null;
        }

        return key;
    }

    private isAlphabetLetter(letter: string): boolean {
        return letter.charCodeAt(0) >= 'a'.charCodeAt(0) && letter.charCodeAt(0) <= 'z'.charCodeAt(0);
    }
}

export default CaesarCipherService;