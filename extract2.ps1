Add-Type -AssemblyName System.IO.Compression.FileSystem
function Read-Docx($path) {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($path)
    $entry = $zip.GetEntry("word/document.xml")
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $xml = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    $zip.Dispose()
    $text = $xml -replace '<[^>]+>', ' ' -replace '\s+', ' '
    return $text
}
Write-Host "--- PC4 ---"
Read-Docx "c:\Users\Rafia\Documents\Dev Projects\DesignProject\docs\PC4_Form_Documentation.docx"
Write-Host "
--- PC5 ---"
Read-Docx "c:\Users\Rafia\Documents\Dev Projects\DesignProject\docs\PC5_Form_Documentation.docx"
