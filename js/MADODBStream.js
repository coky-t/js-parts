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

//
// --- ADODB.Stream ---
//

//
// GetADODBStream
// - Returns a ADODB.Stream object.
//

//
// ADODBStream:
//   Optional. The name of a ADODB.Stream object.
//

function GetADODBStream(
    ADODBStream) {
    
    if (ADODBStream == null) {
        return new ActiveXObject("ADODB.Stream");
    } else {
        return ADODBStream;
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
// ReadTextFileUTF8
// - Reads an entire file and returns the resulting string (UTF-8).
//

//
// FileName:
//   Required. A String value that contains the name of a file.
//   FileName can contain any valid path and name in UNC format.
//
// ADODBStream:
//   Optional. The name of a ADODB.Stream object.
//

function ReadTextFileW(
    FileName,
    ADODBStream) {
    
    return ReadTextFileT(FileName, "unicode", ADODBStream);
}

function ReadTextFileA(
    FileName,
    ADODBStream) {
    
    return ReadTextFileT(FileName, "iso-8859-1", ADODBStream);
}

function ReadTextFileUTF8(
    FileName,
    ADODBStream) {
    
    return ReadTextFileT(FileName, "utf-8", ADODBStream);
}

function ReadTextFileT(
    FileName,
    Charset,
    ADODBStream) {
    
    return ReadTextFile(GetADODBStream(ADODBStream), FileName, Charset);
}

function ReadTextFile(
    ADODBStream,
    FileName,
    Charset) {
    
    if (ADODBStream == null) { return ""; }
    
    if (FileName == "") { return ""; }
    
    return LoadFromFileAndReadText(ADODBStream, FileName, Charset);
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
// ADODBStream:
//   Optional. The name of a ADODB.Stream object.
//

function WriteTextFileW(
    FileName,
    Text,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, 0, "unicode", ADODBStream);
}

function WriteTextFileA(
    FileName,
    Text,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, 0, "iso-8859-1", ADODBStream);
}

function WriteTextFileUTF8(
    FileName,
    Text,
    //BOM,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, 0, "utf-8", ADODBStream);
    
    /*
    if (!BOM) {
        var Data;
        Data = ReadBinaryFile(FileName, 3, ADODBStream);
        WriteBinaryFile(FileName, Data, ADODBStream);
    }
    */
}

function AppendTextFileW(
    FileName,
    Text,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, -1, "unicode", ADODBStream);
}

function AppendTextFileA(
    FileName,
    Text,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, -1, "iso-8859-1", ADODBStream);
}

function AppendTextFileUTF8(
    FileName,
    Text,
    //BOM,
    ADODBStream) {
    
    WriteTextFileT(FileName, Text, -1, "utf-8", ADODBStream);
    
    /*
    if (!BOM) {
        var Data;
        Data = ReadBinaryFile(FileName, 3, ADODBStream);
        WriteBinaryFile(FileName, Data, ADODBStream);
    }
    */
}

function WriteTextFileT(
    FileName,
    Text,
    Position,
    Charset,
    ADODBStream) {
    
    WriteTextFile(
        GetADODBStream(ADODBStream), FileName, Text, Position, Charset);
}

function WriteTextFile(
    ADODBStream,
    FileName,
    Text,
    Position,
    Charset) {
    
    if (ADODBStream == null) { return; }
    
    if (FileName == "") { return; }
    
    WriteTextAndSaveToFile(ADODBStream, FileName, Text, Position, Charset);
}

//
// --- TextFile ---
//

//
// LoadFromFileAndReadText
// - Reads an entire file and returns the resulting string.
//

//
// ADODBStream:
//   Required. The name of a ADODB.Stream object.
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
    ADODBStream,
    FileName,
    Charset) {
    
    ADODBStream.Type = 2; //2: adTypeText
    if (Charset != "") { ADODBStream.Charset = Charset; }
    ADODBStream.Open();
    ADODBStream.LoadFromFile(FileName);
    var Text = ADODBStream.ReadText();
    ADODBStream.Close();
    
    return Text;
}

//
// WriteTextAndSaveToFile
// - Writes a specified string to a file.
//

//
// ADODBStream:
//   Required. The name of a ADODB.Stream object.
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
    ADODBStream,
    FileName,
    Text,
    Position,
    Charset) {
    
    ADODBStream.Type = 2; //2: adTypeText
    if (Charset != "") { ADODBStream.Charset = Charset; }
    ADODBStream.Open();
    if (Position == 0) {
        // nop
    } else {
        ADODBStream.LoadFromFile(FileName);
        if (Position > 0) {
            ADODBStream.Position = Position;
            ADODBStream.SetEOS();
        } else { //if (Position < 0) {
            ADODBStream.Position = ADODBStream.Size;
        }
    }
    ADODBStream.WriteText(Text);
    ADODBStream.SaveToFile(FileName, 2); //2: ADODB.adSaveCreateOverWrite
    ADODBStream.Close();
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
// ADODBStream:
//   Optional. The name of a ADODB.Stream object.
//

/*
function ReadBinaryFile(
    FileName,
    Position,
    ADODBStream) {
    
    return ReadBinaryFileT(GetADODBStream(ADODBStream), FileName, Position);
}

function ReadBinaryFileT(
    ADODBStream,
    FileName,
    Position) {
    
    if (ADODBStream == null) { return ""; }
    
    if (FileName == "") { return ""; }
    
    return LoadFromFileAndRead(ADODBStream, FileName, Position);
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
// ADODBStream:
//   Optional. The name of a ADODB.Stream object.
//

/*
function WriteBinaryFile(
    FileName,
    Buffer,
    ADODBStream) {
    
    WriteBinaryFileT(GetADODBStream(ADODBStream), FileName, Buffer, 0);
}

function AppendBinaryFile(
    FileName,
    Buffer,
    ADODBStream) {
    
    WriteBinaryFileT(GetADODBStream(ADODBStream), FileName, Buffer, -1);
}

function WriteBinaryFileT(
    ADODBStream,
    FileName,
    Buffer,
    Position)
    
    if (ADODBStream == null) { return; }
    
    if (FileName == "") { return; }
    
    //WriteAndSaveToFile(ADODBStream, FileName, Buffer, Position);
    
    var Buf;
    for (var Index = 0; Index < Buffer.length; Index++) {
        Buf = Buf + String.fromCharCode(Buffer.charAt(Index).charCodeAt(0));
    }
    if (Position == 0) {
        WriteTextFileA(FileName, Buf, ADODBStream);
    } else if (Position < 0) {
        AppendTextFileA(FileName, Buf, ADODBStream);
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
// ADODBStream:
//   Required. The name of a ADODB.Stream object.
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
    ADODBStream,
    FileName,
    Position) {
    
    ADODBStream.Type = 1; //1: ADODB.adTypeBinary
    ADODBStream.Open();
    ADODBStream.LoadFromFile(FileName);
    if (Position > 0) { ADODBStream.Position = Position; }
    var Binary = ADODBStream.Read();
    ADODBStream.Close();
    
    return Binary;
}

//
// WriteAndSaveToFile
// - Writes a binary data to a file.
//

//
// ADODBStream:
//   Required. The name of a ADODB.Stream object.
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
    ADODBStream,
    FileName,
    Buffer,
    Position) {
    
    ADODBStream.Type = 1; //1: ADODB.adTypeBinary
    ADODBStream.Open();
    if (Position == 0) {
        // nop
    } else {
        ADODBStream.LoadFromFile(FileName)
        if (Position > 0) {
            ADODBStream.Position = Position;
            ADODBStream.SetEOS();
        } else { //if (Position < 0) {
            ADODBStream.Position = ADODBStream.Size;
        }
    }
    ADODBStream.Write(Buffer);
    ADODBStream.SaveToFile(FileName, 2); //2: ADODB.adSaveCreateOverWrite
    ADODBStream.Close();
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

function Test_TextFileUTF8(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileUTF8\r\n";
    WriteTextFileUTF8(FileName, Text, /* true, */ null);
    Text = ReadTextFileUTF8(FileName, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileUTF8\r\n";
    AppendTextFileUTF8(FileName, Text, /* true, */ null);
    Text = ReadTextFileUTF8(FileName, null);
    Debug_Print(Text);
}

/*
function Test_TextFileUTF8_withoutBOM(FileName) {
    if (FileName == "") { return; }
    
    var Text;
    
    Text = "WriteTextFileUTF8 (w/o BOM)\r\n";
    WriteTextFileUTF8(FileName, Text, false, null);
    Text = ReadTextFileUTF8(FileName, null);
    Debug_Print(Text);
    
    Text = "AppendTextFileUTF8 (w/o BOM)\r\n";
    AppendTextFileUTF8(FileName, Text, false, null);
    Text = ReadTextFileUTF8(FileName, null);
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
    WriteBinaryFile(FileName, Buffer, null);
    
    var Data;
    Data = ReadBinaryFile(FileName, 0, null);
    
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
    
    AppendBinaryFile(FileName, Buffer, null);
    Data = ReadBinaryFile(FileName, 0, null);
    
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
