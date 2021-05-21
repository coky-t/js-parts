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

function Test_LeftShiftByte01() {
    Test_LeftShiftByteX(-255);
    Test_LeftShiftByteX(0x1);
}

function Test_LeftShiftByteFF() {
    Test_LeftShiftByteX(-1);
    Test_LeftShiftByteX(0xFF);
}

function Test_LeftShiftInteger0001() {
    Test_LeftShiftIntegerX(-65535);
    Test_LeftShiftIntegerX(0x1);
}

function Test_LeftShiftIntegerFFFF() {
    Test_LeftShiftIntegerX(-1);
    Test_LeftShiftIntegerX(0xFFFF);
}

function Test_LeftShiftLong00000001() {
    Test_LeftShiftLongX(-4294967295);
    Test_LeftShiftLongX(0x1);
}

function Test_LeftShiftLongFFFFFFFF() {
    Test_LeftShiftLongX(-1);
    Test_LeftShiftLongX(0xFFFFFFFF);
}

function Test_RightShiftByte80() {
    Test_RightShiftByteX(-128);
    Test_RightShiftByteX(0x80);
}

function Test_RightShiftByteFF() {
    Test_RightShiftByteX(-1);
    Test_RightShiftByteX(0xFF);
}

function Test_RightShiftInteger8000() {
    Test_RightShiftIntegerX(-32768);
    Test_RightShiftIntegerX(0x8000);
}

function Test_RightShiftIntegerFFFF() {
    Test_RightShiftIntegerX(-1);
    Test_RightShiftIntegerX(0xFFFF);
}

function Test_RightShiftLong80000000() {
    Test_RightShiftLongX(-2147483648);
    Test_RightShiftLongX(0x80000000);
}

function Test_RightShiftLongFFFFFFFF() {
    Test_RightShiftLongX(-1);
    Test_RightShiftLongX(0xFFFFFFFF);
}

function Test_LeftRotateByte0F() {
    Test_LeftRotateByteX(-241);
    Test_LeftRotateByteX(0xF);
}

function Test_LeftRotateByteF0() {
    Test_LeftRotateByteX(-16);
    Test_LeftRotateByteX(0xF0);
}

function Test_LeftRotateInteger00FF() {
    Test_LeftRotateIntegerX(-65281);
    Test_LeftRotateIntegerX(0xFF);
}

function Test_LeftRotateIntegerFF00() {
    Test_LeftRotateIntegerX(-256);
    Test_LeftRotateIntegerX(0xFF00);
}

function Test_LeftRotateLong0000FFFF() {
    Test_LeftRotateLongX(-4294901761);
    Test_LeftRotateLongX(0xFFFF);
}

function Test_LeftRotateLongFFFF0000() {
    Test_LeftRotateLongX(-65536);
    Test_LeftRotateLongX(0xFFFF0000);
}

function Test_RightRotateByte0F() {
    Test_RightRotateByteX(-241);
    Test_RightRotateByteX(0xF);
}

function Test_RightRotateByteF0() {
    Test_RightRotateByteX(-16);
    Test_RightRotateByteX(0xF0);
}

function Test_RightRotateInteger00FF() {
    Test_RightRotateIntegerX(-65281);
    Test_RightRotateIntegerX(0xFF);
}

function Test_RightRotateIntegerFF00() {
    Test_RightRotateIntegerX(-256);
    Test_RightRotateIntegerX(0xFF00);
}

function Test_RightRotateLong0000FFFF() {
    Test_RightRotateLongX(-4294901761);
    Test_RightRotateLongX(0xFFFF);
}

function Test_RightRotateLongFFFF0000() {
    Test_RightRotateLongX(-4294901761);
    Test_RightRotateLongX(0xFFFF0000);
}

//
// --- Test X ---
//

function Test_LeftShiftByteX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 8; Count++) {
        Test_LeftShiftByte_Core(Value, Count);
    }
}

function Test_LeftShiftIntegerX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 16; Count++) {
        Test_LeftShiftInteger_Core(Value, Count);
    }
}

function Test_LeftShiftLongX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 32; Count++) {
        Test_LeftShiftLong_Core(Value, Count);
    }
}

function Test_RightShiftByteX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 8; Count++) {
        Test_RightShiftByte_Core(Value, Count);
    }
}

function Test_RightShiftIntegerX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 16; Count++) {
        Test_RightShiftInteger_Core(Value, Count);
    }
}

function Test_RightShiftLongX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 32; Count++) {
        Test_RightShiftLong_Core(Value, Count);
    }
}

function Test_LeftRotateByteX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 8; Count++) {
        Test_LeftRotateByte_Core(Value, Count);
    }
}

function Test_LeftRotateIntegerX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 16; Count++) {
        Test_LeftRotateInteger_Core(Value, Count);
    }
}

function Test_LeftRotateLongX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 32; Count++) {
        Test_LeftRotateLong_Core(Value, Count);
    }
}

function Test_RightRotateByteX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 8; Count++) {
        Test_RightRotateByte_Core(Value, Count);
    }
}

function Test_RightRotateIntegerX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 16; Count++) {
        Test_RightRotateInteger_Core(Value, Count);
    }
}

function Test_RightRotateLongX(Value) {
    Debug_Print("--- " + Value.toString() + " ---");
    for (var Count = 0; Count <= 32; Count++) {
        Test_RightRotateLong_Core(Value, Count);
    }
}

//
// --- Test Core ---
//

function Test_LeftShiftByte_Core(Value, Count) {
    var Result = LeftShiftByte(Value, Count);
    DebugPrintBinOpByte(Value, "<<", Count, Result);
}

function Test_LeftShiftInteger_Core(Value, Count) {
    var Result = LeftShiftInteger(Value, Count);
    DebugPrintBinOpInteger(Value, "<<", Count, Result);
}

function Test_LeftShiftLong_Core(Value, Count) {
    var Result = LeftShiftLong(Value, Count);
    DebugPrintBinOpLong(Value, "<<", Count, Result);
}

function Test_RightShiftByte_Core(Value, Count) {
    var Result = RightShiftByte(Value, Count);
    DebugPrintBinOpByte(Value, ">>", Count, Result);
}

function Test_RightShiftInteger_Core(Value, Count) {
    var Result = RightShiftInteger(Value, Count);
    DebugPrintBinOpInteger(Value, ">>", Count, Result);
}

function Test_RightShiftLong_Core(Value, Count) {
    var Result = RightShiftLong(Value, Count);
    DebugPrintBinOpLong(Value, ">>", Count, Result);
}

function Test_LeftRotateByte_Core(Value, Count) {
    var Result = LeftRotateByte(Value, Count);
    DebugPrintBinOpByte(Value, "lrot", Count, Result);
}

function Test_LeftRotateInteger_Core(Value, Count) {
    var Result = LeftRotateInteger(Value, Count);
    DebugPrintBinOpInteger(Value, "lrot", Count, Result);
}

function Test_LeftRotateLong_Core(Value, Count) {
    var Result = LeftRotateLong(Value, Count);
    DebugPrintBinOpLong(Value, "lrot", Count, Result);
}

function Test_RightRotateByte_Core(Value, Count) {
    var Result = RightRotateByte(Value, Count);
    DebugPrintBinOpByte(Value, "rrot", Count, Result);
}

function Test_RightRotateInteger_Core(Value, Count) {
    var Result = RightRotateInteger(Value, Count);
    DebugPrintBinOpInteger(Value, "rrot", Count, Result);
}

function Test_RightRotateLong_Core(Value, Count) {
    var Result = RightRotateLong(Value, Count);
    DebugPrintBinOpLong(Value, "rrot", Count, Result);
}

function DebugPrintBinOpByte(Value, Op, Count, Result) {
    Debug_Print(
        GetBinStringFromByte(Value, true) + " " +
        Op + " " + Count.toString() + " = " +
        GetBinStringFromByte(Result, true) + " " + Result.toString());
}

function DebugPrintBinOpInteger(Value, Op, Count, Result) {
    Debug_Print(
        GetBinStringFromInteger(Value, true) + " " +
        Op + " " + Count.toString() + " = " +
        GetBinStringFromInteger(Result, true) + " " + Result.toString());
}

function DebugPrintBinOpLong(Value, Op, Count, Result) {
    Debug_Print(
        GetBinStringFromLong(Value, true) + " " +
        Op + " " + Count.toString() + " = " +
        GetBinStringFromLong(Result, true) + " " + Result.toString());
}
