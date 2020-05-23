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

//
// --- Excel.Application ---
//

//
// GetExcelApplication
// - Returns a Excel.Application object.
//

//
// ExcelApplication:
//   Optional. The name of a Excel.Application object.
//

function GetExcelApplication(
    ExcelApplication) {
    
    if (ExcelApplication == null) {
        return new ActiveXObject("Excel.Application");
    } else {
        return ExcelApplication;
    }
}

//
// --- File DialogBox ---
//

//
// GetOpenFileName
// - Displays the standard Open dialog box and gets a file name from the user
//   without actually opening any files.
//

//
// ExcelApplication:
//   Optional. The name of a Excel.Application object.
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
    ExcelApplication,
    FileFilter,
    FilterIndex,
    Title) {
    
    try {
        var OpenFileName;
        OpenFileName =
            GetExcelApplication(ExcelApplication).
            GetOpenFileName(FileFilter, FilterIndex, Title);
        if (OpenFileName == false) {
            OpenFileName = "";
        } else {
            // nop
        }
        return OpenFileName;
    } catch (e) {
        return "";
    }
}

//
// GetSaveAsFileName
// - Displays the standard Save As dialog box and gets a file name from
//   the user without actually saving any files.
//

//
// ExcelApplication:
//   Optional. The name of a Excel.Application object.
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
    ExcelApplication,
    InitialFileName,
    FileFilter,
    FilterIndex,
    Title) {
    
    try {
        var SaveAsFileName;
        SaveAsFileName =
            GetExcelApplication(ExcelApplication).
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
        return SaveAsFileName;
    } catch (e) {
        return "";
    }
}

//
// --- Folder Dialog Box ---
//

//
// GetFolderName
// - Displays the standard Open dialog box and gets a folder name.
//

//
// ExcelApplication:
//   Optional. The name of a Excel.Application object.
//
// Title:
//   Optional. Specifies the title of the dialog box.
//   If this argument is omitted, the default title is used.
//

function GetFolderName(
    ExcelApplication,
    Title_) {
    
    try {
        var FolderName = "";
        with (GetExcelApplication(ExcelApplication)) {
            with (FileDialog(4)) { //4: msoFileDialogFolderPicker
                if (Title_ != "") { Title = Title_; }
                if (Show() == -1) { FolderName = SelectedItems(1); }
            }
        }
        return FolderName;
    } catch (e) {
        return "";
    }
}

//
// --- Test ---
//

function Test_GetOpenFileName() {
    var FileName;
    FileName = GetOpenFileName(null, "", 0, "");
    Debug_Print(FileName);
}

function Test_GetSaveAsFileName() {
    var FileName;
    FileName = GetSaveAsFileName(null, "", "", 0, "");
    Debug_Print(FileName);
}

function Test_GetFolderName() {
    var FolderName;
    FolderName = GetFolderName(null, "");
    Debug_Print(FolderName);
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
