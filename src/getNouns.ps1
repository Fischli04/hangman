$inputFile = "P:\GritecWeb\GritecWebNico\src\Project\Hangman\src\words.txt"
$outputFile = "P:\GritecWeb\GritecWebNico\src\Project\Hangman\src\outputfile.txt"

# Read the input file
$lines = Get-Content $inputFile

"[" > $outputFile;
# Iterate through each line of the input file
foreach ($line in $lines) {
    # Check if the first character of the line is uppercase and doesn't contain ä,ö,ü
    if ($line[0] -ceq $line.ToUpper()[0] -and $line -notmatch "[äöüÄÖÜß ]" -and $line.Length -gt 5 -and $line.Length -lt 13 -and !$line.EndsWith("en") -and !$line.EndsWith("s")) {
        # Write the line to the output file
        Add-Content $outputFile ("`"" + $line + "`",")
    }
}
Add-Content $outputFile "]"