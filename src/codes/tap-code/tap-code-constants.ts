
export type TapCodeEncodedMessage = Array<{ row: number, col: number }>;

export type TapCodeDecodeMap = Array<Array<string>>;
export const TapCodeDecodeMap: TapCodeDecodeMap = [
    ['A', 'B', 'C/K', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
]

export type TapCodeEncodeMap = { [key: string]: { row: number, col: number } }
export const TapCodeEncodeMap: TapCodeEncodeMap = {
    'a': { row: 1, col: 1 },
    'b': { row: 1, col: 2 },
    'c': { row: 1, col: 3 },
    'd': { row: 1, col: 4 },
    'e': { row: 1, col: 5 },
    'f': { row: 2, col: 1 },
    'g': { row: 2, col: 2 },
    'h': { row: 2, col: 3 },
    'i': { row: 2, col: 4 },
    'j': { row: 2, col: 5 },
    'k': { row: 1, col: 3 },
    'l': { row: 3, col: 1 },
    'm': { row: 3, col: 2 },
    'n': { row: 3, col: 3 },
    'o': { row: 3, col: 4 },
    'p': { row: 3, col: 5 },
    'q': { row: 4, col: 1 },
    'r': { row: 4, col: 2 },
    's': { row: 4, col: 3 },
    't': { row: 4, col: 4 },
    'u': { row: 4, col: 5 },
    'v': { row: 5, col: 1 },
    'w': { row: 5, col: 2 },
    'x': { row: 5, col: 3 },
    'y': { row: 5, col: 4 },
    'z': { row: 5, col: 5 }
}