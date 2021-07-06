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

function GetByte(Value) {
    if (Value < 0) {
        return ((Math.abs(Value) & 0xFF) ^ 0xFF) + 1;
    } else {
        return Value & 0xFF;
    }
}

function GetInteger(Value) {
    if (Value < 0) {
        return ((Math.abs(Value) & 0xFFFF) ^ 0xFFFF) + 1;
    } else {
        return Value & 0xFFFF;
    }
}

function Zeros(Count) {
    var ZerosStr = "";
    for (var Index = 0; Index < Count; Index++) {
        ZerosStr = ZerosStr + "0";
    }
    return ZerosStr;
}

function GetNumString(Value, Base, Column) {
    var NumString;
    NumString = Value.toString(Base).toUpperCase();
    
    if (Column > 1) { // Zero Padding
        NumString = (Zeros(Column - 1) + NumString).slice(-Column);
    }
    
    return NumString;
}

function GetBinStringFromByte(Value, ZeroPadding) {
    return GetNumString(GetByte(Value), 2, ZeroPadding ? 8 : 0);
}

function GetBinStringFromInteger(Value, ZeroPadding) {
    return GetNumString(GetInteger(Value), 2, ZeroPadding ? 16 : 0);
}

function GetBinStringFromLong(Value, ZeroPadding) {
    if (Value < 0) {
        if (Value > -2147483648) { // 2147483648 = 0x80000000
            var Value1 = ((Math.abs(Value) & 0x7FFFFFFF) ^ 0x7FFFFFFF) + 1;
            return "1" + GetNumString(Value1, 2, 31);
        } else {
            var Value2 = (Math.abs(Value) ^ 0xFFFFFFFF) + 1;
            return GetNumString(Value2, 2, ZeroPadding ? 32 : 0);
        }
    } else {
        return GetNumString(Value, 2, ZeroPadding ? 32 : 0);
    }
}

function GetOctStringFromByte(Value, ZeroPadding) {
    return GetNumString(GetByte(Value), 8, ZeroPadding ? 3 : 0);
}

function GetOctStringFromInteger(Value, ZeroPadding) {
    return GetNumString(GetInteger(Value), 8, ZeroPadding ? 6 : 0);
}

function GetOctStringFromLong(Value, ZeroPadding) {
    if (Value < 0) {
        if (Value > -2147483648) { // 2147483648 = 0x80000000
            var Value1 = ((Math.abs(Value) & 0x7FFFFFFF) ^ 0x7FFFFFFF) + 1;
            var Temp1 = GetNumString(Value1, 8, 11);
            var Temp2;
            switch (Temp1.charAt(0)) {
            case "0": Temp2 = "2"; break;
            case "1": Temp2 = "3"; break;
            }
            return Temp2 + Temp1.slice(-10);
        } else {
            var Value2 = (Math.abs(Value) ^ 0xFFFFFFFF) + 1;
            return GetNumString(Value2, 8, ZeroPadding ? 11 : 0);
        }
    } else {
        return GetNumString(Value, 8, ZeroPadding ? 11 : 0);
    }
}

function GetHexStringFromByte(Value, ZeroPadding) {
    return GetNumString(GetByte(Value), 16, ZeroPadding ? 2 : 0);
}

function GetHexStringFromInteger(Value, ZeroPadding) {
    return GetNumString(GetInteger(Value), 16, ZeroPadding ? 4 : 0);
}

function GetHexStringFromLong(Value, ZeroPadding) {
    if (Value < 0) {
        if (Value > -2147483648) { // 2147483648 = 0x80000000
            var Value1 = ((Math.abs(Value) & 0x7FFFFFFF) ^ 0x7FFFFFFF) + 1;
            var Temp1 = GetNumString(Value1, 16, 8);
            var Temp2;
            switch (Temp1.charAt(0)) {
            case "0": Temp2 = "8"; break;
            case "1": Temp2 = "9"; break;
            case "2": Temp2 = "A"; break;
            case "3": Temp2 = "B"; break;
            case "4": Temp2 = "C"; break;
            case "5": Temp2 = "D"; break;
            case "6": Temp2 = "E"; break;
            case "7": Temp2 = "F"; break;
            }
            return Temp2 + Temp1.slice(-7);
        } else {
            var Value2 = (Math.abs(Value) ^ 0xFFFFFFFF) + 1;
            return GetNumString(Value2, 16, ZeroPadding ? 8 : 0);
        }
    } else {
        return GetNumString(Value, 16, ZeroPadding ? 8 : 0);
    }
}

function GetByteFromBinString(BinString) {
    return parseInt(BinString, 2);
}

function GetIntegerFromBinString(BinString) {
    return parseInt(BinString, 2);
}

function GetLongFromBinString(BinString) {
    return parseInt(BinString, 2);
}

function GetByteFromOctString(OctString) {
    return parseInt(OctString, 8);
}

function GetIntegerFromOctString(OctString) {
    return parseInt(OctString, 8);
}

function GetLongFromOctString(OctString) {
    return parseInt(OctString, 8);
}

function GetByteFromHexString(HexString) {
    return parseInt(HexString, 16);
}

function GetIntegerFromHexString(HexString) {
    return parseInt(HexString, 16);
}

function GetLongFromHexString(HexString) {
    return parseInt(HexString, 16);
}
