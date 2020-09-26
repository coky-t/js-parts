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
// - Scripting.Folder
//

//
// --- Folders ---
//

//
// GetFolders
// - Return collection of all Folder objects contained within a Folder object.
//

//
// FolderObject:
//   Required. The name of a Folder object.
//

function GetFolders(FolderObject) {
    if (FolderObject == null) { return null; }
    
    var Folders = new Array();
    
    if (FolderObject.SubFolders != null) {
        if (FolderObject.SubFolders.Count > 0) {
            var SubFolders = new Enumerator(FolderObject.SubFolders);
            for (; !SubFolders.atEnd(); SubFolders.moveNext()) {
                Folders = Folders.concat(GetFolders(SubFolders.item()));
            }
        }
    }
    
    Folders.push(FolderObject);
    
    return Folders;
}

//
// --- Files ---
//

//
// GetFiles
// - Returns collection of all File objects contained within a Folder object.
//

//
// FolderObject:
//   Required. The name of a Folder object.
//

function GetFiles(FolderObject) {
    if (FolderObject == null) { return null; }
    
    var Files = new Array();
    
    if (FolderObject.SubFolders != null) {
        if (FolderObject.SubFolders.Count > 0) {
            var SubFolders = new Enumerator(FolderObject.SubFolders);
            for (; !SubFolders.atEnd(); SubFolders.moveNext()) {
                Files = Files.concat(GetFiles(SubFolders.item()));
            }
        }
    }
    
    if (FolderObject.Files != null) {
        if (FolderObject.Files.Count > 0) {
            var Files_ = new Enumerator(FolderObject.Files);
            for (; !Files_.atEnd(); Files_.moveNext()) {
                Files.push(Files_.item());
            }
        }
    }
    
    return Files;
}
