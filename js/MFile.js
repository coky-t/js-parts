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
// - Scripting.File
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
// FileObject:
//   Required. The name of a File object.
//

function ReadTextFileW(FileObject) {
    return ReadTextFile(FileObject, Scripting_TristateTrue);
}

function ReadTextFileA(FileObject) {
    return ReadTextFile(FileObject, Scripting_TristateFalse);
}

function ReadTextFile(
    FileObject,
    Format) {
    
    if (FileObject == null) { return ""; }
    if (FileObject.Size == 0) { return ""; }
    
    return OpenAsTextStreamAndReadAll(FileObject, Format);
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
// FileObject:
//   Required. The name of a File object.
//
// Text:
//   Required. The text you want to write to the file.
//

function WriteTextFileW(FileObject, Text) {
    WriteTextFile(
        FileObject,
        Text,
        Scripting_ForWriting,
        Scripting_TristateTrue);
}

function WriteTextFileA(FileObject, Text) {
    WriteTextFile(
        FileObject,
        Text,
        Scripting_ForWriting,
        Scripting_TristateFalse);
}

function AppendTextFileW(FileObject, Text) {
    WriteTextFile(
        FileObject,
        Text,
        Scripting_ForAppending,
        Scripting_TristateTrue);
}

function AppendTextFileA(FileObject, Text) {
    WriteTextFile(
        FileObject,
        Text,
        Scripting_ForAppending,
        Scripting_TristateFalse);
}

function WriteTextFile(
    FileObject,
    Text,
    IOMode,
    Format) {
    
    if (FileObject == null) { return; }
    if ((FileObject.Attributes & 1) == 1) { return; } //1: ReadOnly
    
    if (IOMode == Scripting_ForReading) { return; }
    
    OpenAsTextStreamAndWrite(FileObject, Text, IOMode, Format);
}

//
// --- TextFile ---
//

//
// OpenAsTextStreamAndReadAll
// - Reads an entire file and returns the resulting string.
//

//
// FileObject:
//   Required. The name of a File object.
//
// Format:
//   Optional. One of three Tristate values used to indicate the format of
//   the opened file. If omitted, the file is opened as ASCII.
//   TristateUseDefault(-2): Opens the file by using the system default.
//   TristateTrue(-1): Opens the file as Unicode.
//   TristateFalse(0): Opens the file as ASCII.
//

function OpenAsTextStreamAndReadAll(
    FileObject,
    Format) {
    
    var TextFile;
    
    try {
        TextFile =
            FileObject.OpenAsTextStream(Scripting_ForReading, Format);
    } catch (e) {
        return "";
    }
    
    var Text = TextFile.ReadAll();
    TextFile.Close();
    TextFile = null;
    
    return Text;
}

//
// OpenAsTextStreamAndWrite
// - Writes a specified string to a file.
//

//
// FileObject:
//   Required. The name of a File object.
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

function OpenAsTextStreamAndWrite(
    FileObject,
    Text,
    IOMode,
    Format) {
    
    var TextFile;
    
    try {
        TextFile =
            FileObject.OpenAsTextStream(IOMode, Format);
    } catch (e) {
        return;
    }
    
    TextFile.Write(Text);
    TextFile.Close();
    TextFile = null;
}

//
// --- Test ---
//

function Test_TextFileW(FileName) {
    if (FileName == "") { return; }
    
    var FileObject =
        new ActiveXObject("Scripting.FileSystemObject").GetFile(FileName);
    if (FileObject == null) { return; }
    
    var Text;
    
    Text = "WriteTextFileW\r\n";
    WriteTextFileW(FileObject, Text, null);
    Text = ReadTextFileW(FileObject, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileW\r\n";
    AppendTextFileW(FileObject, Text, null);
    Text = ReadTextFileW(FileObject, null);
    Debug_Print(Text);
}

function Test_TextFileA(FileName) {
    if (FileName == "") { return; }
    
    var FileObject =
        new ActiveXObject("Scripting.FileSystemObject").GetFile(FileName);
    if (FileObject == null) { return; }
    
    var Text;
    
    Text = "WriteTextFileA\r\n";
    WriteTextFileA(FileObject, Text, null);
    Text = ReadTextFileA(FileObject, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileA\r\n";
    AppendTextFileA(FileObject, Text, null);
    Text = ReadTextFileA(FileObject, null);
    Debug_Print(Text);
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
