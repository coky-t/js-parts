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
// Microsoft XML, vX.X
// - MSXML2.DOMDocument
//

var XMLDOM;
var BinBase64;
var BinHex;

//
// --- MSXML2.DOMDocument ---
//

//
// GetXMLDOM
// - Returns a MSXML2.DOMDocument object.
//

function GetXMLDOM() {
    if (XMLDOM == null) {
        XMLDOM = new ActiveXObject("MSXML2.DOMDocument");
    }
    return XMLDOM;
}

//
// GetBinBase64
// - Returns the IXMLDOMElement object with bin.base64 datatype.
//

function GetBinBase64() {
    if (BinBase64 == null) {
        BinBase64 = GetXMLDOM().createElement("tmp");
        BinBase64.dataType = "bin.base64";
    }
    return BinBase64;
}


//
// GetBinHex
// - Returns the IXMLDOMElement object with bin.hex datatype.
//

function GetBinHex() {
    if (BinHex == null) {
        BinHex = GetXMLDOM().createElement("tmp");
        BinHex.dataType = "bin.hex";
    }
    return BinHex;
}


//
// --- Base64 ---
//

//
// GetBase64TextFromBinary
// - Return the base64-encoded data.
//

//
// Binary:
//   Required. A Variant that contains an array of bytes.
//

function GetBase64TextFromBinary(Binary) {
    var Base64Text = "";
    try {
        var BinBase64 = GetBinBase64();
        with (BinBase64) {
            nodeTypedValue = Binary;
            Base64Text = text;
        }
    } catch (e) {
        Base64Text = "";
    }
    return Base64Text;
}

//
// GetBinaryFromBase64Text
// - Return the resulting data.
//

//
// Base64Text:
//   Required. A String that contains a base64-encoded data.
//

function GetBinaryFromBase64Text(Base64Text) {
    var Binary = "";
    try {
        var BinBase64 = GetBinBase64();
        with (BinBase64) {
            text = Base64Text;
            Binary = nodeTypedValue;
        }
    } catch (e) {
        Binary = null;
    }
    return Binary;
}

//
// --- Hex ---
//

//
// GetHexTextFromBinary
// - Return the hex-text data.
//

//
// Binary:
//   Required. A Variant that contains an array of bytes.
//

function GetHexTextFromBinary(Binary) {
    var HexText = "";
    try {
        var BinHex = GetBinHex();
        with (BinHex) {
            nodeTypedValue = Binary;
            HexText = text;
        }
    } catch (e) {
        HexText = "";
    }
    return HexText;
}

//
// GetBinaryFromHexText
// - Return the resulting data.
//

//
// HexText:
//   Required. A String that contains a hex-text data.
//

function GetBinaryFromHexText(HexText) {
    var Binary = "";
    try {
        var BinHex = GetBinHex();
        with (BinHex) {
            text = HexText;
            Binary = nodeTypedValue;
        }
    } catch (e) {
        Binary = null;
    }
    return Binary;
}

//
// --- Test ---
//

function Test_HexAndBase64() {
    var HexText;
    HexText = GetTestHexText();
    
    var Binary;
    Binary = GetBinaryFromHexText(HexText);
    Debug_Print_Binary(Binary);
    
    var Base64Text;
    Base64Text = GetBase64TextFromBinary(Binary);
    Debug_Print(Base64Text);
    
    Binary = GetBinaryFromBase64Text(Base64Text);
    Debug_Print_Binary(Binary);
    
    HexText = GetHexTextFromBinary(Binary);
    Debug_Print(HexText);
}

function GetTestHexText() {
    var HexText = "";
    for (var Index = 0; Index < 16; Index++) {
        HexText = HexText + "0" + Index.toString(16);
    }
    for (var Index = 16; Index < 256; Index++) {
        HexText = HexText + Index.toString(16);
    }
    return HexText;
}

function Debug_Print_Binary(Binary) {
    var HexText = GetHexTextFromBinary(Binary);
    
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

function Debug_Print(Str) {
    WScript.Echo(Str);
}
