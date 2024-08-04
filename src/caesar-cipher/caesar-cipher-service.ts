class CaesarCipherService {

    private keyMap: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    public encrypt(plaintext: string, key: number): string {

        if (key >= this.keyMap.length) {
            console.error("Invalid key length:", key);
            return '';
        }

        return plaintext.toLowerCase().split('')
            .map(c => {
                // TODO ignore 'anything NOT letters'
                this.keyMap[((c.charCodeAt(0) - 'a'.charCodeAt(0)) + key) % this.keyMap.length]
            })
            .join('');
    }

    public decrypt(ciphertext: string, key: number): string {

        if (key >= this.keyMap.length) {
            console.error("Invalid key length:", key);
            return '';
        }

        return ciphertext.toLowerCase().split('')
            .map(c => {
                let index: number = c.charCodeAt(0) - 'a'.charCodeAt(0) - key;
                if (index < 0) {
                    index += this.keyMap.length;
                }
                return this.keyMap[index];
            })
            .join('');
    }

    public crack(ciphertext: string): any[] {
        return this.keyMap.map(key => ({
            'plaintext': this.decrypt(ciphertext, key.charCodeAt(0) - 'a'.charCodeAt(0)),
            'key': key
        }));
    }
}

export default CaesarCipherService;