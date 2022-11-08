//
// Copyright (c) 2022 Koki Takeyama
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

function Test_SaveSpdxTextFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\spdx-text.txt";
    
    // https://github.com/spdx/license-list-data/tree/v3.18/text
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    Test_SaveSpdxTextFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\spdx-template.txt";
    
    // https://github.com/spdx/license-list-data/tree/v3.18/template
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

//
// --- Test Core ---
//

function Test_SaveSpdxTextFile_Core(
    OutputFilePath, DirPath) {
    
    var OutputText = "";
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        
        Debug_Print(File.Name);
        
        var FileText;
        FileText = MADODBStream_ReadTextFileUTF8(File.Path);
        OutputText = OutputText +
            "<pre name=\"" +
            File.Name.substring(0, File.Name.length - ".txt".length) +
            "\">" + ReplaceChars(FileText) + "</pre>\r\n";
    }
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, false);
    Debug_Print("... Done.");
}

function Test_SaveSpdxTemplateFile_Core(
    OutputFilePath, DirPath) {
    
    var OutputText = "";
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        
        Debug_Print(File.Name);
        
        var FileText;
        FileText = MADODBStream_ReadTextFileUTF8(File.Path);
        OutputText = OutputText +
            "<pre name=\"" +
            File.Name.substring(0, File.Name.length - ".template.txt".length) +
            "\">" + ReplaceChars(FileText) + "</pre>\r\n"
    }
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, false);
    Debug_Print("... Done.");
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
