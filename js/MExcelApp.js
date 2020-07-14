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
// Microsoft Excel X.X Object Library
// - Excel.Application
//

var ExcelApplication;

//
// --- Excel.Application ---
//

//
// GetExcelApplication
// - Returns a Excel.Application object.
//

function GetExcelApplication() {
    if (ExcelApplication == null) {
        ExcelApplication = new ActiveXObject("Excel.Application");
    }
    return ExcelApplication;
}

//
// --- File Dialog Box ---
//

//
// GetOpenFileName
// - Displays the standard Open dialog box and gets a file name from the user
//   without actually opening any files.
//

//
// FileFilter:
//   Optional. A string specifying file filtering criteria.
//
// FilterIndex:
//   Optional. Specifies the index numbers of the default file filtering
//   criteria, from 1 to the number of filters specified in FileFilter.
//   If this argument is omitted or greater than the number of filters
//   present, the first file filter is used.
//
// Title:
//   Optional. Specifies the title of the dialog box.
//   If this argument is omitted, the default title is used.
//

function GetOpenFileName(
    FileFilter,
    FilterIndex,
    Title) {
    
    var OpenFileName = "";
    try {
        OpenFileName =
            GetExcelApplication().
            GetOpenFileName(FileFilter, FilterIndex, Title);
        if (OpenFileName == false) {
            OpenFileName = "";
        } else {
            // nop
        }
    } catch (e) {
        OpenFileName = "";
    }
    return OpenFileName;
}

//
// GetSaveAsFileName
// - Displays the standard Save As dialog box and gets a file name from
//   the user without actually saving any files.
//

//
// InitialFileName:
//   Optional. Specifies the suggested file name.
//
// FileFilter:
//   Optional. A string specifying file filtering criteria.
//
// FilterIndex:
//   Optional. Specifies the index numbers of the default file filtering
//   criteria, from 1 to the number of filters specified in FileFilter.
//   If this argument is omitted or greater than the number of filters
//   present, the first file filter is used.
//
// Title:
//   Optional. Specifies the title of the dialog box.
//   If this argument is omitted, the default title is used.
//

function GetSaveAsFileName(
    InitialFileName,
    FileFilter,
    FilterIndex,
    Title) {
    
    var SaveAsFileName = "";
    try {
        SaveAsFileName =
            GetExcelApplication().
            GetSaveAsFileName(
                InitialFileName,
                FileFilter,
                FilterIndex,
                Title);
        if (SaveAsFileName == false) {
            SaveAsFileName = "";
        } else {
            // nop
        }
    } catch (e) {
        SaveAsFileName = "";
    }
    return SaveAsFileName;
}

//
// --- Folder Dialog Box ---
//

//
// GetFolderName
// - Displays the standard Open dialog box and gets a folder name.
//

//
// Title:
//   Optional. Specifies the title of the dialog box.
//   If this argument is omitted, the default title is used.
//

function GetFolderName(Title_) {
    var FolderName = "";
    try {
        with (GetExcelApplication()) {
            with (FileDialog(4)) { //msoFileDialogFolderPicker
                if (Title_ != "") { Title = Title_; }
                if (Show() == -1) { FolderName = SelectedItems(1); }
            }
        }
    } catch (e) {
        FolderName = "";
    }
    return FolderName;
}

//
// --- Test ---
//

function Test_GetOpenFileName() {
    var FileName;
    FileName = GetOpenFileName("", 0, "");
    Debug_Print(FileName);
}

function Test_GetSaveAsFileName() {
    var FileName;
    FileName = GetSaveAsFileName("", "", 0, "");
    Debug_Print(FileName);
}

function Test_GetFolderName() {
    var FolderName;
    FolderName = GetFolderName("");
    Debug_Print(FolderName);
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
