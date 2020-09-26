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

function Test_RegExp_ParamsList_Test() {
    Test_RegExp_ParamsList_Test_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "num" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_RegExp_Params_Test() {
    Test_RegExp_Params_Test_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

function Test_RegExp_ParamsList_Replace() {
    Test_RegExp_ParamsList_Replace_Core(
        "abc 123 xyz #$%",
        "xxx" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "999" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_RegExp_Params_Replace() {
    Test_RegExp_Params_Replace_Core(
        "abc 123 xyz #$%",
        "xxx" + "\t" +
            "[a-z]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

function Test_RegExp_ParamsList_Execute() {
    Test_RegExp_ParamsList_Execute_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "([a-z]+)" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n" +
        "num" + "\t" +
            "[0-9]+" + "\t" +
            "true" + "\t" + "true" + "\t" + "true" + "\r\n");
}

function Test_RegExp_Params_Execute() {
    Test_RegExp_Params_Execute_Core(
        "abc 123 xyz #$%",
        "alpha" + "\t" +
            "([a-z]+)" + "\t" +
            "true" + "\t" + "true" + "\t" + "true");
}

//
// --- Test Core ---
//

function Test_RegExp_ParamsList_Test_Core(
    SourceString,
    ParamsList) {
    
    var Result = RegExp_ParamsList_Test(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("Test - result: ");
    Debug_Print(Result);
}

function Test_RegExp_Params_Test_Core(
    SourceString,
    Params) {
    
    var Result = RegExp_Params_Test(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Params: " + Params);
    Debug_Print("Test - result: " + Result);
}

function Test_RegExp_ParamsList_Replace_Core(
    SourceString,
    ParamsList) {
    
    var Result = RegExp_ParamsList_Replace(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_Params_Replace_Core(
    SourceString,
    Params) {
    
    var Result = RegExp_Params_Replace(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Params: " + Params);
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_ParamsList_Execute_Core(
    SourceString,
    ParamsList) {
    
    var REMCollection = RegExp_ParamsList_Execute(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ParamsList: ");
    Debug_Print(ParamsList);
    Debug_Print("--- Execute ---");
    
    Debug_Print_RegExpMatchesCollection(REMCollection);
}

function Test_RegExp_Params_Execute_Core(
    SourceString,
    Params) {
    
    var RegExpMatches = RegExp_Params_Execute(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Execute ===");
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
        Debug_Print("Title: " + RegExpMatches.Title);
        Debug_Print_Matches(RegExpMatches.Matches);
    }
}
