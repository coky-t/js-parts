//
// Copyright (c) 2020,2022,2023 Koki Takeyama
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
// SPDX specification v2.3.0
// Annex B License matching guidelines and templates (Informative)
// https://spdx.github.io/spdx-spec/v2.3/license-matching-guidelines-and-templates/
//

function GetMatchingPattern(LicenseText) {
    var TempString;
    TempString = LicenseText.toLowerCase();
    
    // Escape Special Characters
    TempString = RegExpReplace(TempString, "\\(", "\\\(");
    TempString = RegExpReplace(TempString, "\\)", "\\\)");
    TempString = RegExpReplace(TempString, "\\[", "\\\[");
    TempString = RegExpReplace(TempString, "\\]", "\\\]");
    
    // B.9 Varietal word spelling
    TempString = RegExpReplaceWords(TempString);
    
    // B.4 Whitespace
    // B.7 Code Comment Indicators
    TempString = RegExpReplace(TempString, "\\W+", "\\s+");
    
    // B.6.2 Guideline: punctuation
    TempString = RegExpReplace(TempString, "\\.", "\\\.");
    
    // B.6.3 Guideline: hyphens, dashes
    // https://en.wikipedia.org/wiki/Dash
    // https://en.wikipedia.org/wiki/Hyphen
    TempString = RegExpReplace(TempString, "\\W+", "-");
    
    // B.6.4 Guideline: Quotes
    // https://en.wikipedia.org/wiki/Quotation_mark
    TempString = RegExpReplace(TempString, "\\W+", "['\"]");
    
    // B.14 HTTP Protocol
    TempString = RegExpReplace(TempString, "https?://", "https?://");
    
    return TempString;
}

function GetSimpleMatchingPattern(LicenseText) {
    var TempString;
    TempString = LicenseText.toLowerCase();
    
    // B.4 Whitespace
    // B.6 Punctuation
    // B.6.2 Guideline: punctuation
    // B.6.3 Guideline: hyphens, dashes
    // B.6.4 Guideline: Quotes
    // B.7 Code Comment Indicators
    TempString = RegExpReplace(TempString, "\\W*", "\\W+");
    
    // B.9 Varietal word spelling
    TempString = RegExpReplaceWords(TempString);
    
    // B.14 HTTP Protocol
    TempString = RegExpReplace(TempString, "https?", "https?");
    
    return TempString;
}

//
// B.9 Varietal word spelling
//
// | Word1 | Word2 | MatchingPattern |
// | --- | --- | --- |
// | acknowledgement | acknowledgment | acknowledge?ment |
// | analog | analogue | analog(?:ue)? |
// | and | & | (?:and|&) |
// | analyze | analyse | analy[zs]e |
// | artifact | artefact | art[ie]fact |
// | authorization | authorisation | authori[zs]ation |
// | authorized | authorised | authori[zs]ed |
// | caliber | calibre | calib(?:er|re) |
// | canceled | cancelled | cancell?ed |
// | capitalizations | capitalisations | capitali[zs]ations |
// | catalog | catalogue | catalog(?:ue)? |
// | categorize | categorise | categori[zs]e |
// | center | centre | cent(?:er|re) |
// | copyright holder | copyright owner | copyright\W+(?:hold|own)er |
// | emphasized | emphasised | emphasi[zs]ed |
// | favor | favour | favou?r |
// | favorite | favourite | favou?rite |
// | fulfill | fulfil | fulfill? |
// | fulfillment | fulfilment | fulfill?ment |
// | Initialize | initialise | initiali[zs]e |
// | judgement | judgment | judge?ment |
// | labeling | labelling | labell?ing |
// | labor | labour | labou?r |
// | license | licence | licen[sc]e |
// | maximize | maximise | maximi[zs]e |
// | merchantability | merchantibility | merchant[ai]bility |
// | modeled | modelled | modell?ed |
// | modeling | modelling | modell?ing |
// | noncommercial | non-commercial | non-?commercial |
// | offense | offence | offen[sc]e |
// | optimize | optimise | optimi[zs]e |
// | organization | organisation | organi[zs]ation |
// | organize | organise | organi[zs]e |
// | percent | per cent | per\s*cent |
// | practice | practise | practi[cs]e |
// | program | programme | program(?:me)? |
// | realize | realise | reali[zs]e |
// | Recognize | recognise | recogni[zs]e |
// | signaling | signalling | signall?ing |
// | sublicense | sub-license | sub(?: |-)?licen[sc]e |
// | sub-license | sub license | sub(?: |-)?licen[sc]e |
// | sublicense | sub license | sub(?: |-)?licen[sc]e |
// | utilization | utilisation | utili[zs]ation |
// | while | whilst | whil(?:e|st) |
// | wilfull | wilful | wilfull? |
//

function RegExpReplaceWords(SourceString) {
    var ResultString;
    ResultString = SourceString;
    
    var PatternAndReplaceStringArray;
    PatternAndReplaceStringArray = new Array(
        "sub\\W*licen[sc]e",
        "acknowledge?ment", "analog(?:ue)?", "(?:and|&)", "analy[zs]e",
        "art[ie]fact", "authori[zs]ation", "authori[zs]ed",
        "calib(?:er|re)", "cancell?ed", "capitali[zs]ations",
        "catalog(?:ue)?", "categori[zs]e", "cent(?:er|re)",
        "copyright\\W+(?:hold|own)er", "emphasi[zs]ed",
        "favou?r", "favou?rite", "fulfill?",
        "fulfill?ment", "initiali[zs]e", "judge?ment",
        "labell?ing", "labou?r", "licen[sc]e",
        "maximi[zs]e", "merchant[ai]bility", "modell?ed", "modell?ing",
        "non\\W*commercial", "offen[sc]e", "optimi[zs]e",
        "organi[zs]ation", "organi[zs]e",
        "per\\s*cent", "practi[cs]e", "program(?:me)?",
        "reali[zs]e", "recogni[zs]e", "signall?ing",
        "utili[zs]ation", "whil(?:e|st)", "wilfull?");
    
    var LB;
    var UB;
    LB = 0;
    UB = PatternAndReplaceStringArray.length - 1;
    
    var Index;
    for (Index = LB; Index <= UB; Index++) {
        var PatternAndReplaceString;
        PatternAndReplaceString = PatternAndReplaceStringArray[Index];
        
        ResultString =
            RegExpReplace(
                ResultString,
                PatternAndReplaceString,
                PatternAndReplaceString);
    }
    
    return ResultString;
}

function RegExpReplace(
    SourceString,
    ReplaceString,
    Pattern) {
    
    var re = new RegExp(Pattern, "ig"); // B.5 Capitalization
    return SourceString.replace(re, ReplaceString);
}
