$ErrorActionPreference = 'Stop'
if ($env:OS -ne 'Windows_NT') { throw 'Use Windows PowerShell: this helper requires Windows DPAPI encryption.' }
$accountId = Read-Host 'Cloudflare account ID (32 hex characters)'
if ($accountId -notmatch '^[a-fA-F0-9]{32}$') { throw 'Invalid account ID' }
$token = Read-Host 'Read-only Cloudflare API token (hidden input; never paste it into chat)' -AsSecureString
if ($token.Length -eq 0) { throw 'Token is required' }
$credential = New-Object System.Management.Automation.PSCredential ($accountId, $token)
$credentialDirectory = Join-Path $env:LOCALAPPDATA 'Nestique'
New-Item -ItemType Directory -Force -Path $credentialDirectory | Out-Null
$credentialPath = Join-Path $credentialDirectory 'cloudflare-readonly.credential.xml'
$credential | Export-Clixml -LiteralPath $credentialPath
Write-Output "Saved encrypted credentials to $credentialPath for this Windows user and machine. No plaintext token was written."
