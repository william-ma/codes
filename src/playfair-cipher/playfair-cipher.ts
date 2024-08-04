
export type EncodeGrid = {};

class PlayfairCipher {

    private encodeMap: EncodeGrid;

    constructor(encodeMap: EncodeGrid) {
        this.encodeMap = encodeMap;
    }

    public encode(message: string): string {
        return "encoded";
    }

    public decode(message: string): string {
        return "decoded message";
    }

    public static crack(encodedMessage: string, decodedMessage: string): EncodeGrid {
        return {};
    }

}