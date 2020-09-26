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

var FileSystemObject;

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

function MFileSystem_ReadTextFileW(FileName) {
    return MFileSystem_ReadTextFile(FileName, MFileSystem_TristateTrue);
}

function MFileSystem_ReadTextFileA(FileName) {
    return MFileSystem_ReadTextFile(FileName, MFileSystem_TristateFalse);
}

function MFileSystem_ReadTextFile(
    FileName,
    Format) {
    
    if (FileName == "") { return ""; }
    if (!GetFileSystemObject().FileExists(FileName)) { return ""; }
    
    return OpenTextFileAndReadAll(FileName, Format);
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

function MFileSystem_WriteTextFileW(FileName, Text) {
    MFileSystem_WriteTextFile(
        FileName,
        Text,
        MFileSystem_ForWriting,
        MFileSystem_TristateTrue);
}

function MFileSystem_WriteTextFileA(FileName, Text) {
    MFileSystem_WriteTextFile(
        FileName,
        Text,
        MFileSystem_ForWriting,
        MFileSystem_TristateFalse);
}

function MFileSystem_AppendTextFileW(FileName, Text) {
    MFileSystem_WriteTextFile(
        FileName,
        Text,
        MFileSystem_ForAppending,
        MFileSystem_TristateTrue);
}

function MFileSystem_AppendTextFileA(FileName, Text) {
    MFileSystem_WriteTextFile(
        FileName,
        Text,
        MFileSystem_ForAppending,
        MFileSystem_TristateFalse);
}

function MFileSystem_WriteTextFile(
    FileName,
    Text,
    IOMode,
    Format) {
    
    if (FileName == "") { return; }
    if (GetFileSystemObject().FolderExists(FileName)) { return; }
    
    if (IOMode == MFileSystem_ForReading) { return; }
    
    MakeDirectory(GetParentFolderName(FileName));
    
    if (IOMode == MFileSystem_ForWriting) {
        CreateTextFileAndWrite(
            FileName,
            Text,
            (Format == MFileSystem_TristateTrue));
        return;
    }
    
    OpenTextFileAndWrite(FileName, Text, IOMode, Format);
}

//
// --- FileSystemObject ---
//

//
// GetFileSystemObject
// - Returns a FileSystemObject object.
//

function GetFileSystemObject() {
    if (FileSystemObject == null) {
        FileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
    }
    return FileSystemObject;
}

//
// --- TextFile ---
//

//
// OpenTextFileAndReadAll
// - Reads an entire file and returns the resulting string.
//

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
    FileName,
    Format) {
    
    var Text = "";
    try {
        with (GetFileSystemObject().OpenTextFile(
            FileName,
            MFileSystem_ForReading,
            false,
            Format)) {
            
            Text = ReadAll();
            Close();
        }
    } catch (e) {
        Text = "";
    }
    return Text;
}

//
// OpenTextFileAndWrite
// - Writes a specified string to a file.
//

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
    FileName,
    Text,
    IOMode,
    Format) {
    
    try {
        with (GetFileSystemObject().OpenTextFile(
            FileName, IOMode, true, Format)) {
            
            Write(Text);
            Close();
        }
    } catch (e) {
        // nop
    }
}

//
// CreateTextFileAndWrite
// - Writes a specified string to a file.
//

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
    FileName,
    Text,
    Unicode) {
    
    try {
        with (GetFileSystemObject().CreateTextFile(FileName, true, Unicode)) {
            Write(Text);
            Close();
        }
    } catch (e) {
        // nop
    }
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

function MakeDirectory(DirName) {
    var FileSystemObject;
    FileSystemObject = GetFileSystemObject();
    
    if (FileSystemObject == null) { return; }
    
    if (DirName == "") { return; }
    if (FileSystemObject.FolderExists(DirName)) { return; }
    
    var FolderPath;
    FolderPath = FileSystemObject.GetAbsolutePathName(DirName);
    if (FolderPath == "") { return; }
    
    var DriveName;
    DriveName = FileSystemObject.GetDriveName(FolderPath);
    if (DriveName != "") {
        if (!FileSystemObject.DriveExists(DriveName)) { return; }
    }
    
    CreateFolder(FolderPath);
}

//
// --- Folder / Directory ---
//

//
// CreateFolder
// - Creates a folder (recursively).
//

//
// FolderPath:
//   Required. String expression that identifies the folder to create.
//

function CreateFolder(FolderPath) {
    if (FolderPath == "") { return; }
    
    if (GetFileSystemObject().FolderExists(FolderPath)) { return; }
    
    try {
        CreateFolder(GetFileSystemObject().GetParentFolderName(FolderPath));
        GetFileSystemObject().CreateFolder(FolderPath);
    } catch (e) {
        // nop
    }
}

//
// GetParentFolderName
// - Returns a string containing the name of the parent folder
//   of the last component in a specified path.
//

//
// Path:
//   Required. String expression that identifies the folder.
//

function GetParentFolderName(Path) {
    var FolderName = ""
    try {
        FolderName = GetFileSystemObject().GetParentFolderName(
            GetFileSystemObject().GetAbsolutePathName(Path));
    } catch (e) {
        FolderName = "";
    }
    return FolderName;
}

//
// --- Drive ---
//

//
// GetDriveName
// - Returns a string containing the name of the drive for a specified path.
//

//
// Path:
//   Required. The path specification for the component whose drive name is
//   to be returned.
//

function GetDriveName(Path) {
    var DriveName = "";
    try {
        DriveName = GetFileSystemObject().GetDriveName(
            GetFileSystemObject().GetAbsolutePathName(Path));
    } catch (e) {
        DriveName = "";
    }
    return DriveName;
}
