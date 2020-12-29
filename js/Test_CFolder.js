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

function Test_CFolder_Folder() {
    Test_CFolder_Folder_Core("C:\\work");
}

function Test_CFolder_Files() {
    Test_CFolder_Files_Core("C:\\work");
}

function Test_CFolder_FilesAll() {
    Test_CFolder_FilesAll_Core("C:\\work");
}

function Test_CFolder_Path() {
    Test_CFolder_Path_Core("C:\\work");
}

function Test_CFolder_SubFolders() {
    Test_CFolder_SubFolders_Core("C:\\work");
}

function Test_CFolder_SubFoldersAll() {
    Test_CFolder_SubFoldersAll_Core("C:\\work");
}

function Test_CFolder_TempFolder() {
    Test_CFolder_TempFolder_Core();
}

//
// --- Test Core ---
//

function Test_CFolder_Folder_Core(FolderName) {
    var Folder;
    with (new CFolder) {
        setPath(FolderName);
        Folder = getFolder();
    }
    with (new CFolder) {
        setFolder(Folder);
        
        Debug_Print("-----");
        Debug_Print("Attributes: " + getAttributes());
        Debug_Print("DateCreated: " + getDateCreated());
        Debug_Print("DateLastAccessed: " + getDateLastAccessed());
        Debug_Print("DateLastModified: " + getDateLastModified());
        Debug_Print("Drive.Path: " + getDrive().Path);
        Debug_Print("DriveName: " + getDriveName());
        Debug_Print("IsRootFolder: " + getIsRootFolder());
        Debug_Print("Name: " + getName());
        Debug_Print("ParentFolder.Path: " + getParentFolder().Path);
        Debug_Print("ParentFolderName: " + getParentFolderName());
        Debug_Print("ShortName: " + getShortName());
        Debug_Print("ShortPath: " + getShortPath());
        Debug_Print("Size: " + getSize());
        Debug_Print("TypeName: " + getTypeName());
    }
}

function Test_CFolder_Files_Core(FolderName) {
    with (new CFolder) {
        setPath(FolderName);
        
        Debug_Print("-----");
        Debug_Print(getPath());
        Debug_Print("-----");
        var Files = new Enumerator(getFiles());
        for (; !Files.atEnd(); Files.moveNext()) {
            Debug_Print(Files.item().Path);
        }
    }
}

function Test_CFolder_FilesAll_Core(FolderName) {
    with (new CFolder) {
        setPath(FolderName);
        
        Debug_Print("-----");
        Debug_Print(getPath());
        Debug_Print("-----");
        
        var Files = getFilesAll();
        for (var Index = 0; Index < Files.length; Index++) {
            Debug_Print(Files[Index].Path);
        }
    }
}

function Test_CFolder_Path_Core(FolderName) {
    with (new CFolder) {
        setPath(FolderName);
        
        Debug_Print("-----");
        Debug_Print("Attributes: " + getAttributes());
        Debug_Print("DateCreated: " + getDateCreated());
        Debug_Print("DateLastAccessed: " + getDateLastAccessed());
        Debug_Print("DateLastModified: " + getDateLastModified());
        Debug_Print("Drive.Path: " + getDrive().Path);
        Debug_Print("DriveName: " + getDriveName());
        Debug_Print("IsRootFolder: " + getIsRootFolder());
        Debug_Print("Name: " + getName());
        Debug_Print("ParentFolder.Path: " + getParentFolder().Path);
        Debug_Print("ParentFolderName: " + getParentFolderName());
        Debug_Print("ShortName: " + getShortName());
        Debug_Print("ShortPath: " + getShortPath());
        Debug_Print("Size: " + getSize());
        Debug_Print("TypeName: " + getTypeName());
    }
}

function Test_CFolder_SubFolders_Core(FolderName) {
    with (new CFolder) {
        setPath(FolderName);
        
        Debug_Print("-----");
        Debug_Print(getPath());
        Debug_Print("-----");
        var Folders = new Enumerator(getSubFolders());
        for (; !Folders.atEnd(); Folders.moveNext()) {
            Debug_Print(Folders.item().Path);
        }
    }
}

function Test_CFolder_SubFoldersAll_Core(FolderName) {
    with (new CFolder) {
        setPath(FolderName);
        
        Debug_Print("-----");
        Debug_Print(getPath());
        Debug_Print("-----");
        
        var Folders = getSubFoldersAll();
        for (var Index = 0; Index < Folders.length; Index++) {
            Debug_Print(Folders[Index].Path);
        }
    }
}

function Test_CFolder_TempFolder_Core() {
    with (new CFolder) {
        GetTempFolderName();
        
        Debug_Print("-----");
        Debug_Print(getPath());
        Debug_Print("-----");
    }
}
