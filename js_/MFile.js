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
var MFile_TristateUseDefault = -2;
var MFile_TristateTrue = -1;
var MFile_TristateFalse = 0;

// Scripting.IOMode
var MFile_ForReading = 1;
var MFile_ForWriting = 2;
var MFile_ForAppending = 8;

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

function MFile_ReadTextFileW(FileObject) {
    return MFile_ReadTextFile(FileObject, MFile_TristateTrue);
}

function MFile_ReadTextFileA(FileObject) {
    return MFile_ReadTextFile(FileObject, MFile_TristateFalse);
}

function MFile_ReadTextFile(
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

function MFile_WriteTextFileW(FileObject, Text) {
    MFile_WriteTextFile(
        FileObject,
        Text,
        MFile_ForWriting,
        MFile_TristateTrue);
}

function MFile_WriteTextFileA(FileObject, Text) {
    MFile_WriteTextFile(
        FileObject,
        Text,
        MFile_ForWriting,
        MFile_TristateFalse);
}

function MFile_AppendTextFileW(FileObject, Text) {
    MFile_WriteTextFile(
        FileObject,
        Text,
        MFile_ForAppending,
        MFile_TristateTrue);
}

function MFile_AppendTextFileA(FileObject, Text) {
    MFile_WriteTextFile(
        FileObject,
        Text,
        MFile_ForAppending,
        MFile_TristateFalse);
}

function MFile_WriteTextFile(
    FileObject,
    Text,
    IOMode,
    Format) {
    
    if (FileObject == null) { return; }
    if ((FileObject.Attributes & 1) == 1) { return; } //1: ReadOnly
    
    if (IOMode == MFile_ForReading) { return; }
    
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
    
    try {
        with (FileObject.OpenAsTextStream(MFile_ForReading, Format)) {
            var Text = ReadAll();
            Close();
            return Text;
        }
    } catch (e) {
        return "";
    }
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
    
    try {
        with (FileObject.OpenAsTextStream(IOMode, Format)) {
            Write(Text);
            Close();
        }
    } catch (e) {
        return;
    }
}
