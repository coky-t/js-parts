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

function GetStringBFromByte(Value) {
    return String.fromCharCode(Value);
}

function GetStringB_LEFromInteger(Value) {
    return String.fromCharCode(
        Value & 0xFF,
        RightShiftInteger(Value, 8) & 0xFF);
}

function GetStringB_BEFromInteger(Value) {
    return String.fromCharCode(
        RightShiftInteger(Value, 8) & 0xFF,
        Value & 0xFF);
}

function GetStringB_LEFromLong(Value) {
    return String.fromCharCode(
        Value & 0xFF,
        RightShiftLong(Value, 8) & 0xFF,
        RightShiftLong(Value, 16) & 0xFF,
        RightShiftLong(Value, 24) & 0xFF);
}

function GetStringB_BEFromLong(Value) {
    return String.fromCharCode(
        RightShiftLong(Value, 24) & 0xFF,
        RightShiftLong(Value, 16) & 0xFF,
        RightShiftLong(Value, 8) & 0xFF,
        Value & 0xFF);
}

function GetByteFromStringB(StrB, Pos) {
    return StrB.charCodeAt(Pos);
}

function GetIntegerFromStringB_LE(StrB_LE, Pos) {
    return StrB_LE.charCodeAt(Pos) |
        LeftShiftInteger(StrB_LE.charCodeAt(Pos + 1), 8);
}

function GetIntegerFromStringB_BE(StrB_BE, Pos) {
    return StrB_BE.charCodeAt(Pos + 1) |
        LeftShiftInteger(StrB_BE.charCodeAt(Pos), 8);
}

function GetLongFromStringB_LE(StrB_LE, Pos) {
    return StrB_LE.charCodeAt(Pos) |
        LeftShiftLong(StrB_LE.charCodeAt(Pos + 1), 8) |
        LeftShiftLong(StrB_LE.charCodeAt(Pos + 2), 16) |
        LeftShiftLong(StrB_LE.charCodeAt(Pos + 3), 24);
}

function GetLongFromStringB_BE(StrB_BE, Pos) {
    return StrB_BE.charCodeAt(Pos + 3) |
        LeftShiftLong(StrB_BE.charCodeAt(Pos + 2), 8) |
        LeftShiftLong(StrB_BE.charCodeAt(Pos + 1), 16) |
        LeftShiftLong(StrB_BE.charCodeAt(Pos), 24);
}
