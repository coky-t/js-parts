//
// Copyright (c) 2020,2022 Koki Takeyama
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
            write("<meta http-equiv='x-ua-compatible' content='IE=11'/>");
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
            write(
                "<script>document.IsJsonArray=function (obj) { " +
                "return Object.prototype.toString.call(obj) === " +
                "'[object Array]'; }</script>");
            write(
                "<script>document.GetJsonText=function (obj) { " +
                "return document.parentWindow.JSON.stringify(obj); }" +
                "</script>");
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
// IsJsonArray
// - Returns whether JSON object is Array.
//

//
// JsonObject:
//   Required. The name of a JSON object
//

function IsJsonArray(JsonObject) {
    //return GetHTMLDocumentForJson().IsJsonArray(JsonObject);
    return Object.prototype.toString.call(JsonObject) === '[object Array]';
}

//
// GetJsonText
// - Returns string expression that identifies JSON data.
//

//
// JsonObject:
//   Required. The name of a JSON object
//

function GetJsonText(JsonObject) {
    return GetHTMLDocumentForJson().GetJsonText(JsonObject);
}
