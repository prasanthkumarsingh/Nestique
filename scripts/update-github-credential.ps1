$ErrorActionPreference = 'Stop'
$secureToken = Read-Host 'Fresh GitHub token (hidden input; do not paste it into chat)' -AsSecureString
$credential = New-Object System.Management.Automation.PSCredential ('token', $secureToken)
$tokenValue = $credential.GetNetworkCredential().Password
try {
    $headers = @{ Authorization = "Bearer $tokenValue"; Accept = 'application/vnd.github+json'; 'User-Agent' = 'Nestique-credential-setup' }
    try {
        $identity = Invoke-RestMethod -Uri 'https://api.github.com/user' -Headers $headers
        $repository = Invoke-RestMethod -Uri 'https://api.github.com/repos/prasanthkumarsingh/Nestique' -Headers $headers
        $scopeResponse = Invoke-WebRequest -UseBasicParsing -Uri 'https://api.github.com/user' -Headers $headers
    } catch { throw 'GitHub authentication or repository verification failed. No credential was saved.' }
    if (-not $repository.permissions.push) { throw 'This token does not have push access to Nestique. No credential was saved.' }
    if ($tokenValue.StartsWith('ghp_') -and (($scopeResponse.Headers['X-OAuth-Scopes'] -split ',\s*') -notcontains 'workflow')) {
        throw 'The classic token needs workflow scope to push the workflow file. No credential was saved.'
    }
    $approve = New-Object System.Diagnostics.ProcessStartInfo
    $approve.FileName = 'git'
    $approve.Arguments = 'credential approve'
    $approve.UseShellExecute = $false
    $approve.CreateNoWindow = $true
    $approve.RedirectStandardInput = $true
    $approve.RedirectStandardOutput = $true
    $approve.RedirectStandardError = $true
    $process = New-Object System.Diagnostics.Process
    $process.StartInfo = $approve
    $null = $process.Start()
    $process.StandardInput.Write("protocol=https`nhost=github.com`nusername=$($identity.login)`npassword=$tokenValue`n`n")
    $process.StandardInput.Close()
    $process.WaitForExit()
    if ($process.ExitCode -ne 0) { throw 'Git Credential Manager could not save the credential.' }
    Write-Output "GitHub credential saved securely for $($identity.login). Nothing was pushed or deployed."
} finally {
    $tokenValue = $null
    $headers = $null
    $credential = $null
    $secureToken = $null
}
