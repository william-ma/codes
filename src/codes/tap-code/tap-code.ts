import { TapCodeDecodeMap, TapCodeEncodeMap } from "./tap-code-constants";
import TapCodeService from "./tap-code-service";

const tapCodeService = new TapCodeService(TapCodeEncodeMap, TapCodeDecodeMap);

tapCodeService.encode("hello");

tapCodeService.decode(
    [
        { row: 2, col: 3 },
        { row: 1, col: 5 },
        { row: 3, col: 1 },
        { row: 3, col: 1 },
        { row: 3, col: 4 }
    ]
);