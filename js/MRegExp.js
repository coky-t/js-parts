//
// Copyright (c) 2020 Koki Takeyama
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
// === RegExp ===
//

//
// RegExp_Execute
// - Executes a regular expression search against a specified string.
//
// RegExp_Replace
// - Replaces text found in a regular expression search.
//
// RegExp_Test
// - Executes a regular expression search against a specified string
//   and returns a Boolean value that indicates if a pattern match was found.
//

//
// InputString:
//   Required. The text string upon which the regular expression is executed.
//
// ReplaceString:
//   Required. The replacement text string.
//
// Pattern:
//   Required. Regular string expression being searched for.
//   https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/f97kw5ka(v=vs.84)
//
// IgnoreCase:
//   Optional. The value is False if the search is case-sensitive,
//   True if it is not. Default is False.
//
// GlobalMatch:
//   Optional. The value is True if the search applies to the entire string,
//   False if it does not. Default is False.
//
// MultiLine:
//   Optional. The value is False if the search is single-line mode,
//   True if it is multi-line mode. Default is False.
//

function RegExp_Execute(
    InputString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    var flags = "";
    if (IgnoreCase) { flags = flags + "i"; }
    if (GlobalMatch) { flags = flags + "g"; }
    if (MultiLine) { flags = flags + "m"; }
    
    var re = new RegExp(Pattern, flags);
    
    return InputString.match(re);
}

function RegExp_Replace(
    InputString,
    ReplaceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    var flags = "";
    if (IgnoreCase) { flags = flags + "i"; }
    if (GlobalMatch) { flags = flags + "g"; }
    if (MultiLine) { flags = flags + "m"; }
    
    var re = new RegExp(Pattern, flags);
    
    return InputString.replace(re, ReplaceString);
}

function RegExp_Test(
    InputString,
    Pattern,
    IgnoreCase,
    MultiLine) {
    
    var flags = "";
    if (IgnoreCase) { flags = flags + "i"; }
    if (MultiLine) { flags = flags + "m"; }
    
    var re = new RegExp(Pattern, flags);
    
    return re.test(InputString);
}

//
// --- Test ---
//

function Test_RegExp_Test(InputString, Pattern, IgnoreCase, MultiLine) {
    if (InputString == "") { return; }
    if (Pattern == "") { return; }
    
    var Result;
    Result =
        RegExp_Test(InputString, Pattern, IgnoreCase, MultiLine);
    
    Debug_Print("=== RegExp_Test ===");
    Debug_Print("InputString: " + InputString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("Test - result: " + Result.toString());
}

function Test_RegExp_Replace(
    InputString,
    ReplaceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (InputString == "") { return; }
    if (ReplaceString == "") { return; }
    if (Pattern == "") { return; }
    
    var Result;
    Result =
        RegExp_Replace(
            InputString,
            ReplaceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    Debug_Print("=== RegExp_Replace ===");
    Debug_Print("InputString: " + InputString);
    Debug_Print("ReplaceString: " + ReplaceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("GlobalMatch: " + GlobalMatch.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_Execute(
    InputString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (InputString == "") { return; }
    if (Pattern == "") { return; }
    
    var Matches;
    Matches =
        RegExp_Execute(
            InputString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    Debug_Print("=== RegExp_Execute ===");
    Debug_Print("InputString: " + InputString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase.toString());
    Debug_Print("GlobalMatch: " + GlobalMatch.toString());
    Debug_Print("MultiLine: " + MultiLine.toString());
    Debug_Print("--- Execute ---");
    
    Test_RegExp_Execute_Matches(Matches);
}

function Test_RegExp_Execute_Matches(
    Matches) {
    
    if (Matches == null) {
        Debug_Print("Matches: null");
        return;
    } else if (Matches.length == 0) {
        Debug_Print("Matches: No item");
        return;
    } else {
        Debug_Print("Matches.length: " + Matches.length.toString());
    }
    
    for (var Index = 0; Index < Matches.length; Index++) {
        Debug_Print(Matches[Index]);
    }
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
