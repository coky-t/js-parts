//
// Copyright (c) 2022 Koki Takeyama
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

function Test_StrArrayDiff_SpdxLicenseText_EditDistance() {
    // copy files of
    // https://github.com/spdx/license-list-data/tree/master/text
    // to C:\work\data\spdx-license-text.
    
    var TargetFilePath = "C:\\work\\data\\spdx-license-text\\MIT.txt";
    
    var SpdxTextDirPath = "C:\\work\\data\\spdx-license-text";
    
    var TimerObj = new CProgressTimer;
    
    Test_StrArrayDiff_Files_EditDistance_Core(
        TargetFilePath, SpdxTextDirPath);
    
    TimerObj.show();
}

//
// --- Test Core ---
//

function Test_StrArrayDiff_Files_EditDistance_Core(
    TargetFilePath, DirPath) {
    
    var TargetText = ReadTextFileA(TargetFilePath);
    
    var Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        var FileText = ReadTextFileA(File.Path);
        Test_StrArrayDiff_File_EditDistance_Core(
            TargetText, FileText, File.Name);
    }
}

function Test_StrArrayDiff_File_EditDistance_Core(
    Str1, Str2, Str2Name) {
    
    var Str1Words = RegExp_Execute(Str1, "(\\w+)\\W*", false, true, false);
    var Str2Words = RegExp_Execute(Str2, "(\\w+)\\W*", false, true, false);
    
    var Len1 = Str1Words.length;
    var Len2 = Str2Words.length;
    
    var StrArray1 = new Array(Len1);
    for (var Index1 = 0; Index1 < Len1; Index1++) {
        //StrArray1[Index1] = Str1Words[Index1];
        //StrArray1[Index1] = Str1Words[Index1].trim().toLowerCase();
        StrArray1[Index1] =
            RegExp_Replace(
                Str1Words[Index1].toLowerCase(),
                "", "\\s+$", false, false, false);
    }
    
    var StrArray2 = new Array(Len2);
    for (var Index2 = 0; Index2 < Len2; Index2++) {
        //StrArray2[Index2] = Str2Words[Index2];
        //StrArray2[Index2] = Str2Words[Index2].trim().toLowerCase();
        StrArray2[Index2] =
            RegExp_Replace(
                Str2Words[Index2].toLowerCase(),
                "", "\\s+$", false, false, false);
    }
    
    var ED = EditDistance(StrArray1, StrArray2);
    
    var LCD = Len1 + Len2 - ED;
    
    Debug_Print(Str2Name +
        " ED: " + ED.toString() +
        " LCD: " + LCD.toString() + "/" + (Len1 + Len2).toString());
}
