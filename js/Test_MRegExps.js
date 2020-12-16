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
// --- Test ---
//

function Test_CRegExps_Test() {
    Test_CRegExps_Test_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "num" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_CRegExp_Test() {
    Test_CRegExp_Test_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

function Test_CRegExps_Replace() {
    Test_CRegExps_Replace_Core(
        "abc 123 xyz #$%",
        "xxx" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "999" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_CRegExp_Replace() {
    Test_CRegExp_Replace_Core(
        "abc 123 xyz #$%",
        "xxx" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

function Test_CRegExps_Execute() {
    Test_CRegExps_Execute_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "([a-z]+)" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "num" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_CRegExp_Execute() {
    Test_CRegExp_Execute_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "([a-z]+)" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

//
// --- Test Core ---
//

function Test_CRegExps_Test_Core(
    SourceString,
    ParamsList) {
    
    var CRegExps_ = GetCRegExps(ParamsList);
    
    var Result = CRegExps_Test(CRegExps_, SourceString);
    
    Debug_Print("=== CRegExps_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("Test - result: ");
    Debug_Print(Result);
}

function Test_CRegExp_Test_Core(
    SourceString,
    Params) {
    
    var CRegExp_ = GetCRegExp(Params);
    
    var Result = CRegExp_Test(CRegExp_, SourceString);
    
    Debug_Print("=== CRegExp_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Params: " + Params);
    Debug_Print("Test - result: " + Result);
}

function Test_CRegExps_Replace_Core(
    SourceString,
    ParamsList) {
    
    var CRegExps_ = GetCRegExps(ParamsList);
    
    var Result = CRegExps_Replace(CRegExps_, SourceString);
    
    Debug_Print("=== CRegExps_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("Replace - result: " + Result);
}

function Test_CRegExp_Replace_Core(
    SourceString,
    Params) {
    
    var CRegExp_ = GetCRegExp(Params);
    
    var Result = CRegExp_Replace(CRegExp_, SourceString);
    
    Debug_Print("=== CRegExp_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Params: " + Params);
    Debug_Print("Replace - result: " + Result);
}

function Test_CRegExps_Execute_Core(
    SourceString,
    ParamsList) {
    
    var CRegExps_ = GetCRegExps(ParamsList);
    
    var REMCollection = CRegExps_Execute(CRegExps_, SourceString);
    
    Debug_Print("=== CRegExps_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("--- Execute ---");
    
    Debug_Print_RegExpMatchesCollection(REMCollection);
}

function Test_CRegExp_Execute_Core(
    SourceString,
    Params) {
    
    var CRegExp_ = GetCRegExp(Params);
    
    var RegExpMatches = CRegExp_Execute(CRegExp_, SourceString);
    
    Debug_Print("=== CRegExp_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Params: " + Params);
    Debug_Print("--- Execute ---");
    
    Debug_Print_RegExpMatches(RegExpMatches);
}

function Debug_Print_RegExpMatchesCollection(
    RegExpMatchesCollection) {
    
    if (RegExpMatchesCollection == null) {
        Debug_Print("RegExpMatchesCollection: null");
    } else if (RegExpMatchesCollection.length == 0) {
        Debug_Print("RegExpMatchesCollection: No item");
    } else {
        for (var Index in RegExpMatchesCollection) {
            var RegExpMatches = RegExpMatchesCollection[Index];
            Debug_Print_RegExpMatches(RegExpMatches);
            Debug_Print("---");
        }
    }
}

function Debug_Print_RegExpMatches(RegExpMatches) {
    if (RegExpMatches == null) {
        Debug_Print("RegExpMatches: null");
    } else {
        Debug_Print("PatternName: " + RegExpMatches.PatternName);
        Debug_Print_Matches(RegExpMatches.Matches);
    }
}
