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

//
// --- Test ---
//

function Test_GetBinStringFromByte() {
    Test_GetBinStringFromByte_Core(-1);
    Test_GetBinStringFromByte_Core(-128);
    Test_GetBinStringFromByte_Core(-255);
    for(var Index = 0; Index <= 7; Index++) {
        Test_GetBinStringFromByte_Core(Math.pow(2, Index));
    }
    Test_GetBinStringFromByte_Core(0xF0);
    Test_GetBinStringFromByte_Core(0xFF);
}

function Test_GetBinStringFromInteger() {
    Test_GetBinStringFromInteger_Core(-1);
    Test_GetBinStringFromInteger_Core(-32768);
    Test_GetBinStringFromInteger_Core(-65535);
    for(var Index = 0; Index <= 14; Index++) {
        Test_GetBinStringFromInteger_Core(Math.pow(2, Index));
    }
    Test_GetBinStringFromInteger_Core(0x8000);
    Test_GetBinStringFromInteger_Core(0xF000);
    Test_GetBinStringFromInteger_Core(0xFF00);
    Test_GetBinStringFromInteger_Core(0xFFF0);
    Test_GetBinStringFromInteger_Core(0xFFFF);
}

function Test_GetBinStringFromLong() {
    Test_GetBinStringFromLong_Core(-1);
    Test_GetBinStringFromLong_Core(-2147483648);
    Test_GetBinStringFromLong_Core(-4294967295);
    for(var Index = 0; Index <= 30; Index++) {
        Test_GetBinStringFromLong_Core(Math.pow(2, Index));
    }
    Test_GetBinStringFromLong_Core(0x80000000);
    Test_GetBinStringFromLong_Core(0xF0000000);
    Test_GetBinStringFromLong_Core(0xFF000000);
    Test_GetBinStringFromLong_Core(0xFFF00000);
    Test_GetBinStringFromLong_Core(0xFFFF0000);
    Test_GetBinStringFromLong_Core(0xFFFFF000);
    Test_GetBinStringFromLong_Core(0xFFFFFF00);
    Test_GetBinStringFromLong_Core(0xFFFFFFF0);
    Test_GetBinStringFromLong_Core(0xFFFFFFFF);
}

function Test_GetOctStringFromByte() {
    Test_GetOctStringFromByte_Core(-1);
    Test_GetOctStringFromByte_Core(-128);
    Test_GetOctStringFromByte_Core(-255);
    for(var Index = 0; Index <= 7; Index++) {
        Test_GetOctStringFromByte_Core(Math.pow(2, Index));
    }
    Test_GetOctStringFromByte_Core(0xF0);
    Test_GetOctStringFromByte_Core(0xFF);
}

function Test_GetOctStringFromInteger() {
    Test_GetOctStringFromInteger_Core(-1);
    Test_GetOctStringFromInteger_Core(-32768);
    Test_GetOctStringFromInteger_Core(-65535);
    for(var Index = 0; Index <= 14; Index++) {
        Test_GetOctStringFromInteger_Core(Math.pow(2, Index));
    }
    Test_GetOctStringFromInteger_Core(0x8000);
    Test_GetOctStringFromInteger_Core(0xF000);
    Test_GetOctStringFromInteger_Core(0xFF00);
    Test_GetOctStringFromInteger_Core(0xFFF0);
    Test_GetOctStringFromInteger_Core(0xFFFF);
}

function Test_GetOctStringFromLong() {
    Test_GetOctStringFromLong_Core(-1);
    Test_GetOctStringFromLong_Core(-2147483648);
    Test_GetOctStringFromLong_Core(-4294967295);
    for(var Index = 0; Index <= 30; Index++) {
        Test_GetOctStringFromLong_Core(Math.pow(2, Index));
    }
    Test_GetOctStringFromLong_Core(0x80000000);
    Test_GetOctStringFromLong_Core(0xF0000000);
    Test_GetOctStringFromLong_Core(0xFF000000);
    Test_GetOctStringFromLong_Core(0xFFF00000);
    Test_GetOctStringFromLong_Core(0xFFFF0000);
    Test_GetOctStringFromLong_Core(0xFFFFF000);
    Test_GetOctStringFromLong_Core(0xFFFFFF00);
    Test_GetOctStringFromLong_Core(0xFFFFFFF0);
    Test_GetOctStringFromLong_Core(0xFFFFFFFF);
}

function Test_GetHexStringFromByte() {
    Test_GetHexStringFromByte_Core(-1);
    Test_GetHexStringFromByte_Core(-128);
    Test_GetHexStringFromByte_Core(-255);
    for(var Index = 0; Index <= 7; Index++) {
        Test_GetHexStringFromByte_Core(Math.pow(2, Index));
    }
    Test_GetHexStringFromByte_Core(0xF0);
    Test_GetHexStringFromByte_Core(0xFF);
}

function Test_GetHexStringFromInteger() {
    Test_GetHexStringFromInteger_Core(-1);
    Test_GetHexStringFromInteger_Core(-32768);
    Test_GetHexStringFromInteger_Core(-65535);
    for(var Index = 0; Index <= 14; Index++) {
        Test_GetHexStringFromInteger_Core(Math.pow(2, Index));
    }
    Test_GetHexStringFromInteger_Core(0x8000);
    Test_GetHexStringFromInteger_Core(0xF000);
    Test_GetHexStringFromInteger_Core(0xFF00);
    Test_GetHexStringFromInteger_Core(0xFFF0);
    Test_GetHexStringFromInteger_Core(0xFFFF);
}

function Test_GetHexStringFromLong() {
    Test_GetHexStringFromLong_Core(-1);
    Test_GetHexStringFromLong_Core(-2147483648);
    Test_GetHexStringFromLong_Core(-4294967295);
    for(var Index = 0; Index <= 30; Index++) {
        Test_GetHexStringFromLong_Core(Math.pow(2, Index));
    }
    Test_GetHexStringFromLong_Core(0x80000000);
    Test_GetHexStringFromLong_Core(0xF0000000);
    Test_GetHexStringFromLong_Core(0xFF000000);
    Test_GetHexStringFromLong_Core(0xFFF00000);
    Test_GetHexStringFromLong_Core(0xFFFF0000);
    Test_GetHexStringFromLong_Core(0xFFFFF000);
    Test_GetHexStringFromLong_Core(0xFFFFFF00);
    Test_GetHexStringFromLong_Core(0xFFFFFFF0);
    Test_GetHexStringFromLong_Core(0xFFFFFFFF);
}

//
// --- Test Core ---
//

function Test_GetBinStringFromByte_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetBinStringFromByte(Value, true));
}

function Test_GetBinStringFromInteger_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetBinStringFromInteger(Value, true));
}

function Test_GetBinStringFromLong_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetBinStringFromLong(Value, true));
}

function Test_GetOctStringFromByte_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetOctStringFromByte(Value, true));
}

function Test_GetOctStringFromInteger_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetOctStringFromInteger(Value, true));
}

function Test_GetOctStringFromLong_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetOctStringFromLong(Value, true));
}

function Test_GetHexStringFromByte_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetHexStringFromByte(Value, true));
}

function Test_GetHexStringFromInteger_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetHexStringFromInteger(Value, true));
}

function Test_GetHexStringFromLong_Core(Value) {
    Debug_Print(
        Value.toString() + 
        "(" + Value.toString(16).toUpperCase() + ")" + " = " +
        GetHexStringFromLong(Value, true));
}
