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
// === String Difference 1 - Simple Implementation ===
//

//
// Modified - Cost: 2 dimension to 1 dimension
//

function EditDistance(Str1, Str2) {
    if (Str1.length > Str2.length) {
        return EditDistanceCore(Str1, Str2);
    } else {
        return EditDistanceCore(Str2, Str1);
    }
}

function EditDistanceCore(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if (Len1 == 0) {
        return Len2;
    }
    if (Len2 == 0) {
        return Len1;
    }
    
    var Cost = new Array(Len2 + 1);
    for (var Index2 = 0; Index2 <= Len2; Index2++) {
        Cost[Index2] = Index2;
    }
    
    var DiagonalCost;
    var TempDiagonalCost;
    
    for (var Index1 = 1; Index1 <= Len1; Index1++) {
        Cost[0] = Index1;
        DiagonalCost = Index1 - 1;
        for (var Index2 = 1; Index2 <= Len2; Index2++) {
            TempDiagonalCost = Cost[Index2];
            if (Str1.substr(Index1 - 1, 1) == Str2.substr(Index2 - 1, 1)) {
                Cost[Index2] =
                    Math.min(
                        Cost[Index2] + 1,
                        Cost[Index2 - 1] + 1,
                        DiagonalCost);
            } else {
                Cost[Index2] =
                    Math.min(Cost[Index2] + 1, Cost[Index2 - 1] + 1);
            }
            DiagonalCost = TempDiagonalCost;
        }
    }
    
    return Cost[Len2];
}

function LongestCommonSubsequence(Str1, Str2) {
    if (Str1.length > Str2.length) {
        return LongestCommonSubsequenceCore(Str1, Str2);
    } else {
        return LongestCommonSubsequenceCore(Str2, Str1);
    }
}

function LongestCommonSubsequenceCore(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if (Len1 == 0) {
        return "";
    }
    if (Len2 == 0) {
        return "";
    }
    
    var Cost = new Array(Len2 + 1);
    var LCS = new Array(Len2 + 1);
    
    for (var Index2 = 0; Index2 <= Len2; Index2++) {
        Cost[Index2] = Index2;
        LCS[Index2] = "";
    }
    
    var DiagonalCost;
    var TempDiagonalCost;
    
    var TempCost1;
    var TempCost2;
    var TempCost3;
    
    var DiagonalLCS;
    var TempDiagonalLCS;
    
    var TempLCS1;
    var TempLCS2;
    var TempLCS3;
    
    for (var Index1 = 1; Index1 <= Len1; Index1++) {
        Cost[0] = Index1;
        DiagonalCost = Index1 - 1;
        DiagonalLCS = "";
        
        for (var Index2 = 1; Index2 <= Len2; Index2++) {
            TempDiagonalCost = Cost[Index2];
            
            TempCost1 = Cost[Index2] + 1;
            TempCost2 = Cost[Index2 - 1] + 1;
            
            TempDiagonalLCS = LCS[Index2];
            
            TempLCS1 = LCS[Index2];
            TempLCS2 = LCS[Index2 - 1];
            
            if (Str1.substr(Index1 - 1, 1) == Str2.substr(Index2 - 1, 1)) {
                TempCost3 = DiagonalCost;
                
                TempLCS3 = DiagonalLCS + Str1.substr(Index1 - 1, 1);
                
                if (TempCost1 < TempCost2) {
                    if (TempCost1 < TempCost3) {
                        Cost[Index2] = TempCost1;
                        LCS[Index2] = TempLCS1;
                    } else {
                        Cost[Index2] = TempCost3;
                        LCS[Index2] = TempLCS3;
                    }
                } else {
                    if (TempCost2 < TempCost3) {
                        Cost[Index2] = TempCost2;
                        LCS[Index2] = TempLCS2;
                    } else {
                        Cost[Index2] = TempCost3;
                        LCS[Index2] = TempLCS3;
                    }
                }
                
            } else {
                if (TempCost1 < TempCost2) {
                    Cost[Index2] = TempCost1;
                    LCS[Index2] = TempLCS1;
                } else {
                    Cost[Index2] = TempCost2;
                    LCS[Index2] = TempLCS2;
                }
                
            }
            
            DiagonalCost = TempDiagonalCost;
            DiagonalLCS = TempDiagonalLCS;
        }
    }
    
    return LCS[Len2];
}

function ShortestEditScript(Str1, Str2) {
    if (Str1.length > Str2.length) {
        return ShortestEditScriptCore(Str1, Str2, "-", "+");
    } else {
        return ShortestEditScriptCore(Str2, Str1, "+", "-");
    }
}

function ShortestEditScriptCore(Str1, Str2, EditChar1, EditChar2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if ((Len1 == 0) && (Len2 == 0)) {
        return "";
        
    } else if (Len2 == 0) {
        var SCSTemp1 = "";
        for(var Index1Temp = 1; Index1Temp <= Len1; Index1Temp++) {
            SCSTemp1 = SCSTemp1 + EditChar1 + Str1.substr(Index1Temp - 1, 1);
        }
        return SCSTemp1;
        
    } else if (Len1 == 0) {
        var SCSTemp2 = "";
        for(var Index2Temp = 1; Index2Temp <= Len2; Index2Temp++) {
            SCSTemp2 = SCSTemp2 + EditChar2 + Str2.substr(Index2Temp - 1, 1)
        }
        return SCSTemp2;
        
    }
    
    var Cost = new Array(Len2 + 1);
    var SES = new Array(Len2 + 1);
    
    Cost[0] = 0;
    SES[0] = "";
    for(var Index2 = 1; Index2 <= Len2; Index2++) {
        Cost[Index2] = Index2;
        SES[Index2] = SES[0][Index2 - 1] + EditChar2 + Str2.substr(Index2 - 1, 1);
    }
    
    var DiagonalCost;
    var TempDiagonalCost;
    
    var TempCost1;
    var TempCost2;
    var TempCost3;
    
    var DiagonalSES;
    var TempDiagonalSES;
    
    var TempSES1;
    var TempSES2;
    var TempSES3;
    
    for (var Index1 = 1; Index1 <= Len1; Index1++) {
        Cost[0] = Index1;
        DiagonalCost = Index1 - 1;
        
        SES[0] = "";
        for (Index1Temp = 1; Index1Temp <= Index1; Index1Temp++) {
            SES[0] = SES[0] + EditChar1 + Str1.substr(Index1Temp - 1, 1);
        }
        DiagonalSES = "";
        for (Index1Temp = 1; Index1Temp <= Index1; Index1Temp++) {
            DiagonalSES =
                DiagonalSES + EditChar1 + Str1.substr(Index1Temp - 1, 1);
        }
        
        for (var Index2 = 1; Index2 <= Len2; Index2++) {
            TempDiagonalCost = Cost[Index2];
            
            TempCost1 = Cost[Index2] + 1;
            TempCost2 = Cost[Index2 - 1] + 1;
            
            TempDiagonalSES = SES[Index2];
            
            TempSES1 = SES[Index2] + EditChar1 + Str1.substr(Index1 - 1, 1);
            TempSES2 =
                SES[Index2 - 1] + EditChar2 + Str2.substr(Index2 - 1, 1);
            
            if (Str1.substr(Index1 - 1, 1) == Str2.substr(Index2 - 1, 1)) {
                TempCost3 = DiagonalCost;
                
                TempSES3 = DiagonalSES + " " + Str1.substr(Index1 - 1, 1);
                
                if (TempCost1 < TempCost2) {
                    if (TempCost1 < TempCost3) {
                        Cost[Index2] = TempCost1;
                        SES[Index2] = TempSES1;
                    } else {
                        Cost[Index2] = TempCost3;
                        SES[Index2] = TempSES3;
                    }
                } else {
                    if (TempCost2 < TempCost3) {
                        Cost[Index2] = TempCost2;
                        SES[Index2] = TempSES2;
                    } else {
                        Cost[Index2] = TempCost3;
                        SES[Index2] = TempSES3;
                    }
                }
                
            } else {
                if (TempCost1 < TempCost2) {
                    Cost[Index2] = TempCost1;
                    SES[Index2] = TempSES1;
                } else {
                    Cost[Index2] = TempCost2;
                    SES[Index2] = TempSES2;
                }
                
            }
            
            DiagonalCost = TempDiagonalCost;
            DiagonalSES = TempDiagonalSES;
        }
    }
    
    return SES[Len2];
}
