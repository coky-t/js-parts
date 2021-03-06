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
// --- CRegExps ---
//

function GetCRegExps(ParamsListString) {
    if (ParamsListString == "") { return null; }
    
    var CRegExps = new Array;
    
    var ParamsList = ParamsListString.split("\r\n");
    for (var Index in ParamsList) {
        var Params = ParamsList[Index];
        if (Params != "") {
            var CRegExp_ = GetCRegExp(Params);
            if (CRegExp_ != null) {
                CRegExps.push(CRegExp_);
            }
        }
    }
    
    return CRegExps;
}

function GetCRegExp(ParamsString) {
    if (ParamsString == "") { return null; }
    
    var Params = ParamsString.split("\t");
    
    var LB = 0;
    var UB = Params.length - 1;
    
    var PatternName = "";
    var Pattern = "";
    var IgnoreCase = false;
    var GlobalMatch = false;
    var MultiLine = false;
    
    PatternName = Params[LB];
    if (LB + 1 <= UB) { Pattern = Params[LB + 1]; }
    if (LB + 2 <= UB) { IgnoreCase = eval(Params[LB + 2]); }
    if (LB + 3 <= UB) { GlobalMatch = eval(Params[LB + 3]); }
    if (LB + 4 <= UB) { MultiLine = eval(Params[LB + 4]); }
    
    var CRegExp_ = new Object;
    CRegExp_.PatternName = PatternName;
    CRegExp_.Pattern = Pattern;
    CRegExp_.IgnoreCase = IgnoreCase;
    CRegExp_.GlobalMatch = GlobalMatch;
    CRegExp_.MultiLine = MultiLine;
    CRegExp_.RegExp_ = 
        GetNewRegExp(Pattern, IgnoreCase, GlobalMatch, MultiLine);
    
    return CRegExp_;
}

function GetNewRegExp(Pattern, IgnoreCase, GlobalMatch, MultiLine) {
    var flags = "";
    if (IgnoreCase) { flags = flags + "i"; }
    if (GlobalMatch) { flags = flags + "g"; }
    if (MultiLine) { flags = flags + "m"; }
    return new RegExp(Pattern, flags);
}

function CRegExps_LetOptionals(CRegExps, IgnoreCase, GlobalMatch, MultiLine) {
    if (CRegExps == null) { return null; }
    if (CRegExps.length == 0) { return null; }
    
    var CRegExps_ = new Array;
    
    for (var Index in CRegExps) {
        var CRegExp_ = CRegExps[Index];
        CRegExp_.IgnoreCase = IgnoreCase;
        CRegExp_.GlobalMatch = GlobalMatch;
        CRegExp_.MultiLine = MultiLine;
        CRegExp_.RegExp_ = 
            GetNewRegExp(Pattern, IgnoreCase, GlobalMatch, MultiLine);
        CRegExps_.push(CRegExp_);
    }
    
    return CRegExps_;
}

function CRegExps_Execute(CRegExps, SourceString) {
    if (CRegExps == null) { return null; }
    if (CRegExps.length == 0) { return null; }
    if (SourceString == "") { return null; }
    
    var MatchesCollection = new Array;
    
    for (var Index in CRegExps) {
        var CRegExp_ = CRegExps[Index];
        var RegExpMatches = CRegExp_Execute(CRegExp_, SourceString);
        if (RegExpMatches != null) {
            MatchesCollection.push(RegExpMatches);
        }
    }
    
    return MatchesCollection;
}

function CRegExp_Execute(CRegExp_, SourceString) {
    if (CRegExp_ == null) { return null; }
    if (CRegExp_.PatternName == "") { return null; }
    if (CRegExp_.RegExp_ == null) { return null; }
    if (SourceString == "") { return null; }
    
    var Matches = SourceString.match(CRegExp_.RegExp_);
    if (Matches == null) { return null; }
    if (Matches.length == 0) { return null; }
    
    var RegExpMatches = new Object;
    RegExpMatches.PatternName = CRegExp_.PatternName;
    RegExpMatches.Matches = Matches;
    
    return RegExpMatches;
}

function CRegExps_Replace(CRegExps, SourceString) {
    if (CRegExps == null) { return SourceString; }
    if (CRegExps.length == 0) { return SourceString; }
    if (SourceString == "") { return ""; }
    
    var ResultString = SourceString;
    
    for (var Index in CRegExps) {
        var CRegExp_ = CRegExps[Index];
        ResultString = CRegExp_Replace(CRegExp_, ResultString);
    }
    
    return ResultString;
}

function CRegExp_Replace(CRegExp_, SourceString) {
    if (CRegExp_ == null) { return SourceString; }
    if (CRegExp_.PatternName == "") { return SourceString; }
    if (CRegExp_.RegExp_ == null) { return SourceString; }
    if (SourceString == "") { return ""; }
    
    return SourceString.replace(CRegExp_.RegExp_, CRegExp_.PatternName);
}

function CRegExps_Test(CRegExps, SourceString) {
    if (CRegExps == null) { return ""; }
    if (CRegExps.length == 0) { return ""; }
    if (SourceString == "") { return ""; }
    
    var ResultString = "";
    
    for (var Index in CRegExps) {
        var CRegExp_ = CRegExps[Index];
        
        var Result = CRegExp_Test(CRegExp_, SourceString);
        if (Result != "") {
            ResultString = ResultString + Result + "\r\n";
        }
    }
    
    return ResultString;
}

function CRegExp_Test(CRegExp_, SourceString) {
    if (CRegExp_ == null) { return ""; }
    if (CRegExp_.PatternName == "") { return ""; }
    if (CRegExp_.RegExp_ == null) { return ""; }
    if (SourceString == "") { return ""; }
    
    return CRegExp_.PatternName + "\t" + CRegExp_.RegExp_.test(SourceString);
}
