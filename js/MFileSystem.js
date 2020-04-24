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
var Scripting_TristateUseDefault = -2;
var Scripting_TristateTrue = -1;
var Scripting_TristateFalse = 0;

// Scripting.IOMode
var Scripting_ForReading = 1;
var Scripting_ForWriting = 2;
var Scripting_ForAppending = 8;

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

function ReadTextFileW(
    FileName,
    FileSystemObject) {
    
    return ReadTextFileT(FileName, Scripting_TristateTrue, FileSystemObject);
}

function ReadTextFileA(
    FileName,
    FileSystemObject) {
    
    return ReadTextFileT(FileName, Scripting_TristateFalse, FileSystemObject);
}

function ReadTextFileT(
    FileName,
    Format,
    FileSystemObject) {
    
    return ReadTextFile(
        GetFileSystemObject(FileSystemObject),
        FileName,
        Format);
}

function ReadTextFile(
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

function WriteTextFileW(
    FileName,
    Text,
    FileSystemObject) {
    
    WriteTextFileT(
        FileName,
        Text,
        Scripting_ForWriting,
        Scripting_TristateTrue,
        FileSystemObject);
}

function WriteTextFileA(
    FileName,
    Text,
    FileSystemObject) {
    
    WriteTextFileT(
        FileName,
        Text,
        Scripting_ForWriting,
        Scripting_TristateFalse,
        FileSystemObject);
}

function AppendTextFileW(
    FileName,
    Text,
    FileSystemObject) {
    
    WriteTextFileT(
        FileName,
        Text,
        Scripting_ForAppending,
        Scripting_TristateTrue,
        FileSystemObject);
}

function AppendTextFileA(
    FileName,
    Text,
    FileSystemObject) {
    
    WriteTextFileT(
        FileName,
        Text,
        Scripting_ForAppending,
        Scripting_TristateFalse,
        FileSystemObject);
}

function WriteTextFileT(
    FileName,
    Text,
    IOMode,
    Format,
    FileSystemObject) {
    
    WriteTextFile(
        GetFileSystemObject(FileSystemObject),
        FileName,
        Text,
        IOMode,
        Format);
}

function WriteTextFile(
    FileSystemObject,
    FileName,
    Text,
    IOMode,
    Format) {
    
    if (FileSystemObject == null) { return; }
    
    if (FileName == "") { return; }
    if (FileSystemObject.FolderExists(FileName)) { return; }
    
    if (IOMode == Scripting_ForReading) { return; }
    
    MakeFolder(
        FileSystemObject,
        GetParentFolderName(FileSystemObject, FileName));
    
    if (IOMode == Scripting_ForWriting) {
        CreateTextFileAndWrite(
            FileSystemObject,
            FileName,
            Text,
            (Format == Scripting_TristateTrue));
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
    
    try {
        with (FileSystemObject.OpenTextFile(
            FileName,
            Scripting_ForReading,
            false,
            Format)) {
            
            var Text = ReadAll();
            Close();
            return Text;
        }
    } catch (e) {
        return "";
    }
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
    
    try {
        with (FileSystemObject.OpenTextFile(FileName, IOMode, true, Format)) {
            Write(Text);
            Close();
        }
    } catch (e) {
        return;
    }
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
    
    try {
        with (FileSystemObject.CreateTextFile(FileName, true, Unicode)) {
            Write(Text);
            Close();
        }
    } catch (e) {
        return;
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
    
    try {
        CreateFolder(
            FileSystemObject,
            FileSystemObject.GetParentFolderName(FolderPath));
        FileSystemObject.CreateFolder(FolderPath);
    } catch (e) {
        return;
    }
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
    
    try {
        return FileSystemObject.GetParentFolderName(
                FileSystemObject.GetAbsolutePathName(Path));
    } catch (e) {
        return "";
    }
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
    
    try {
        return FileSystemObject.GetDriveName(
                FileSystemObject.GetAbsolutePathName(Path));
    } catch (e) {
        return "";
    }
}

//
// --- Test ---
//

function Test_TextFileW(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileW\r\n";
    WriteTextFileW(FileName, Text, null);
    Text = ReadTextFileW(FileName, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileW\r\n";
    AppendTextFileW(FileName, Text, null);
    Text = ReadTextFileW(FileName, null);
    Debug_Print(Text);
}

function Test_TextFileA(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileA\r\n";
    WriteTextFileA(FileName, Text, null);
    Text = ReadTextFileA(FileName, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileA\r\n";
    AppendTextFileA(FileName, Text, null);
    Text = ReadTextFileA(FileName, null);
    Debug_Print(Text);
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
