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

function Test_TextFileW() {
    Test_TextFileW_Core(
        "testw.txt",
        "WriteTextFileW\r\n",
        "AppendTextFileW\r\n");
}

function Test_TextFileA() {
    Test_TextFileA_Core(
        "testa.txt",
        "WriteTextFileA\r\n",
        "AppendTextFileA\r\n");
}

function Test_TextFileUTF8() {
    Test_TextFileUTF8_Core(
        "testutf8.txt",
        "WriteTextFileUTF8\r\n",
        "AppendTextFileUTF8\r\n");
}

function Test_TextFileUTF8_withoutBOM() {
    Test_TextFileUTF8_withoutBOM_Core(
        "testutf8-no-bom.txt",
        "WriteTextFileUTF8 (w/o BOM)\r\n",
        "AppendTextFileUTF8 (w/o BOM)\r\n");
}

function Test_BinaryFile() {
    Test_BinaryFile_Core(
        "testb.dat",
        GetTestArrayB(),
        GetTestArrayB());
}

function Test_GetBinaryGetTextW() {
    Test_GetBinaryGetTextW_Core("abcdefghijklmnopqrstuvwxyz");
}

function Test_GetBinaryGetTextA() {
    Test_GetBinaryGetTextA_Core("abcdefghijklmnopqrstuvwxyz");
}

function Test_GetBinaryGetTextUTF8() {
    Test_GetBinaryGetTextUTF8_Core("abcdefghijklmnopqrstuvwxyz");
}

//
// --- Test Core ---
//

function Test_TextFileW_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MADODBStream_WriteTextFileW(FileName, Text1);
    Text = MADODBStream_ReadTextFileW(FileName);
    Debug_Print(Text);
    
    MADODBStream_AppendTextFileW(FileName, Text2);
    Text = MADODBStream_ReadTextFileW(FileName);
    Debug_Print(Text);
}

function Test_TextFileA_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MADODBStream_WriteTextFileA(FileName, Text1);
    Text = MADODBStream_ReadTextFileA(FileName);
    Debug_Print(Text);
    
    MADODBStream_AppendTextFileA(FileName, Text2);
    Text = MADODBStream_ReadTextFileA(FileName);
    Debug_Print(Text);
}

function Test_TextFileUTF8_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MADODBStream_WriteTextFileUTF8(FileName, Text1, true);
    Text = MADODBStream_ReadTextFileUTF8(FileName);
    Debug_Print(Text);
    
    MADODBStream_AppendTextFileUTF8(FileName, Text2, true);
    Text = MADODBStream_ReadTextFileUTF8(FileName);
    Debug_Print(Text);
}

function Test_TextFileUTF8_withoutBOM_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MADODBStream_WriteTextFileUTF8(FileName, Text1, false);
    Text = MADODBStream_ReadTextFileUTF8(FileName);
    Debug_Print(Text);
    
    MADODBStream_AppendTextFileUTF8(FileName, Text2, false);
    Text = MADODBStream_ReadTextFileUTF8(FileName);
    Debug_Print(Text);
}

function Test_BinaryFile_Core(
    FileName,
    ArrayB1,
    ArrayB2) {
    
    var Binary;
    
    MADODBStream_WriteBinaryFileFromArrayB(FileName, ArrayB1);
    Binary = MADODBStream_ReadBinaryFile(FileName, 0);
    Debug_Print_Binary(Binary);
    
    MADODBStream_AppendBinaryFileFromArrayB(FileName, ArrayB2);
    Binary = MADODBStream_ReadBinaryFile(FileName, 0);
    Debug_Print_Binary(Binary);
}

function Test_GetBinaryGetTextW_Core(Text1) {
    var Binary;
    Binary = GetBinaryFromTextW(Text1);
    Debug_Print_Binary(Binary);
    
    var Text;
    Text = GetTextWFromBinary(Binary);
    Debug_Print(Text);
}

function Test_GetBinaryGetTextA_Core(Text1) {
    var Binary;
    Binary = GetBinaryFromTextA(Text1);
    Debug_Print_Binary(Binary);
    
    var Text;
    Text = GetTextAFromBinary(Binary);
    Debug_Print(Text);
}

function Test_GetBinaryGetTextUTF8_Core(Text1) {
    var Binary;
    Binary = GetBinaryFromTextUTF8(Text1);
    Debug_Print_Binary(Binary);
    
    var Text;
    Text = GetTextUTF8FromBinary(Binary);
    Debug_Print(Text);
}
