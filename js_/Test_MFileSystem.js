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

//
// --- Test Core ---
//

function Test_TextFileW_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MFileSystem_WriteTextFileW(FileName, Text1);
    Text = MFileSystem_ReadTextFileW(FileName);
    Debug_Print(Text);
    
    MFileSystem_AppendTextFileW(FileName, Text2);
    Text = MFileSystem_ReadTextFileW(FileName);
    Debug_Print(Text);
}

function Test_TextFileA_Core(
    FileName,
    Text1,
    Text2) {
    
    var Text;
    
    MFileSystem_WriteTextFileA(FileName, Text1);
    Text = MFileSystem_ReadTextFileA(FileName);
    Debug_Print(Text);
    
    MFileSystem_AppendTextFileA(FileName, Text2);
    Text = MFileSystem_ReadTextFileA(FileName);
    Debug_Print(Text);
}
