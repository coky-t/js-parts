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
// - Scripting.FileSystemObject
// - Scripting.Folder
//

function CFolder() {
};
CFolder.prototype = {

//var m_FileSystemObject;

//var m_Folder;
//var m_Path;

//function Class_Initialize() {
//}

//function Class_Terminate() {
//    m_FileSystemObject = null;
//    Reset();
//}

//
// --- Private Method ---
//

//
// Reset
//

Reset: function() {
    this.m_Folder = null;
    this.m_Path = "";
},

//
// --- Private Properties ---
//

//
// FileSystemObject
// - Returns a FileSystemObject object.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/Language/Reference/User-Interface-Help/filesystemobject-object
//

getFileSystemObject: function() {
    if (this.m_FileSystemObject == null) {
        this.m_FileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
    }
    return this.m_FileSystemObject;
},

//
// --- Public Properties ---
//

//
// AbsolutePathName
// - Returns a complete and unambiguous path.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getabsolutepathname-method
//

getAbsolutePathName: function() {
    return this.getFileSystemObject().GetAbsolutePathName(this.getPath());
},

//
// Attributes
// - Sets or returns the attributes of folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/attributes-property
// https://docs.microsoft.com/en-us/office/vba/Language/Reference/user-interface-help/getattr-function
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/setattr-statement
//

getAttributes: function() {
    return this.getFolder().Attributes;
},

setAttributes: function(Attributes_) {
    this.getFolder().Attributes = Attributes_;
},

//
// DateCreated
// - Returns the date and time that the specified folder was created.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datecreated-property
//

getDateCreated: function() {
    return this.getFolder().DateCreated;
},

//
// DateLastAccessed
// - Returns the date and time that the specified folder was last accessed.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datelastaccessed-property
//

getDateLastAccessed: function() {
    return this.getFolder().DateLastAccessed;
},

//
// DateLastModified
// - Returns the date and time that the specified folder was last modified.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datelastmodified-property
//

getDateLastModified: function() {
    return this.getFolder().DateLastModified;
},

//
// Drive
// - Returns a Drive object corresponding to the drive in a specified path.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getdrive-method
//

getDrive: function() {
    return this.getFileSystemObject().GetDrive(this.getDriveName());
},

//
// DriveName
// - Returns the drive letter of the drive on which the specified folder resides.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/drive-property
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getdrivename-method
//

getDriveName: function() {
    if (this.m_Folder != null) {
        return this.m_Folder.Drive;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetDriveName(this.m_Path);
    }
},

//
// Files
// - Returns a Files collection consisting of all File objects
//   contained in the specified folder, including those with hidden
//   and system file attributes set.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/files-property
//

getFiles: function() {
    return this.getFolder().Files;
},

getFilesAll: function() {
    return this.getFilesWithinFolder(this.getFolder());
},

getFilesWithinFolder: function(Folder_) {
    if (Folder_ == null) { return null; }
    
    var Files = new Array();
    
    if (Folder_.SubFolders != null) {
        if (Folder_.SubFolders.Count > 0) {
            var SubFolders = new Enumerator(Folder_.SubFolders);
            for (; !SubFolders.atEnd(); SubFolders.moveNext()) {
                Files = Files.concat(
                    this.getFilesWithinFolder(SubFolders.item()));
            }
        }
    }
    
    if (Folder_.Files != null) {
        if (Folder_.Files.Count > 0) {
            var Files_ = new Enumerator(Folder_.Files);
            for (; !Files_.atEnd(); Files_.moveNext()) {
                Files.push(Files_.item());
            }
        }
    }
    
    return Files;
},

//
// Folder
// - Sets or returns a Folder object corresponding to the folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getfolder-method
//

getFolder: function() {
    if (this.m_Folder != null) {
        return this.m_Folder;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetFolder(this.m_Path);
    }
},

setFolder: function(Folder_) {
    this.Reset();
    this.m_Folder = Folder_;
},

//
// IsRootFolder
// - Returns True if a folder is the root folder and False if not.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/isrootfolder-property
//

getIsRootFolder: function() {
    return this.getFolder().IsRootFolder;
},

//
// Name
// - Sets or returns the name of a specified folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/name-property-filesystemobject-object
//

getName: function() {
    return this.getFolder().Name;
},

setName: function(Name_) {
    this.Reset();
    this.m_Path = this.getFileSystemObject().GetAbsolutePathName(Name_);
},

//
// ParentFolder
// - Returns the folder object for the parent of the specified folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/parentfolder-property
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getfolder-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getparentfoldername-method
//

getParentFolder: function() {
    if (this.m_Folder != null) {
        return this.m_Folder.ParentFolder;
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject()) {
            return GetFolder(GetParentFolderName(this.m_Path));
        }
    }
},

//
// ParentFolderName
// - Returns a string containing the name of the parent folder
//   of the last component in a specified path.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/parentfolder-property
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/path-property-filesystemobject-object
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getparentfoldername-method
//

getParentFolderName: function() {
    if (this.m_Folder != null) {
        return this.m_Folder.ParentFolder.Path;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetParentFolderName(this.m_Path);
    }
},

//
// Path
// - Sets or returns the path for a specified folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/path-property-filesystemobject-object
//

getPath: function() {
    if (this.m_Folder != null) {
        return this.m_Folder.Path;
    } else if (this.m_Path != "") {
        return this.m_Path;
    }
},

setPath: function(Path_) {
    this.Reset();
    this.m_Path = this.getFileSystemObject().GetAbsolutePathName(Path_);
},

//
// ShortName
// - Returns the short name used by programs that require
//   the earlier 8.3 naming convention.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/shortname-property
//

getShortName: function() {
    return this.getFolder().ShortName;
},

//
// ShortPath
// - Returns the short path used by programs that require
//   the earlier 8.3 folder naming convention.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/shortpath-property
//

getShortPath: function() {
    return this.getFolder().ShortPath;
},

//
// Size
// - returns the size, in bytes, of all files and subfolders
//   contained in the folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/size-property-filesystemobject-object
//

getSize: function() {
    return this.getFolder().Size;
},

//
// SubFolders
// - Returns a Folders collection consisting of all folders
//   contained in a specified folder, including those with Hidden
//   and System file attributes set.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/subfolders-property
//

getSubFolders: function() {
    return this.getFolder().SubFolders;
},

getSubFoldersAll: function() {
    return this.getFoldersWithinFolder(this.getFolder());
},

getFoldersWithinFolder: function(Folder_) {
    if (Folder_ == null) { return null; }
    
    var Folders = new Array();
    
    if (Folder_.SubFolders != null) {
        if (Folder_.SubFolders.Count > 0) {
            var SubFolders = new Enumerator(Folder_.SubFolders);
            for (; !SubFolders.atEnd(); SubFolders.moveNext()) {
                Folders = Folders.concat(
                    this.getFoldersWithinFolder(SubFolders.item()));
            }
        }
    }
    
    Folders.push(Folder_);
    
    return Folders;
},

//
// TypeName
// - Returns information about the type of a folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/type-property-filesystemobject-object
//

getTypeName: function() {
    return this.getFolder().Type;
},

//
// --- Public Methods ---
//

//
// Build
// - Combines a folder path and the name of a folder and returns the combination
//   with valid path separators.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/buildpath-method
//

Build: function(ParentFolderName, FolderName) {
    this.Reset();
    this.m_Path =
        this.getFileSystemObject().BuildPath(ParentFolderName, FolderName);
},

//
// Copy
// - Copies a specified folder from one location to another.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/copy-method-visual-basic-for-applications
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/copyfolder-method
//

Copy: function(
    Destination, OverWrite) {
    
    if (this.m_Folder != null) {
        this.m_Folder.Copy(Destination, OverWrite);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().CopyFolder(
            this.m_Path, Destination, OverWrite);
    }
},

//
// Create
// - Creates a folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/createfolder-method
//

Create: function(Recursive) {
    if (Recursive) {
        this.CreateFolder(this.getPath());
    } else {
        this.getFileSystemObject().CreateFolder(this.getPath());
    }
},

CreateFolder: function(Path_) {
    if (Path_ == "") { return; }
    
    if (this.getFileSystemObject().FolderExists(Path_)) { return; }
    
    with (this.getFileSystemObject()) {
        this.CreateFolder(GetParentFolderName(Path_));
        CreateFolder(Path_);
    }
},

//
// Delete
// - Deletes a specified folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/delete-method-visual-basic-for-applications
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/deletefolder-method
//

Delete: function(Force) {
    if (this.m_Folder != null) {
        this.m_Folder.Delete(Force);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().DeleteFolder(this.m_Path, Force);
    }
},

//
// Exists
// - Returns True if a specified folder exists; False if it does not.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/folderexists-method
//

Exists: function() {
    return this.getFileSystemObject().FolderExists(this.getPath());
},

//
// GetFolderName
// - Displays the standard Open dialog box and gets a folder name.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/api/excel.application.filedialog
//

//GetFolderName: function(Title)
//}

//
// GetSpecialFolderName
// - Returns the special folder specified.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getspecialfolder-method
//

GetSpecialFolderName: function(SpecialFolder) {
    this.Reset();
    this.m_Path = this.getFileSystemObject().GetSpecialFolder(SpecialFolder);
},

GetSystemFolderName: function() {
    this.GetSpecialFolderName(1); // SystemFolder
},

GetTempFolderName: function() {
    this.GetSpecialFolderName(2); // TemporaryFolder
},

GetWindowsFoldername: function() {
    this.GetSpecialFolderName(0); // WindowsFolder
},

//
// Move
// - Moves a specified folder from one location to another.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/move-method-filesystemobject-object
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/movefolder-method
//

Move: function(Destination) {
    if (this.m_Folder != null) {
        this.m_Folder.Move(Destination);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().MoveFolder(this.m_Path, Destination);
        this.m_Path =
            this.getFileSystemObject().GetAbsolutePathName(Destination);
    }
}

}; // CFolder.prototype
