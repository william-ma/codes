import { TapCodeDecodeMap, TapCodeEncodedMessage, TapCodeEncodeMap } from "./tap-code-constants";

class TapCodeService {

    private readonly encodeMap: TapCodeEncodeMap;
    private readonly decodeMap: TapCodeDecodeMap;

    constructor(encodeMap: TapCodeEncodeMap, decodeMap: TapCodeDecodeMap) {
        this.encodeMap = encodeMap;
        this.decodeMap = decodeMap;
    }

    public encode(message: string) {
        console.debug('encode()', 'Encoding:', message);

        const encodedMsg = message.toLowerCase().split('').map(char => (
            `[${this.encodeMap[char].row},${this.encodeMap[char].col}]`
        )).join(' ');

        console.debug('encode()', 'Encoded message:', encodedMsg);
        return encodedMsg;
    }

    public decode(encodedMsg: TapCodeEncodedMessage) {
        console.debug('decode()', 'Decoding:', encodedMsg);

        const decodedMsg = encodedMsg.map(({ row, col }) => this.decodeMap[row - 1][col - 1]).join('').toLowerCase();

        console.debug('decode()', 'Decoded message:', decodedMsg);
        return decodedMsg;
    }

    /**
     * 
     * @param encodedMsg 
     * @returns 
     */
    public format(encodedMsg: number[]): TapCodeEncodedMessage {

        if (!(encodedMsg && encodedMsg.length > 0 && encodedMsg.length / 2 === 0)) {
            console.error("format()");
        }

        let formattedEncodedMsg: { row: number, col: number }[] = [];
        while (encodedMsg.length > 0) {
            formattedEncodedMsg.push({ row: encodedMsg.shift() as number, col: encodedMsg.shift() as number })
        }

        return formattedEncodedMsg;
    }

}

export default TapCodeService;