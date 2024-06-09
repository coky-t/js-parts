//
// Copyright (c) 2024 Koki Takeyama
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

function Test_StrArray_Unique() {
    Test_StrArray_Unique_Core(["aaa", "bbb", "ccc", "ddd", "aaa"]);
}

function Test_StrMatrix_Unique() {
    Test_StrMatrix_Unique_Core([["aaa","aaa"],["aaa","bbb"],["bbb","ccc"],["aaa","aaa"]]);
}

//
// --- Test Core ---
//

function Test_StrArray_Unique_Core(StrArray) {
    Debug_Print("---");
    Debug_Print("Input: " + StrArray.join(", "));
    Debug_Print("Output: " + StrArray_Unique(StrArray).join(", "));
}

function Test_StrMatrix_Unique_Core(StrMatrix) {
    Debug_Print("---");
    Debug_Print("Input: ");
    Debug_Print_StrMatrix(StrMatrix);
    Debug_Print("Output: ")
    Debug_Print_StrMatrix(StrMatrix_Unique(StrMatrix));
}

function Debug_Print_StrMatrix(StrMatrix) {
    for (var Index = 0; Index < StrMatrix.length; Index++) {
        Debug_Print(StrMatrix[Index].join(", "));
    }
}
