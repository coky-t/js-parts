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
// Microsoft ActiveX Data Objects X.X Library
// - ADODB.Stream
//

var ADODBStream;

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
// ReadTextFileUTF8
// - Reads an entire file and returns the resulting string (UTF-8).
//

//
// FileName:
//   Required. A String value that contains the name of a file.
//   FileName can contain any valid path and name in UNC format.
//

function ReadTextFileW(FileName) {
    return ReadTextFile(FileName, "unicode");
}

function ReadTextFileA(FileName) {
    return ReadTextFile(FileName, "iso-8859-1");
}

function ReadTextFileUTF8(FileName) {
    return ReadTextFile(FileName, "utf-8");
}

function ReadTextFile(
    FileName,
    Charset) {
    
    if (FileName == "") { return ""; }
    
    return LoadFromFileAndReadText(FileName, Charset);
}

//
// WriteTextFileW
// - Writes a specified string (Unicode) to a file.
//
// WriteTextFileA
// - Writes a specified string (ASCII) to a file.
//
// WriteTextFileUTF8
// - Writes a specified string (UTF-8) to a file.
//
// AppendTextFileW
// - Writes a specified string (Unicode) to the end of a file.
//
// AppendTextFileA
// - Writes a specified string (ASCII) to the end of a file.
//
// AppendTextFileUTF8
// - Writes a specified string (UTF-8) to the end of a file.
//

//
// FileName:
//   Required. A String value that contains the fully-qualified name of
//   the file to which the contents of the Stream will be saved.
//   You can save to any valid local location, or any location you have
//   access to via a UNC value.
//
// Text:
//   Required. A String value that contains the text in characters to be
//   written.
//

function WriteTextFileW(FileName, Text) {
    WriteTextFile(FileName, Text, 0, "unicode");
}

function WriteTextFileA(FileName, Text) {
    WriteTextFile(FileName, Text, 0, "iso-8859-1");
}

function WriteTextFileUTF8(
    FileName,
    Text/*,
    BOM*/) {
    
    WriteTextFile(FileName, Text, 0, "utf-8");
    
    /*
    if (!BOM) {
        var Data;
        Data = ReadBinaryFile(FileName, 3);
        WriteBinaryFile(FileName, Data);
    }
    */
}

function AppendTextFileW(FileName, Text) {
    WriteTextFile(FileName, Text, -1, "unicode");
}

function AppendTextFileA(FileName, Text) {
    WriteTextFile(FileName, Text, -1, "iso-8859-1");
}

function AppendTextFileUTF8(
    FileName,
    Text/*,
    BOM*/) {
    
    WriteTextFile(FileName, Text, -1, "utf-8");
    
    /*
    if (!BOM) {
        var Data;
        Data = ReadBinaryFile(FileName, 3);
        WriteBinaryFile(FileName, Data);
    }
    */
}

function WriteTextFile(
    FileName,
    Text,
    Position,
    Charset) {
    
    if (FileName == "") { return; }
    
    WriteTextAndSaveToFile(FileName, Text, Position, Charset);
}

//
// --- ADODB.Stream ---
//

//
// GetADODBStream
// - Returns a ADODB.Stream object.
//

function GetADODBStream() {
    if (ADODBStream == null) {
        ADODBStream = new ActiveXObject("ADODB.Stream");
    }
    return ADODBStream;
}

//
// --- TextFile ---
//

//
// LoadFromFileAndReadText
// - Reads an entire file and returns the resulting string.
//

//
// FileName:
//   Required. A String value that contains the name of a file.
//   FileName can contain any valid path and name in UNC format.
//
// Charset:
//   Optional. A String value that specifies the character set into
//   which the contents of the Stream will be translated.
//   The default value is Unicode.
//   Allowed values are typical strings passed over the interface as
//   Internet character set names (for example, "iso-8859-1", "Windows-1252",
//   and so on).
//   For a list of the character set names that are known by a system,
//   see the subkeys of HKEY_CLASSES_ROOT\MIME\Database\Charset
//   in the Windows Registry.
//

function LoadFromFileAndReadText(
    FileName,
    Charset_) {
    
    var Text = "";
    try {
        var ADODBStream = GetADODBStream();
        with (ADODBStream) {
            Type = 2; //ADODB.adTypeText
            if (Charset_ != "") { Charset = Charset_; }
            Open();
            LoadFromFile(FileName);
            Text = ReadText();
            Close();
        }
    } catch (e) {
        Text = "";
    }
    return Text;
}

//
// WriteTextAndSaveToFile
// - Writes a specified string to a file.
//

//
// FileName:
//   Required. A String value that contains the fully-qualified name of
//   the file to which the contents of the Stream will be saved.
//   You can save to any valid local location, or any location you have
//   access to via a UNC value.
//
// Text:
//   Required. A String value that contains the text in characters to be
//   written.
//
// Position:
//   Optional. Sets a Long value that specifies the offset, in number of
//   bytes, of the current position from the beginning of the stream.
//   The default is 0, which represents the first byte in the stream.
//
// Charset:
//   Optional. A String value that specifies the character set into
//   which the contents of the Stream will be translated.
//   The default value is Unicode.
//   Allowed values are typical strings passed over the interface as
//   Internet character set names (for example, "iso-8859-1", "Windows-1252",
//   and so on).
//   For a list of the character set names that are known by a system,
//   see the subkeys of HKEY_CLASSES_ROOT\MIME\Database\Charset
//   in the Windows Registry.
//

function WriteTextAndSaveToFile(
    FileName,
    Text,
    Position_,
    Charset_) {
    
    try {
        var ADODBStream = GetADODBStream();
        with (ADODBStream) {
            Type = 2; //ADODB.adTypeText
            if (Charset_ != "") { Charset = Charset_; }
            Open();
            if (Position_ == 0) {
                // nop
            } else {
                LoadFromFile(FileName);
                if (Position_ > 0) {
                    Position = Position_;
                    SetEOS();
                } else { //if (Position_ < 0) {
                    Position = Size;
                }
            }
            WriteText(Text);
            SaveToFile(FileName, 2); //ADODB.adSaveCreateOverWrite
            Close();
        }
    } catch (e) {
        // nop
    }
}

//
// === BinaryFile ===
//

//
// ReadBinaryFile
// - Reads an entire file and returns the resulting data.
//

//
// FileName:
//   Required. A String value that contains the name of a file.
//   FileName can contain any valid path and name in UNC format.
//
// Position:
//   Optional. Sets a Long value that specifies the offset, in number of
//   bytes, of the current position from the beginning of the stream.
//   The default is 0, which represents the first byte in the stream.
//

/*
function ReadBinaryFile(
    FileName,
    Position) {
    
    if (FileName == "") { return ""; }
    
    return LoadFromFileAndRead(FileName, Position);
}
*/

//
// WriteBinaryFile
// - Writes a binary data to a file.
//
// AppendBinaryFile
// - Writes a binary data to the end of a file.
//

//
// FileName:
//   Required. A String value that contains the fully-qualified name of
//   the file to which the contents of the Stream will be saved.
//   You can save to any valid local location, or any location you have
//   access to via a UNC value.
//
// Buffer:
//   Required. A Variant that contains an array of bytes to be written.
//

/*
function WriteBinaryFile(FileName, Buffer) {
    WriteBinaryFileT(FileName, Buffer, 0);
}

function AppendBinaryFile(FileName, Buffer) {
    WriteBinaryFileT(FileName, Buffer, -1);
}

function WriteBinaryFileT(
    FileName,
    Buffer,
    Position) {
    
    if (FileName == "") { return; }
    
    //WriteAndSaveToFile(FileName, Buffer, Position);
    
    var Buf;
    for (var Index = 0; Index < Buffer.length; Index++) {
        Buf = Buf + String.fromCharCode(Buffer.charAt(Index).charCodeAt(0));
    }
    if (Position == 0) {
        WriteTextFileA(FileName, Buf);
    } else if (Position < 0) {
        AppendTextFileA(FileName, Buf);
    } else {
        // To Do
    }
}
*/

//
// --- BinaryFile ---
//

//
// LoadFromFileAndRead
// - Reads an entire file and returns the resulting data.
//

//
// FileName:
//   Required. A String value that contains the name of a file.
//   FileName can contain any valid path and name in UNC format.
//
// Position:
//   Optional. Sets a Long value that specifies the offset, in number of
//   bytes, of the current position from the beginning of the stream.
//   The default is 0, which represents the first byte in the stream.
//

function LoadFromFileAndRead(
    FileName,
    Position_) {
    
    var Binary = null;
    try {
        var ADODBStream = GetADODBStream();
        with (ADODBStream) {
            Type = 1; //ADODB.adTypeBinary
            Open();
            LoadFromFile(FileName);
            if (Position_ > 0) { Position = Position_; }
            Binary = Read();
            Close();
        }
    } catch (e) {
        Binary = null;
    }
    return Binary;
}

//
// WriteAndSaveToFile
// - Writes a binary data to a file.
//

//
// FileName:
//   Required. A String value that contains the fully-qualified name of
//   the file to which the contents of the Stream will be saved.
//   You can save to any valid local location, or any location you have
//   access to via a UNC value.
//
// Buffer:
//   Required. A Variant that contains an array of bytes to be written.
//
// Position:
//   Optional. Sets a Long value that specifies the offset, in number of
//   bytes, of the current position from the beginning of the stream.
//   The default is 0, which represents the first byte in the stream.
//

function WriteAndSaveToFile(
    FileName,
    Buffer,
    Position_) {
    
    try {
        var ADODBStream = GetADODBStream();
        with (ADODBStream) {
            Type = 1; //ADODB.adTypeBinary
            Open();
            if (Position_ == 0) {
                // nop
            } else {
                LoadFromFile(FileName)
                if (Position_ > 0) {
                    Position = Position_;
                    SetEOS();
                } else { //if (Position_ < 0) {
                    Position = Size;
                }
            }
            Write(Buffer);
            SaveToFile(FileName, 2); //ADODB.adSaveCreateOverWrite
            Close();
        }
    } catch (e) {
        // nop
    }
}

//
// --- Test ---
//

function Test_TextFileW(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileW\r\n";
    WriteTextFileW(FileName, Text);
    Text = ReadTextFileW(FileName);
    Debug_Print(Text);
    
    Text = "AppendTextFileW\r\n";
    AppendTextFileW(FileName, Text);
    Text = ReadTextFileW(FileName);
    Debug_Print(Text);
}

function Test_TextFileA(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileA\r\n";
    WriteTextFileA(FileName, Text);
    Text = ReadTextFileA(FileName);
    Debug_Print(Text);
    
    Text = "AppendTextFileA\r\n";
    AppendTextFileA(FileName, Text);
    Text = ReadTextFileA(FileName);
    Debug_Print(Text);
}

function Test_TextFileUTF8(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileUTF8\r\n";
    WriteTextFileUTF8(FileName, Text/*, true*/);
    Text = ReadTextFileUTF8(FileName);
    Debug_Print(Text);
    
    Text = "AppendTextFileUTF8\r\n";
    AppendTextFileUTF8(FileName, Text/*, true*/);
    Text = ReadTextFileUTF8(FileName);
    Debug_Print(Text);
}

/*
function Test_TextFileUTF8_withoutBOM(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileUTF8 (w/o BOM)\r\n";
    WriteTextFileUTF8(FileName, Text, false);
    Text = ReadTextFileUTF8(FileName);
    Debug_Print(Text);
    
    Text = "AppendTextFileUTF8 (w/o BOM)\r\n";
    AppendTextFileUTF8(FileName, Text, false);
    Text = ReadTextFileUTF8(FileName);
    Debug_Print(Text);
}
*/

/*
function Test_BinaryFile(FileName) {
    if (FileName == "") { return; }
    
    var Buffer;
    for (var Index = 0; Index < 256; Index++) {
        Buffer = Buffer + String.fromCharCode(Index);
    }
    WriteBinaryFile(FileName, Buffer);
    
    var Data;
    Data = ReadBinaryFile(FileName, 0);
    
    var Text;
    for (var Index1 = 0; Index1 < Data.length; Index1 += 16) {
        for (var Index2 = Index1; Index2 < Index1 + 16; Index2++) {
            Text = Text +
                Right(
                    "0" + Data.charAt(Index2).charCodeAt(0).toString(16),
                    2) +
                " ";
        }
        Text = Text + "\r\n"
    }
    
    Debug_Print(Text);
    
    AppendBinaryFile(FileName, Buffer);
    Data = ReadBinaryFile(FileName, 0);
    
    Text = "";
    for (var Index1 = 0; Index1 < Data.length; Index1 += 16) {
        for (var Index2 = Index1; Index2 < Index1 + 16; Index2++) {
            Text = Text +
                Right(
                    "0" + Data.charAt(Index2).charCodeAt(0).toString(16),
                    2) +
                " ";
        }
        Text = Text + "\r\n"
    }
    
    Debug_Print("---");
    Debug_Print(Text);
}
*/

function Debug_Print(Str) {
    WScript.Echo(Str);
}
