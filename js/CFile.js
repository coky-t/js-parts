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
// - Scripting.File
//

//
// Microsoft ActiveX Data Objects X.X Library
// - ADODB.Stream
//

var Scripting_TristateUseDefault = -2;
var Scripting_TristateTrue = -1;
var Scripting_TristateFalse = 0;

var Scripting_ForReading = 1;
var Scripting_ForWriting = 2;
var Scripting_ForAppending = 8;

var ADODB_adTypeBinary = 1;
var ADODB_adTypeText = 2;

var ADODB_adSaveCreateNotExist = 1;
var ADODB_adSaveCreateOverWrite = 2;

function CFile() {
};
CFile.prototype = {

//var m_ADODBStream;
//var m_FileSystemObject;

//var m_File;
//var m_Path;

//function Class_Initialize() {
//}

//function Class_Terminate() {
//    m_ADODBStream = null;
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
    this.m_File = null;
    this.m_Path = "";
},

//
// --- Private Properties ---
//

//
// ADODBStream
// - Returns a ADODB.Stream object.
//
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/stream-object-ado
//

getADODBStream: function() {
    if (this.m_ADODBStream == null) {
        this.m_ADODBStream = new ActiveXObject("ADODB.Stream");
    }
    return this.m_ADODBStream;
},

//
// FileSystemObject
// - Returns a FileSystemObject object.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/Language/Reference/User-Interface-Help/filesystemobject-object
//

getFileSystemObject: function() {
    if (this.m_FileSystemObject == null) {
        this.m_FileSystemObject = 
            new ActiveXObject("Scripting.FileSystemObject");
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
// - Sets or returns the attributes of file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/attributes-property
// https://docs.microsoft.com/en-us/office/vba/Language/Reference/user-interface-help/getattr-function
//

getAttributes: function() {
    return this.getFile().Attributes;
},

setAttributes: function(Attributes_) {
    this.getFile().Attributes = Attributes_;
},

//
// BaseName
// - Returns a string containing the base name of the last component,
//   less any file extension, in a path.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getbasename-method
//

getBaseName: function() {
    return this.getFileSystemObject().GetBaseName(this.getPath());
},

//
// Binary
// - Reads an entire file and returns the resulting data.
// - Writes a binary data to a file.
//

getBinary: function() {
    return this.ReadBinary(0, -1);
},

setBinary: function(Binary_) {
    this.WriteBinary(Binary_, 0);
},

//
// DateCreated
// - Returns the date and time that the specified file was created.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datecreated-property
//

getDateCreated: function() {
    return this.getFile().DateCreated;
},

//
// DateLastAccessed
// - Returns the date and time that the specified file was last accessed.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datelastaccessed-property
//

getDateLastAccessed: function() {
    return this.getFile().DateLastAccessed;
},

//
// DateLastModified
// - Returns the date and time that the specified file was last modified.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/datelastmodified-property
//

getDateLastModified: function() {
    return this.getFile().DateLastModified;
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
// - Returns the drive letter of the drive on which the specified file resides.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/drive-property
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getdrivename-method
//

getDriveName: function() {
    if (this.m_File != null) {
        return this.m_File.Drive;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetDriveName(this.m_Path);
    }
},

//
// ExtensionName
// - Returns a string containing the extension name for the last component
//   in a path.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getextensionname-method
//

getExtensionName: function() {
    return this.getFileSystemObject().GetExtensionName(this.getPath());
},

//
// File
// - Sets or returns a File object corresponding to the file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getfile-method
//

getFile: function() {
    if (this.m_File == null) {
        if (this.m_Path == "") { return null; }
        this.m_File = this.getFileSystemObject().GetFile(this.m_Path);
    }
    return this.m_File;
},

setFile: function(File_) {
    this.Reset();
    this.m_File = File_;
},

//
// Name
// - Sets or returns the name of a specified file or folder.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/name-property-filesystemobject-object
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getfilename-method-visual-basic-for-applications
//

getName: function() {
    if (this.m_File != null) {
        return this.m_File.Name;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetFileName(this.m_Path);
    }
},

setName: function(Name_) {
    this.Reset();
    this.getFile().Name = Name_;
},

//
// ParentFolder
// - Returns the folder object for the parent of the specified file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/parentfolder-property
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getfolder-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getparentfoldername-method
//

getParentFolder: function() {
    if (this.m_File != null) {
        return this.m_File.ParentFolder;
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
    if (this.m_File != null) {
        return this.m_File.ParentFolder.Path;
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().GetParentFolderName(this.m_Path);
    }
},

//
// Path
// - Sets or returns the path for a specified file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/path-property-filesystemobject-object
//

getPath: function() {
    if (this.m_Path == "") {
        if (this.m_File == null) { return null; }
        this.m_Path = this.m_File.Path;
    }
    return this.m_Path;
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
    return this.getFile().ShortName;
},

//
// ShortPath
// - Returns the short path used by programs that require
//   the earlier 8.3 file naming convention.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/shortpath-property
//

getShortPath: function() {
    return this.getFile().ShortPath;
},

//
// Size
// - Returns the size, in bytes, of the specified file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/size-property-filesystemobject-object
//

getSize: function() {
    return this.getFile().Size;
},

//
// Text
// - Reads an entire file and returns the resulting string.
// - Writes a specified string to a file.
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

getText: function(Charset) {
    return this.ReadText(Charset, -1);
},

setText: function(Charset, Text_) {
    this.WriteText(Text_, Charset);
},

//
// TextA
// - Reads an entire file and returns the resulting string (ASCII).
// - Writes a specified string (ASCII) to a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/readall-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/write-method
//

getTextA: function() {
    var TextA_ = "";
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream()) {
            TextA_ = ReadAll();
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().OpenTextFile(this.m_Path)) {
            TextA_ = ReadAll();
            Close();
        }
    }
    return TextA_;
},

setTextA: function(TextA_) {
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream(Scripting_ForWriting)) {
            Write(TextA_);
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().CreateTextFile(this.m_Path, true)) {
            Write(TextA_);
            Close();
        }
    }
},

//
// TextB
// - Reads an entire file and returns the resulting string (Binary).
// - Writes a specified string (Binary) to a file.
//

getTextB: function() {
    return this.getBinary();
},

setTextB: function(TextB_) {
    this.setText("iso-8859-1", TextB_);
},

//
// TextUTF8
// - Reads an entire file and returns the resulting string (UTF-8).
// - Writes a specified string (UTF-8) to a file.
//

getTextUTF8: function() {
    return this.getText("utf-8");
},

setTextUTF8: function(TextUTF8_) {
    this.setText("utf-8", TextUTF8_);
    
    // Remove BOM
    this.setBinary(this.ReadBinary(3, -1));
},

//
// TextW
// - Reads an entire file and returns the resulting string (Unicode).
// - Writes a specified string (Unicode) to a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/readall-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/write-method
//

getTextW: function() {
    var TextW_ = "";
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream(
            Scripting_ForReading, Scripting_TristateTrue)) {
            
            TextW_ = ReadAll();
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().OpenTextFile(
            this.m_Path,
            Scripting_ForReading,
            false,
            Scripting_TristateTrue)) {
            
            TextW_ = ReadAll();
            Close();
        }
    }
    return TextW_;
},

setTextW: function(TextW_) {
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream(
            Scripting_ForWriting, Scripting_TristateTrue)) {
            
            Write(TextW_);
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().CreateTextFile(this.m_Path, true, true)) {
            Write(TextW_);
            Close();
        }
    }
},

//
// TypeName
// - Returns information about the type of a file.
//   For example, for files ending in .TXT, "Text Document" is returned.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/type-property-filesystemobject-object
//

getTypeName: function() {
    return this.getFile().Type;
},

//
// --- Public Methods ---
//

//
// AppendBinary
// - Writes a binary data to the end of a file.
//

AppendBinary: function(Binary_) {
    this.WriteBinary(Binary_, -1);
},

//
// AppendText
// - Writes a specified string to the end of a file.
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
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/charset-property-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/writetext-method-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/savetofile-method-ado
//

AppendText: function(Text_, Charset_) {
    with (this.getADODBStream()) {
        Type = ADODB_adTypeText;
        if (Charset_ != "") { Charset = Charset_; }
        Open();
        LoadFromFile(this.getPath());
        Position = Size;
        WriteText(Text_);
        SaveToFile(this.getPath(), ADODB_adSaveCreateOverWrite);
        Close();
    }
},

//
// AppendTextA
// - Writes a specified string (ASCII) to the end of a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/openastextstream-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/write-method
//

AppendTextA: function(TextA_) {
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream(Scripting_ForAppending)) {
            Write(TextA_);
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().OpenTextFile(
            this.m_Path, Scripting_ForAppending, true)) {
            
            Write(TextA_);
            Close();
        }
    }
},

//
// AppendTextB
// - Writes a specified string (Binary) to the end of a file.
//

AppendTextB: function(TextB_) {
    this.AppendText(TextB_, "iso-8859-1");
},

//
// AppendTextUTF8
// - Writes a specified string (UTF-8) to the end of a file.
//

AppendTextUTF8: function(
    TextUTF8_, BOM) {
    
    this.AppendText(TextUTF8_, "utf-8");
    
    if (! BOM) {
        this.setBinary(this.ReadBinary(3, -1));
    }
},

//
// AppendTextW
// - Writes a specified string (Unicode) to the end of a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/openastextstream-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/write-method
//

AppendTextW: function(TextW_) {
    if (this.m_File != null) {
        with (this.m_File.OpenAsTextStream(
            Scripting_ForAppending, Scripting_TristateTrue)) {
            
            Write(TextW_);
            Close();
        }
    } else if (this.m_Path != "") {
        with (this.getFileSystemObject().OpenTextFile(
            this.m_Path,
            Scripting_ForAppending,
            true,
            Scripting_TristateTrue)) {
            
            Write(TextW_);
            Close();
        }
    }
},

//
// Build
// - Combines a folder path and the name of a file and returns the combination
//   with valid path separators.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/buildpath-method
//

Build: function(ParentFolderName, FileName) {
    this.Reset();
    this.m_Path =
        this.getFileSystemObject().BuildPath(ParentFolderName, FileName);
},

//
// Copy
// - Copies a specified file or folder from one location to another.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/copy-method-visual-basic-for-applications
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/copyfile-method
//

Copy: function(
    Destination, OverWrite) {
    
    if (this.m_File != null) {
        this.m_File.Copy(Destination, OverWrite);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().CopyFile(
            this.m_Path, Destination, OverWrite);
    }
},

//
// CreateTextFile
// - Creates a specified file name and returns a TextStream object
// that can be used to read from or write to the file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/createtextfile-method
//

CreateTextFile: function(
    OverWrite,
    Unicode) {
    
    return this.getFileSystemObject().CreateTextFile(
        this.getPath(), OverWrite, Unicode);
},

//
// Delete
// - Deletes a specified file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/delete-method-visual-basic-for-applications
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/deletefile-method
//

Delete: function(Force) {
    if (this.m_File != null) {
        this.m_File.Delete(Force);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().DeleteFile(this.m_Path, Force);
    }
},

//
// Exists
// - Returns True if a specified file exists; False if it does not.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/fileexists-method
//

Exists: function() {
    return this.getFileSystemObject().FileExists(this.getPath());
},

//
// GetOpenFileName
// - Displays the standard Open dialog box and gets a file name
//   from the user without actually opening any files.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/api/excel.application.getopenfilename
//

//GetOpenFileName: function(
//    FileFilter,
//    FilterIndex,
//    Title) {
//    
//},

//
// GetSaveAsFileName
// - Displays the standard Save As dialog box and gets a file name
//   from the user without actually saving any files.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/api/excel.application.getsaveasfilename
//

//GetSaveAsFileName: function(
//    InitialFileName,
//    FileFilter,
//    FilterIndex,
//    Title) {
//    
//},

//
// Move
// - Moves a specified file or folder from one location to another.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/move-method-filesystemobject-object
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/movefile-method
//

Move: function(Destination) {
    if (this.m_File != null) {
        this.m_File.Move(Destination);
    } else if (this.m_Path != "") {
        this.getFileSystemObject().MoveFile(this.m_Path, Destination);
    }
    this.m_Path = Destination;
},

//
// OpenAsTextStream
// - Opens a specified file and returns a TextStream object
//   that can be used to read from, write to, or append to the file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/openastextstream-method
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
//

OpenAsTextStream: function(
    IOMode,
    Format) {
    
    if (this.m_File != null) {
        return this.m_File.OpenAsTextStream(IOMode, Format);
    } else if (this.m_Path != "") {
        return this.getFileSystemObject().OpenTextFile(
            this.m_Path, IOMode, true, Format);
    }
},

//
// OpenTextFile
// - Opens a specified file and returns a TextStream object
//   that can be used to read from, write to, or append to the file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
//

OpenTextFile: function(
    IOMode,
    Create,
    Format) {
    
    return this.getFileSystemObject().OpenTextFile(
        this.getPath(), IOMode, Create, Format);
},

//
// ReadBinary
// - Reads a specified number of bytes from a file and
//   returns the resulting data.
//
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/loadfromfile-method-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/read-method-ado
//

ReadBinary: function(
    Position_, NumBytes) {
    
    var Binary_;
    with (this.getADODBStream()) {
        Type = ADODB_adTypeBinary;
        Open();
        LoadFromFile(this.getPath());
        if (Position_ > 0) { Position = Position_; }
        if (NumBytes > 0) {
            Binary_ = Read(NumBytes);
        } else {
            Binary_ = Read();
        }
        Close();
    }
    return Binary_;
},

//
// ReadText
// - Reads an entire file and returns the resulting string.
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
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/charset-property-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/loadfromfile-method-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/readtext-method-ado
//

ReadText: function(
    Charset_, NumChars) {
    
    var Text_ = "";
    with (this.getADODBStream()) {
        Type = ADODB_adTypeText;
        if (Charset_ != "") { Charset = Charset_; }
        Open();
        LoadFromFile(this.getPath());
        if (NumChars > 0) {
            Text_ = ReadText(NumChars);
        } else {
            Text_ = ReadText();
        }
        Close();
    }
    return Text_;
},

//
// WriteBinary
// - Writes a binary data to a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/write-method-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/savetofile-method-ado
//

WriteBinary: function(Binary_, Position_) {
    with (this.getADODBStream()) {
        Type = ADODB_adTypeBinary;
        Open();
        if (Position_ == 0) {
            // nop
        } else {
            LoadFromFile(this.getPath());
            if (Position_ > 0) {
                Position = Position_;
                SetEOS();
            } else { //If Position < 0 Then
                Position = Size;
            }
        }
        Write(Binary_);
        SaveToFile(this.getPath(), ADODB_adSaveCreateOverWrite);
        Close();
    }
},

//
// WriteText
// - Writes a specified string to a file.
//
// Reference:
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/writetext-method-ado
// https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/savetofile-method-ado
//

WriteText: function(Text_, Charset_) {
    with (this.getADODBStream()) {
        Type = ADODB_adTypeText;
        if (Charset_ != "") { Charset = Charset_; }
        Open();
        WriteText(Text_);
        SaveToFile(this.getPath(), ADODB_adSaveCreateOverWrite);
        Close();
    }
}

}; // CFile.prototype
