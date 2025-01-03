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
// === String Array Difference 1 - Simple Implementation ===
//

function EditDistance(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if (Len1 == 0) {
        return Len2;
    }
    if (Len2 == 0) {
        return Len1;
    }
    
    var Cost = new Array(Len1 + 1);
    for (var Index1 = 0; Index1 <= Len1; Index1++) {
        Cost[Index1] = new Array(Len2 + 1);
        Cost[Index1][0] = Index1;
    }
    for (var Index2 = 0; Index2 <= Len2; Index2++) {
        Cost[0][Index2] = Index2;
    }
    
    for (var Index1 = 1; Index1 <= Len1; Index1++) {
    for (var Index2 = 1; Index2 <= Len2; Index2++) {
        if (Str1[Index1 - 1] == Str2[Index2 - 1]) {
            Cost[Index1][Index2] =
                Math.min(
                    Cost[Index1 - 1][Index2] + 1,
                    Cost[Index1][Index2 - 1] + 1,
                    Cost[Index1 - 1][Index2 - 1]);
        } else {
            Cost[Index1][Index2] =
                Math.min(
                    Cost[Index1 - 1][Index2] + 1,
                    Cost[Index1][Index2 - 1] + 1);
        }
    }
    }
    
    return Cost[Len1][Len2];
}

function LongestCommonSubsequence(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if (Len1 == 0) {
        return "";
    }
    if (Len2 == 0) {
        return "";
    }
    
    var Cost = new Array(Len1 + 1);
    var LCS = new Array(Len1 + 1);
    
    for (var Index1 = 0; Index1 <= Len1; Index1++) {
        Cost[Index1] = new Array(Len2 + 1);
        Cost[Index1][0] = Index1;
        
        LCS[Index1] = new Array(Len2 + 1);
        LCS[Index1][0] = "";
    }
    for (var Index2 = 0; Index2 <= Len2; Index2++) {
        Cost[0][Index2] = Index2;
        LCS[0][Index2] = "";
    }
    
    var TempCost1;
    var TempCost2;
    var TempCost3;
    
    var TempLCS1;
    var TempLCS2;
    var TempLCS3;
    
    for(var Index1 = 1; Index1 <= Len1; Index1++) {
    for(var Index2 = 1; Index2 <= Len2; Index2++) {
        TempCost1 = Cost[Index1 - 1][Index2] + 1;
        TempCost2 = Cost[Index1][Index2 - 1] + 1;
        
        TempLCS1 = LCS[Index1 - 1][Index2];
        TempLCS2 = LCS[Index1][Index2 - 1];
        
        if (Str1[Index1 - 1] == Str2[Index2 - 1]) {
            TempCost3 = Cost[Index1 - 1][Index2 - 1];
            
            TempLCS3 = LCS[Index1 - 1][Index2 - 1] + Str1[Index1 - 1];
            
            if (TempCost1 < TempCost2) {
                if (TempCost1 < TempCost3) {
                    Cost[Index1][Index2] = TempCost1;
                    LCS[Index1][Index2] = TempLCS1;
                } else {
                    Cost[Index1][Index2] = TempCost3;
                    LCS[Index1][Index2] = TempLCS3;
                }
            } else {
                if (TempCost2 < TempCost3) {
                    Cost[Index1][Index2] = TempCost2;
                    LCS[Index1][Index2] = TempLCS2;
                } else {
                    Cost[Index1][Index2] = TempCost3;
                    LCS[Index1][Index2] = TempLCS3;
                }
            }
            
        } else {
            if (TempCost1 < TempCost2) {
                Cost[Index1][Index2] = TempCost1;
                LCS[Index1][Index2] = TempLCS1;
            } else {
                Cost[Index1][Index2] = TempCost2;
                LCS[Index1][Index2] = TempLCS2;
            }
            
        }
    }
    }
    
    return LCS[Len1][Len2];
}

function ShortestEditScript(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if ((Len1 == 0) && (Len2 == 0)) {
        return "";
        
    } else if (Len2 == 0) {
        var SCSTemp1 = "";
        for(var Index1Temp = 1; Index1Temp <= Len1; Index1Temp++) {
            SCSTemp1 = SCSTemp1 + "-" + Str1[Index1Temp - 1];
        }
        return SCSTemp1;
        
    } else if (Len1 == 0) {
        var SCSTemp2 = "";
        for(var Index2Temp = 1; Index2Temp <= Len2; Index2Temp++) {
            SCSTemp2 = SCSTemp2 + "+" + Str2[Index2Temp - 1];
        }
        return SCSTemp2;
        
    }
    
    var Cost = new Array(Len1 + 1);
    var SES = new Array(Len1 + 1);
    
    Cost[0] = new Array(Len2 + 1);
    Cost[0][0] = 0;
    SES[0] = new Array(Len2 + 1);
    SES[0][0] = "";
    for(var Index1 = 1; Index1 <= Len1; Index1++) {
        Cost[Index1] = new Array(Len2 + 1);
        Cost[Index1][0] = Index1;
        
        SES[Index1] = new Array(Len2 + 1);
        SES[Index1][0] = SES[Index1 - 1][0] + "-";
    }
    for(var Index2 = 1; Index2 <= Len2; Index2++) {
        Cost[0][Index2] = Index2;
        SES[0][Index2] = SES[0][Index2 - 1] + "+";
    }
    
    var TempCost1;
    var TempCost2;
    var TempCost3;
    
    var TempSES1;
    var TempSES2;
    var TempSES3;
    
    for(var Index1 = 1; Index1 <= Len1; Index1++) {
    for(var Index2 = 1; Index2 <= Len2; Index2++) {
        TempCost1 = Cost[Index1 - 1][Index2] + 1;
        TempCost2 = Cost[Index1][Index2 - 1] + 1;
        
        TempSES1 = SES[Index1 - 1][Index2] + "-";
        TempSES2 = SES[Index1][Index2 - 1] + "+";
        
        if (Str1[Index1 - 1] == Str2[Index2 - 1]) {
            TempCost3 = Cost[Index1 - 1][Index2 - 1];
            
            TempSES3 = SES[Index1 - 1][Index2 - 1] + " ";
            
            if (TempCost1 < TempCost2) {
                if (TempCost1 < TempCost3) {
                    Cost[Index1][Index2] = TempCost1;
                    SES[Index1][Index2] = TempSES1;
                } else {
                    Cost[Index1][Index2] = TempCost3;
                    SES[Index1][Index2] = TempSES3;
                }
            } else {
                if (TempCost2 < TempCost3) {
                    Cost[Index1][Index2] = TempCost2;
                    SES[Index1][Index2] = TempSES2;
                } else {
                    Cost[Index1][Index2] = TempCost3;
                    SES[Index1][Index2] = TempSES3;
                }
            }
            
        } else {
            if (TempCost1 < TempCost2) {
                Cost[Index1][Index2] = TempCost1;
                SES[Index1][Index2] = TempSES1;
            } else {
                Cost[Index1][Index2] = TempCost2;
                SES[Index1][Index2] = TempSES2;
            }
            
        }
    }
    }
    
    return SES[Len1][Len2];
}
