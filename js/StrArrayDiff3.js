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
// === String Array Difference 3 - O(NP) Implementation ===
//

function EditDistance(Str1, Str2) {
    if (Str1.length < Str2.length) {
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
    
    var Index2 = new Array(Len1 + Len2 + 1);
    
    var LenDiff = Len2 - Len1;
    
    var TempIndex2;
    
    for (var TempIndex1 = 0; TempIndex1 <= Len1; TempIndex1++) {
        for (var Index0 = -TempIndex1; Index0 <= LenDiff - 1; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                }
                
            } else if (Index0 == -TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                
            } else {
                TempIndex2 =
                    Math.max(Index2[Len1 + Index0 + 1],
                    Index2[Len1 + Index0 - 1] + 1);
                    
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
        }
        
        for (var Index0 = LenDiff + TempIndex1; Index0 > LenDiff; Index0--) {
            if (Index0 == LenDiff + TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                
            } else {
                TempIndex2 =
                    Math.max(Index2[Len1 + Index0 + 1],
                    Index2[Len1 + Index0 - 1] + 1);
                    
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
        }
        
        for (var Index0 = LenDiff; Index0 == LenDiff; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                }
                
            } else {
                TempIndex2 =
                    Math.max(Index2[Len1 + Index0 + 1],
                    Index2[Len1 + Index0 - 1] + 1);
                    
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempIndex2++;
            }
            
            if (TempIndex2 == Len2) {
                return LenDiff + 2 * TempIndex1;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
        }
    }
}

function LongestCommonSubsequence(Str1, Str2) {
    if (Str1.length < Str2.length) {
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
    
    var Index2 = new Array(Len1 + Len2 + 1);
    var LCS = new Array(Len1 + Len2 + 1);
    
    var LenDiff = Len2 - Len1;
    
    var TempIndex2;
    
    var TempLCS;
    
    for (var TempIndex1 = 0; TempIndex1 <= Len1; TempIndex1++) {
        for (var Index0 = -TempIndex1; Index0 <= LenDiff - 1; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                    TempLCS = "";
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                    TempLCS = LCS[Len1 + Index0 - 1];
                }
                
            } else if (Index0 == -TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempLCS = LCS[Len1 + Index0 + 1];
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempLCS = LCS[Len1 + Index0 + 1];
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempLCS = LCS[Len1 + Index0 - 1];
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempLCS = TempLCS + Str2[TempIndex2];
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            LCS[Len1 + Index0] = TempLCS;
        }
        
        for (var Index0 = LenDiff + TempIndex1; Index0 > LenDiff; Index0--) {
            if (Index0 == LenDiff + TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempLCS = LCS[Len1 + Index0 - 1];
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempLCS = LCS[Len1 + Index0 + 1];
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempLCS = LCS[Len1 + Index0 - 1];
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempLCS = TempLCS + Str2[TempIndex2];
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            LCS[Len1 + Index0] = TempLCS;
        }
        
        for (var Index0 = LenDiff; Index0 == LenDiff; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                    TempLCS = "";
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                    TempLCS = LCS[Len1 + Index0 - 1];
                }
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempLCS = LCS[Len1 + Index0 + 1];
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempLCS = LCS[Len1 + Index0 - 1];
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempLCS = TempLCS + Str2[TempIndex2];
                TempIndex2++;
            }
            
            if (TempIndex2 == Len2) {
                return TempLCS;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            LCS[Len1 + Index0] = TempLCS;
        }
    }
}

function ShortestEditScript(Str1, Str2) {
    if (Str1.length < Str2.length) {
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
            SCSTemp1 = SCSTemp1 + EditChar1;
        }
        return SCSTemp1;
        
    } else if (Len1 == 0) {
        var SCSTemp2 = "";
        for(var Index2Temp = 1; Index2Temp <= Len2; Index2Temp++) {
            SCSTemp2 = SCSTemp2 + EditChar2;
        }
        return SCSTemp2;
        
    }
    
    var Index2 = new Array(Len1 + Len2 + 1);
    var SES = new Array(Len1 + Len2 + 1);
    
    var LenDiff = Len2 - Len1;
    
    var TempIndex2;
    
    var TempSES;
    
    for (var TempIndex1 = 0; TempIndex1 <= Len1; TempIndex1++) {
        for (var Index0 = -TempIndex1; Index0 <= LenDiff - 1; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                    TempSES = "";
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                    TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                }
                
            } else if (Index0 == -TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempSES = SES[Len1 + Index0 + 1] + EditChar1;
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempSES = SES[Len1 + Index0 + 1] + EditChar1;
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempSES = TempSES + " ";
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            SES[Len1 + Index0] = TempSES;
        }
        
        for (var Index0 = LenDiff + TempIndex1; Index0 > LenDiff; Index0--) {
            if (Index0 == LenDiff + TempIndex1) {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempSES = SES[Len1 + Index0 + 1] + EditChar1;
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempSES = TempSES + " ";
                TempIndex2++;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            SES[Len1 + Index0] = TempSES;
        }
        
        for (var Index0 = LenDiff; Index0 == LenDiff; Index0++) {
            if (TempIndex1 == 0) {
                if (Index0 == 0) {
                    TempIndex2 = 0;
                    TempSES = "";
                } else {
                    TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                    TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                }
                
            } else if (Index2[Len1 + Index0 + 1] >
                Index2[Len1 + Index0 - 1] + 1) {
                TempIndex2 = Index2[Len1 + Index0 + 1];
                TempSES = SES[Len1 + Index0 + 1] + EditChar1;
                
            } else {
                TempIndex2 = Index2[Len1 + Index0 - 1] + 1;
                TempSES = SES[Len1 + Index0 - 1] + EditChar2;
                
            }
            
            while ((TempIndex2 - Index0 < Len1) && (TempIndex2 < Len2) &&
                (Str1[TempIndex2 - Index0] == Str2[TempIndex2])) {
                
                TempSES = TempSES + " ";
                TempIndex2++;
            }
            
            if (TempIndex2 == Len2) {
                return TempSES;
            }
            
            Index2[Len1 + Index0] = TempIndex2;
            SES[Len1 + Index0] = TempSES;
        }
    }
}
