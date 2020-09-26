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

function Test_GetFolders() {
    Test_GetFolders_Core("C:\\work");
}

function Test_GetFiles() {
    Test_GetFiles_Core("C:\\work");
}

//
// --- Test Core ---
//

function Test_GetFolders_Core(FolderName) {
    var FSO;
    FSO = new ActiveXObject("Scripting.FileSystemObject");
    var FolderObject;
    FolderObject = FSO.GetFolder(FolderName);
    if (FolderObject == null) { return; }
    
    var Folders;
    Folders = GetFolders(FolderObject);
    for (var Index = 0; Index < Folders.length; Index++) {
        Debug_Print(Folders[Index].Path);
    }
}

function Test_GetFiles_Core(FolderName) {
    var FSO;
    FSO = new ActiveXObject("Scripting.FileSystemObject");
    var FolderObject;
    FolderObject = FSO.GetFolder(FolderName);
    if (FolderObject == null) { return; }
    
    var Files;
    Files = GetFiles(FolderObject);
    for (var Index = 0; Index < Files.length; Index++) {
        Debug_Print(Files[Index].Path);
    }
}
