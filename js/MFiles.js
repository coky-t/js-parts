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
// - Scripting.File
// - Scripting.Dictionary
//

//
// --- Files ---
//

function FilterFiles(
    Files,
    IgnoredExtNames,
    SizeLimit) {
    
    if (Files == null) { return Files; }
    if (Files.Count == 0) { return Files; }
    if (IgnoredExtNames == "" && SizeLimit == 0) { return Files; }
    
    var IgnoredExtNameDic = GetIgnoredExtNameDic(IgnoredExtNames);
    
    var Files_ = new Array();
    
    for (var Index in Files) {
        var File = Files[Index];
        if (! IsIgnoredFile(File, IgnoredExtNameDic, SizeLimit)) {
            Files_.push(File);
        }
    }
    
    return Files_;
}

function GetIgnoredExtNameDic(IgnoredExtNames) {
    if (IgnoredExtNames == "") { return null; }
    
    var IgnoredExtNameDic = new ActiveXObject("Scripting.Dictionary");
    
    var IgnoredExtNameArray = IgnoredExtNames.split("\r\n");
    
    for (var Index in IgnoredExtNameArray) {
        var IgnoredExtName = IgnoredExtNameArray[Index];
        
        if (IgnoredExtName != "") {
            if (! IgnoredExtNameDic.Exists(IgnoredExtName)) {
                IgnoredExtNameDic.Add(IgnoredExtName, IgnoredExtName);
            }
        }
    }
    
    return IgnoredExtNameDic;
}

function IsIgnoredFile(
    File,
    IgnoredExtNameDic,
    SizeLimit) {
    
    return IsIgnoredFile_ExtNames(File, IgnoredExtNameDic) ||
        IsIgnoredFile_SizeLimit(File, SizeLimit);
}

function IsIgnoredFile_ExtNames(
    File,
    IgnoredExtNameDic) {
    
    if (File == null) { return false; }
    if (IgnoredExtNameDic == null) { return false; }
    if (IgnoredExtNameDic.Count == 0) { return false; }
    
    var ExtName = GetFileSystemObject().GetExtensionName(File.Path);
    
    return IgnoredExtNameDic.Exists(ExtName);
}

function IsIgnoredFile_SizeLimit(
    File,
    SizeLimit) {
    
    if (File == null) { return false; }
    if (SizeLimit <= 0) { return false; }
    
    return (File.Size > SizeLimit);
}
