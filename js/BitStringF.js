//
// Copyright (c) 2021 Koki Takeyama
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//

function GetBinStringFromSingleLarge(Value, ZeroPadding) {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue <= 0x7FFFFFFF) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var TempValue;
    TempValue = AbsValue;
    do {
        TempValue = TempValue / 2;
        ExpValue = ExpValue + 1;
    } while (TempValue > 0x7FFFFFFF);
    
    var FlacBinStringTemp;
    FlacBinStringTemp = Math.floor(TempValue).toString(2);
    ExpValue = ExpValue + FlacBinStringTemp.length - 1;
    if (ExpValue > 127) {
        if (SignValue) {
            // Negative Normal Maximum
            return "11111111011111111111111111111111";
        } else {
            // Positive Normal Maximum
            return "01111111011111111111111111111111";
        }
    }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString;
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = GetBinStringFromByte(ExpValue + 127, true);
    FlacBinString = (FlacBinStringTemp.substr(1) + Zeros(23)).substr(0, 23);
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromSingleSmall(Value, ZeroPadding)  {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue >= 1.0) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var ExpNormal = false;
    var TempValue;
    TempValue = AbsValue;
    do {
        TempValue = TempValue * 2;
        ExpValue = ExpValue - 1;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            ExpNormal = true;
            break;
        }
    } while (ExpValue > -126);
    if (! ExpNormal) { ExpValue = -127; }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString = "";
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = GetBinStringFromByte(ExpValue + 127, true);
    
    for (var Index = 0; Index < 23; Index++) {
        TempValue = TempValue * 2;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            FlacBinString = FlacBinString + "1";
        } else {
            FlacBinString = FlacBinString + "0";
        }
    }
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromSingleNormal(Value, ZeroPadding) {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue < 1.0) { return ""; }
    if (AbsValue > 0x7FFFFFFF) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var TempValue;
    TempValue = AbsValue;
    
    var FlacBinStringTemp;
    FlacBinStringTemp = Math.floor(TempValue).toString(2);
    ExpValue = ExpValue + FlacBinStringTemp.length - 1;
    
    TempValue = TempValue - Math.floor(TempValue);
    
    for (var Index = FlacBinStringTemp.length; Index < 23; Index++) {
        TempValue = TempValue * 2;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            FlacBinStringTemp = FlacBinStringTemp + "1";
        } else {
            FlacBinStringTemp = FlacBinStringTemp + "0";
        }
    }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString;
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = GetBinStringFromByte(ExpValue + 127, true);
    FlacBinString = (FlacBinStringTemp.substr(1) + Zeros(23)).substr(0, 23);
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromSingle(Value, ZeroPadding) {
    if (isNaN(Value)) {
        //return "01111111111111111111111111111111";
        return "11111111111111111111111111111111";
    }
    
    switch (Value) {
    case 0.0:
        return "00000000000000000000000000000000";
    case -0.0:
        return "10000000000000000000000000000000";
    case Number.POSITIVE_INFINITY:
        return "01111111100000000000000000000000";
    case Number.NEGATIVE_INFINITY:
        return "11111111100000000000000000000000";
    }
    
    var AbsValue;
    AbsValue = Math.abs(Value);
    
    var SignValue;
    SignValue = (Value < 0.0);
    
    if (AbsValue > 0x7FFFFFFF) {
        return GetBinStringFromSingleLarge(Value, ZeroPadding);
    } else if (AbsValue < 1.0) {
        return GetBinStringFromSingleSmall(Value, ZeroPadding);
    }
    
    return GetBinStringFromSingleNormal(Value, ZeroPadding);
}

function GetBinStringFromDoubleLarge(Value, ZeroPadding) {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue / Math.pow(2, 30) <= Math.pow(2, 30) - 1) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var TempValue;
    TempValue = AbsValue;
    do {
        TempValue = TempValue / 2;
        ExpValue = ExpValue + 1;
    } while (TempValue / Math.pow(2, 30) >= Math.pow(2, 30) - 1);
    
    var TempHighValue;
    var TempLowValue;
    TempHighValue = Math.floor(TempValue / Math.pow(2, 30));
    TempLowValue = Math.floor(TempValue - TempHighValue * Math.floor(2, 30));
    
    var FlacHighBinStringTemp;
    var FlacLowBinStringTemp;
    FlacHighBinStringTemp = TempHighValue.toString(2);
    FlacLowBinStringTemp = (Zeros(30) + TempLowValue.toString(2)).slice(-30);
    
    var FlacBinStringTemp;
    FlacBinStringTemp = FlacHighBinStringTemp + FlacLowBinStringTemp;
    ExpValue = ExpValue + FlacBinStringTemp.length - 1;
    if (ExpValue > 1023) {
        // Positive Normal Maximum
        if (SignValue) {
            return "111111111110" +
                "1111111111111111111111111111111111111111111111111111";
        } else {
            return "011111111110" +
                "1111111111111111111111111111111111111111111111111111";
        }
    }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString;
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = (Zeros(11) + (ExpValue + 1023).toString(2)).slice(-11);
    FlacBinString = (FlacBinStringTemp.substr(1) + Zeros(52)).substr(0, 52);
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromDoubleSmall(Value, ZeroPadding) {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue >= 1.0) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var ExpNormal = false;
    var TempValue;
    TempValue = AbsValue;
    do {
        TempValue = TempValue * 2;
        ExpValue = ExpValue - 1;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            ExpNormal = true;
            break;
        }
    } while (ExpValue > -1022);
    if (! ExpNormal) { ExpValue = -1023; }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString = "";
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = (Zeros(11) + (ExpValue + 1023).toString(2)).slice(-11);
    
    for (var Index = 0; Index < 52; Index++) {
        TempValue = TempValue * 2;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            FlacBinString = FlacBinString + "1";
        } else {
            FlacBinString = FlacBinString + "0";
        }
    }
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromDoubleNormal(Value, ZeroPadding) {
    var AbsValue;
    AbsValue = Math.abs(Value);
    if (AbsValue < 1.0) { return ""; }
    if (AbsValue / Math.pow(2, 30) > Math.pow(2, 30) - 1) { return ""; }
    
    var SignValue;
    var ExpValue;
    SignValue = (Value < 0.0);
    ExpValue = 0;
    
    var TempValue;
    TempValue = AbsValue;
    
    var TempHighValue;
    var TempLowValue;
    TempHighValue = Math.floor(TempValue / Math.pow(2, 30));
    TempLowValue = Math.floor(TempValue - TempHighValue * Math.pow(2, 30));
    
    var FlacHighBinStringTemp;
    var FlacLowBinStringTemp;
    if (TempHighValue == 0) {
        FlacHighBinStringTemp = "";
        FlacLowBinStringTemp = TempLowValue.toString(2);
    } else {
        FlacHighBinStringTemp = TempHighValue.toString(2);
        FlacLowBinStringTemp = 
            (Zeros(30) + TempLowValue.toString(2)).slice(-30);
    }
    
    var FlacBinStringTemp;
    FlacBinStringTemp = FlacHighBinStringTemp + FlacLowBinStringTemp;

    ExpValue = ExpValue + FlacBinStringTemp.length - 1;
    
    TempValue = TempValue - TempHighValue * Math.pow(2, 30) - TempLowValue;
    
    for (var Index = FlacBinStringTemp.length; Index < 52; Index++) {
        TempValue = TempValue * 2;
        if (TempValue >= 1.0) {
            TempValue = TempValue - 1.0;
            FlacBinStringTemp = FlacBinStringTemp + "1";
        } else {
            FlacBinStringTemp = FlacBinStringTemp + "0";
        }
    }
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString;
    SignBinString = (SignValue ? "1" : "0");
    ExpBinString = (Zeros(11) + (ExpValue + 1023).toString(2)).slice(-11);
    FlacBinString = (FlacBinStringTemp.substr(1) + Zeros(52)).substr(0, 52);
    
    return SignBinString + ExpBinString + FlacBinString;
}

function GetBinStringFromDouble(Value, ZeroPadding) {
    if (isNaN(Value)) {
        //return "0111111111111111111111111111111111111111111111111111111111111111";
        return "1111111111111111111111111111111111111111111111111111111111111111";
    }
    
    switch (Value) {
    case 0.0:
        return "0000000000000000000000000000000000000000000000000000000000000000";
    case -0.0:
        return "1000000000000000000000000000000000000000000000000000000000000000";
    case Number.POSITIVE_INFINITY:
        return "0111111111110000000000000000000000000000000000000000000000000000";
    case Number.NEGATIVE_INFINITY:
        return "1111111111110000000000000000000000000000000000000000000000000000";
    }
    
    var AbsValue;
    AbsValue = Math.abs(Value);
    
    var SignValue;
    SignValue = (Value < 0.0);
    
    if (AbsValue / Math.pow(2, 30) > Math.pow(2, 30) - 1) {
        return GetBinStringFromDoubleLarge(Value, ZeroPadding);
    } else if (AbsValue < 1.0) {
        return GetBinStringFromDoubleSmall(Value, ZeroPadding);
    }
    
    return GetBinStringFromDoubleNormal(Value, ZeroPadding);
}

function GetBinStringFromBinString(BinString) {
    var Temp = ""
    for (var Index = 0; Index < BinString.length; Index++) {
        switch (BinString.charAt(Index)) {
        case "0": Temp = Temp + "0"; break;
        case "1": Temp = Temp + "1"; break;
        }
    }
    return Temp;
}

function GetOctStringFromBinString(BinString) {
    var BinStringTemp;
    BinStringTemp = GetBinStringFromBinString(BinString);
    BinStringTemp = 
        (Zeros(3 - 1) + BinStringTemp).slice(
            -Math.floor((BinStringTemp.length + 3 - 1) / 3) * 3);
    
    var OctString = "";
    for (var Index = 0; Index < BinStringTemp.length; Index = Index + 3) {
        switch (BinStringTemp.substr(Index, 3)) {
        case "000": OctString = OctString + "0"; break;
        case "001": OctString = OctString + "1"; break;
        case "010": OctString = OctString + "2"; break;
        case "011": OctString = OctString + "3"; break;
        case "100": OctString = OctString + "4"; break;
        case "101": OctString = OctString + "5"; break;
        case "110": OctString = OctString + "6"; break;
        case "111": OctString = OctString + "7"; break;
        }
    }
    return OctString;
}

function GetOctStringFromSingle(Value, ZeroPadding) {
    var BinString;
    BinString = GetBinStringFromSingle(Value, ZeroPadding);
    
    return GetOctStringFromBinString(BinString);
}

function GetOctStringFromDouble(Value, ZeroPadding) {
    var BinString;
    BinString = GetBinStringFromDouble(Value, ZeroPadding);
    
    return GetOctStringFromBinString(BinString);
}

function GetHexStringFromBinString(BinString) {
    var BinStringTemp;
    BinStringTemp = GetBinStringFromBinString(BinString);
    BinStringTemp =
        (Zeros(4 - 1) + BinStringTemp).slice(
            -Math.floor((BinStringTemp.length + 4 - 1) / 4) * 4);
    
    var HexString = "";
    for (var Index = 0; Index < BinStringTemp.length; Index = Index + 4) {
        switch (BinStringTemp.substr(Index, 4)) {
        case "0000": HexString = HexString + "0"; break;
        case "0001": HexString = HexString + "1"; break;
        case "0010": HexString = HexString + "2"; break;
        case "0011": HexString = HexString + "3"; break;
        case "0100": HexString = HexString + "4"; break;
        case "0101": HexString = HexString + "5"; break;
        case "0110": HexString = HexString + "6"; break;
        case "0111": HexString = HexString + "7"; break;
        case "1000": HexString = HexString + "8"; break;
        case "1001": HexString = HexString + "9"; break;
        case "1010": HexString = HexString + "A"; break;
        case "1011": HexString = HexString + "B"; break;
        case "1100": HexString = HexString + "C"; break;
        case "1101": HexString = HexString + "D"; break;
        case "1110": HexString = HexString + "E"; break;
        case "1111": HexString = HexString + "F"; break;
        }
    }
    return HexString;
}

function GetHexStringFromSingle(Value, ZeroPadding) {
    var BinString;
    BinString = GetBinStringFromSingle(Value, ZeroPadding);
    
    return GetHexStringFromBinString(BinString);
}

function GetHexStringFromDouble(Value, ZeroPadding) {
    var BinString;
    BinString = GetBinStringFromDouble(Value, ZeroPadding);
    
    return GetHexStringFromBinString(BinString);
}

function GetSingleFromBinString(BinString) {
    var TempBinString;
    TempBinString = GetBinStringFromBinString(BinString);
    TempBinString = (Zeros(32) + TempBinString).slice(-32);
    
    var SignBinString;
    var ExpBinString;
    var FlacBinString;
    SignBinString = TempBinString.charAt(0);
    ExpBinString = TempBinString.substr(1, 8);
    FlacBinString = TempBinString.slice(-23);
    
    var SignBitValue;
    var ExpBitsValue;
    var FlacBitsValue;
    SignBitValue = (SignBinString == "1");
    ExpBitsValue = GetByteFromBinString(ExpBinString);
    FlacBitsValue = GetLongFromBinString(FlacBinString);
    
    // Zero
    if ((ExpBitsValue == 0) && (FlacBitsValue == 0)) {
        if (SignBitValue) {
            return -0.0;
        } else {
            return 0.0;
        }
    }
    
    // SubNormal
    if (ExpBitsValue == 0) { // FlacBitsValue != 0
        if (SignBitValue) {
            return -(FlacBitsValue * Math.pow(2, -23)) * Math.pow(2, -126);
        } else {
            return (FlacBitsValue * Math.pow(2, -23)) * Math.pow(2, -126);
        }
    }
    
    // Normal
    if (ExpBitsValue < 0xFF) { // && (ExpBitsValue > 0)
        if (SignBitValue) {
            return -(1.0 + FlacBitsValue * Math.pow(2, -23)) * 
                Math.pow(2, ExpBitsValue - 127);
        } else {
            return (1.0 + FlacBitsValue * Math.pow(2, -23)) * 
                Math.pow(2, ExpBitsValue - 127);
        }
    }
    
    // Infinity
    if ((ExpBitsValue == 0xFF) && (FlacBitsValue == 0)) {
        if (SignBitValue) {
            return Number.NEGATIVE_INFINITY;
        } else {
            return Number.POSITIVE_INFINITY;
        }
    }
    
    // NaN
    //if ((ExpBitsValue == 0xFF) && (FlacBitsValue != 0)) {
        return Number.NaN;
    //}
}

function GetDoubleFromBinString(BinString) {
    var TempBinString;
    TempBinString = GetBinStringFromBinString(BinString);
    TempBinString = (Zeros(64) + TempBinString).slice(-64);
    
    var SignBinString;
    var ExpBinString;
    var FlacHighBinString;
    var FlacLowBinString;
    SignBinString = TempBinString.charAt(0);
    ExpBinString = TempBinString.substr(1, 11);
    FlacHighBinString = TempBinString.substr(12, 26);
    FlacLowBinString = TempBinString.slice(-26);
    
    var SignBitValue;
    var ExpBitsValue;
    var FlacHighBitsValue;
    var FlacLowBitsValue;
    SignBitValue = (SignBinString == "1");
    ExpBitsValue = GetIntegerFromBinString(ExpBinString);
    FlacHighBitsValue = GetLongFromBinString(FlacHighBinString);
    FlacLowBitsValue = GetLongFromBinString(FlacLowBinString);
    
    // Zero
    if ((ExpBitsValue == 0) && 
        (FlacHighBitsValue == 0) && (FlacLowBitsValue == 0)) {
        
        if (SignBitValue) {
            return -0.0;
        } else {
            return 0.0;
        }
    }
    
    // SubNormal
    if (ExpBitsValue == 0) { 
        // FlacHighBitsValue != 0 || FlacLowBitsValue != 0
        
        if (SignBitValue) {
            return -(FlacLowBitsValue * Math.pow(2, -52) + 
                FlacHighBitsValue * Math.pow(2, -26)) * Math.pow(2, -1022);
        } else {
            return (FlacLowBitsValue * Math.pow(2, -52) + 
                FlacHighBitsValue * Math.pow(2, -26)) * Math.pow(2, -1022);
        }
    }
    
    // Normal
    if (ExpBitsValue < 0x7FF) { // && (ExpBitsValue > 0)
        if (SignBitValue) {
            return -(1.0 + FlacLowBitsValue * Math.pow(2, -52) + 
                FlacHighBitsValue * Math.pow(2, -26)) * 
                Math.pow(2, ExpBitsValue - 1023);
        } else {
            return (1.0 + FlacLowBitsValue * Math.pow(2, -52) + 
                FlacHighBitsValue * Math.pow(2, -26)) * 
                Math.pow(2, ExpBitsValue - 1023);
        }
    }
    
    // Infinity
    if ((ExpBitsValue == 0x7FF) && 
        (FlacHighBitsValue == 0) && (FlacLowBitsValue == 0)) {
        if (SignBitValue) {
            return Number.NEGATIVE_INFINITY;
        } else {
            return Number.POSITIVE_INFINITY;
        }
    }
    
    // NaN
    //if ((ExpBitsValue = 0x7FF) && 
    //    ((FlacHighBitsValue != 0) || (FlacLowBitsValue != 0))) {
        return Number.NaN;
    //}
}

function GetBinStringFromOctString(OctString) {
    var BinString = "";
    for (var Index = 0; Index < OctString.length; Index++) {
        switch (OctString.charAt(Index)) {
        case "0": BinString = BinString + "000"; break;
        case "1": BinString = BinString + "001"; break;
        case "2": BinString = BinString + "010"; break;
        case "3": BinString = BinString + "011"; break;
        case "4": BinString = BinString + "100"; break;
        case "5": BinString = BinString + "101"; break;
        case "6": BinString = BinString + "110"; break;
        case "7": BinString = BinString + "111"; break;
        }
    }
    return BinString;
}

function GetSingleFromOctString(OctString) {
    var BinString;
    BinString = GetBinStringFromOctString(OctString);
    
    return GetSingleFromBinString(BinString);
}

function GetDoubleFromOctString(OctString) {
    var BinString;
    BinString = GetBinStringFromOctString(OctString);
    
    return GetDoubleFromBinString(BinString);
}

function GetBinStringFromHexString(HexString) {
    var BinString = "";
    for (var Index = 0; Index < HexString.length; Index++) {
        switch (HexString.charAt(Index).toUpperCase()) {
        case "0": BinString = BinString + "0000"; break;
        case "1": BinString = BinString + "0001"; break;
        case "2": BinString = BinString + "0010"; break;
        case "3": BinString = BinString + "0011"; break;
        case "4": BinString = BinString + "0100"; break;
        case "5": BinString = BinString + "0101"; break;
        case "6": BinString = BinString + "0110"; break;
        case "7": BinString = BinString + "0111"; break;
        case "8": BinString = BinString + "1000"; break;
        case "9": BinString = BinString + "1001"; break;
        case "A": BinString = BinString + "1010"; break;
        case "B": BinString = BinString + "1011"; break;
        case "C": BinString = BinString + "1100"; break;
        case "D": BinString = BinString + "1101"; break;
        case "E": BinString = BinString + "1110"; break;
        case "F": BinString = BinString + "1111"; break;
        }
    }
    return BinString;
}

function GetSingleFromHexString(HexString) {
    var BinString;
    BinString = GetBinStringFromHexString(HexString);
    
    return GetSingleFromBinString(BinString);
}

function GetDoubleFromHexString(HexString) {
    var BinString;
    BinString = GetBinStringFromHexString(HexString);
    
    return GetDoubleFromBinString(BinString);
}
