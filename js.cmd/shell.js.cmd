@if (0)==(0) REM: %~nx0 & @cscript.exe //e:jscript //nologo "%~f0" %* & GOTO :EOF
@end

while (true) {
    WScript.StdOut.Write("js>");
    var line = WScript.StdIn.ReadLine();
    //if (line.trim().toLowerCase() == "exit") break;
    if (line.replace(/^[\s]+/,'').replace(/[\s]+$/,'').toLowerCase() == "exit") break;
    exec(line);
}

function exec(line) {
    try {
        eval(line);
    } catch (e) {
        WScript.StdOut.WriteLine(e.message);
    }
}
