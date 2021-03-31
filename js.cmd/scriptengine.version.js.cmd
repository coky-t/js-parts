@if (0)==(0) REM: %~nx0 & @cscript.exe //e:jscript //nologo "%~f0" %* & GOTO :EOF
@end

// https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/efy5bay1(v=vs.84)
// https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/x7cbaet3(v=vs.84)
// https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/wzaz8hhz(v=vs.84)
// https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/yftk84kt(v=vs.84)


WScript.Echo(
    ScriptEngine() + " " +
    ScriptEngineMajorVersion() + "." +
    ScriptEngineMinorVersion() + "." +
    ScriptEngineBuildVersion());
