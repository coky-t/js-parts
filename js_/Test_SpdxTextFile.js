//
// Copyright (c) 2022,2023,2024 Koki Takeyama
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

function Test_SaveSpdxTemplateToTextFilesEx() {
    var OutputDirPath;
    OutputDirPath = "C:\\work\\data\\spdx-license-template-to-text-ex";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateToTextFilesEx_Core(
        OutputDirPath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateToFontFiles() {
    var OutputDirPath;
    OutputDirPath = "C:\\work\\data\\spdx-license-template-to-font";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateToFontFiles_Core(
        OutputDirPath, SpdxTextDirPath);
}

function Test_SaveSpdxTemplateToPatternFiles() {
    var OutputDirPath;
    OutputDirPath = "C:\\work\\data\\spdx-license-template-to-pattern";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/template
    var SpdxTextDirPath
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-template";
    
    Test_SaveSpdxTemplateToPatternFiles_Core(
        OutputDirPath, SpdxTextDirPath);
}

function Test_CheckSpdxPatternFiles1() {
    var SpdxPatternDirPath;
    SpdxPatternDirPath = "C:\\work\\data\\spdx-license-template-to-pattern";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/text
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    Test_CheckSpdxPatternFiles1_Core(
        SpdxPatternDirPath, SpdxTextDirPath);
}

function Test_CheckSpdxPatternFiles2() {
    var SpdxPatternDirPath;
    SpdxPatternDirPath = "C:\\work\\data\\spdx-license-template-to-pattern";
    
    // https://github.com/spdx/license-list-data/tree/vX.XX/text
    var SpdxTextDirPath;
    SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    Test_CheckSpdxPatternFiles2_Core(
        SpdxPatternDirPath, SpdxTextDirPath);
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
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
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
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
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
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
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
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
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
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
}

function Test_SaveSpdxTemplateToTextFilesEx_Core(
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
        
        Test_SaveSpdxTemplateToTextFileEx_Core(OutputFilePath, InputFilePath);
    }
    
    Debug_Print("... Done.");
}

function Test_SaveSpdxTemplateToTextFileEx_Core(
    OutputFilePath, InputFilePath) {
    
    var InputText;
    InputText = MADODBStream_ReadTextFileUTF8(InputFilePath);
    
    var OutputText;
    OutputText = GetPlainTextEx(InputText);
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
}

function Test_SaveSpdxTemplateToFontFiles_Core(
    OutputDirPath, DirPath) {
    
    var OKCount = 0;
    var NGCount = 0;
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        
        //Debug_Print(File.Name);
        
        var InputFilePath;
        InputFilePath = File.Path;
        
        var OutputFileName;
        OutputFileName = File.Name.substring(0, 
            File.Name.length - ".template.txt".length) + ".txt";
        
        var OutputFilePath;
        OutputFilePath =
            GetFileSystemObject().BuildPath(OutputDirPath, OutputFileName);
        
        var Result =
            Test_SaveSpdxTemplateToFontFile_Core(
                OutputFilePath, InputFilePath);
        
        if (Result) {
            Debug_Print(File.Name + ": OK");
            OKCount++;
        } else {
            Debug_Print(File.Name + ": NG");
            NGCount++;
        }
    }
    
    Debug_Print("... Done.");
    Debug_Print("OK: " + OKCount.toString() + ", NG: " + NGCount.toString());
}

function Test_SaveSpdxTemplateToFontFile_Core(
    OutputFilePath, InputFilePath) {
    
    var InputText;
    InputText = MADODBStream_ReadTextFileUTF8(InputFilePath);
    
    var OutputText;
    OutputText = GetFontText(InputText);
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, true);
    
    var OutputTextTemp;
    OutputTextTemp = GetPlainTextEx(InputText);
    
    return (OutputText.length == OutputTextTemp.length);
}

function Test_SaveSpdxTemplateToPatternFiles_Core(
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
        
        Test_SaveSpdxTemplateToPatternFile_Core(OutputFilePath, InputFilePath);
    }
    
    Debug_Print("... Done.");
}

function Test_SaveSpdxTemplateToPatternFile_Core(
    OutputFilePath, InputFilePath) {
    
    var InputText;
    InputText = MADODBStream_ReadTextFileUTF8(InputFilePath);
    
    var OutputText;
    OutputText = GetMatchingText(InputText);
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputText, false);
}

function Test_CheckSpdxPatternFiles1_Core(
    SpdxPatternDirPath, SpdxTextDirPath) {
    
    var SpdxPatternFolder;
    SpdxPatternFolder =
        GetFileSystemObject().GetFolder(SpdxPatternDirPath);
    
    var SpdxPatternFiles = new Enumerator(SpdxPatternFolder.Files);
    for (; !SpdxPatternFiles.atEnd(); SpdxPatternFiles.moveNext()) {
        var SpdxPatternFile = SpdxPatternFiles.item();
        
        //Debug_Print(SpdxPatternFile.Name);
        
        var SpdxTextFileName;
        SpdxTextFileName = SpdxPatternFile.Name;
        
        var SpdxTextFilePath;
        SpdxTextFilePath =
            GetFileSystemObject().BuildPath(SpdxTextDirPath, SpdxTextFileName);
        
        Test_CheckSpdxPatternFile1_Core(
            SpdxPatternFile.Name, SpdxPatternFile.Path, SpdxTextFilePath);
    }
    
    Debug_Print("... Done.");
}

function Test_CheckSpdxPatternFile1_Core(
    SpdxPatternFileName, SpdxPatternFilePath,
    SpdxTextFilePath) {
    
    var IgnoredFile;
    
    switch (SpdxPatternFileName) {
    case "CC-BY-SA-2.1-JP.txt":
    case "DL-DE-BY-2.0.txt":
    case "gSOAP-1.3b.txt":
    case "LPPL-1.3a.txt":
    case "LPPL-1.3c.txt":
    case "MulanPSL-1.0.txt":
    case "MulanPSL-2.0.txt":
    case "NOSL.txt":
    case "Python-2.0.txt":
    case "UCL-1.0.txt":
        IgnoredFile = true;
        break;
    default:
        IgnoredFile = false;
        break;
    }
    
    if (IgnoredFile) {
        Debug_Print(SpdxPatternFileName + ": Ignored");
        return;
    }
        
    if (!GetFileSystemObject().FileExists(SpdxTextFilePath)) {
        Debug_Print(SpdxPatternFileName + ": Not Exist");
        return;
    }
    
    var SpdxPattern;
    SpdxPattern = MADODBStream_ReadTextFileUTF8(SpdxPatternFilePath);
    
    var SpdxText;
    SpdxText = MADODBStream_ReadTextFileUTF8(SpdxTextFilePath);
    
    if (RegExp_Test(SpdxText, SpdxPattern, true, false)) {
        //Debug_Print(SpdxPatternFileName + ": OK");
    } else {
        Debug_Print(SpdxPatternFileName + ": NG");
    }
}

function Test_CheckSpdxPatternFiles2_Core(
    SpdxPatternDirPath, SpdxTextDirPath) {
    
    var SpdxTextFolder;
    SpdxTextFolder =
        GetFileSystemObject().GetFolder(SpdxTextDirPath);
    
    var SpdxText = new Array(SpdxTextFolder.Files.Count);
    
    var SpdxTextIndex = 0;
    
    var SpdxTextFiles = new Enumerator(SpdxTextFolder.Files);
    for (; !SpdxTextFiles.atEnd(); SpdxTextFiles.moveNext()) {
        var SpdxTextFile = SpdxTextFiles.item();
        
        var SpdxTextTemp;
        SpdxTextTemp = MADODBStream_ReadTextFileUTF8(SpdxTextFile.Path);
        
        SpdxText[SpdxTextIndex] = new Array(2);
        SpdxText[SpdxTextIndex][0] = SpdxTextFile.Name;
        SpdxText[SpdxTextIndex][1] = SpdxTextTemp;
        SpdxTextIndex = SpdxTextIndex + 1;
    }
    
    // ---
    
    var SpdxPatternFolder;
    SpdxPatternFolder =
        GetFileSystemObject().GetFolder(SpdxPatternDirPath);
    
    var SpdxPatternFiles = new Enumerator(SpdxPatternFolder.Files);
    for (; !SpdxPatternFiles.atEnd(); SpdxPatternFiles.moveNext()) {
        var SpdxPatternFile = SpdxPatternFiles.item();
        
        //Debug_Print(SpdxPatternFile.Name);
        
        var SpdxTextFileName;
        SpdxTextFileName = SpdxPatternFile.Name;
        
        var SpdxTextFilePath;
        SpdxTextFilePath =
            GetFileSystemObject().BuildPath(SpdxTextDirPath, SpdxTextFileName);
        
        var SpdxPattern;
        SpdxPattern = MADODBStream_ReadTextFileUTF8(SpdxPatternFile.Path);
        
        Test_CheckSpdxPatternFile2_Text(
            SpdxPatternFile.Name, SpdxPattern,
            SpdxText);
    }
    
    Debug_Print("... Done.");
}

function Test_CheckSpdxPatternFile2_Text(
    SpdxPatternFileName, SpdxPattern,
    SpdxText) {
    
    switch (SpdxPatternFileName) {
    case "CC-BY-SA-2.1-JP.txt":
    case "DL-DE-BY-2.0.txt":
    case "gSOAP-1.3b.txt":
    case "LPPL-1.3a.txt":
    case "LPPL-1.3c.txt":
    case "MulanPSL-1.0.txt":
    case "MulanPSL-2.0.txt":
    case "NOSL.txt":
    case "Python-2.0.txt":
    case "UCL-1.0.txt":
        return;
        break;
    }
    
    if (SpdxPattern.length > 2000) {
        //Debug_Print(SpdxPatternFileName + ": Large");
        return;
    }
    
    for (var SpdxTextIndex = 0; SpdxTextIndex < SpdxText.length; SpdxTextIndex++) {
        Test_CheckSpdxPatternFile2_Text_Core(
            SpdxPatternFileName, SpdxPattern,
            SpdxText[SpdxTextIndex][0], SpdxText[SpdxTextIndex][1]);
    }
}

function Test_CheckSpdxPatternFile2_Text_Core(
    SpdxPatternFileName, SpdxPattern,
    SpdxTextFileName, SpdxText) {
    
    switch (SpdxPatternFileName) {
    case "CC-BY-SA-2.1-JP.txt":
    case "DL-DE-BY-2.0.txt":
    case "gSOAP-1.3b.txt":
    case "LPPL-1.3a.txt":
    case "LPPL-1.3c.txt":
    case "MulanPSL-1.0.txt":
    case "MulanPSL-2.0.txt":
    case "NOSL.txt":
    case "Python-2.0.txt":
    case "UCL-1.0.txt":
        return;
        break;
    case "OGDL-Taiwan-1.0.txt":
    case "AFL-2.0.txt":
    case "AFL-2.1.txt":
    case "AFL-3.0.txt":
    case "MPL-2.0.txt":
    case "MPL-2.0-no-copyleft-exception.txt":
        return;
        break;
    }
    
    if (SpdxPatternFileName == SpdxTextFileName) {
        return;
    }
    
    if (SpdxText.length > 2000) {
        //Debug_Print(SpdxPatternFileName + ": " + SpdxTextFileName + ": Large");
        return;
    }
    
    if (RegExp_Test(SpdxText, SpdxPattern, true, false)) {
        Debug_Print(SpdxPatternFileName + ": " + SpdxTextFileName + ": OK");
    } else {
        //Debug_Print(SpdxPatternFileName + ": " + SpdxTextFileName + ": NG");
    }
}
