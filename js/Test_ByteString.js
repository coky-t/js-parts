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

function Test_GetStringB_LEFromInteger() {
    Test_GetStringB_LEFromInteger_Core(-1);
    Test_GetStringB_LEFromInteger_Core(-32768);
    Test_GetStringB_LEFromInteger_Core(-65535);
    for(var Index = 0; Index <= 14; Index++) {
        Test_GetStringB_LEFromInteger_Core(Math.pow(2, Index));
    }
    Test_GetStringB_LEFromInteger_Core(0x8000);
    Test_GetStringB_LEFromInteger_Core(0xF000);
    Test_GetStringB_LEFromInteger_Core(0xFF00);
    Test_GetStringB_LEFromInteger_Core(0xFFF0);
    Test_GetStringB_LEFromInteger_Core(0xFFFF);
}

function Test_GetStringB_BEFromInteger() {
    Test_GetStringB_BEFromInteger_Core(-1);
    Test_GetStringB_BEFromInteger_Core(-32768);
    Test_GetStringB_BEFromInteger_Core(-65535);
    for(var Index = 0; Index <= 14; Index++) {
        Test_GetStringB_BEFromInteger_Core(Math.pow(2, Index));
    }
    Test_GetStringB_BEFromInteger_Core(0x8000);
    Test_GetStringB_BEFromInteger_Core(0xF000);
    Test_GetStringB_BEFromInteger_Core(0xFF00);
    Test_GetStringB_BEFromInteger_Core(0xFFF0);
    Test_GetStringB_BEFromInteger_Core(0xFFFF);
}

function Test_GetStringB_LEFromLong() {
    Test_GetStringB_LEFromLong_Core(-1);
    Test_GetStringB_LEFromLong_Core(-2147483648);
    Test_GetStringB_LEFromLong_Core(-4294967295);
    for(var Index = 0; Index <= 30; Index++) {
        Test_GetStringB_LEFromLong_Core(Math.pow(2, Index));
    }
    Test_GetStringB_LEFromLong_Core(0x80000000);
    Test_GetStringB_LEFromLong_Core(0xF0000000);
    Test_GetStringB_LEFromLong_Core(0xFF000000);
    Test_GetStringB_LEFromLong_Core(0xFFF00000);
    Test_GetStringB_LEFromLong_Core(0xFFFF0000);
    Test_GetStringB_LEFromLong_Core(0xFFFFF000);
    Test_GetStringB_LEFromLong_Core(0xFFFFFF00);
    Test_GetStringB_LEFromLong_Core(0xFFFFFFF0);
    Test_GetStringB_LEFromLong_Core(0xFFFFFFFF);
}

function Test_GetStringB_BEFromLong() {
    Test_GetStringB_BEFromLong_Core(-1);
    Test_GetStringB_BEFromLong_Core(-2147483648);
    Test_GetStringB_BEFromLong_Core(-4294967295);
    for(var Index = 0; Index <= 30; Index++) {
        Test_GetStringB_BEFromLong_Core(Math.pow(2, Index));
    }
    Test_GetStringB_BEFromLong_Core(0x80000000);
    Test_GetStringB_BEFromLong_Core(0xF0000000);
    Test_GetStringB_BEFromLong_Core(0xFF000000);
    Test_GetStringB_BEFromLong_Core(0xFFF00000);
    Test_GetStringB_BEFromLong_Core(0xFFFF0000);
    Test_GetStringB_BEFromLong_Core(0xFFFFF000);
    Test_GetStringB_BEFromLong_Core(0xFFFFFF00);
    Test_GetStringB_BEFromLong_Core(0xFFFFFFF0);
    Test_GetStringB_BEFromLong_Core(0xFFFFFFFF);
}

//
// --- Test Core ---
//

function Test_GetStringB_LEFromInteger_Core(Value) {
    var StrB;
    StrB = GetStringB_LEFromInteger(Value);
    
    var Result;
    Result = GetIntegerFromStringB_LE(StrB, 0);
    
    Debug_Print(
        Value.toString() + 
        //"(" + Value.toString(16).toUpperCase() + ")" + " = " +
        "(" + GetHexStringFromInteger(Value) + ")" + " = " +
        GetDebugStringFromStrB(StrB) + " = " +
        Result.toString() + 
        //"(" + Result.toString(16).toUpperCase() + ")");
        "(" + GetHexStringFromInteger(Result) + ")");
}

function Test_GetStringB_BEFromInteger_Core(Value) {
    var StrB;
    StrB = GetStringB_BEFromInteger(Value);
    
    var Result;
    Result = GetIntegerFromStringB_BE(StrB, 0);
    
    Debug_Print(
        Value.toString() + 
        //"(" + Value.toString(16).toUpperCase() + ")" + " = " +
        "(" + GetHexStringFromInteger(Value) + ")" + " = " +
        GetDebugStringFromStrB(StrB) + " = " +
        Result.toString() + 
        //"(" + Result.toString(16).toUpperCase() + ")");
        "(" + GetHexStringFromInteger(Result) + ")");
}

function Test_GetStringB_LEFromLong_Core(Value) {
    var StrB;
    StrB = GetStringB_LEFromLong(Value);
    
    var Result;
    Result = GetLongFromStringB_LE(StrB, 0);
    
    Debug_Print(
        Value.toString() + 
        //"(" + Value.toString(16).toUpperCase() + ")" + " = " +
        "(" + GetHexStringFromLong(Value) + ")" + " = " +
        GetDebugStringFromStrB(StrB) + " = " +
        Result.toString() + 
        //"(" + Result.toString(16).toUpperCase() + ")");
        "(" + GetHexStringFromLong(Result) + ")");
}

function Test_GetStringB_BEFromLong_Core(Value) {
    var StrB;
    StrB = GetStringB_BEFromLong(Value);
    
    var Result;
    Result = GetLongFromStringB_BE(StrB, 0);
    
    Debug_Print(
        Value.toString() + 
        //"(" + Value.toString(16).toUpperCase() + ")" + " = " +
        "(" + GetHexStringFromLong(Value) + ")" + " = " +
        GetDebugStringFromStrB(StrB) + " = " +
        Result.toString() + 
        //"(" + Result.toString(16).toUpperCase() + ")");
        "(" + GetHexStringFromLong(Result) + ")");
}

function GetDebugStringFromStrB(StrB) {
    var DebugString = 
        ("0" + StrB.charCodeAt(0).toString(16).toUpperCase()).slice(-2);
    
    for (var Index = 1; Index < StrB.length; Index++) {
        DebugString = DebugString + " " +
            ("0" +
            StrB.charCodeAt(Index).toString(16).toUpperCase()).slice(-2);
    }
    
    return DebugString;
}
