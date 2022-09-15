//
// Copyright (c) 2022 Koki Takeyama
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

function Test_StrArrayDiff_1() {
    Test_StrArrayDiff_Core("abcdef", "dacfea");
}

function Test_StrArrayDiff_2() {
    Test_StrArrayDiff_Core("kitten", "sitting");
}

function Test_StrArrayDiff_3() {
    Test_StrArrayDiff_Core("", "dacfea");
}

function Test_StrArrayDiff_4() {
    Test_StrArrayDiff_Core("abcdef", "");
}

function Test_StrArrayDiff_5() {
    Test_StrArrayDiff_Core("", "");
}

//
// --- Test Core ---
//

function Test_StrArrayDiff_Core(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    var StrArray1 = new Array(Len1);
    for (var Index1 = 0; Index1 < Len1; Index1++) {
        StrArray1[Index1] = Str1.substr(Index1, 1);
    }
    
    var StrArray2 = new Array(Len2);
    for (var Index2 = 0; Index2 < Len2; Index2++) {
        StrArray2[Index2] = Str2.substr(Index2, 1);
    }
    
    Debug_Print("==========");
    Debug_Print("Str1: " + Str1);
    Debug_Print("Str2: " + Str2);
    Debug_Print("ED: " + EditDistance(StrArray1, StrArray2).toString());
    Debug_Print("LCS: " + LongestCommonSubsequence(StrArray1, StrArray2));
    
    var SES = ShortestEditScript(StrArray1, StrArray2);
    Debug_Print("SES: " + SES);
    var SES1 = "";
    var SES2 = "";
    var SES3 = "";
    var Index1 = 0;
    var Index2 = 0;
    for (var Index3 = 0; Index3 < SES.length; Index3++) {
        switch (SES.substr(Index3, 1)) {
        case "-":
            SES1 = SES1 + "-" + Str1.substr(Index1, 1);
            SES3 = SES3 + "-" + Str1.substr(Index1, 1);
            Index1 = Index1 + 1;
            break;
        case "+":
            SES2 = SES2 + "+" + Str2.substr(Index2, 1);
            SES3 = SES3 + "+" + Str2.substr(Index2, 1);
            Index2 = Index2 + 1;
            break;
        case " ":
            SES1 = SES1 + " " + Str1.substr(Index1, 1);
            SES2 = SES2 + " " + Str2.substr(Index2, 1);
            SES3 = SES3 + " " + Str1.substr(Index1, 1);
            Index1 = Index1 + 1;
            Index2 = Index2 + 1;
            break;
        }
    }
    Debug_Print("SES1: " + SES1);
    Debug_Print("SES2: " + SES2);
    Debug_Print("SES3: " + SES3);
}
