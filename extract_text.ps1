
$xml_selection = [IO.File]::ReadAllText('temp_selection\word\document.xml')
$text_selection = $xml_selection -replace '<[^>]+>', ' '
$text_selection | Out-File 'selection_text.txt'

$xml_rat = [IO.File]::ReadAllText('temp_rat\word\document.xml')
$text_rat = $xml_rat -replace '<[^>]+>', ' '
$text_rat | Out-File 'rat_text.txt'
