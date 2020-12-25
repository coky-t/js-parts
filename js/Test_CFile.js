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
// --- Test ---
//

function Test_CFile_Binary() {
    Test_CFile_Binary_Core(
        "testb.dat",
        GetTestBinary(),
        GetTestBinary());
}

function Test_CFile_File() {
    Test_CFile_File_Core("testb.dat");
}

function Test_CFile_Path() {
    Test_CFile_Path_Core("testb.dat");
}

function Test_CFile_TextA() {
    Test_CFile_TextA_Core(
        "testa.txt",
        "WriteTextFileA" + "\r\n",
        "AppendTextFileA" + "\r\n");
}

function Test_CFile_TextB() {
    Test_CFile_TextB_Core(
        "testb.txt",
        GetTestStringB(),
        GetTestStringB());
}

function Test_CFile_TextUTF8() {
    Test_CFile_TextUTF8_Core(
        "testutf8.txt",
        "WriteTextFileUTF8" + "\r\n",
        "AppendTextFileUTF8" + "\r\n");
}

function Test_CFile_TextW() {
    Test_CFile_TextW_Core(
        "testw.txt",
        "WriteTextFileW" + "\r\n",
        "AppendTextFileW" + "\r\n");
}

//
// --- Test Core ---
//

function Test_CFile_Binary_Core(
    FileName,
    Binary1,
    Binary2) {
    
    with (new CFile) {
        setPath(FileName);
        setBinary(Binary1);
        Debug_Print_Binary(getBinary());
        
        AppendBinary(Binary2);
        Debug_Print_Binary(getBinary());
    }
}

function Test_CFile_File_Core(FileName) {
    var File;
    with (new CFile) {
        setPath(FileName);
        File = getFile();
    }
    with (new CFile) {
        setFile(File);
        Debug_Print("-----");
        Debug_Print("Attributes: " + getAttributes());
        Debug_Print("BaseName: " + getBaseName());
        Debug_Print("DateCreated: " + getDateCreated());
        Debug_Print("DateLastAccessed: " + getDateLastAccessed());
        Debug_Print("DateLastModified: " + getDateLastModified());
        Debug_Print("Drive.Path: " + getDrive().Path);
        Debug_Print("DriveName: " + getDriveName());
        Debug_Print("ExtensionName: " + getExtensionName());
        Debug_Print("Name: " + getName());
        Debug_Print("ParentFolder.Path: " + getParentFolder().Path);
        Debug_Print("ParentFolderName: " + getParentFolderName());
        Debug_Print("ShortName: " + getShortName());
        Debug_Print("ShortPath: " + getShortPath());
        Debug_Print("Size: " + getSize());
        Debug_Print("TypeName: " + getTypeName());
    }
}

function Test_CFile_Path_Core(FileName) {
    with (new CFile) {
        setPath(FileName);
        Debug_Print("-----");
        Debug_Print("Attributes: " + getAttributes());
        Debug_Print("BaseName: " + getBaseName());
        Debug_Print("DateCreated: " + getDateCreated());
        Debug_Print("DateLastAccessed: " + getDateLastAccessed());
        Debug_Print("DateLastModified: " + getDateLastModified());
        Debug_Print("Drive.Path: " + getDrive().Path);
        Debug_Print("DriveName: " + getDriveName());
        Debug_Print("ExtensionName: " + getExtensionName());
        Debug_Print("Name: " + getName());
        Debug_Print("ParentFolder.Path: " + getParentFolder().Path);
        Debug_Print("ParentFolderName: " + getParentFolderName());
        Debug_Print("ShortName: " + getShortName());
        Debug_Print("ShortPath: " + getShortPath());
        Debug_Print("Size: " + getSize());
        Debug_Print("TypeName: " + getTypeName());
    }
}

function Test_CFile_TextA_Core(
    FileName,
    Text1,
    Text2) {
    
    with (new CFile) {
        setPath(FileName);
        setTextA(Text1);
        Debug_Print(getTextA());
        
        AppendTextA(Text2);
        Debug_Print(getTextA());
    }
}

function Test_CFile_TextB_Core(
    FileName,
    Text1,
    Text2) {
    
    with (new CFile) {
        setPath(FileName);
        setTextB(Text1);
        Debug_Print_Binary(getTextB());
        
        AppendTextB(Text2);
        Debug_Print_Binary(getTextB());
    }
}

function Test_CFile_TextUTF8_Core(
    FileName,
    Text1,
    Text2) {
    
    with (new CFile) {
        setPath(FileName);
        setTextUTF8(Text1);
        Debug_Print(getTextUTF8());
        
        AppendTextUTF8(Text2, false);
        Debug_Print(getTextUTF8());
    }
}

function Test_CFile_TextW_Core(
    FileName,
    Text1,
    Text2) {
    
    with (new CFile) {
        setPath(FileName);
        setTextW(Text1);
        Debug_Print(getTextW());
        
        AppendTextW(Text2);
        Debug_Print(getTextW());
    }
}
