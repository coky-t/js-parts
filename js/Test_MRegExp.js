//
// Copyright (c) 2020,2022,2024 Koki Takeyama
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

function Test_RegExp_Test() {
    Test_RegExp_Test_Core("abc 123 xyz #$%", "[a-z]+", true, true);
}

function Test_RegExp_Replace() {
    Test_RegExp_Replace_Core(
        "abc 123 xyz #$%", "xxx", "[a-z]+", true, true, true);
}

function Test_RegExp_Execute() {
    Test_RegExp_Execute_Core("abc 123 xyz #$%", "([a-z]+)", true, true, true);
}

function Test_RegExp_MatchedValue() {
    Test_RegExp_MatchedValue_Core("abc 123 xyz #$%", "([a-z]+)", true, true);
}

function Test_RegExp_Exec() {
    Test_RegExp_Exec_Core(
        "abc\r\n123\r\nxyz\r\n#$%",
        "([a-z]+)",
        true, true, true, "\r\n");
}

//
// --- Test Core ---
//

function Test_RegExp_Test_Core(
    SourceString,
    Pattern,
    IgnoreCase,
    MultiLine) {
    
    var Result;
    Result =
        RegExp_Test(SourceString, Pattern, IgnoreCase, MultiLine);
    
    Debug_Print("=== RegExp_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("Test - result: " + Result.toString());
}

function Test_RegExp_Replace_Core(
    SourceString,
    ReplaceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    var Result;
    Result =
        RegExp_Replace(
            SourceString,
            ReplaceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    Debug_Print("=== RegExp_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ReplaceString: " + ReplaceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("GlobalMatch: " + GlobalMatch.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_Execute_Core(
    SourceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    var Matches;
    Matches =
        RegExp_Execute(
            SourceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    Debug_Print("=== RegExp_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("GlobalMatch: " + GlobalMatch.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("--- Execute ---");
    
    Debug_Print_Matches(Matches);
}

function Test_RegExp_MatchedValue_Core(
    SourceString,
    Pattern,
    IgnoreCase,
    MultiLine) {
    
    var Result;
    Result =
        RegExp_MatchedValue(
            SourceString,
            Pattern,
            IgnoreCase,
            MultiLine);
    
    Debug_Print("=== RegExp_MatchedValue ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("MatchedValue - result: " + Result);
}

function Test_RegExp_Exec_Core(
    SourceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine,
    LineSeparator) {
    
    var Matches;
    Matches =
        RegExp_Exec(
            SourceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    Debug_Print("=== RegExp_Exec ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("GlobalMatch: " + GlobalMatch.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("--- Execute ---");
    
    Debug_Print_MatchesEx(Matches);
    
    if (Matches == null) return;
    if (Matches.length == 0) return;
    
    Debug_Print("--- LineNumber ---");
    
    for (var Index = 0; Index < Matches.length; Index++) {
        Test_RegExp_LineNumber_Core(
            SourceString, Matches[Index].index, LineSeparator);
    }
}

function Test_RegExp_LineNumber_Core(
    SourceString,
    Index,
    LineSeparator) {
    
    var LineNumber;
    LineNumber = RegExp_LineNumber(SourceString, Index, LineSeparator);
    
    Debug_Print(
        "index: " + Index.toString() + 
        ", LineNumber: " + LineNumber.toString());
}
