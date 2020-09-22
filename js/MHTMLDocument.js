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
// Microsoft HTML Object Library
// - MSHTML.HTMLDocument
// - htmlfile
//

var HTMLDocument;

//
// --- MSHTML.HTMLDocument ---
//

//
// GetHTMLDocumentForJson
// - Returns a MSHTML.HTMLDocument object.
//

function GetHTMLDocumentForJson() {
    if (HTMLDocument == null) {
        HTMLDocument = new ActiveXObject("htmlfile");
        with (HTMLDocument) {
            write(
                "<script>document.ParseJsonText=function (JsonText) { " +
                "return eval('(' + JsonText + ')'); }</script>");
            write(
                "<script>document.GetKeys=function (JsonObj) { " +
                "var keys = []; " +
                "for (var key in JsonObj) { keys.push(key); } " +
                "return keys; }</script>");
            write(
                "<script>document.GetItem=function (obj, i) { " +
                "return obj[i]; }</script>");
            write(
                "<script>document.GetLength=function (obj) { " +
                "return obj.length; }</script>");
        }
    }
    return HTMLDocument;
}

//
// === Json ===
//

//
// ParseJsonText
// - Returns a JSON object.
//

//
// JsonText:
//   Required. String expression that identifies JSON data.
//

function ParseJsonText(JsonText) {
    //return GetHTMLDocumentForJson().ParseJsonText(JsonText);
    return eval('(' + JsonText + ')');
}

//
// GetJsonKeys
// - Returns an array containing all existing keys in a JSON object.
//

//
// JsonObject:
//   Required. The name of a JSON object
//

function GetJsonKeys(JsonObject) {
    //return GetHTMLDocumentForJson().GetKeys(JsonObject);
    var keys = [];
    for (var key in JsonObject) { keys.push(key); }
    return keys;
}

//
// GetJsonKeysLength
// - Returns the number of elements in a JSON keys array.
//

//
// JsonKeys:
//   Required. The name of a JSON keys array object
//

function GetJsonKeysLength(JsonKeys) {
    //return GetHTMLDocumentForJson().GetLength(JsonKeys);
    return JsonKeys.length;
}

//
// GetJsonKeysItem
// - Returns an item of JSON  object.
//

//
// JsonKeys:
//   Required. The name of a JSON keys array object
//
// Index:
//   Required. Index associated with the item being retrieved.
//

function GetJsonKeysItem(JsonKeys, Index) {
    //return GetHTMLDocumentForJson().GetItem(JsonKeys, Index);
    return JsonKeys[Index];
}

//
// IsJsonItemObject
// - Returns a Boolean value indicating whether an item of JSON object
//   represents an object variable.
//

//
// JsonObject:
//   Required. The name of a JSON object
//
// Key:
//   Required. Key associated with the item being retrieved.
//

function IsJsonItemObject(
    JsonObject,
    Key) {
    
    //return (typeof GetHTMLDocumentForJson().GetItem(JsonObject, Key) == 'object');
    return (typeof JsonObject[Key] == 'object');
}

//
// GetJsonItemValue
// - Returns an item of JSON object.
//

//
// JsonObject:
//   Required. The name of a JSON object
//
// Key:
//   Required. Key associated with the item being retrieved.
//

function GetJsonItemValue(
    JsonObject,
    Key) {
    
    //return GetHTMLDocumentForJson().GetItem(JsonObject, Key);
    return JsonObject[Key];
}

//
// GetJsonItemObject
// - Returns an item of JSON object.
//

//
// JsonObject:
//   Required. The name of a JSON object
//
// Key:
//   Required. Key associated with the item being retrieved.
//

function GetJsonItemObject(
    JsonObject,
    Key) {
    
    //return GetHTMLDocumentForJson().GetItem(JsonObject, Key);
    return JsonObject[Key];
}

//
// --- Test ---
//

function Test_ParseJsonText(JsonText) {
    Debug_Print_ParseJsonText(JsonText);
}

function Test_ParseJsonText1() {
    Debug_Print_ParseJsonText("{a:1,b:2}");
}

function Test_ParseJsonText2() {
    Debug_Print_ParseJsonText("{\"key1\":\"value1\",\"key2\":\"value2\"}");
}

function Test_ParseJsonText3() {
    Debug_Print_ParseJsonText("[10,11,12]");
}

function Test_ParseJsonText4() {
    Debug_Print_ParseJsonText("[\"a\",\"b\",\"c\"]");
}

function Test_ParseJsonText5() {
    Debug_Print_ParseJsonText(
    "{key1:1,\"key2\":\"value2\",key3:{key3_1:3},key4:[\"a\",\"b\",\"c\"]}"
    );
}

function Test_ParseJsonText6() {
    Debug_Print_ParseJsonText("[1,\"value2\",{key3_1:3},[\"a\",\"b\",\"c\"]]");
}

function Debug_Print_ParseJsonText(JsonText) {
    Debug_Print("===");
    Debug_Print(JsonText);
    Debug_Print("===");
    
    var JsonObject;
    JsonObject = ParseJsonText(JsonText);
    
    Debug_Print_JsonObject(JsonObject);
}

function Debug_Print_JsonObject(JsonObject) {
    var Keys;
    Keys = GetJsonKeys(JsonObject);
    
    var KeysLength;
    KeysLength = GetJsonKeysLength(Keys);
    
    for(var Index = 0; Index < KeysLength; Index++) {
        var Key = GetJsonKeysItem(Keys, Index);
        if (IsJsonItemObject(JsonObject, Key)) {
            Debug_Print(Key + " ---");
            Debug_Print_JsonObject(GetJsonItemObject(JsonObject, Key));
            Debug_Print(Key + " ---");
        } else {
            var Value = GetJsonItemValue(JsonObject, Key);
            Debug_Print(Key + ": " + Value);
        }
    }
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
