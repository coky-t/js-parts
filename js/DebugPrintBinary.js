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

function Debug_Print_Binary(Binary) {
    var HexText;
    var XMLDOM = new ActiveXObject("MSXML2.DOMDocument");
    var Elem = XMLDOM.createElement("tmp");
    with (Elem) {
        dataType = "bin.hex";
        nodeTypedValue = Binary;
        HexText = text;
    }
    
    var Text = "";
    for (var Index1 = 0; Index1 < HexText.length; Index1 += 32) {
        for (var Index2 = Index1; 
            Index2 < Math.min(Index1 + 31, HexText.length); Index2 += 2) {
            Text = Text + HexText.substr(Index2, 2) + " ";
        }
        Text = Text + "\r\n";
    }
    
    Debug_Print("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --");
    Debug_Print(Text);
    Debug_Print("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --");
}
