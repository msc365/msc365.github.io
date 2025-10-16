---
layout: post
title: Generate secure passwords for Bicep deployments
author: Martin Swinkels
categories: [Azure, DevOps, Snippets]
tags: azure iac powershell
image: https://msc365.eu/assets/img/post-generate-secure-passwords-for-bicep-deployments.png
comments: false
---

When deploying Azure resources that require instant secure password generation (such as _Virtual Machines_, _SQL Databases_, or _Key Vault Secrets_), it's crucial to generate strong, random passwords programmatically. A custom PowerShell module could provide a function with secure password generation capabilities. In this post I will break down the usage of a custom PowerShell module named `MSc365.Idp.Toolbox`.

<div class="important">
    <p><strong>Note</strong>: Download the <a href="https://github.com/msc365/az-idp-toolbox" target="_blank">MSc365.Idp.Toolbox</a> module on GitHub</p>
</div>

While Bicep files themselves do not directly execute PowerShell, you can leverage this PowerShell module in your deployment process to generate secure passwords and pass them as parameters to your Bicep templates. Here's how you can achieve this:

### 1. Import the PowerShell module

Ensure that you download the `MSc365.Idp.Toolbox` module and it is imported into your PowerShell session:

```powershell
# Import the latest version from a specified path
$name = 'MSc365.Idp.Toolbox'
$params = @{
    Name            = ('.\src\{0}' -f $name)
    Force           = $true
}
Import-Module @params -ErrorAction Stop

# Verify the module is loaded
Get-Module -Name 'MSc365.Idp.Toolbox'
```

### 2. Prepare a Bicep file with a Secure parameter

Create (or update) a Bicep file to accept a _secure password parameter_.

This example demonstrates secure parameter handling in Bicep. For simplicity this template outputs the `adminPassword`, which should never be done in production environments.

```bicep
// ---------- //
// PARAMETERS //
// ---------- //

@description('Required. This value should be passed.')
@secure()
param adminPassword string

// ------- //
// OUTPUTS //
// ------- //

#disable-next-line outputs-should-not-contain-secrets // Only for test purpose
output adminPassword string = adminPassword

```

### 3. Generate a Secure Password and Deploy the Bicep File

Create a PowerShell deployment script named `Deploy-WithSecurePassword.ps1` that uses the `MSc365.Idp.Toolbox` module to generate a secure password and then deploys the Bicep template.

<div class="important">
    <p><strong>Note</strong>: Use Connect-AzAccount to login to Azure before running this script.</p>
</div>

<div class="tip">
    <p><strong>Tip</strong>: For production deployments, consider storing the generated password in Azure Key Vault for enhanced security and centralized secret management. Implementing Key Vault integration is beyond the scope of this example.</p>
</div>

```powershell
# Generate a default password as secure string
$secureString = New-PasswordAsSecureString

# Define deployment parameters
$params = @{
    Name          = 'dep-vmwinsecpwd-tst-123456'
    Location      = 'westeurope'
    TemplateFile  = 'main.bicep'
    adminPassword = $secureString
}

# Deploy the Bicep file with Azure PowerShell
$deployment = New-AzDeployment @params -Verbose

# Optional. Check your deployment output
$deployment.outputs.adminPassword
```

### 4. Execute the PowerShell Deployment Script

Run the PowerShell script to deploy your Bicep file while leveraging the secure password generation from the `MSc365.Idp.Toolbox` module.

```powershell
.\Deploy-WithSecurePassword.ps1
```

### Conclusion

This approach combines the declarative power of Bicep with the secure password generation capabilities of the `MSc365.Idp.Toolbox` PowerShell module, ensuring your Azure deployments follow security best practices with integrated secret management from the start.
