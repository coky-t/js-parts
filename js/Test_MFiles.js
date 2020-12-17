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

function Test_FilterFiles() {
    var FolderName = "C:\\work";
    var IgnoredExtNames =
        "txt" + "\r\n" + "md" + "\r\n" + "zip" + "\r\n";
    var SizeLimit = 10000;
    
    Test_FilterFiles_Core(FolderName, IgnoredExtNames, SizeLimit);
}

//
// --- Test Core ---
//

function Test_FilterFiles_Core(
    FolderName,
    IgnoredExtNames,
    SizeLimit) {
    
    var FSO = GetFileSystemObject();
    var FolderObject = FSO.GetFolder(FolderName);
    if (FolderObject == null) { return; }
    
    var Files0 = GetFiles(FolderObject);
    if (Files0 == null) { return; }
    if (Files0.Count == 0) { return; }
    
    var Files = FilterFiles(Files0, IgnoredExtNames, SizeLimit);
    if (Files == null) { return; }
    if (Files.Count == 0) { return; }
    
    for (var Index in Files) {
        var FileTemp = Files[Index];
        Debug_Print(FileTemp.Path);
    }
}
