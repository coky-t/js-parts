//
// Copyright (c) 2026 Koki Takeyama
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies || substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS || COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES || OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT || OTHERWISE, ARISING
// FROM, OUT OF || IN CONNECTION WITH THE SOFTWARE || THE USE || OTHER DEALINGS
// IN THE SOFTWARE.
//

//
// --- Test ---
//

function Test_SaveScanCodeTextFileEx() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses.txt";
    // CounterXXX: xxx
    //
    // ### XXX
    //
    // | Key |
    // | --- |
    // | xxx |
    //
    // ### All
    //
    // | Key | IsException | IsDeprecated | IsGeneric | IsSpdx |
    // |-----|-------------|--------------|-----------|--------|
    // | xxx | xxx         | xxx          | xxx       | xxx    |
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode\\scancode-licenses";
    
    Test_SaveScanCodeTextFileEx_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx2() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses-ex2.txt";
    // CounterXXX: xxx
    //
    // ### Normal, Exception, Generic, Generic Exception
    //
    // | Short Name | Key |
    // |------------|-----|
    // | [xxx](xxx) | xxx |
    //
    // ### Normal (Deprecated), Exception (Deprecated), Spdx (Deprecated), Spdx Exception (Deprecated), Generic (Deprecated), Generic Exception (Deprecated)
    //
    // | Short Name | Key | Replaced By |
    // |------------|-----|-------------|
    // | [xxx](xxx) | xxx | [xxx](xxx)  |
    //
    // ### Spdx, Spdx Exception
    //
    // | Short Name | Key | SPDX Identifier |
    // |------------|-----|-----------------|
    // | [xxx](xxx) | xxx | [xxx](xxx)      |
    //
    // ### All
    //
    // | Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx |
    // |------------|-----|-------------|--------------|-----------|--------|
    // | [xxx](xxx) | xxx | xxx         | xxx          | xxx       | xxx    |
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode\\scancode-licenses";
    
    Test_SaveScanCodeTextFileEx2_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx3() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses-ex3.txt";
    // CounterXXX: xxx
    //
    // ### Normal, Exception, Generic, Generic Exception
    //
    // | Short Name | Key |
    // |------------|-----|
    // | [xxx](xxx) | xxx |
    //
    // ### Normal (Deprecated), Exception (Deprecated), Generic (Deprecated), Generic Exception (Deprecated)
    //
    // | Short Name | Key | Replaced By |
    // |------------|-----|-------------|
    // | [xxx](xxx) | xxx | [xxx](xxx)  |
    //
    // ### Spdx, Spdx Exception
    //
    // | Short Name | Key | SPDX Identifier |
    // |------------|-----|-----------------|
    // | [xxx](xxx) | xxx | [xxx](xxx)      |
    //
    // ### Spdx (Deprecated), Spdx Exception (Deprecated)
    //
    // | Short Name | Key | Replaced By | SPDX Identifier |
    // |------------|-----|-------------|-----------------|
    // | [xxx](xxx) | xxx | [xxx](xxx)  | [xxx](xxx)      |
    //
    // ### All
    //
    // | Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx |
    // |------------|-----|-------------|--------------|-----------|--------|
    // | [xxx](xxx) | xxx | xxx         | xxx          | xxx       | xxx    |
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode\\scancode-licenses";
    
    Test_SaveScanCodeTextFileEx3_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx4() {
    var OutputDirPath;
    OutputDirPath = "C:\\work\\data\\scancode\\scancode-licenses-ex4";
    // name
    // name-pattern
    // text
    // text-pattern
    // text-template
    // url
    // url-pattern
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode\\scancode-licenses";
    
    Test_SaveScanCodeTextFileEx4_Core(
        OutputDirPath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx5() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses-ex5.txt";
    // CounterXXX: xxx
    //
    // ### Normal, Exception, Generic, Generic Exception
    //
    // | Short Name | Key | Ignorable | Min. Cov. |
    // |------------|-----|-----------|-----------|
    // | [xxx](xxx) | xxx | xxx       | xxx       |
    //
    // ### Normal (Deprecated), Exception (Deprecated), Generic (Deprecated), Generic Exception (Deprecated)
    //
    // | Short Name | Key | Replaced By | Ignorable | Min. Cov. |
    // |------------|-----|-------------|-----------|-----------|
    // | [xxx](xxx) | xxx | [xxx](xxx)  | xxx       | xxx       |
    //
    // ### Spdx, Spdx Exception
    //
    // | Short Name | Key | SPDX Identifier | Ignorable | Min. Cov. |
    // |------------|-----|-----------------|-----------|-----------|
    // | [xxx](xxx) | xxx | [xxx](xxx)      | xxx       | xxx       |
    //
    // ### Spdx (Deprecated), Spdx Exception (Deprecated)
    //
    // | Short Name | Key | Replaced By | SPDX Identifier | Ignorable | Min. Cov. |
    // |------------|-----|-------------|-----------------|-----------|-----------|
    // | [xxx](xxx) | xxx | [xxx](xxx)  | [xxx](xxx)      | xxx       | xxx       |
    //
    // ### All
    //
    // | Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx | Ignorable | Min. Cov. |
    // |------------|-----|-------------|--------------|-----------|--------|-----------|-----------|
    // | [xxx](xxx) | xxx | xxx         | xxx          | xxx       | xxx    | xxx       | xxx       |
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode\\scancode-licenses";
    
    Test_SaveScanCodeTextFileEx5_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx6() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses-ex6.txt";
    // CounterXXX: xxx
    //
    // ### Normal, Exception, Generic, Generic Exception
    //
    // | Short Name | Key | Release |
    // |------------|-----|---------|
    // | [xxx](xxx) | xxx | xxx     |
    //
    // ### Normal (Deprecated), Exception (Deprecated), Generic (Deprecated), Generic Exception (Deprecated)
    //
    // | Short Name | Key | Release | Deprecated | Replaced By |
    // |------------|-----|---------| ---------- |-------------|
    // | [xxx](xxx) | xxx | xxx     | xxx        | [xxx](xxx)  |
    //
    // ### Spdx, Spdx Exception
    //
    // | Short Name | Key | Release | SPDX Identifier |
    // |------------|-----|---------|-----------------|
    // | [xxx](xxx) | xxx | xxx     | [xxx](xxx)      |
    //
    // ### Spdx (Deprecated), Spdx Exception (Deprecated)
    //
    // | Short Name | Key | Release | Deprecated | Replaced By | SPDX Identifier |
    // |------------|-----|---------| ---------- |-------------|-----------------|
    // | [xxx](xxx) | xxx | xxx     | xxx        | [xxx](xxx)  | [xxx](xxx)      |
    //
    // ### All
    //
    // | Short Name | Key | Release | IsException | IsDeprecated | IsGeneric | IsSpdx |
    // |------------|-----|---------|-------------|--------------|-----------|--------|
    // | [xxx](xxx) | xxx | xxx     | xxx         | xxx          | xxx       | xxx    |
    
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode"; // "\\scancode-licenses-x.x.x"
    
    Test_SaveScanCodeTextFileEx6_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

function Test_SaveScanCodeTextFileEx7() {
    var OutputFilePath;
    OutputFilePath = "C:\\work\\data\\scancode\\scancode-licenses-ex7.txt";
    // ### XXX, XXX (Deprecated)
    //
    // | Version | Count | Count (Dep.) |
    // |---------|-------|--------------|
    //
    // ### All
    //
    // | Version | Total |   | Nml. | Nml. (Dep.) | Nml. Exc. | Nml. Exc. (Dep.) | Spdx | Spdx (Dep.) | Spdx Exc. | Spdx Exc. (Dep.) | Gen. | Gen. (Dep.) | Gen. Exc. | Gen. Exc. (Dep.) |
    // |---------|-------|---|------|-------------|-----------|------------------|------|-------------|-----------|------------------|------|-------------|-----------|------------------|
    // | x.x.x   | xxx   |   | xxx  | xxx         | xxx       | xxx              | xxx  | xxx         | xxx       | xxx              | xxx  | xxx         |  xxx      | xxx              |
    
    
    // https://github.com/aboutcode-org/scancode-licensedb/tree/main/docs
    // https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/licenses
    var ScanCodeTextDirPath;
    ScanCodeTextDirPath = "C:\\work\\data\\scancode"; // "\\scancode-licenses-x.x.x"
    
    Test_SaveScanCodeTextFileEx7_Core(
        OutputFilePath, ScanCodeTextDirPath);
}

//
// --- Test Core ---
//

function Test_SaveScanCodeTextFileEx_Core(
    OutputFilePath, DirPath) {
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var OutputTextNormal;
    var OutputTextNormalDeprecated;
    var OutputTextException;
    var OutputTextExceptionDeprecated;
    var OutputTextSpdx;
    var OutputTextSpdxDeprecated;
    var OutputTextSpdxException;
    var OutputTextSpdxExceptionDeprecated;
    var OutputTextGeneric;
    var OutputTextGenericDeprecated;
    var OutputTextGenericException;
    var OutputTextGenericExceptionDeprecated;
    
    OutputTextNormal =
        "### Normal\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextNormalDeprecated =
        "### Normal (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextException =
        "### Exception\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextExceptionDeprecated =
        "### Exception (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextSpdx =
        "### Spdx\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextSpdxDeprecated =
        "### Spdx (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextSpdxException =
        "### Spdx Exception\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextSpdxExceptionDeprecated =
        "### Spdx Exception (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextGeneric =
        "### Generic\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextGenericDeprecated =
        "### Generic (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextGenericException =
        "### Generic Exception\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    OutputTextGenericExceptionDeprecated =
        "### Generic Exception (Deprecated)\n\n" +
        "| Key |\n" +
        "|-----|\n";
        //"| Key | Dummy |\n" +
        //"|-----|-------|\n";
        
    var OutputTextAll;
    OutputTextAll =
        "### All\n\n" +
        "| Key | IsException | IsDeprecated | IsGeneric | IsSpdx |\n" +
        "|-----|-------------|--------------|-----------|--------|\n";
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            CounterAll = CounterAll + 1;
            
            OutputTextAll = OutputTextAll + "|";
            OutputTextAll = OutputTextAll + " " + Key;
            OutputTextAll = OutputTextAll + " |";
            
            if (IsException) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsDeprecated) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsGeneric) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsSpdx) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            OutputTextAll = OutputTextAll + "\n";
            
            //
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "|";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Key;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " |";
                        //OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "\n";
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        OutputTextGenericException = OutputTextGenericException + "|";
                        OutputTextGenericException = OutputTextGenericException + " " + Key;
                        OutputTextGenericException = OutputTextGenericException + " |";
                        //OutputTextGenericException = OutputTextGenericException + " |";
                        OutputTextGenericException = OutputTextGenericException + "\n";
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "|";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Key;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " |";
                        //OutputTextGenericDeprecated = OutputTextGenericDeprecated + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "\n";
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        OutputTextGeneric = OutputTextGeneric + "|";
                        OutputTextGeneric = OutputTextGeneric + " " + Key;
                        OutputTextGeneric = OutputTextGeneric + " |";
                        //OutputTextGeneric = OutputTextGeneric + " |";
                        OutputTextGeneric = OutputTextGeneric + "\n";
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "|";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Key;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " |";
                        //OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "\n";
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "|";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Key;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " |";
                        //OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        OutputTextSpdxException = OutputTextSpdxException + "|";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Key;
                        OutputTextSpdxException = OutputTextSpdxException + " |";
                        //OutputTextSpdxException = OutputTextSpdxException + " |";
                        OutputTextSpdxException = OutputTextSpdxException + "\n";
                        
                    } else {
                        CounterException = CounterException + 1;
                        OutputTextException = OutputTextException + "|";
                        OutputTextException = OutputTextException + " " + Key;
                        OutputTextException = OutputTextException + " |";
                        //OutputTextException = OutputTextException + " |";
                        OutputTextException = OutputTextException + "\n";
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "|";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Key;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " |";
                        //OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "\n";
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "|";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Key;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " |";
                        //OutputTextNormalDeprecated = OutputTextNormalDeprecated + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        OutputTextSpdx = OutputTextSpdx + "|";
                        OutputTextSpdx = OutputTextSpdx + " " + Key;
                        OutputTextSpdx = OutputTextSpdx + " |";
                        //OutputTextSpdx = OutputTextSpdx + " |";
                        OutputTextSpdx = OutputTextSpdx + "\n";
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        OutputTextNormal = OutputTextNormal + "|";
                        OutputTextNormal = OutputTextNormal + " " + Key;
                        OutputTextNormal = OutputTextNormal + " |";
                        //OutputTextNormal = OutputTextNormal + " |";
                        OutputTextNormal = OutputTextNormal + "\n";
                        
                    }
                }
            }
    
        }
    }
    
    var OutputCounter;
    OutputCounter =
        "CounterNormal: " + CStr(CounterNormal) + "\n" +
        "CounterNormalDeprecated: " + CStr(CounterNormalDeprecated) + "\n\n" +
        "CounterException: " + CStr(CounterException) + "\n" +
        "CounterExceptionDeprecated: " + CStr(CounterExceptionDeprecated) + "\n\n" +
        "CounterSpdx: " + CStr(CounterSpdx) + "\n" +
        "CounterSpdxDeprecated: " + CStr(CounterSpdxDeprecated) + "\n\n" +
        "CounterSpdxException: " + CStr(CounterSpdxException) + "\n" +
        "CounterSpdxExceptionDeprecated: " + CStr(CounterSpdxExceptionDeprecated) + "\n\n" +
        "CounterGeneric: " + CStr(CounterGeneric) + "\n" +
        "CounterGenericDeprecated: " + CStr(CounterGenericDeprecated) + "\n" +
        "CounterGenericException: " + CStr(CounterGenericException) + "\n" +
        "CounterGenericExceptionDeprecated: " + CStr(CounterGenericExceptionDeprecated) + "\n\n" +
        "CounterAll: " + CStr(CounterAll) + "\n\n";
    
    var OutputText;
    OutputText =
        OutputTextNormal + "\n" +
        OutputTextNormalDeprecated + "\n" +
        OutputTextException + "\n" +
        OutputTextExceptionDeprecated + "\n" +
        OutputTextSpdx + "\n" +
        OutputTextSpdxDeprecated + "\n" +
        OutputTextSpdxException + "\n" +
        OutputTextSpdxExceptionDeprecated + "\n" +
        OutputTextGeneric + "\n" +
        OutputTextGenericDeprecated + "\n" +
        OutputTextGenericException + "\n" +
        OutputTextGenericExceptionDeprecated + "\n" +
        OutputTextAll;
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter + OutputText, true);
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx2_Core(
    OutputFilePath, DirPath) {
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var OutputTextNormal;
    var OutputTextNormalDeprecated;
    var OutputTextException;
    var OutputTextExceptionDeprecated;
    var OutputTextSpdx;
    var OutputTextSpdxDeprecated;
    var OutputTextSpdxException;
    var OutputTextSpdxExceptionDeprecated;
    var OutputTextGeneric;
    var OutputTextGenericDeprecated;
    var OutputTextGenericException;
    var OutputTextGenericExceptionDeprecated;
    
    OutputTextNormal =
        "### Normal\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextNormalDeprecated =
        "### Normal (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextException =
        "### Exception\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextExceptionDeprecated =
        "### Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextSpdx =
        "### Spdx\n\n" +
        "| Short Name | Key | SPDX Identifier |\n" +
        "|------------|-----|-----------------|\n";
        
    OutputTextSpdxDeprecated =
        "### Spdx (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextSpdxException =
        "### Spdx Exception\n\n" +
        "| Short Name | Key | SPDX Identifier |\n" +
        "|------------|-----|-----------------|\n";
        
    OutputTextSpdxExceptionDeprecated =
        "### Spdx Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextGeneric =
        "### Generic\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextGenericDeprecated =
        "### Generic (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextGenericException =
        "### Generic Exception\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextGenericExceptionDeprecated =
        "### Generic Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    var OutputTextAll;
    OutputTextAll =
        "### All\n\n" +
        "| Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx |\n" +
        "|------------|-----|-------------|--------------|-----------|--------|\n";
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var ShortName;
            var SpdxLicenseKey;
            var ReplacedBy;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            CounterAll = CounterAll + 1;
            
            OutputTextAll = OutputTextAll + "|";
            OutputTextAll = OutputTextAll + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
            OutputTextAll = OutputTextAll + " " + Key + " |";
            
            if (IsException) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsDeprecated) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsGeneric) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsSpdx) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            OutputTextAll = OutputTextAll + "\n";
            
            //
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "|";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Key + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "\n";
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        OutputTextGenericException = OutputTextGenericException + "|";
                        OutputTextGenericException = OutputTextGenericException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericException = OutputTextGenericException + " " + Key + " |";
                        OutputTextGenericException = OutputTextGenericException + "\n";
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "|";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Key + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "\n";
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        OutputTextGeneric = OutputTextGeneric + "|";
                        OutputTextGeneric = OutputTextGeneric + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGeneric = OutputTextGeneric + " " + Key + " |";
                        OutputTextGeneric = OutputTextGeneric + "\n";
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "|";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Key + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "\n";
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "|";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Key + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        OutputTextSpdxException = OutputTextSpdxException + "|";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Key + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + "\n";
                        
                    } else {
                        CounterException = CounterException + 1;
                        OutputTextException = OutputTextException + "|";
                        OutputTextException = OutputTextException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextException = OutputTextException + " " + Key + " |";
                        OutputTextException = OutputTextException + "\n";
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "|";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Key + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "\n";
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "|";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Key + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        OutputTextSpdx = OutputTextSpdx + "|";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + Key + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdx = OutputTextSpdx + "\n";
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        OutputTextNormal = OutputTextNormal + "|";
                        OutputTextNormal = OutputTextNormal + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormal = OutputTextNormal + " " + Key + " |";
                        OutputTextNormal = OutputTextNormal + "\n";
                        
                    }
                }
            }
    
        }
    }
    
    var OutputCounter;
    OutputCounter =
        "CounterNormal: " + CStr(CounterNormal) + "\n" +
        "CounterNormalDeprecated: " + CStr(CounterNormalDeprecated) + "\n\n" +
        "CounterException: " + CStr(CounterException) + "\n" +
        "CounterExceptionDeprecated: " + CStr(CounterExceptionDeprecated) + "\n\n" +
        "CounterSpdx: " + CStr(CounterSpdx) + "\n" +
        "CounterSpdxDeprecated: " + CStr(CounterSpdxDeprecated) + "\n\n" +
        "CounterSpdxException: " + CStr(CounterSpdxException) + "\n" +
        "CounterSpdxExceptionDeprecated: " + CStr(CounterSpdxExceptionDeprecated) + "\n\n" +
        "CounterGeneric: " + CStr(CounterGeneric) + "\n" +
        "CounterGenericDeprecated: " + CStr(CounterGenericDeprecated) + "\n" +
        "CounterGenericException: " + CStr(CounterGenericException) + "\n" +
        "CounterGenericExceptionDeprecated: " + CStr(CounterGenericExceptionDeprecated) + "\n\n" +
        "CounterAll: " + CStr(CounterAll) + "\n\n";
    
    var OutputText;
    OutputText =
        OutputTextNormal + "\n" +
        OutputTextNormalDeprecated + "\n" +
        OutputTextException + "\n" +
        OutputTextExceptionDeprecated + "\n" +
        OutputTextSpdx + "\n" +
        OutputTextSpdxDeprecated + "\n" +
        OutputTextSpdxException + "\n" +
        OutputTextSpdxExceptionDeprecated + "\n" +
        OutputTextGeneric + "\n" +
        OutputTextGenericDeprecated + "\n" +
        OutputTextGenericException + "\n" +
        OutputTextGenericExceptionDeprecated + "\n" +
        OutputTextAll;
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter + OutputText, true);
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx3_Core(
    OutputFilePath, DirPath) {
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var OutputTextNormal;
    var OutputTextNormalDeprecated;
    var OutputTextException;
    var OutputTextExceptionDeprecated;
    var OutputTextSpdx;
    var OutputTextSpdxDeprecated;
    var OutputTextSpdxException;
    var OutputTextSpdxExceptionDeprecated;
    var OutputTextGeneric;
    var OutputTextGenericDeprecated;
    var OutputTextGenericException;
    var OutputTextGenericExceptionDeprecated;
    
    OutputTextNormal =
        "### Normal\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextNormalDeprecated =
        "### Normal (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextException =
        "### Exception\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextExceptionDeprecated =
        "### Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextSpdx =
        "### Spdx\n\n" +
        "| Short Name | Key | SPDX Identifier |\n" +
        "|------------|-----|-----------------|\n";
        
    OutputTextSpdxDeprecated =
        "### Spdx (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | SPDX Identifier |\n" +
        "|------------|-----|-------------|-----------------|\n";
        
    OutputTextSpdxException =
        "### Spdx Exception\n\n" +
        "| Short Name | Key | SPDX Identifier |\n" +
        "|------------|-----|-----------------|\n";
        
    OutputTextSpdxExceptionDeprecated =
        "### Spdx Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | SPDX Identifier |\n" +
        "|------------|-----|-------------|-----------------|\n";
        
    OutputTextGeneric =
        "### Generic\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextGenericDeprecated =
        "### Generic (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    OutputTextGenericException =
        "### Generic Exception\n\n" +
        "| Short Name | Key |\n" +
        "|------------|-----|\n";
        
    OutputTextGenericExceptionDeprecated =
        "### Generic Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By |\n" +
        "|------------|-----|-------------|\n";
        
    var OutputTextAll;
    OutputTextAll =
        "### All\n\n" +
        "| Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx |\n" +
        "|------------|-----|-------------|--------------|-----------|--------|\n";
    
    var LicenseDic;
    LicenseDic = CreateObject("Scripting.Dictionary");
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var ShortName;
            var SpdxLicenseKey;
            var ReplacedBy;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            var LicenseInfo;
            LicenseInfo = new ScanCodeLicense;
            LicenseInfo.Class_Initialize();
            LicenseInfo.Key = Key;
            LicenseInfo.ShortName = ShortName;
            LicenseInfo.SpdxLicenseKey = SpdxLicenseKey;
            LicenseInfo.ReplacedBy = ReplacedBy;
            LicenseInfo.IsException = IsException;
            LicenseInfo.IsDeprecated = IsDeprecated;
            LicenseInfo.IsGeneric = IsGeneric;
            LicenseInfo.IsSpdx = IsSpdx;
            
            LicenseDic.Add(Key, LicenseInfo);
        }
    }
    
    Files.moveFirst();
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            //var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            //var Key;
            //var ShortName;
            //var SpdxLicenseKey;
            //var ReplacedBy;
            //var IsException;
            //var IsDeprecated;
            //var IsGeneric;
            //var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            CounterAll = CounterAll + 1;
            
            OutputTextAll = OutputTextAll + "|";
            OutputTextAll = OutputTextAll + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
            OutputTextAll = OutputTextAll + " " + Key + " |";
            
            if (IsException) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsDeprecated) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsGeneric) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsSpdx) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            OutputTextAll = OutputTextAll + "\n";
            
            //
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "|";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Key + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "\n";
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        OutputTextGenericException = OutputTextGenericException + "|";
                        OutputTextGenericException = OutputTextGenericException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericException = OutputTextGenericException + " " + Key + " |";
                        OutputTextGenericException = OutputTextGenericException + "\n";
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "|";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Key + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "\n";
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        OutputTextGeneric = OutputTextGeneric + "|";
                        OutputTextGeneric = OutputTextGeneric + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGeneric = OutputTextGeneric + " " + Key + " |";
                        OutputTextGeneric = OutputTextGeneric + "\n";
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "|";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Key + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "\n";
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "|";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Key + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        OutputTextSpdxException = OutputTextSpdxException + "|";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Key + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + "\n";
                        
                    } else {
                        CounterException = CounterException + 1;
                        OutputTextException = OutputTextException + "|";
                        OutputTextException = OutputTextException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextException = OutputTextException + " " + Key + " |";
                        OutputTextException = OutputTextException + "\n";
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "|";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Key + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "\n";
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "|";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Key + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        OutputTextSpdx = OutputTextSpdx + "|";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + Key + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdx = OutputTextSpdx + "\n";
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        OutputTextNormal = OutputTextNormal + "|";
                        OutputTextNormal = OutputTextNormal + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormal = OutputTextNormal + " " + Key + " |";
                        OutputTextNormal = OutputTextNormal + "\n";
                        
                    }
                }
            }
    
        }
    }
    
    var OutputCounter;
    OutputCounter =
        "CounterNormal: " + CStr(CounterNormal) + "\n" +
        "CounterNormalDeprecated: " + CStr(CounterNormalDeprecated) + "\n\n" +
        "CounterException: " + CStr(CounterException) + "\n" +
        "CounterExceptionDeprecated: " + CStr(CounterExceptionDeprecated) + "\n\n" +
        "CounterSpdx: " + CStr(CounterSpdx) + "\n" +
        "CounterSpdxDeprecated: " + CStr(CounterSpdxDeprecated) + "\n\n" +
        "CounterSpdxException: " + CStr(CounterSpdxException) + "\n" +
        "CounterSpdxExceptionDeprecated: " + CStr(CounterSpdxExceptionDeprecated) + "\n\n" +
        "CounterGeneric: " + CStr(CounterGeneric) + "\n" +
        "CounterGenericDeprecated: " + CStr(CounterGenericDeprecated) + "\n" +
        "CounterGenericException: " + CStr(CounterGenericException) + "\n" +
        "CounterGenericExceptionDeprecated: " + CStr(CounterGenericExceptionDeprecated) + "\n\n" +
        "CounterAll: " + CStr(CounterAll) + "\n\n";
    
    var OutputText;
    OutputText =
        OutputTextNormal + "\n" +
        OutputTextNormalDeprecated + "\n" +
        OutputTextException + "\n" +
        OutputTextExceptionDeprecated + "\n" +
        OutputTextSpdx + "\n" +
        OutputTextSpdxDeprecated + "\n" +
        OutputTextSpdxException + "\n" +
        OutputTextSpdxExceptionDeprecated + "\n" +
        OutputTextGeneric + "\n" +
        OutputTextGenericDeprecated + "\n" +
        OutputTextGenericException + "\n" +
        OutputTextGenericExceptionDeprecated + "\n" +
        OutputTextAll;
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter + OutputText, true);
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx4_Core(
    OutputDirPath, InputDirPath) {
    
    var OutputNameDirPath;
    OutputNameDirPath = OutputDirPath + "\\name";
    
    var OutputNamePatternDirPath;
    OutputNamePatternDirPath = OutputDirPath + "\\name-pattern";
    
    var OutputTextDirPath;
    OutputTextDirPath = OutputDirPath + "\\text";
    
    var OutputTextTemplateDirPath;
    OutputTextTemplateDirPath = OutputDirPath + "\\text-template";
    
    var OutputTextPatternDirPath;
    OutputTextPatternDirPath = OutputDirPath + "\\text-pattern";
    
    var OutputUrlDirPath;
    OutputUrlDirPath = OutputDirPath + "\\url";
    
    var OutputUrlPatternDirPath;
    OutputUrlPatternDirPath = OutputDirPath + "\\url-pattern";
    
    MakeDirectory(OutputNameDirPath);
    MakeDirectory(OutputNamePatternDirPath);
    MakeDirectory(OutputTextDirPath);
    MakeDirectory(OutputTextTemplateDirPath);
    MakeDirectory(OutputTextPatternDirPath);
    MakeDirectory(OutputUrlDirPath);
    MakeDirectory(OutputUrlPatternDirPath);
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(InputDirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var ShortName;
            var Name;
            var SpdxLicenseKey;
            var ReplacedBy;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            var LicenseText;
            
            //var bIgnorableCopyrights // ignorable_copyrights
            //var bIgnorableHolders // ignorable_holders
            //var bIgnorableAuthors // ignorable_authors
            //var bIgnorableUrls // ignorable_urls
            //var bIgnorableEmails // ignorable_emails
            
            //var MinimumCoverage // minimum_coverage
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            Name = GetItem(FileText, "\n" + "name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            LicenseText = GetLicenseText(FileText);
            
            //Debug_Print("Key = " + Key);
            //Debug_Print("ShortName = " + ShortName);
            //Debug_Print("Name = " + Name);
            //Debug_Print("SpdxLicenseKey = " + SpdxLicenseKey);
            //Debug_Print("ReplacedBy = " + ReplacedBy);
            //Debug_Print("IsException = " + IsException.toString());
            //Debug_Print("IsDeprecated = " + IsDeprecated.toString());
            //Debug_Print("IsGeneric = " + IsGeneric.toString());
            //Debug_Print("IsSpdx = " + IsSpdx.toString());
            
            //bIgnorableCopyrights = TagExists(FileText, "ignorable_copyrights:");
            //bIgnorableHolders = TagExists(FileText, "ignorable_holders:");
            //bIgnorableAuthors = TagExists(FileText, "ignorable_authors:");
            //bIgnorableUrls = TagExists(FileText, "ignorable_urls:");
            //bIgnorableEmails = TagExists(FileText, "ignorable_emails:");
            
            //MinimumCoverage = GetItem(FileText, "minimum_coverage: ");
            
            var bOutput;
            bOutput = true;
            if (IsSpdx) bOutput = false;
            if (IsDeprecated) bOutput = false;
            
            if (bOutput) {
                var NamesText;
                NamesText = "";
                
                if (IsException) {
                    NamesText = NamesText + "SPDX-License-Identifier: XXX WITH " + SpdxLicenseKey + "\n";
                    NamesText = NamesText + "SPDX-Exception-Identifier: " + SpdxLicenseKey + "\n";
                } else {
                    NamesText = NamesText + "SPDX-License-Identifier: " + SpdxLicenseKey + "\n";
                }
                
                if (ShortName != "") {
                    if (IsException || (InStr(ShortName, "License") > 0)) {
                        NamesText = NamesText + ShortName + "\n";
                    } else {
                        NamesText = NamesText + "License: " + ShortName + "\n";
                    }
                }
                
                if ((Name != "") && (Name != ShortName)) {
                    if (IsException || (InStr(Name, "License") > 0)) {
                        NamesText = NamesText + Name + "\n";
                    } else {
                        NamesText = NamesText + "License: " + Name + "\n";
                    }
                }
                
                MADODBStream_WriteTextFileUTF8(OutputNameDirPath + "\\" + Key + ".name.txt", NamesText, false);
                
                // ---
                
                var NamesPatternText;
                NamesPatternText = "";
                
                if (IsException) {
                    NamesPatternText = NamesPatternText + "SPDX-License-Identifier\\W*(?:[A-Za-z0-9\\+\\-\\.]+\\W*(?:AND\\W*|OR\\W*|WITH\\W*))*" + SpdxLicenseKey.replace(/\./g, "\\.") + "\n";
                    NamesPatternText = NamesPatternText + "SPDX-Exception-Identifier: " + SpdxLicenseKey.replace(/\./g, "\\.") + "\n";
                } else {
                    NamesPatternText = NamesPatternText + "SPDX-License-Identifier\\W*(?:[A-Za-z0-9\\+\\-\\.]+\\W*(?:AND\\W*|OR\\W*|WITH\\W*))*" + SpdxLicenseKey.replace(/\./g, "\\.") + "\n";
                }
                
                if (ShortName != "") {
                    if (IsException || (InStr(ShortName, "License") > 0)) {
                        NamesPatternText = NamesPatternText + ShortName + "\n";
                    } else {
                        NamesPatternText = NamesPatternText + "License: " + ShortName + "\n";
                    }
                }
                
                if ((Name != "") && (Name != ShortName)) {
                    if (IsException || (InStr(Name, "License") > 0)) {
                        NamesPatternText = NamesPatternText + Name + "\n";
                    } else {
                        NamesPatternText = NamesPatternText + "License: " + Name + "\n";
                    }
                }
                
                NamesPatternText = NamesPatternText + "\n\n" +
                    "examples:" + "\n" +
                    "(?:MODULE_LICENSE|__license__)\\W*" + "\n" +
                    "Licen[sc]e(?:\\W*(magnet.{1,100})?|d\\W*(?:as|under)\\W*(?:the\\W*)?(?:terms\\W*(?:and\\W*conditions\\W*)?of\\W*)?)" + "\n" +
                    "\n" +
                    "(?<!\\w)" + "\n" +
                    "(?!\\w)" + "\n" +
                    "Licen[sc]e" + "\n" +
                    "(?:\\W*Licen[sc]e|(?!\\w))" + "\n" +
                    "\n" +
                    "(?:v(?:er(?:sion|\\.)?|\\.)?\\W*)?" + "\n" +
                    "(?:\\.0)?" + "\n" +
                    "(?:\\.0|(?!\\.[1-9]))" + "\n" +
                    "\n" +
                    "(?<!\\w) xxx \\W*(?:v(?:er(?:sion|\\.)?|\\.)?\\W*)? xxx \\W*Licen[sc]e" + "\n" +
                    "(?<!\\w) xxx \\W*Licen[sc]e\\W*(?:v(?:er(?:sion|\\.)?|\\.)?\\W*)? xxx" + "\n" +
                    "v(?:er(?:sion|\\.)?|\\.)?\\W* xxx \\W*of\\W*(?:the\\W*)? xxx \\W*Licen[sc]e" + "\n"
                
                MADODBStream_WriteTextFileUTF8(OutputNamePatternDirPath + "\\" + Key + ".name.pattern.txt", NamesPatternText, false);
                
                // ---
                
                if (LicenseText != "") {
                    MADODBStream_WriteTextFileUTF8(OutputTextDirPath + "\\" + Key + ".txt", LicenseText, false);
                }
                
                // ---
                
                var LicenseTextTemplateText;
                LicenseTextTemplateText = FileText;
                
                if (LicenseText != "") {
                    LicenseTextTemplateText = LicenseTextTemplateText + "\n\n" +
                        "examples:" + "\n" +
                        "<<beginOptional>>xxx<<endOptional>>" + "\n" +
                        "<<var;name=\"bullet\";original=\"1.\";match=\".{0,20}\">>" + "\n" +
                        "<<var;name=\"copyright\";original=\"xxx\";match=\"[\\w\\W]{1,80}\">>" + "\n" +
                        "<<var;name=\"holder\";original=\"xxx\";match=\"[\\w\\W]{1,80}\">>" + "\n" +
                        "<<var;name=\"author\";original=\"xxx\";match=\"[\\w\\W]{1,80}\">>" + "\n" +
                        "<<var;name=\"url\";original=\"xxx\";match=\"[\\w\\W]{1,80}\">>" + "\n" +
                        "<<var;name=\"email\";original=\"xxx\";match=\"[\\w\\W]{1,80}\">>" + "\n"
                        
                    MADODBStream_WriteTextFileUTF8(OutputTextTemplateDirPath + "\\" + Key + ".template.txt", LicenseTextTemplateText, false);
                }
                
                // ---
                
                var LicenseTextPatternText;
                LicenseTextPatternText = LicenseText;
                
                if (LicenseTextPatternText != "") {
                    LicenseTextPatternText = LicenseTextPatternText + "\n\n" +
                        "tool:" + "\n" +
                        "https://coky-t.github.io/js-parts/js.html/Test_MRegExp_ScanCodeLicenseText.js.html" + "\n";
                    
                    MADODBStream_WriteTextFileUTF8(OutputTextPatternDirPath + "\\" + Key + ".pattern.txt", LicenseTextPatternText, false);
                }
                
                // ---
                
                var UrlText;
                UrlText = "https://scancode-licensedb.aboutcode.org/" + Key + ".html" + "\n";
                
                MADODBStream_WriteTextFileUTF8(OutputUrlDirPath + "\\" + Key + ".url.txt", UrlText, false);
                
                // ---
                
                var UrlPatternText;
                UrlPatternText = "https?://scancode-licensedb\\.aboutcode\\.org/" + Key.replace(/\./g, "\\.") + "\\.html" + "\n";
                
                MADODBStream_WriteTextFileUTF8(OutputUrlPatternDirPath + "\\" + Key + ".url.pattern.txt", UrlPatternText, false);
            }
        }
    }
    
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx5_Core(
    OutputFilePath, DirPath) {
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var OutputTextNormal;
    var OutputTextNormalDeprecated;
    var OutputTextException;
    var OutputTextExceptionDeprecated;
    var OutputTextSpdx;
    var OutputTextSpdxDeprecated;
    var OutputTextSpdxException;
    var OutputTextSpdxExceptionDeprecated;
    var OutputTextGeneric;
    var OutputTextGenericDeprecated;
    var OutputTextGenericException;
    var OutputTextGenericExceptionDeprecated;
    
    OutputTextNormal =
        "### Normal\n\n" +
        "| Short Name | Key | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------|-----------|\n";
        
    OutputTextNormalDeprecated =
        "### Normal (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------|-----------|\n";
        
    OutputTextException =
        "### Exception\n\n" +
        "| Short Name | Key | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------|-----------|\n";
        
    OutputTextExceptionDeprecated =
        "### Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------|-----------|\n";
        
    OutputTextSpdx =
        "### Spdx\n\n" +
        "| Short Name | Key | SPDX Identifier | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------------|-----------|-----------|\n";
        
    OutputTextSpdxDeprecated =
        "### Spdx (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | SPDX Identifier | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------------|-----------|-----------|\n";
        
    OutputTextSpdxException =
        "### Spdx Exception\n\n" +
        "| Short Name | Key | SPDX Identifier | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------------|-----------|-----------|\n";
        
    OutputTextSpdxExceptionDeprecated =
        "### Spdx Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | SPDX Identifier | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------------|-----------|-----------|\n";
        
    OutputTextGeneric =
        "### Generic\n\n" +
        "| Short Name | Key | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------|-----------|\n";
        
    OutputTextGenericDeprecated =
        "### Generic (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------|-----------|\n";
        
    OutputTextGenericException =
        "### Generic Exception\n\n" +
        "| Short Name | Key | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-----------|-----------|\n";
        
    OutputTextGenericExceptionDeprecated =
        "### Generic Exception (Deprecated)\n\n" +
        "| Short Name | Key | Replaced By | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|-----------|-----------|\n";
        
    var OutputTextAll;
    OutputTextAll =
        "### All\n\n" +
        "| Short Name | Key | IsException | IsDeprecated | IsGeneric | IsSpdx | Ignorable | Min. Cov. |\n" +
        "|------------|-----|-------------|--------------|-----------|--------|-----------|-----------|\n";
    
    var LicenseDic;
    LicenseDic = CreateObject("Scripting.Dictionary");
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(DirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var ShortName;
            var SpdxLicenseKey;
            var ReplacedBy;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            // ignorable_copyrights
            // ignorable_holders
            // ignorable_authors
            // ignorable_urls
            // ignorable_emails
            
            // minimum_coverage
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            var LicenseInfo;
            LicenseInfo = new ScanCodeLicense;
            LicenseInfo.Class_Initialize();
            LicenseInfo.Key = Key;
            LicenseInfo.ShortName = ShortName;
            LicenseInfo.SpdxLicenseKey = SpdxLicenseKey;
            LicenseInfo.ReplacedBy = ReplacedBy;
            LicenseInfo.IsException = IsException;
            LicenseInfo.IsDeprecated = IsDeprecated;
            LicenseInfo.IsGeneric = IsGeneric;
            LicenseInfo.IsSpdx = IsSpdx;
            
            LicenseDic.Add(Key, LicenseInfo);
        }
    }
    
    Files.moveFirst();
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            //var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            //var Key;
            //var ShortName;
            //var SpdxLicenseKey;
            //var ReplacedBy;
            //var IsException;
            //var IsDeprecated;
            //var IsGeneric;
            //var IsSpdx;
            
            var bIgnorableCopyrights; // ignorable_copyrights
            var bIgnorableHolders; // ignorable_holders
            var bIgnorableAuthors; // ignorable_authors
            var bIgnorableUrls; // ignorable_urls
            var bIgnorableEmails; // ignorable_emails
            
            var Ignorables;
            
            var MinimumCoverage; // minimum_coverage
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            bIgnorableCopyrights = TagExists(FileText, "ignorable_copyrights:");
            bIgnorableHolders = TagExists(FileText, "ignorable_holders:");
            bIgnorableAuthors = TagExists(FileText, "ignorable_authors:");
            bIgnorableUrls = TagExists(FileText, "ignorable_urls:");
            bIgnorableEmails = TagExists(FileText, "ignorable_emails:");
            
            Ignorables = "";
            if (bIgnorableCopyrights) {
                if (Ignorables != "") {
                    Ignorables = Ignorables + ", ";
                }
                Ignorables = Ignorables + "copyrights";
            }
            if (bIgnorableHolders) {
                if (Ignorables != "") {
                    Ignorables = Ignorables + ", ";
                }
                Ignorables = Ignorables + "holders";
            }
            if (bIgnorableAuthors) {
                if (Ignorables != "") {
                    Ignorables = Ignorables + ", ";
                }
                Ignorables = Ignorables + "authors";
            }
            if (bIgnorableUrls) {
                if (Ignorables != "") {
                    Ignorables = Ignorables + ", ";
                }
                Ignorables = Ignorables + "urls";
            }
            if (bIgnorableEmails) {
                if (Ignorables != "") {
                    Ignorables = Ignorables + ", ";
                }
                Ignorables = Ignorables + "emails";
            }
            
            MinimumCoverage = GetItem(FileText, "minimum_coverage: ");
            
            CounterAll = CounterAll + 1;
            
            OutputTextAll = OutputTextAll + "|";
            OutputTextAll = OutputTextAll + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
            OutputTextAll = OutputTextAll + " " + Key + " |";
            
            if (IsException) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsDeprecated) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsGeneric) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsSpdx) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (Ignorables != "") {
                OutputTextAll = OutputTextAll + " " + Ignorables;
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (MinimumCoverage != "") {
                OutputTextAll = OutputTextAll + " " + MinimumCoverage;
            }
            OutputTextAll = OutputTextAll + " |";
            
            OutputTextAll = OutputTextAll + "\n";
            
            //
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "|";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Key + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Ignorables;
                        }
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " |";
                        
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "\n";
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        OutputTextGenericException = OutputTextGenericException + "|";
                        OutputTextGenericException = OutputTextGenericException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericException = OutputTextGenericException + " " + Key + " |";
                        
                        if (Ignorables != "") {
                            OutputTextGenericException = OutputTextGenericException + " " + Ignorables;
                        }
                        OutputTextGenericException = OutputTextGenericException + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextGenericException = OutputTextGenericException + " " + MinimumCoverage;
                        }
                        OutputTextGenericException = OutputTextGenericException + " |";
                        
                        OutputTextGenericException = OutputTextGenericException + "\n";
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "|";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Key + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Ignorables;
                        }
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " |";
                        
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "\n";
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        OutputTextGeneric = OutputTextGeneric + "|";
                        OutputTextGeneric = OutputTextGeneric + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGeneric = OutputTextGeneric + " " + Key + " |";
                        
                        if (Ignorables != "") {
                            OutputTextGeneric = OutputTextGeneric + " " + Ignorables;
                        }
                        OutputTextGeneric = OutputTextGeneric + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextGeneric = OutputTextGeneric + " " + MinimumCoverage;
                        }
                        OutputTextGeneric = OutputTextGeneric + " |";
                        
                        OutputTextGeneric = OutputTextGeneric + "\n";
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "|";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Key + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Ignorables;
                        }
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " |";
                        
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "\n";
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "|";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Key + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Ignorables;
                        }
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " |";
                        
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        OutputTextSpdxException = OutputTextSpdxException + "|";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Key + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextSpdxException = OutputTextSpdxException + " " + Ignorables;
                        }
                        OutputTextSpdxException = OutputTextSpdxException + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextSpdxException = OutputTextSpdxException + " " + MinimumCoverage;
                        }
                        OutputTextSpdxException = OutputTextSpdxException + " |";
                        
                        OutputTextSpdxException = OutputTextSpdxException + "\n";
                        
                    } else {
                        CounterException = CounterException + 1;
                        OutputTextException = OutputTextException + "|";
                        OutputTextException = OutputTextException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextException = OutputTextException + " " + Key + " |";
                        
                        if (Ignorables != "") {
                            OutputTextException = OutputTextException + " " + Ignorables;
                        }
                        OutputTextException = OutputTextException + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextException = OutputTextException + " " + MinimumCoverage;
                        }
                        OutputTextException = OutputTextException + " |";
                        
                        OutputTextException = OutputTextException + "\n";
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "|";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Key + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Ignorables;
                        }
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " |";
                        
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "\n";
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "|";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Key + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Ignorables;
                        }
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + MinimumCoverage;
                        }
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " |";
                        
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        OutputTextSpdx = OutputTextSpdx + "|";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + Key + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        
                        if (Ignorables != "") {
                            OutputTextSpdx = OutputTextSpdx + " " + Ignorables;
                        }
                        OutputTextSpdx = OutputTextSpdx + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextSpdx = OutputTextSpdx + " " + MinimumCoverage;
                        }
                        OutputTextSpdx = OutputTextSpdx + " |";
                        
                        OutputTextSpdx = OutputTextSpdx + "\n";
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        OutputTextNormal = OutputTextNormal + "|";
                        OutputTextNormal = OutputTextNormal + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormal = OutputTextNormal + " " + Key + " |";
                        
                        if (Ignorables != "") {
                            OutputTextNormal = OutputTextNormal + " " + Ignorables;
                        }
                        OutputTextNormal = OutputTextNormal + " |";
                        
                        if (MinimumCoverage != "") {
                            OutputTextNormal = OutputTextNormal + " " + MinimumCoverage;
                        }
                        OutputTextNormal = OutputTextNormal + " |";
                        
                        OutputTextNormal = OutputTextNormal + "\n";
                        
                    }
                }
            }
    
        }
    }
    
    var OutputCounter;
    OutputCounter =
        "CounterNormal: " + CStr(CounterNormal) + "\n" +
        "CounterNormalDeprecated: " + CStr(CounterNormalDeprecated) + "\n\n" +
        "CounterException: " + CStr(CounterException) + "\n" +
        "CounterExceptionDeprecated: " + CStr(CounterExceptionDeprecated) + "\n\n" +
        "CounterSpdx: " + CStr(CounterSpdx) + "\n" +
        "CounterSpdxDeprecated: " + CStr(CounterSpdxDeprecated) + "\n\n" +
        "CounterSpdxException: " + CStr(CounterSpdxException) + "\n" +
        "CounterSpdxExceptionDeprecated: " + CStr(CounterSpdxExceptionDeprecated) + "\n\n" +
        "CounterGeneric: " + CStr(CounterGeneric) + "\n" +
        "CounterGenericDeprecated: " + CStr(CounterGenericDeprecated) + "\n" +
        "CounterGenericException: " + CStr(CounterGenericException) + "\n" +
        "CounterGenericExceptionDeprecated: " + CStr(CounterGenericExceptionDeprecated) + "\n\n" +
        "CounterAll: " + CStr(CounterAll) + "\n\n";
    
    var OutputText;
    OutputText =
        OutputTextNormal + "\n" +
        OutputTextNormalDeprecated + "\n" +
        OutputTextException + "\n" +
        OutputTextExceptionDeprecated + "\n" +
        OutputTextSpdx + "\n" +
        OutputTextSpdxDeprecated + "\n" +
        OutputTextSpdxException + "\n" +
        OutputTextSpdxExceptionDeprecated + "\n" +
        OutputTextGeneric + "\n" +
        OutputTextGenericDeprecated + "\n" +
        OutputTextGenericException + "\n" +
        OutputTextGenericExceptionDeprecated + "\n" +
        OutputTextAll;
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter + OutputText, true);
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx6_Core(
    OutputFilePath, DirPath) {
    
    var KeyToReleaseDic;
    KeyToReleaseDic = CreateObject("Scripting.Dictionary");
    
    var KeyToDeprecatedDic;
    KeyToDeprecatedDic = CreateObject("Scripting.Dictionary");
    
    var LatestVersion;
    LatestVersion = ScanCodeToolkitVersions_GetKeyToReleaseDic(KeyToReleaseDic, KeyToDeprecatedDic, DirPath);
    
    // ---
    
    var DirName_Prefix = "scancode-licenses-";
    
    var LatestVersionName;
    LatestVersionName = LatestVersion.replace(/v/, "");
    
    var LatestVersionDirName;
    LatestVersionDirName = DirName_Prefix + LatestVersionName;
    
    var LatestVersionDirPath;
    LatestVersionDirPath = GetFileSystemObject().BuildPath(DirPath, LatestVersionDirName);
    
    // ---
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var OutputTextNormal;
    var OutputTextNormalDeprecated;
    var OutputTextException;
    var OutputTextExceptionDeprecated;
    var OutputTextSpdx;
    var OutputTextSpdxDeprecated;
    var OutputTextSpdxException;
    var OutputTextSpdxExceptionDeprecated;
    var OutputTextGeneric;
    var OutputTextGenericDeprecated;
    var OutputTextGenericException;
    var OutputTextGenericExceptionDeprecated;
    
    OutputTextNormal =
        "### Normal\n\n" +
        "| Short Name | Key | Release |\n" +
        "|------------|-----|---------|\n";
        
    OutputTextNormalDeprecated =
        "### Normal (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By |\n" +
        "|------------|-----|---------|------------|-------------|\n";
        
    OutputTextException =
        "### Exception\n\n" +
        "| Short Name | Key | Release |\n" +
        "|------------|-----|---------|\n";
        
    OutputTextExceptionDeprecated =
        "### Exception (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By |\n" +
        "|------------|-----|---------|------------|-------------|\n";
        
    OutputTextSpdx =
        "### Spdx\n\n" +
        "| Short Name | Key | Release | SPDX Identifier |\n" +
        "|------------|-----|---------|-----------------|\n";
        
    OutputTextSpdxDeprecated =
        "### Spdx (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By | SPDX Identifier |\n" +
        "|------------|-----|---------|------------|-------------|-----------------|\n";
        
    OutputTextSpdxException =
        "### Spdx Exception\n\n" +
        "| Short Name | Key | Release | SPDX Identifier |\n" +
        "|------------|-----|---------|-----------------|\n";
        
    OutputTextSpdxExceptionDeprecated =
        "### Spdx Exception (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By | SPDX Identifier |\n" +
        "|------------|-----|---------|------------|-------------|-----------------|\n";
        
    OutputTextGeneric =
        "### Generic\n\n" +
        "| Short Name | Key | Release |\n" +
        "|------------|-----|---------|\n";
        
    OutputTextGenericDeprecated =
        "### Generic (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By |\n" +
        "|------------|-----|---------|------------|-------------|\n";
        
    OutputTextGenericException =
        "### Generic Exception\n\n" +
        "| Short Name | Key | Release |\n" +
        "|------------|-----|---------|\n";
        
    OutputTextGenericExceptionDeprecated =
        "### Generic Exception (Deprecated)\n\n" +
        "| Short Name | Key | Release | Deprecated | Replaced By |\n" +
        "|------------|-----|---------|------------|-------------|\n";
        
    var OutputTextAll
    OutputTextAll =
        "### All\n\n" +
        "| Short Name | Key | Release | IsException | IsDeprecated | IsGeneric | IsSpdx |\n" +
        "|------------|-----|---------|-------------|--------------|-----------|--------|\n"
    
    var LicenseDic;
    LicenseDic = CreateObject("Scripting.Dictionary");
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(LatestVersionDirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var ShortName;
            var SpdxLicenseKey;
            var ReplacedBy;
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            var LicenseInfo;
            LicenseInfo = new ScanCodeLicense;
            LicenseInfo.Class_Initialize();
            LicenseInfo.Key = Key;
            LicenseInfo.ShortName = ShortName;
            LicenseInfo.SpdxLicenseKey = SpdxLicenseKey;
            LicenseInfo.ReplacedBy = ReplacedBy;
            LicenseInfo.IsException = IsException;
            LicenseInfo.IsDeprecated = IsDeprecated;
            LicenseInfo.IsGeneric = IsGeneric;
            LicenseInfo.IsSpdx = IsSpdx;
            
            LicenseDic.Add(Key, LicenseInfo);
        }
    }
    
    Files.moveFirst();
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == "LICENSE") { // since 32.0.0rc1
        //if (GetFileSystemObject().GetExtensionName(File.Path) == "yml") { // until 31.2.6
            Debug_Print(File.Name);
            
            //var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            //var Key;
            //var ShortName;
            //var SpdxLicenseKey;
            //var ReplacedBy;
            //var IsException;
            //var IsDeprecated;
            //var IsGeneric;
            //var IsSpdx;
            
            Key = GetItem(FileText, "key: ");
            ShortName = GetItem(FileText, "short_name: ");
            SpdxLicenseKey = GetItem(FileText, "spdx_license_key: ");
            ReplacedBy = GetItem(FileText, "replaced_by:" + "\n" + "    - ");
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            var Release;
            Release = "";
            if (KeyToReleaseDic.Exists(Key)) {
                Release = KeyToReleaseDic.Item(Key);
            }
            
            var Deprecated;
            Deprecated = "";
            if (KeyToDeprecatedDic.Exists(Key)) {
                Deprecated = KeyToDeprecatedDic.Item(Key);
            }
            
            CounterAll = CounterAll + 1;
            
            OutputTextAll = OutputTextAll + "|";
            OutputTextAll = OutputTextAll + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
            OutputTextAll = OutputTextAll + " " + Key + " |";
            OutputTextAll = OutputTextAll + " " + Release + " |";
            
            if (IsException) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsDeprecated) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsGeneric) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            if (IsSpdx) {
                OutputTextAll = OutputTextAll + " Yes";
            }
            OutputTextAll = OutputTextAll + " |";
            
            OutputTextAll = OutputTextAll + "\n";
            
            //
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "|";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Key + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + Deprecated;
                        }
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " |";
                        
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericExceptionDeprecated = OutputTextGenericExceptionDeprecated + "\n";
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        OutputTextGenericException = OutputTextGenericException + "|";
                        OutputTextGenericException = OutputTextGenericException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericException = OutputTextGenericException + " " + Key + " |";
                        OutputTextGenericException = OutputTextGenericException + " " + Release + " |";
                        OutputTextGenericException = OutputTextGenericException + "\n";
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "|";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Key + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + Deprecated;
                        }
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " |";
                        
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextGenericDeprecated = OutputTextGenericDeprecated + "\n";
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        OutputTextGeneric = OutputTextGeneric + "|";
                        OutputTextGeneric = OutputTextGeneric + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextGeneric = OutputTextGeneric + " " + Key + " |";
                        OutputTextGeneric = OutputTextGeneric + " " + Release + " |";
                        OutputTextGeneric = OutputTextGeneric + "\n";
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "|";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Key + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + Deprecated;
                        }
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " |";
                        
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        OutputTextSpdxExceptionDeprecated = OutputTextSpdxExceptionDeprecated + "\n";
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "|";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Key + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + Deprecated;
                        }
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " |";
                        
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextExceptionDeprecated = OutputTextExceptionDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        OutputTextSpdxException = OutputTextSpdxException + "|";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Key + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + Release + " |";
                        OutputTextSpdxException = OutputTextSpdxException + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdxException = OutputTextSpdxException + "\n";
                        
                    } else {
                        CounterException = CounterException + 1;
                        OutputTextException = OutputTextException + "|";
                        OutputTextException = OutputTextException + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextException = OutputTextException + " " + Key + " |";
                        OutputTextException = OutputTextException + " " + Release + " |";
                        OutputTextException = OutputTextException + "\n";
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "|";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Key + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + Deprecated;
                        }
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " |";
                        
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + ReplacedBy + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + " " + GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) + " |";
                        OutputTextSpdxDeprecated = OutputTextSpdxDeprecated + "\n";
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "|";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Key + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Release + " |";
                        
                        if (Deprecated != "") {
                            OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + Deprecated;
                        }
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + " " + GetLinksFromReplacedBy(ReplacedBy) + " |";
                        OutputTextNormalDeprecated = OutputTextNormalDeprecated + "\n";
                        
                    }
                } else {
                    if (IsSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        OutputTextSpdx = OutputTextSpdx + "|";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + Key + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + Release + " |";
                        OutputTextSpdx = OutputTextSpdx + " " + GetLinkFromSpdxLicenseKey(SpdxLicenseKey) + " |";
                        OutputTextSpdx = OutputTextSpdx + "\n";
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        OutputTextNormal = OutputTextNormal + "|";
                        OutputTextNormal = OutputTextNormal + " " + GetLinkFromShortNameAndKey(ShortName, Key) + " |";
                        OutputTextNormal = OutputTextNormal + " " + Key + " |";
                        OutputTextNormal = OutputTextNormal + " " + Release + " |";
                        OutputTextNormal = OutputTextNormal + "\n";
                        
                    }
                }
            }
    
        }
    }
    
    var OutputCounter;
    OutputCounter =
        "CounterNormal: " + CStr(CounterNormal) + "\n" +
        "CounterNormalDeprecated: " + CStr(CounterNormalDeprecated) + "\n\n" +
        "CounterException: " + CStr(CounterException) + "\n" +
        "CounterExceptionDeprecated: " + CStr(CounterExceptionDeprecated) + "\n\n" +
        "CounterSpdx: " + CStr(CounterSpdx) + "\n" +
        "CounterSpdxDeprecated: " + CStr(CounterSpdxDeprecated) + "\n\n" +
        "CounterSpdxException: " + CStr(CounterSpdxException) + "\n" +
        "CounterSpdxExceptionDeprecated: " + CStr(CounterSpdxExceptionDeprecated) + "\n\n" +
        "CounterGeneric: " + CStr(CounterGeneric) + "\n" +
        "CounterGenericDeprecated: " + CStr(CounterGenericDeprecated) + "\n" +
        "CounterGenericException: " + CStr(CounterGenericException) + "\n" +
        "CounterGenericExceptionDeprecated: " + CStr(CounterGenericExceptionDeprecated) + "\n\n" +
        "CounterAll: " + CStr(CounterAll) + "\n\n";
    
    var OutputText;
    OutputText =
        OutputTextNormal + "\n" +
        OutputTextNormalDeprecated + "\n" +
        OutputTextException + "\n" +
        OutputTextExceptionDeprecated + "\n" +
        OutputTextSpdx + "\n" +
        OutputTextSpdxDeprecated + "\n" +
        OutputTextSpdxException + "\n" +
        OutputTextSpdxExceptionDeprecated + "\n" +
        OutputTextGeneric + "\n" +
        OutputTextGenericDeprecated + "\n" +
        OutputTextGenericException + "\n" +
        OutputTextGenericExceptionDeprecated + "\n" +
        OutputTextAll;
    
    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter + OutputText, true);
    Debug_Print("... Done.");
}

function Test_SaveScanCodeTextFileEx7_Core(
    OutputFilePath, DirPath) {
    
    var OutputCounter = {};
    OutputCounter.Normal = 0;
    OutputCounter.Exception = 0;
    OutputCounter.Spdx = 0;
    OutputCounter.SpdxException = 0;
    OutputCounter.Generic = 0;
    //OutputCounter.GenericException = 0;
    
    OutputCounter.All = 0;
    
    OutputCounter.Normal =
        "### Normal, Normal (Deprecated)\n\n" +
        "| Version | Count | Count (Dep.) |\n" +
        "|---------|-------|--------------|\n";
        
    OutputCounter.Exception =
        "### Exception, Exception (Deprecated)\n\n" +
        "| Version | Count | Count (Dep.) |\n" +
        "|---------|-------|--------------|\n";
        
    OutputCounter.Spdx =
        "### Spdx, Spdx (Deprecated)\n\n" +
        "| Version | Count | Count (Dep.) |\n" +
        "|---------|-------|--------------|\n";
        
    OutputCounter.SpdxException =
        "### Spdx Exception, Spdx Exception (Deprecated)\n\n" +
        "| Version | Count | Count (Dep.) |\n" +
        "|---------|-------|--------------|\n";
        
    OutputCounter.Generic =
        "### Generic, Generic (Deprecated)\n\n" +
        "| Version | Count | Count (Dep.) | Count (Exc.) | Count (Exc. Dep.) |\n" +
        "|---------|-------|--------------|--------------|-------------------|\n";
        //"| Version | Count | Count (Dep.) |\n" +
        //"|---------|-------|--------------|\n";
        
    //OutputCounter.GenericException =
    //    "### Generic Exception, Generic Exception (Deprecated)\n\n" +
    //    "| Version | Count | Count (Dep.) |\n" +
    //    "|---------|-------|--------------|\n";
        
    OutputCounter.All =
        "### All\n\n" +
        "| Version | Total |   | Nml. | Nml. (Dep.) | Nml. Exc. | Nml. Exc. (Dep.) | Spdx | Spdx (Dep.) | Spdx Exc. | Spdx Exc. (Dep.) | Gen. | Gen. (Dep.) | Gen. Exc. | Gen. Exc. (Dep.) |\n" +
        "|---------|-------|---|------|-------------|-----------|------------------|------|-------------|-----------|------------------|------|-------------|-----------|------------------|\n";
    
    ScanCodeToolkitVersions_GetCounter(
        OutputCounter,
        //OutputCounterNormal,
        //OutputCounterException,
        //OutputCounterSpdx,
        //OutputCounterSpdxException,
        //OutputCounterGeneric,
        //OutputCounterAll,
        DirPath);
        //OutputCounterGenericException,

    var OutputCounter_;
    OutputCounter_ =
        OutputCounter.Normal + "\n" +
        OutputCounter.Exception + "\n" +
        OutputCounter.Spdx + "\n" +
        OutputCounter.SpdxException + "\n" +
        OutputCounter.Generic + "\n" +
        OutputCounter.All;
        //OutputCounter.GenericException + "\n" +

    MADODBStream_WriteTextFileUTF8(OutputFilePath, OutputCounter_, true);
    Debug_Print("... Done.");
}

function ScanCodeToolkitVersions_GetCounter(
    OutputCounter,
    //OutputCounterNormal,
    //OutputCounterException,
    //OutputCounterSpdx,
    //OutputCounterSpdxException,
    //OutputCounterGeneric,
    //OutputCounterAll,
    DirPath) {
    //OutputCounterGenericException,

    var ScanCodeToolkitVersions_FileName1 = "scancode-toolkit-versions1.txt";
    var ScanCodeToolkitVersions_FileName2 = "scancode-toolkit-versions2.txt";
    var ScanCodeToolkitVersions_FileName3 = "scancode-toolkit-versions3.txt";
    
    var ScanCodeToolkitVersions_FilePath1;
    var ScanCodeToolkitVersions_FilePath2;
    var ScanCodeToolkitVersions_FilePath3;
    ScanCodeToolkitVersions_FilePath1 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName1);
    ScanCodeToolkitVersions_FilePath2 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName2);
    ScanCodeToolkitVersions_FilePath3 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName3);
    
    var ScanCodeToolkitVersions_Text1;
    var ScanCodeToolkitVersions_Text2;
    var ScanCodeToolkitVersions_Text3;
    ScanCodeToolkitVersions_Text1 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath1);
    ScanCodeToolkitVersions_Text2 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath2);
    ScanCodeToolkitVersions_Text3 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath3);
    
    var ScanCodeToolkitVersions1;
    var ScanCodeToolkitVersions2;
    var ScanCodeToolkitVersions3;
    ScanCodeToolkitVersions1 = Split(ScanCodeToolkitVersions_Text1, "\n");
    ScanCodeToolkitVersions2 = Split(ScanCodeToolkitVersions_Text2, "\n");
    ScanCodeToolkitVersions3 = Split(ScanCodeToolkitVersions_Text3, "\n");
    
    var LB3;
    var UB3;
    LB3 = LBound(ScanCodeToolkitVersions3);
    UB3 = UBound(ScanCodeToolkitVersions3);
    
    var Index3;
    for (Index3 = LB3; Index3 <= UB3; Index3 ++) {
        Debug_Print(CStr(ScanCodeToolkitVersions3[Index3]));
        ScanCodeToolkitVersions_GetCounter_Core(
            OutputCounter,
            //OutputCounterNormal,
            //OutputCounterException,
            //OutputCounterSpdx,
            //OutputCounterSpdxException,
            //OutputCounterGeneric,
            //OutputCounterAll,
            DirPath,
            CStr(ScanCodeToolkitVersions3[Index3]),
            "LICENSE",
            true);
            //OutputCounterGenericException,

    }
    
    var LB2;
    var UB2;
    LB2 = LBound(ScanCodeToolkitVersions2);
    UB2 = UBound(ScanCodeToolkitVersions2);
    
    var Index2;
    for (Index2 = LB2; Index2 <= UB2; Index2 ++) {
        Debug_Print(CStr(ScanCodeToolkitVersions2[Index2]));
        ScanCodeToolkitVersions_GetCounter_Core(
            OutputCounter,
            //OutputCounterNormal,
            //OutputCounterException,
            //OutputCounterSpdx,
            //OutputCounterSpdxException,
            //OutputCounterGeneric,
            //OutputCounterAll,
            DirPath,
            CStr(ScanCodeToolkitVersions2[Index2]),
            "yml",
            true);
            //OutputCounterGenericException,

    }
    
    var LB1;
    var UB1;
    LB1 = LBound(ScanCodeToolkitVersions1);
    UB1 = UBound(ScanCodeToolkitVersions1);
    
    var Index1;
    for (Index1 = LB1; Index1 <= UB1; Index1 ++) {
        Debug_Print(CStr(ScanCodeToolkitVersions1[Index1]));
        ScanCodeToolkitVersions_GetCounter_Core(
            OutputCounter,
            //OutputCounterNormal,
            //OutputCounterException,
            //OutputCounterSpdx,
            //OutputCounterSpdxException,
            //OutputCounterGeneric,
            //OutputCounterAll,
            DirPath,
            CStr(ScanCodeToolkitVersions1[Index1]),
            "yml",
            false);
            //OutputCounterGenericException,

    }
}

function ScanCodeToolkitVersions_GetCounter_Core(
    OutputCounter,
    //OutputCounterNormal,
    //OutputCounterException,
    //OutputCounterSpdx,
    //OutputCounterSpdxException,
    //OutputCounterGeneric,
    //OutputCounterAll,
    DirPath,
    Version,
    Extension,
    bSpdx) {
    //OutputCounterGenericException,

    if (Version == "") return;
    
    var DirName_Prefix = "scancode-licenses-";
    
    var VersionName;
    VersionName = Version.replace(/v/, "");
    
    var VersionDirName;
    VersionDirName = DirName_Prefix + VersionName;
    
    var VersionDirPath;
    VersionDirPath = GetFileSystemObject().BuildPath(DirPath, VersionDirName);
    
    //Debug_Print(VersionDirPath);
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(VersionDirPath);
    
    var CounterNormal;
    var CounterNormalDeprecated;
    var CounterException;
    var CounterExceptionDeprecated;
    var CounterSpdx;
    var CounterSpdxDeprecated;
    var CounterSpdxException;
    var CounterSpdxExceptionDeprecated;
    var CounterGeneric;
    var CounterGenericDeprecated;
    var CounterGenericException;
    var CounterGenericExceptionDeprecated;
    
    CounterNormal = 0;
    CounterNormalDeprecated = 0;
    CounterException = 0;
    CounterExceptionDeprecated = 0;
    CounterSpdx = 0;
    CounterSpdxDeprecated = 0;
    CounterSpdxException = 0;
    CounterSpdxExceptionDeprecated = 0;
    CounterGeneric = 0;
    CounterGenericDeprecated = 0;
    CounterGenericException = 0;
    CounterGenericExceptionDeprecated = 0;
    
    var CounterAll;
    
    CounterAll = 0;
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == Extension) {
            //Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var IsException;
            var IsDeprecated;
            var IsGeneric;
            var IsSpdx;
            
            IsException = (InStr(FileText, "is_exception: yes") > 0);
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            IsGeneric = (InStr(FileText, "is_generic: yes") > 0);
            IsSpdx = ! (InStr(FileText, "spdx_license_key: LicenseRef-scancode-") > 0);
            
            
            CounterAll = CounterAll + 1;
            
            if (IsGeneric) {
                if (IsException) {
                    if (IsDeprecated) {
                        CounterGenericExceptionDeprecated = CounterGenericExceptionDeprecated + 1;
                        
                    } else {
                        CounterGenericException = CounterGenericException + 1;
                        
                    }
                } else {
                    if (IsDeprecated) {
                        CounterGenericDeprecated = CounterGenericDeprecated + 1;
                        
                    } else {
                        CounterGeneric = CounterGeneric + 1;
                        
                    }
                }
            } else if (IsException) {
                if (IsDeprecated) {
                    if (IsSpdx && bSpdx) {
                        CounterSpdxExceptionDeprecated = CounterSpdxExceptionDeprecated + 1;
                        
                    } else {
                        CounterExceptionDeprecated = CounterExceptionDeprecated + 1;
                        
                    }
                } else {
                    if (IsSpdx && bSpdx) {
                        CounterSpdxException = CounterSpdxException + 1;
                        
                    } else {
                        CounterException = CounterException + 1;
                        
                    }
                }
            } else {
                if (IsDeprecated) {
                    if (IsSpdx && bSpdx) {
                        CounterSpdxDeprecated = CounterSpdxDeprecated + 1;
                        
                    } else {
                        CounterNormalDeprecated = CounterNormalDeprecated + 1;
                        
                    }
                } else {
                    if (IsSpdx && bSpdx) {
                        CounterSpdx = CounterSpdx + 1;
                        
                    } else {
                        CounterNormal = CounterNormal + 1;
                        
                    }
                }
            }
        }
    }
    
    OutputCounter.Normal = OutputCounter.Normal + "| " + VersionName + " | " + CStr(CounterNormal) + " | " + CStr(CounterNormalDeprecated) + " |\n";
    OutputCounter.Exception = OutputCounter.Exception + "| " + VersionName + " | " + CStr(CounterException) + " | " + CStr(CounterExceptionDeprecated) + " |\n";
    OutputCounter.Spdx = OutputCounter.Spdx + "| " + VersionName + " | " + CStr(CounterSpdx) + " | " + CStr(CounterSpdxDeprecated) + " |\n";
    OutputCounter.SpdxException = OutputCounter.SpdxException + "| " + VersionName + " | " + CStr(CounterSpdxException) + " | " + CStr(CounterSpdxExceptionDeprecated) + " |\n";
    //OutputCounter.Generic = OutputCounter.Generic + "| " + VersionName + " | " + CStr(CounterGeneric) + " | " + CStr(CounterGenericDeprecated) + " |\n";
    OutputCounter.Generic = OutputCounter.Generic + "| " + VersionName + " | " + CStr(CounterGeneric) + " | " + CStr(CounterGenericDeprecated) + " | " + CStr(CounterGenericException) + " | " + CStr(CounterGenericExceptionDeprecated) + " |\n";
    //OutputCounter.GenericException = OutputCounter.GenericException + "| " + VersionName + " | " + CStr(CounterGenericException) + " | " + CStr(CounterGenericExceptionDeprecated) + " |\n";
    
    OutputCounter.All = OutputCounter.All + "| " + VersionName + " | " + CStr(CounterAll) + " | | " +
        CStr(CounterNormal) + " | " + CStr(CounterNormalDeprecated) + " | " +
        CStr(CounterException) + " | " + CStr(CounterExceptionDeprecated) + " | " +
        CStr(CounterSpdx) + " | " + CStr(CounterSpdxDeprecated) + " | " +
        CStr(CounterSpdxException) + " | " + CStr(CounterSpdxExceptionDeprecated) + " | " +
        CStr(CounterGeneric) + " | " + CStr(CounterGenericDeprecated) + " | " +
        CStr(CounterGenericException) + " | " + CStr(CounterGenericExceptionDeprecated) + " |\n";
}

function ScanCodeToolkitVersions_GetKeyToReleaseDic(
    KeyToReleaseDic, KeyToDeprecatedDic, DirPath) {
    
    var ScanCodeToolkitVersions_FileName1 = "scancode-toolkit-versions1.txt";
    var ScanCodeToolkitVersions_FileName2 = "scancode-toolkit-versions2.txt";
    var ScanCodeToolkitVersions_FileName3 = "scancode-toolkit-versions3.txt";
    
    var ScanCodeToolkitVersions_FilePath1;
    var ScanCodeToolkitVersions_FilePath2;
    var ScanCodeToolkitVersions_FilePath3;
    ScanCodeToolkitVersions_FilePath1 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName1);
    ScanCodeToolkitVersions_FilePath2 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName2);
    ScanCodeToolkitVersions_FilePath3 = GetFileSystemObject().BuildPath(DirPath, ScanCodeToolkitVersions_FileName3);
    
    var ScanCodeToolkitVersions_Text1;
    var ScanCodeToolkitVersions_Text2;
    var ScanCodeToolkitVersions_Text3;
    ScanCodeToolkitVersions_Text1 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath1);
    ScanCodeToolkitVersions_Text2 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath2);
    ScanCodeToolkitVersions_Text3 = MADODBStream_ReadTextFileUTF8(ScanCodeToolkitVersions_FilePath3);
    
    var ScanCodeToolkitVersions1;
    var ScanCodeToolkitVersions2;
    var ScanCodeToolkitVersions3;
    ScanCodeToolkitVersions1 = Split(ScanCodeToolkitVersions_Text1, "\n");
    ScanCodeToolkitVersions2 = Split(ScanCodeToolkitVersions_Text2, "\n");
    ScanCodeToolkitVersions3 = Split(ScanCodeToolkitVersions_Text3, "\n");
    
    var LB1;
    var UB1;
    LB1 = LBound(ScanCodeToolkitVersions1);
    UB1 = UBound(ScanCodeToolkitVersions1);
    
    var Index1;
    for (Index1 = UB1; Index1 >= LB1; Index1 --) {
        Debug_Print(CStr(ScanCodeToolkitVersions1[Index1]));
        ScanCodeToolkitVersions_GetKeyToReleaseDic_Core(KeyToReleaseDic, KeyToDeprecatedDic, DirPath, CStr(ScanCodeToolkitVersions1[Index1]), "yml");
    }
    
    var LB2;
    var UB2;
    LB2 = LBound(ScanCodeToolkitVersions2);
    UB2 = UBound(ScanCodeToolkitVersions2);
    
    var Index2;
    for (Index2 = UB2; Index2 >= LB2; Index2 --) {
        Debug_Print(CStr(ScanCodeToolkitVersions2[Index2]));
        ScanCodeToolkitVersions_GetKeyToReleaseDic_Core(KeyToReleaseDic, KeyToDeprecatedDic, DirPath, CStr(ScanCodeToolkitVersions2[Index2]), "yml");
    }
    
    var LB3;
    var UB3;
    LB3 = LBound(ScanCodeToolkitVersions3);
    UB3 = UBound(ScanCodeToolkitVersions3);
    
    var Index3;
    for (Index3 = UB3; Index3 >= LB3; Index3 --) {
        Debug_Print(CStr(ScanCodeToolkitVersions3[Index3]));
        ScanCodeToolkitVersions_GetKeyToReleaseDic_Core(KeyToReleaseDic, KeyToDeprecatedDic, DirPath, CStr(ScanCodeToolkitVersions3[Index3]), "LICENSE");
    }
    
    var LatestVersion;
    LatestVersion = ScanCodeToolkitVersions3[LB3].replace(/v/, "");
    
    return LatestVersion;
}

function ScanCodeToolkitVersions_GetKeyToReleaseDic_Core(
    KeyToReleaseDic, KeyToDeprecatedDic, DirPath, Version, Extension) {
    
    if (Version == "") return;
    
    var DirName_Prefix = "scancode-licenses-";
    
    var VersionName;
    VersionName = Version.replace(/v/, "");
    
    var VersionDirName;
    VersionDirName = DirName_Prefix + VersionName;
    
    var VersionDirPath;
    VersionDirPath = GetFileSystemObject().BuildPath(DirPath, VersionDirName);
    
    //Debug_Print(VersionDirPath);
    
    var Folder;
    Folder = GetFileSystemObject().GetFolder(VersionDirPath);
    
    var Files = new Enumerator(Folder.Files);
    for (; !Files.atEnd(); Files.moveNext()) {
        var File = Files.item();
        if (GetFileSystemObject().GetExtensionName(File.Path) == Extension) {
            //Debug_Print(File.Name);
            
            var FileText;
            FileText = MADODBStream_ReadTextFileUTF8(File.Path);
            //Debug_Print(FileText);
            
            var Key;
            var IsDeprecated;
            Key = GetItem(FileText, "key: ");
            IsDeprecated = (InStr(FileText, "is_deprecated: yes") > 0);
            
            //=== KeyToReleaseDic ===
            if (! KeyToReleaseDic.Exists(Key)) {
                KeyToReleaseDic.Add(Key, VersionName);
            }
            
            if (IsDeprecated) {
                //=== KeyToDeprecatedDic ===
                if (! KeyToDeprecatedDic.Exists(Key)) {
                    KeyToDeprecatedDic.Add(Key, VersionName);
                }
            }
        }
    }
}

function TagExists(FileText, Tag) {
    return (InStr(FileText, Tag) > 0);
}

function GetItem(FileText, Tag) {
    var Item;
    
    var TagIndex;
    TagIndex = InStr(FileText, Tag);
    
    if (! (TagIndex > 0)) return "";
    
    var LfIndex;
    LfIndex = InStr2(TagIndex + Len(Tag), FileText, "\n");
    
    if (! (LfIndex > 0)) return "";
    
    Item = Trim(Mid(FileText, TagIndex + Len(Tag), LfIndex - (TagIndex + Len(Tag))));
    
    return Item;
}

function GetLicenseText(FileText) {
    var Tag;
    Tag = "---\n\n";
    
    var TagIndex;
    TagIndex = InStr(FileText, Tag);
    
    if (! (TagIndex > 0)) return "";
    
    var LicenseText;
    LicenseText = Right(FileText, Len(FileText) - (TagIndex + Len(Tag) - 1));
    
    return LicenseText;
}

function GetLinkFromShortNameAndKey(ShortName, Key) {
    if (ShortName == "") return "";
    if (Key == "") return ShortName;
    return "[" + ShortName + "]" +
        "(https://scancode-licensedb.aboutcode.org/" + Key + ".html)";
}

function GetLinksFromReplacedBy(ReplacedBy) {
    if (ReplacedBy == "") return "";
    
    var ReplacedByArray;
    ReplacedByArray = Split(ReplacedBy, " ");
    
    var Link1;
    var Link2;
    var Link3;
    
    switch (ReplacedByArray.length) {
    case 3:
        switch (ReplacedByArray[1]) {
        case "AND":
        case "OR":
        case "WITH":
            Link1 = "[" + ReplacedByArray[0] + "]" +
                "(https://scancode-licensedb.aboutcode.org/" +
                ReplacedByArray[0] + ".html)";
            
            Link2 = "[" + ReplacedByArray[2] + "]" +
                "(https://scancode-licensedb.aboutcode.org/" +
                ReplacedByArray[2] + ".html)";
            
            return Link1 + " " + ReplacedByArray[1] + " " + Link2;
        }
        break;
    case 5:
        switch (ReplacedByArray[1]) {
        case "AND":
        case "OR":
        case "WITH":
        switch (ReplacedByArray[3]) {
        case "AND":
        case "OR":
        case "WITH":
            Link1 = "[" + ReplacedByArray[0] + "]" +
                "(https://scancode-licensedb.aboutcode.org/" +
                ReplacedByArray[0] + ".html)";
            
            Link2 = "[" + ReplacedByArray[2] + "]" +
                "(https://scancode-licensedb.aboutcode.org/" +
                ReplacedByArray[2] + ".html)";
            
            Link3 = "[" + ReplacedByArray[4] + "]" +
                "(https://scancode-licensedb.aboutcode.org/" +
                ReplacedByArray[4] + ".html)";
            
            return Link1 + " " + ReplacedByArray[1] + " " + Link2 +
                " " + ReplacedByArray[3] + " " + Link3;
        }
        }
        break;
    }
    
    return "[" + ReplacedBy + "]" +
        "(https://scancode-licensedb.aboutcode.org/" + ReplacedBy + ".html)";
}

function GetSpdxLinksFromReplacedBy(ReplacedBy, LicenseDic) {
    if (ReplacedBy == "") return "";
    
    var ReplacedByArray;
    ReplacedByArray = Split(ReplacedBy, " ");
    
    var SpdxLicenseKey1;
    var SpdxLicenseKey2;
    var SpdxLicenseKey3;
    
    var Link1;
    var Link2;
    var Link3;
    
    switch (ReplacedByArray.length) {
    case 3:
        switch (ReplacedByArray[1]) {
        case "AND":
        case "OR":
        case "WITH":
            SpdxLicenseKey1 = GetSpdxLicenseKeyFromKey(CStr(ReplacedByArray[0]), LicenseDic);
            SpdxLicenseKey2 = GetSpdxLicenseKeyFromKey(CStr(ReplacedByArray[2]), LicenseDic);
            
            Link1 = GetLinkFromSpdxLicenseKey(SpdxLicenseKey1);
            Link2 = GetLinkFromSpdxLicenseKey(SpdxLicenseKey2);
            
            return Link1 + " " + ReplacedByArray[1] + " " + Link2;
        }
        break;
    case 5:
        switch (ReplacedByArray[1]) {
        case "AND":
        case "OR":
        case "WITH":
        switch (ReplacedByArray[3]) {
        case "AND":
        case "OR":
        case "WITH":
            SpdxLicenseKey1 = GetSpdxLicenseKeyFromKey(CStr(ReplacedByArray[0]), LicenseDic);
            SpdxLicenseKey2 = GetSpdxLicenseKeyFromKey(CStr(ReplacedByArray[2]), LicenseDic);
            SpdxLicenseKey3 = GetSpdxLicenseKeyFromKey(CStr(ReplacedByArray[4]), LicenseDic);
            
            Link1 = GetLinkFromSpdxLicenseKey(SpdxLicenseKey1);
            Link2 = GetLinkFromSpdxLicenseKey(SpdxLicenseKey2);
            Link3 = GetLinkFromSpdxLicenseKey(SpdxLicenseKey3);
            
            return Link1 + " " + ReplacedByArray[1] + " " + Link2 +
                " " + ReplacedByArray[3] + " " + Link3;
        }
        }
        break;
    }
    
    var SpdxLicenseKey;
    SpdxLicenseKey = GetSpdxLicenseKeyFromKey(ReplacedBy, LicenseDic);
    
    return GetLinkFromSpdxLicenseKey(SpdxLicenseKey);
}

function GetSpdxLicenseKeyFromKey(Key, LicenseDic) {
    if (Key == "") return "";
    if (LicenseDic == null) return "";
    if (LicenseDic.Count == 0) return "";
    if (! LicenseDic.Exists(Key)) return "";
    
    var LicenseInfo;
    LicenseInfo = LicenseDic.Item(Key);
    
    return LicenseInfo.SpdxLicenseKey;
}

function GetLinkFromSpdxLicenseKey(SpdxLicenseKey) {
    if (SpdxLicenseKey == "") return "";
    
    if (Left(SpdxLicenseKey, Len("LicenseRef-scancode-")) == "LicenseRef-scancode-") {
        var Key;
        Key = Right(SpdxLicenseKey, Len(SpdxLicenseKey) - Len("LicenseRef-scancode-"));
        return "[(ScanCode) " + Key + "]" +
            "(https://scancode-licensedb.aboutcode.org/" + Key + ".html)";
    } else {
        return "[" + SpdxLicenseKey + "]" +
            "(https://spdx.org/licenses/" + SpdxLicenseKey + ".html)";
    }
}

//
// VBScript style functions
//

function CreateObject(Str1) {
    return new ActiveXObject(Str1);
}

function InStr(Str1, Str2) {
    // InStr: 1-based, indexOf: 0-based
    return Str1.indexOf(Str2) + 1;
}

function InStr2(Pos1, Str1, Str2) {
    // InStr: 1-based, Pos1: 1-based, indexOf: 0-based
    return Str1.indexOf(Str2, Pos1 - 1) + 1; 
}

function CStr(Value) {
    return Value.toString();
}
function LBound(Array1) {
    return 0;
}

function Left(Str1, Length) {
    return Str1.substr(0, Length);
}

function Len(Str1) {
    return Str1.length;
}

function Mid(Str1, Index, Length) {
    // Mid Index: 1-based, substr Index: 0-based
    return Str1.substr(Index - 1, Length);
}

function Right(Str1, Length) {
    var Index = Len(Str1) - Length + 1; // Mid Index: 1-based
    return Mid(Str1, Index, Length);
}

function Split(Str1, Str2) {
    return Str1.split(Str2);
}

function Trim(Str1) {
    //return Str1.trim();
    return Str1;
}

function UBound(Array1) {
    return Array1.length - 1;
}
