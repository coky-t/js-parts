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
// SPDX License List Matching Guidelines, v2.1
// https://spdx.org/spdx-license-list/matching-guidelines
//

function GetMatchingLines(TemplateText) {
    
    // TemplateTextArray
    
    var TemplateTextList;
    TemplateTextList = TemplateText.replace("\r\n", "\n").split("\n");
    
    // ResultArray
    
    var ResultArray;
    ResultArray = new Array;
    
    for (var Index in TemplateTextList) {
        var Result = GetMatchingText(TemplateTextList[Index]);
        ResultArray.push(Result);
    }
    
    // MatchingLines
    
    var MatchingLines;
    MatchingLines = ResultArray.join("\r\n") + "\r\n";
    
    return MatchingLines;
}

function GetMatchingText(TemplateText) {
    if (TemplateText == "") { return ""; }
    
    var Pattern = "(?:" + 
        "<<var;name=\"(.+)\";original=\"(.+)\";match=\"(.+)\">>" + "|" +
        "<<beginOptional>>(.+)<<endOptional>>" + ")";
    
    if (RegExp_Test(TemplateText, Pattern, true, false)) {
        var Matches;
        Matches = RegExp_Execute(TemplateText, Pattern, true, false, false);
        
        var Match;
        Match = Matches[0];
        
        var Match_FirstIndex;
        Match_FirstIndex = TemplateText.indexOf(Match);
        
        var SubMatch1;
        var SubMatch2;
        var SubMatch3;
        var SubMatch4;
        SubMatch1 = Matches[1];
        SubMatch2 = Matches[2];
        SubMatch3 = Matches[3];
        SubMatch4 = Matches[4];
        
        var PreviousPattern = "";
        if (Match_FirstIndex > 0) {
            var PreviousText;
            PreviousText = TemplateText.substr(0, Match_FirstIndex);
            PreviousPattern = GetMatchingPattern(PreviousText);
        }
        
        var MiddlePattern;
        if (SubMatch1 != "") {
            // 2.1.3 Guideline: Replaceable Text
            // 7. Bullets and Numbering
            // 10. Copyright Notice
            // <<var;name="(.+)";original="(.+)";match="(.+)">>
            
            //var VarName;
            //var VarOriginal;
            var VarMatch;
            //VarName = SubMatch1;
            //VarOriginal = SubMatch2;
            VarMatch = SubMatch3;
            
            MiddlePattern = VarMatch;
            
        } else {
            // 2.1.4 Guideline: Omitable Text
            // 11. License Name or Title
            // 12. Extraneous Text At the End of a License
            // "<<beginOptional>>(.+)<<endOptional>>"
            
            var OptText;
            OptText = SubMatch4;
            
            var OptPattern;
            OptPattern = GetMatchingPattern(OptText);
            
            MiddlePattern = "(?:" + OptPattern + ")?";
            
        }
        
        var PostPattern = "";
        if (Match_FirstIndex + Match.length < TemplateText.length) {
            var PostText;
            PostText = TemplateText.substr(Match_FirstIndex + Match.length);
            PostPattern = GetMatchingText(PostText);
        }
        
        return PreviousPattern + MiddlePattern + PostPattern;
        
    } else {
        return GetMatchingPattern(TemplateText);
        
    }
}
