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
// --- Test ---
//

function Test_ParseJsonText1() {
    Test_ParseJsonText_Core("{a:1,b:2}");
}

function Test_ParseJsonText2() {
    Test_ParseJsonText_Core("{\"key1\":\"value1\",\"key2\":\"value2\"}");
}

function Test_ParseJsonText3() {
    Test_ParseJsonText_Core("[10,11,12]");
}

function Test_ParseJsonText4() {
    Test_ParseJsonText_Core("[\"a\",\"b\",\"c\"]");
}

function Test_ParseJsonText5() {
    Test_ParseJsonText_Core(
    "{key1:1,\"key2\":\"value2\",key3:{key3_1:3},key4:[\"a\",\"b\",\"c\"]}"
    );
}

function Test_ParseJsonText6() {
    Test_ParseJsonText_Core("[1,\"value2\",{key3_1:3},[\"a\",\"b\",\"c\"]]");
}

//
// --- Test Core ---
//

function Test_ParseJsonText_Core(JsonText) {
    Debug_Print("===");
    Debug_Print(JsonText);
    Debug_Print("===");
    
    var JsonObject;
    JsonObject = ParseJsonText(JsonText);
    
    if (IsJsonArray(JsonObject)) {
        Debug_Print("=== Array ===");
    } else {
        Debug_Print("=== Object ===");
    }
    Debug_Print_JsonObject(JsonObject);
    
    Debug_Print("===");
    Debug_Print(GetJsonText(JsonObject));
    Debug_Print("===");
}

function Debug_Print_JsonObject(JsonObject) {
    var Keys;
    Keys = GetJsonKeys(JsonObject);
    
    var KeysLength;
    KeysLength = GetJsonKeysLength(Keys);
    
    for(var Index = 0; Index < KeysLength; Index++) {
        var Key = GetJsonKeysItem(Keys, Index);
        if (IsJsonItemObject(JsonObject, Key)) {
            var JsonItemObject;
            JsonItemObject = GetJsonItemObject(JsonObject, Key);
            if (IsJsonArray(JsonItemObject)) {
                Debug_Print(Key + " --- Array ---");
            } else {
                Debug_Print(Key + " --- Object ---");
            }
            Debug_Print_JsonObject(JsonItemObject);
            Debug_Print(Key + " ---");
        } else {
            var Value = GetJsonItemValue(JsonObject, Key);
            Debug_Print(Key + ": " + Value);
        }
    }
}
