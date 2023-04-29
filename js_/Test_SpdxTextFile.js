//
// Copyright (c) 2022,2023 Koki Takeyama
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
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/text
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    Test_SaveSpdxTextFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\spdx-template.txt";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

function Test_SaveSpdxTextLinesFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\spdx-text-lines.txt";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/text
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    Test_SaveSpdxTextLinesFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateLinesFile() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\spdx-template-lines.txt";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateLinesFile_Core(
        OutputFilePath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateToTextFiles() {
    var OutputDirPath;
    OutputDirPath = "C:\\work\\data\\spdx-license-template-to-text";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateToTextFiles_Core(
        OutputDirPath, SpdxTextDirPath);
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

function Test_SaveSpdxTextLinesFile_Core(
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
        
        var Lines;
        Lines = FileText.replace(/\r\n/g, "\n").split("\n");
        
        var Count;
        Count = 1
        for (var Index in Lines) {
            if (Lines[Index] != "") {
                OutputText = OutputText +
                    "<pre name=\"" +
                    File.Name.substring(0, File.Name.length - ".txt".length) +
                    "_" + ("00" + Count.toString()).slice(-3) +
                    "\">" + ReplaceChars(Lines[Index]) + "</pre>\r\n";
                Count += 1;
            }
        }
    }
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, false);
    Debug_Print("... Done.");
}

function Test_SaveSpdxTemplateLinesFile_Core(
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
        
        var Lines;
        Lines = FileText.replace(/\r\n/g, "\n").split("\n");
        
        var Count;
        Count = 1
        for (var Index in Lines) {
            if (Lines[Index] != "") {
                OutputText = OutputText +
                    "<pre name=\"" +
                    File.Name.substring(0, 
                        File.Name.length - ".template.txt".length) +
                    "_" + ("00" + Count.toString()).slice(-3) +
                    "\">" + ReplaceChars(Lines[Index]) + "</pre>\r\n";
                Count += 1;
            }
        }
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

function Test_SaveSpdxTemplateToTextFiles_Core(
    OutputDirPath, DirPath) {
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        
        Debug_Print(File.Name);
        
        var InputFilePath;
        InputFilePath = File.Path;
        
        var OutputFileName;
        OutputFileName = File.Name.substring(0, 
            File.Name.length - ".template.txt".length) + ".txt";
        
        var OutputFilePath;
        OutputFilePath =
            GetFileSystemObject().BuildPath(OutputDirPath, OutputFileName);
        
        Test_SaveSpdxTemplateToTextFile_Core(OutputFilePath, InputFilePath);
    }
    
    Debug_Print("... Done.");
}

function Test_SaveSpdxTemplateToTextFile_Core(
    OutputFilePath, InputFilePath) {
    
    var InputText;
    InputText = MADODBStream_ReadTextFileUTF8(InputFilePath);
    
    var OutputText;
    OutputText = GetPlainText(InputText);
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, false);
}
