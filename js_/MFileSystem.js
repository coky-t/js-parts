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
// Microsoft Scripting Runtime
// - Scripting.FileSystemObject
//

// Scripting.Tristate
var MFileSystem_TristateUseDefault = -2;
var MFileSystem_TristateTrue = -1;
var MFileSystem_TristateFalse = 0;

// Scripting.IOMode
var MFileSystem_ForReading = 1;
var MFileSystem_ForWriting = 2;
var MFileSystem_ForAppending = 8;

//
// --- FileSystemObject ---
//

//
// GetFileSystemObject
// - Returns a FileSystemObject object.
//

//
// FileSystemObject:
//   Optional. The name of a FileSystemObject object.
//

function GetFileSystemObject(
    FileSystemObject) {
    
    if (FileSystemObject == null) {
        return new ActiveXObject("Scripting.FileSystemObject");
    } else {
        return FileSystemObject;
    }
}

//
// === TextFile ===
//

//
// ReadTextFileW
// - Reads an entire file and returns the resulting string (Unicode).
//
// ReadTextFileA
// - Reads an entire file and returns the resulting string (ASCII).
//

//
// FileName:
//   Required. String expression that identifies the file to open.
//
// FileSystemObject:
//   Optional. The name of a FileSystemObject object.
//

function MFileSystem_ReadTextFileW(
    FileName,
    FileSystemObject) {
    
    return MFileSystem_ReadTextFileT(
        FileName,
        MFileSystem_TristateTrue,
        FileSystemObject);
}

function MFileSystem_ReadTextFileA(
    FileName,
    FileSystemObject) {
    
    return MFileSystem_ReadTextFileT(
        FileName,
        MFileSystem_TristateFalse,
        FileSystemObject);
}

function MFileSystem_ReadTextFileT(
    FileName,
    Format,
    FileSystemObject) {
    
    return MFileSystem_ReadTextFile(
        GetFileSystemObject(FileSystemObject),
        FileName,
        Format);
}

function MFileSystem_ReadTextFile(
    FileSystemObject,
    FileName,
    Format) {
    
    if (FileSystemObject == null) { return ""; }
    
    if (FileName == "") { return ""; }
    if (!FileSystemObject.FileExists(FileName)) { return ""; }
    
    return OpenTextFileAndReadAll(FileSystemObject, FileName, Format);
}

//
// WriteTextFileW
// - Writes a specified string (Unicode) to a file.
//
// WriteTextFileA
// - Writes a specified string (ASCII) to a file.
//
// AppendTextFileW
// - Writes a specified string (Unicode) to the end of a file.
//
// AppendTextFileA
// - Writes a specified string (ASCII) to the end of a file.
//

//
// FileName:
//   Required. String expression that identifies the file to create.
//
// Text:
//   Required. The text you want to write to the file.
//
// FileSystemObject:
//   Optional. The name of a FileSystemObject object.
//

function MFileSystem_WriteTextFileW(
    FileName,
    Text,
    FileSystemObject) {
    
    MFileSystem_WriteTextFileT(
        FileName,
        Text,
        MFileSystem_ForWriting,
        MFileSystem_TristateTrue,
        FileSystemObject);
}

function MFileSystem_WriteTextFileA(
    FileName,
    Text,
    FileSystemObject) {
    
    MFileSystem_WriteTextFileT(
        FileName,
        Text,
        MFileSystem_ForWriting,
        MFileSystem_TristateFalse,
        FileSystemObject);
}

function MFileSystem_AppendTextFileW(
    FileName,
    Text,
    FileSystemObject) {
    
    MFileSystem_WriteTextFileT(
        FileName,
        Text,
        MFileSystem_ForAppending,
        MFileSystem_TristateTrue,
        FileSystemObject);
}

function MFileSystem_AppendTextFileA(
    FileName,
    Text,
    FileSystemObject) {
    
    MFileSystem_WriteTextFileT(
        FileName,
        Text,
        MFileSystem_ForAppending,
        MFileSystem_TristateFalse,
        FileSystemObject);
}

function MFileSystem_WriteTextFileT(
    FileName,
    Text,
    IOMode,
    Format,
    FileSystemObject) {
    
    MFileSystem_WriteTextFile(
        GetFileSystemObject(FileSystemObject),
        FileName,
        Text,
        IOMode,
        Format);
}

function MFileSystem_WriteTextFile(
    FileSystemObject,
    FileName,
    Text,
    IOMode,
    Format) {
    
    if (FileSystemObject == null) { return; }
    
    if (FileName == "") { return; }
    if (FileSystemObject.FolderExists(FileName)) { return; }
    
    if (IOMode == MFileSystem_ForReading) { return; }
    
    MakeFolder(
        FileSystemObject,
        GetParentFolderName(FileSystemObject, FileName));
    
    if (IOMode == MFileSystem_ForWriting) {
        CreateTextFileAndWrite(
            FileSystemObject,
            FileName,
            Text,
            (Format == MFileSystem_TristateTrue));
        return;
    }
    
    OpenTextFileAndWrite(FileSystemObject, FileName, Text, IOMode, Format);
}

//
// --- TextFile ---
//

//
// OpenTextFileAndReadAll
// - Reads an entire file and returns the resulting string.
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// FileName:
//   Required. String expression that identifies the file to open.
//
// Format:
//   Optional. One of three Tristate values used to indicate the format of
//   the opened file. If omitted, the file is opened as ASCII.
//   TristateUseDefault(-2): Opens the file by using the system default.
//   TristateTrue(-1): Opens the file as Unicode.
//   TristateFalse(0): Opens the file as ASCII.
//

function OpenTextFileAndReadAll(
    FileSystemObject,
    FileName,
    Format) {
    
    var TextFile;
    
    try {
        TextFile =
            FileSystemObject.OpenTextFile(
                FileName,
                MFileSystem_ForReading,
                false,
                Format);
    } catch (e) {
        return "";
    }
    
    var Text = TextFile.ReadAll();
    TextFile.Close();
    TextFile = null;
    
    return Text;
}

//
// OpenTextFileAndWrite
// - Writes a specified string to a file.
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// FileName:
//   Required. String expression that identifies the file to create.
//
// Text:
//   Required. The text you want to write to the file.
//
// IOMode:
//   Optional. Indicates input/output mode.
//   Can be one of two constants: ForWriting(2), or ForAppending(8).
//
// Format:
//   Optional. One of three Tristate values used to indicate the format of
//   the opened file. If omitted, the file is opened as ASCII.
//   TristateUseDefault(-2): Opens the file by using the system default.
//   TristateTrue(-1): Opens the file as Unicode.
//   TristateFalse(0): Opens the file as ASCII.
//

function OpenTextFileAndWrite(
    FileSystemObject,
    FileName,
    Text,
    IOMode,
    Format) {
    
    var TextFile;
    
    try {
        TextFile =
            FileSystemObject.OpenTextFile(FileName, IOMode, true, Format);
    } catch (e) {
        return;
    }
    
    TextFile.Write(Text);
    TextFile.Close();
    TextFile = null;
}

//
// CreateTextFileAndWrite
// - Writes a specified string to a file.
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// FileName:
//   Required. String expression that identifies the file to create.
//
// Text:
//   Required. The text you want to write to the file.
//
// Unicode:
//   Optional. Boolean value that indicates whether the file is created
//   as a Unicode or ASCII file.
//   The value is True if the file is created as a Unicode file;
//   False if it's created as an ASCII file.
//   If omitted, an ASCII file is assumed.
//

function CreateTextFileAndWrite(
    FileSystemObject,
    FileName,
    Text,
    Unicode) {
    
    var TextFile;
    
    try {
        TextFile = FileSystemObject.CreateTextFile(FileName, true, Unicode);
    } catch (e) {
        return;
    }
    
    TextFile.Write(Text);
    TextFile.Close();
    TextFile = null;
}

//
// === Folder / Directory ===
//

//
// MakeDirectory
// - Creates a directory.
//

//
// DirName:
//   Required. String expression that identifies the directory to create.
//
// FileSystemObject:
//   Optional. The name of a FileSystemObject object.
//

function MakeDirectory(
    DirName,
    FileSystemObject) {
    
    MakeFolder(GetFileSystemObject(FileSystemObject), DirName);
}

function MakeFolder(
    FileSystemObject,
    FolderName) {
    
    if (FileSystemObject == null) { return; }
    
    if (FolderName == "") { return; }
    if (FileSystemObject.FolderExists(FolderName)) { return; }
    
    var FolderPath;
    FolderPath = FileSystemObject.GetAbsolutePathName(FolderName);
    if (FolderPath == "") { return; }
    
    var DriveName;
    DriveName = FileSystemObject.GetDriveName(FolderPath);
    if (DriveName != "") {
        if (!FileSystemObject.DriveExists(DriveName)) { return; }
    }
    
    CreateFolder(FileSystemObject, FolderPath);
}

//
// --- Folder / Directory ---
//

//
// CreateFolder
// - Creates a folder (recursively).
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// FolderPath:
//   Required. String expression that identifies the folder to create.
//

function CreateFolder(
    FileSystemObject,
    FolderPath) {
    
    if (FolderPath == "") { return; }
    
    if (FileSystemObject.FolderExists(FolderPath)) { return; }
    
    CreateFolder(
        FileSystemObject,
        FileSystemObject.GetParentFolderName(FolderPath));
    FileSystemObject.CreateFolder(FolderPath);
}

//
// GetParentFolderName
// - Returns a string containing the name of the parent folder
//   of the last component in a specified path.
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// Path:
//   Required. String expression that identifies the folder.
//

function GetParentFolderName(
    FileSystemObject,
    Path) {
    
    var ParentFolderName;
    
    try {
        ParentFolderName = 
            FileSystemObject.GetParentFolderName(
                FileSystemObject.GetAbsolutePathName(Path));
    } catch (e) {
        ParentFolderName = "";
    }
    
    return ParentFolderName;
}

//
// --- Drive ---
//

//
// GetDriveName
// - Returns a string containing the name of the drive for a specified path.
//

//
// FileSystemObject:
//   Required. The name of a FileSystemObject object.
//
// Path:
//   Required. The path specification for the component whose drive name is
//   to be returned.
//

function GetDriveName(
    FileSystemObject,
    Path) {
    
    var DriveName;
    
    try {
        DriveName =
            FileSystemObject.GetDriveName(
                FileSystemObject.GetAbsolutePathName(Path));
    } catch (e) {
        DriveName = "";
    }
    
    return DrivaName;
}

//
// --- Test ---
//

function Test_MFileSystem_TextFileW(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileW\r\n";
    MFileSystem_WriteTextFileW(FileName, Text, null);
    Text = MFileSystem_ReadTextFileW(FileName, null);
    MFileSystem_Debug_Print(Text);
    
    Text = "AppendTextFileW\r\n";
    MFileSystem_AppendTextFileW(FileName, Text, null);
    Text = MFileSystem_ReadTextFileW(FileName, null);
    MFileSystem_Debug_Print(Text);
}

function Test_MFileSystem_TextFileA(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileA\r\n";
    MFileSystem_WriteTextFileA(FileName, Text, null);
    Text = MFileSystem_ReadTextFileA(FileName, null);
    MFileSystem_Debug_Print(Text);
    
    Text = "AppendTextFileA\r\n";
    MFileSystem_AppendTextFileA(FileName, Text, null);
    Text = MFileSystem_ReadTextFileA(FileName, null);
    MFileSystem_Debug_Print(Text);
}

function MFileSystem_Debug_Print(Str) {
    WScript.Echo(Str);
}
