//
// Copyright (c) 2025 Koki Takeyama
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, functionlicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, functionject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or functionstantial portions of the Software.
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

function Test_SaveScanCodeTextFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode-licensedb-text.txt";
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode-licensedb\\docs";
    
    Test_SaveScanCodeTextFile_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

//
// --- Test Core ---
//

function Test_SaveScanCodeTextFile_Core(
    OutputFilePath, DirPath) {
    
    var OutputText = "";
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        
        if (GetFileSystemObject().GetExtensionName(File.Path) == "json") {
        if (File.Name != "index.json") {
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var JsonObj;
            JsonObj = ParseJsonText(FileText);
            
            var JsonKeys;
            JsonKeys = GetJsonKeys(JsonObj);
            
            var JsonKeysLength;
            JsonKeysLength = GetJsonKeysLength(JsonKeys)
            
            if (JsonKeyExists(JsonKeys, JsonKeysLength, "text")) {
                var Key;
                var Text;
                Key = GetJsonItemValue(JsonObj, "key");
                Text = GetJsonItemValue(JsonObj, "text");
                //Debug_Print("--- key: " + Key);
                //Debug_Print("--- text: " + Text);
            
                OutputText = OutputText +
                    "<pre name=\"" + Key + "\">" +
                    ReplaceChars(Text) + "</pre>\r\n";
            }
        }
        }
    }
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
    Debug_Print("... Done.");
}

function JsonKeyExists(
    JsonKeys, JsonKeysLength, Key) {
    
    for(var Index = 0; Index < JsonKeysLength; Index++) {
        if (GetJsonKeysItem(JsonKeys, Index) == Key) {
            return true;
        }
    }
    return false;
}

function ReplaceChars(Str) {
    var Temp;
    Temp = Str;
    
    Temp = Temp.replace(/&/g, "&amp;");
    Temp = Temp.replace(/>/g, "&gt;");
    Temp = Temp.replace(/</g, "&lt;");
    //Temp = Temp.replace(/\r\n/g, "<br>");
    //Temp = Temp.replace(/\n/g, "<br>");
    
    return Temp;
}
