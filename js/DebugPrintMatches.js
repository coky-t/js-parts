//
// Copyright (c) 2020,2024 Koki Takeyama
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

function Debug_Print_MatchesEx(
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
        Debug_Print_Match(Matches[Index]);
    }
}

function Debug_Print_Match(Match) {
    Debug_Print("---");
    Debug_Print("index: " + Match.index.toString());
    Debug_Print("lastIndex: " + Match.lastIndex.toString());
    Debug_Print("Match[0]: " + Match[0]);
    Debug_Print_SubMatches(Match);
}

function Debug_Print_SubMatches(
    Match) {
    
    if (Match == null) {
        Debug_Print("Match: null");
        return;
    } else if (Match.length == 0) {
        Debug_Print("Match: No submatch");
        return;
    } else {
        Debug_Print("Match.length: " + Match.length.toString());
    }
    
    for (var Index = 1; Index < Match.length; Index++) {
        Debug_Print("... " + Match[Index]);
    }
}
