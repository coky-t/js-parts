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
// === RegExpEx ===
//

//
// RegExp_ParamsList_Execute
// RegExp_Params_Execute
// - Executes a regular expression search against a specified string.
//
// RegExp_ParamsList_Replace
// RegExp_Params_Replace
// - Replaces text found in a regular expression search.
//
// RegExp_ParamsList_Test
// RegExp_Params_Test
// - Executes a regular expression search against a specified string
//   and returns a Boolean value that indicates if a pattern match was found.
//

//
// SourceString:
//   Required. The text string upon which the regular expression is executed.
//
// ParametersListString:
//   For Execute, Test:
//     (Title)(Tab)Pattern(Tab)IgnoreCase(Tab)GlobalMatch(Tab)MultiLine(Newline)
//   For Replace:
//     ReplaceString(Tab)Pattern(Tab)IgnoreCase(Tab)GlobalMatch(Tab)MultiLine(Newline)
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

function RegExp_ParamsList_Execute(
    SourceString,
    ParametersListString) {
    
    if (SourceString == "") { return null; }
    if (ParametersListString == "") { return null; }
    
    var MatchesCollection = new Array;
    
    var ParamsList = ParametersListString.split("\r\n");
    for (var Index in ParamsList) {
        var Params = ParamsList[Index];
        if (Params != "") {
            var RegExpMatches = RegExp_Params_Execute(SourceString, Params);
            if (RegExpMatches != null) {
                MatchesCollection.push(RegExpMatches);
            }
        }
    }
    
    return MatchesCollection;
}

function RegExp_Params_Execute(
    SourceString,
    ParametersString) {
    
    if (SourceString == "") { return null; }
    if (ParametersString == "") { return null; }
    
    var Params = ParametersString.split("\t");
    
    var LB = 0;
    var UB = Params.length - 1;
    
    var Title = "";
    var Pattern = "";
    var IgnoreCase = false;
    var GlobalMatch = false;
    var MultiLine = false;
    
    Title = Params[LB];
    if (LB + 1 <= UB) { Pattern = Params[LB + 1]; }
    if (LB + 2 <= UB) { IgnoreCase = eval(Params[LB + 2]); }
    if (LB + 3 <= UB) { GlobalMatch = eval(Params[LB + 3]); }
    if (LB + 4 <= UB) { MultiLine = eval(Params[LB + 4]); }
    
    var RegExpMatches = new Object;
    RegExpMatches.Title = Title;
    RegExpMatches.Matches = 
        RegExp_Execute(
            SourceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
    
    return RegExpMatches;
}

function RegExp_ParamsList_Replace(
    SourceString,
    ParametersListString) {
    
    if (SourceString == "") { return ""; }
    if (ParametersListString == "") { return SourceString; }
    
    var ResultString = SourceString;
    
    var ParamsList = ParametersListString.split("\r\n");
    for (var Index in ParamsList) {
        var Params = ParamsList[Index];
        ResultString = RegExp_Params_Replace(ResultString, Params)
    }
    
    return ResultString;
}

function RegExp_Params_Replace(
    SourceString,
    ParametersString) {
    
    if (SourceString == "") { return ""; }
    if (ParametersString == "") { return SourceString; }
    
    var Params = ParametersString.split("\t");
    
    var LB = 0;
    var UB = Params.length -1;
    
    var ReplaceString = "";
    var Pattern = "";
    var IgnoreCase = false;
    var GlobalMatch = false;
    var MultiLine = false;
    
    ReplaceString = Params[LB];
    if (LB + 1 <= UB) { Pattern = Params[LB + 1]; }
    if (LB + 2 <= UB) { IgnoreCase = eval(Params[LB + 2]); }
    if (LB + 3 <= UB) { GlobalMatch = eval(Params[LB + 3]); }
    if (LB + 4 <= UB) { MultiLine = eval(Params[LB + 4]); }
    
    return RegExp_Replace(
            SourceString,
            ReplaceString,
            Pattern,
            IgnoreCase,
            GlobalMatch,
            MultiLine);
}

function RegExp_ParamsList_Test(
    SourceString,
    ParametersListString) {
    
    if (SourceString == "") { return ""; }
    if (ParametersListString == "") { return ""; }
    
    var ResultString = "";
    
    var ParamsList = ParametersListString.split("\r\n");
    for (var Index in ParamsList) {
        var Params = ParamsList[Index];
        
        var Result = RegExp_Params_Test(SourceString, Params);
        if (Result != "") {
            ResultString = ResultString + Result + "\r\n";
        }
    }
    
    return ResultString;
}

function RegExp_Params_Test(
    SourceString,
    ParametersString) {
    
    if (SourceString == "") { return ""; }
    if (ParametersString == "") { return ""; }
    
    var ResultString = "";
    
    var Params = ParametersString.split("\t");
    
    var LB = 0;
    var UB = Params.length -1;
    
    var Title = "";
    var Pattern = "";
    var IgnoreCase = false;
    //var GlobalMatch = false;
    var MultiLine = false;
    
    Title = Params[LB];
    if (LB + 1 <= UB) { Pattern = Params[LB + 1]; }
    if (LB + 2 <= UB) { IgnoreCase = eval(Params[LB + 2]); }
    //if (LB + 3 <= UB) { GlobalMatch = eval(Params[LB + 3]); }
    if (LB + 4 <= UB) { MultiLine = eval(Params[LB + 4]); }
    
    return Title + "\t" +
        RegExp_Test(SourceString, Pattern, IgnoreCase, MultiLine);
}

//
// --- Test ---
//

function Test_RegExp_ParamsList_Test(
    SourceString,
    PatternCollection,
    IgnoreCase,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (PatternCollection == null) { return; }
    if (PatternCollection.length == 0) { return; }
    
    var ParamsList = "";
    for (var Index in PatternCollection) {
        ParamsList = ParamsList +
            "Pattern" + Index + "\t" +
            PatternCollection[Index] + "\t" +
            IgnoreCase + "\t" +
            "false" + "\t" +
            MultiLine + "\r\n";
    }
    
    var Result = RegExp_ParamsList_Test(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Test ===");
    Debug_Print("SourceString: " + SourceString);
    for (var Index in PatternCollection) {
        Debug_Print("Pattern" + Index + ": " + PatternCollection[Index]);
    }
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("MultiLine: " + MultiLine);
    Debug_Print("Test - result: ");
    Debug_Print(Result);
}

function Test_RegExp_Params_Test(
    SourceString,
    Title,
    Pattern,
    IgnoreCase,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (Title == "") { return; }
    if (Pattern == "") { return; }
    
    var Params =
        Title + "\t" +
        Pattern + "\t" +
        IgnoreCase + "\t" +
        "False" + "\t" +
        MultiLine;
    
    var Result = RegExp_Params_Test(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Test ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Title: " + Title);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("MultiLine: " + MultiLine);
    Debug_Print("Test - result: " + Result);
}

function Test_RegExp_ParamsList_Replace(
    SourceString,
    PatternCollection,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (PatternCollection == null) { return; }
    if (PatternCollection.length == 0) { return; }
    
    var ParamsList = "";
    for (var Index in PatternCollection) {
        ParamsList = ParamsList +
            PatternCollection[Index] + "\t" +
            IgnoreCase + "\t" +
            GlobalMatch + "\t" +
            MultiLine + "\r\n";
    }
    
    var Result = RegExp_ParamsList_Replace(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    for (var Index in PatternCollection) {
        Debug_Print(
            "ReplaceString and Pattern " + Index + ": " +
            PatternCollection[Index]);
    }
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("GlobalMatch: " + GlobalMatch);
    Debug_Print("MultiLine: " + MultiLine);
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_Params_Replace(
    SourceString,
    ReplaceString,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (ReplaceString == "") { return; }
    if (Pattern == "") { return; }
    
    var Params =
        ReplaceString + "\t" +
        Pattern + "\t" +
        IgnoreCase + "\t" +
        GlobalMatch + "\t" +
        MultiLine;
    
    var Result = RegExp_Params_Replace(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Replace ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("ReplaceString: " + ReplaceString);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("GlobalMatch: " + GlobalMatch);
    Debug_Print("MultiLine: " + MultiLine);
    Debug_Print("Replace - result: " + Result);
}

function Test_RegExp_ParamsList_Execute(
    SourceString,
    PatternCollection,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (PatternCollection == null) { return; }
    if (PatternCollection.length == 0) { return; }
    
    var ParamsList = "";
    for (var Index in PatternCollection) {
        ParamsList = ParamsList +
            "Pattern" + Index + "\t" +
            PatternCollection[Index] + "\t" +
            IgnoreCase + "\t" +
            GlobalMatch + "\t" +
            MultiLine + "\r\n";
    }
    
    var REMCollection = RegExp_ParamsList_Execute(SourceString, ParamsList);
    
    Debug_Print("=== RegExp_ParamsList_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    for (var Index in PatternCollection) {
        Debug_Print("Pattern" + Index + ": " + PatternCollection[Index]);
    }
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("GlobalMatch: " + GlobalMatch);
    Debug_Print("MultiLine: " + MultiLine);
    Debug_Print("--- Execute ---");
    
    Debug_Print_RegExpMatchesCollection(REMCollection);
}

function Test_RegExp_Params_Execute(
    SourceString,
    Title,
    Pattern,
    IgnoreCase,
    GlobalMatch,
    MultiLine) {
    
    if (SourceString == "") { return; }
    if (Title == "") { return; }
    if (Pattern == "") { return; }
    
    var Params =
        Title + "\t" +
        Pattern + "\t" +
        IgnoreCase + "\t" +
        GlobalMatch + "\t" +
        MultiLine;
    
    var RegExpMatches = RegExp_Params_Execute(SourceString, Params);
    
    Debug_Print("=== RegExp_Params_Execute ===");
    Debug_Print("SourceString: " + SourceString);
    Debug_Print("Title: " + Title);
    Debug_Print("Pattern: " + Pattern);
    Debug_Print("IgnoreCase: " + IgnoreCase);
    Debug_Print("GlobalMatch: " + GlobalMatch);
    Debug_Print("MultiLine: " + MultiLine);
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

function Debug_Print_Matches(
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