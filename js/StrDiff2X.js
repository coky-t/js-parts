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
// === String Difference 2 - O(ND) Implementation ===
//

//
// Modified - MinIndex0, MaxIndex0
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
    
    var MaxCost = Len1 + Len2;
    
    var Index2 = new Array(Len1 + Len2 + 1);
    
    var MinIndex0;
    var MaxIndex0;
    
    var TempIndex1;
    var TempIndex2;
    
    for (var Cost = 0; Cost <= MaxCost; Cost++) {
        MinIndex0 = -Cost;
        MaxIndex0 = Cost;
        
        if (Cost > Len1) { MinIndex0 = -Len1 + (Cost - Len1); }
        if (Cost > Len2) { MaxIndex0 = Len2 - (Cost - Len2); }
        
        for (var Index0 = MinIndex0; Index0 <= MaxIndex0; Index0 += 2) {
            if (Cost == 0) {
                TempIndex2 = 0;
                
            } else if (Index0 == MinIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 + 1];
                
            } else if (Index0 == MaxIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 - 1] + 1;
                
            } else {
                TempIndex2 =
                    Math.max(
                        Index2[MaxCost + Index0 + 1],
                        Index2[MaxCost + Index0 - 1] + 1);
                    
            }
            
            TempIndex1 = TempIndex2 - Index0;
            while ((TempIndex1 < Len1) && (TempIndex2 < Len2) &&
                (Str1.substr(TempIndex1, 1) == Str2.substr(TempIndex2, 1))) {
                TempIndex1++;
                TempIndex2++;
            }
            if ((TempIndex1 >= Len1) && (TempIndex2 >= Len2)) {
                return Cost;
            }
            Index2[MaxCost + Index0] = TempIndex2;
        }
    }
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
    
    var MaxCost = Len1 + Len2;
    
    var Index2 = new Array(Len1 + Len2 + 1);
    var LCS = new Array(Len1 + Len2 + 1);
    
    var MinIndex0;
    var MaxIndex0;
    
    var TempIndex1;
    var TempIndex2;
    
    var TempLCS;
    
    for (var Cost = 0; Cost <= MaxCost; Cost++) {
        MinIndex0 = -Cost;
        MaxIndex0 = Cost;
        
        if (Cost > Len1) { MinIndex0 = -Len1 + (Cost - Len1); }
        if (Cost > Len2) { MaxIndex0 = Len2 - (Cost - Len2); }
        
        for (var Index0 = MinIndex0; Index0 <= MaxIndex0; Index0 += 2) {
            if (Cost == 0) {
                TempIndex2 = 0;
                TempLCS = "";
                
            } else if (Index0 == MinIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 + 1];
                TempLCS = LCS[MaxCost + Index0 + 1];
                
            } else if (Index0 == MaxIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 - 1] + 1;
                TempLCS = LCS[MaxCost + Index0 - 1];
                
            } else if (Index2[MaxCost + Index0 + 1] >
                Index2[MaxCost + Index0 - 1] + 1) {
                TempIndex2 = Index2[MaxCost + Index0 + 1];
                TempLCS = LCS[MaxCost + Index0 + 1];
                
            } else {
                TempIndex2 = Index2[MaxCost + Index0 - 1] + 1;
                TempLCS = LCS[MaxCost + Index0 - 1];
                
            }
            
            TempIndex1 = TempIndex2 - Index0;
            while ((TempIndex1 < Len1) && (TempIndex2 < Len2) &&
                (Str1.substr(TempIndex1, 1) == Str2.substr(TempIndex2, 1))) {
                
                TempLCS = TempLCS + Str1.substr(TempIndex1, 1);
                
                TempIndex1++;
                TempIndex2++;
            }
            if ((TempIndex1 >= Len1) && (TempIndex2 >= Len2)) {
                return TempLCS;
            }
            Index2[MaxCost + Index0] = TempIndex2;
            LCS[MaxCost + Index0] = TempLCS;
        }
    }
}

function ShortestEditScript(Str1, Str2) {
    var Len1 = Str1.length;
    var Len2 = Str2.length;
    
    if ((Len1 == 0) && (Len2 == 0)) {
        return "";
        
    } else if (Len2 == 0) {
        var SCSTemp1 = "";
        for(var Index1Temp = 1; Index1Temp <= Len1; Index1Temp++) {
            SCSTemp1 = SCSTemp1 + "-" + Str1.substr(Index1Temp - 1, 1);
        }
        return SCSTemp1;
        
    } else if (Len1 == 0) {
        var SCSTemp2 = "";
        for(var Index2Temp = 1; Index2Temp <= Len2; Index2Temp++) {
            SCSTemp2 = SCSTemp2 + "+" + Str2.substr(Index2Temp - 1, 1)
        }
        return SCSTemp2;
        
    }
    
    var MaxCost = Len1 + Len2;
    
    var Index2 = new Array(Len1 + Len2 + 1);
    var SES = new Array(Len1 + Len2 + 1);
    
    var MinIndex0;
    var MaxIndex0;
    
    var TempIndex1;
    var TempIndex2;
    
    var TempSES;
    
    for (var Cost = 0; Cost <= MaxCost; Cost++) {
        MinIndex0 = -Cost;
        MaxIndex0 = Cost;
        
        if (Cost > Len1) { MinIndex0 = -Len1 + (Cost - Len1); }
        if (Cost > Len2) { MaxIndex0 = Len2 - (Cost - Len2); }
        
        for (var Index0 = MinIndex0; Index0 <= MaxIndex0; Index0 += 2) {
            if (Cost == 0) {
                TempIndex2 = 0;
                TempSES = "";
                
            } else if (Index0 == MinIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 + 1];
                TempSES =
                    SES[MaxCost + Index0 + 1] + "-" +
                    Str1.substr(TempIndex2 - Index0 - 1, 1);
                
            } else if (Index0 == MaxIndex0) {
                TempIndex2 = Index2[MaxCost + Index0 - 1] + 1;
                TempSES =
                    SES[MaxCost + Index0 - 1] + "+" +
                    Str2.substr(TempIndex2 - 1, 1);
                
            } else if (Index2[MaxCost + Index0 + 1] >
                Index2[MaxCost + Index0 - 1] + 1) {
                TempIndex2 = Index2[MaxCost + Index0 + 1];
                TempSES =
                    SES[MaxCost + Index0 + 1] + "-" +
                    Str1.substr(TempIndex2 - Index0 - 1, 1);
                
            } else {
                TempIndex2 = Index2[MaxCost + Index0 - 1] + 1;
                TempSES =
                    SES[MaxCost + Index0 - 1] + "+" +
                    Str2.substr(TempIndex2 - 1, 1);
                
            }
            
            TempIndex1 = TempIndex2 - Index0;
            while ((TempIndex1 < Len1) && (TempIndex2 < Len2) &&
                (Str1.substr(TempIndex1, 1) == Str2.substr(TempIndex2, 1))) {
                
                TempSES = TempSES + " " + Str1.substr(TempIndex1, 1);
                
                TempIndex1++;
                TempIndex2++;
            }
            if ((TempIndex1 >= Len1) && (TempIndex2 >= Len2)) {
                return TempSES;
            }
            Index2[MaxCost + Index0] = TempIndex2;
            SES[MaxCost + Index0] = TempSES;
        }
    }
}
