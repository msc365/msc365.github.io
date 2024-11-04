---
layout: post
title: Get Management Group Diagnostic Settings with REST API
author: Martin Swinkels
categories: [Azure, DevOps, Snippets]
tags: azure iac powershell
comments: false
---

There is currently not a direct way to validate if `Diagnostic Settings` is enabled to a `Management Group` in the _Azure Portal_, _Azure CLI_ or _PowerShell_. For anyone who needs to check or smoke test a deployment, I wrote the following PowerShell function that will make this REST API call using PowerShell.

> **Note**: Use `Account-AzConnect` to login to Azure before running this script.

To validate if `Diagnostic Settings` was correctly enabled for any specific management group, the following snippet (REST API GET call) can be used.

```powershell
<#
.SYNOPSIS
    Get the diagnostic settings for a management group.

.DESCRIPTION
    Gets the active management group diagnostic settings for the specified resource.

.PARAMETER ManagementGroupId
    Mandatory. The management group id.

.PARAMETER DiagnosticSettingName
    Mandatory. The diagnostic setting name.

.NOTES
    Use Account-AzConnect to login to Azure before running this script.

.EXAMPLE
    .\Get-ManagementGroupDiagnosticSettings.ps1 `
        -ManagementGroupId 'mg-msc-intermediate-sbx' `
        -DiagnosticSettingName 'tolaws'
#>
[CmdletBinding()]
param (
    [Parameter(Mandatory = $true)]
    [string] $ManagementGroupId,

    [Parameter(Mandatory = $true)]
    [string] $DiagnosticSettingName
)

begin {
    Write-Debug ('{0} entered' -f $MyInvocation.MyCommand)

    $token = (Get-AzAccessToken).Token
    $accessToken = 'Bearer {0}' -f $token
}

process {
    try {

        $uriFormat = 'https://management.azure.com/providers/microsoft.management/' +
            'managementGroups/{0}/providers/microsoft.insights/' +
            'diagnosticSettings/{1}?api-version=2020-01-01-preview'

        $uri = ($uriFormat -f
            [uri]::EscapeDataString($ManagementGroupId),
            [uri]::EscapeDataString($DiagnosticSettingName))

        $methodInput = @{
            Method  = 'GET'
            Uri     = $uri
            Headers = @{
                'Accept'        = 'application/json'
                'Authorization' = $accessToken
            }
        }

        $response = Invoke-RestMethod @methodInput
        return $response

    } catch {
        if ($_.Exception.Response.StatusCode -eq 'NotFound') {
            Write-Error ($_.Exception.Message)
            return
        } else {
            throw ('Error: {0}' -f $_)
        }
    }
}

end {
    Write-Debug ('{0} exited' -f $MyInvocation.MyCommand)
}

```

<!-- omit from toc -->
### Resources

- <a href="https://learn.microsoft.com/rest/api/monitor/management-group-diagnostic-settings/get" target="_blanc">Management Group Diagnostic Settings - Get</a>