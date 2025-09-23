---
layout: post
title: Generate secure passwords for Bicep deployments
author: Martin Swinkels
categories: [Azure, DevOps, Snippets]
tags: azure iac powershell
comments: false
---

When deploying Azure resources that require secure passwords (such as _Virtual Machines_, _SQL Databases_, or _Key Vault Secrets_), it's crucial to generate strong, random passwords programmatically. A custom PowerShell module could provide a function with secure password generation capabilities. In this post I will break down the usage of a custom PowerShell module named `idp.utilities`.

<div class="important">
    <p><strong>Note</strong>: Download the <a href="https://github.com/msc365/az-idp-utilities" target="_blank">idp-utilities</a> module on GitHub</p>
</div>

While Bicep files themselves do not directly execute PowerShell, you can leverage this PowerShell module in your deployment process to generate secure passwords and pass them as parameters to your Bicep templates. Here's how you can achieve this:

### 1. Import the PowerShell module

Ensure that you download the `idp.utilities` module and it is imported in your PowerShell session:

```powershell
# Import the latest version from a specified path
$name = 'idp.utilities'
$params = @{
    Name            = ('.\modules\{0}' -f $name)
    Force           = $true
}
Import-Module @params -ErrorAction Stop

# Verify the module is loaded
Get-Module -Name 'idp.utilities'
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

@description('The generated admin password.')
output adminPassword string = adminPassword

```

### 3. Generate a Secure Password and Deploy the Bicep File

Create a PowerShell deployment script named `Deploy-VirtualMachineWithSecurePassword.ps1` that uses the `idp.utilities` module to generate a secure password and then deploys the Bicep template.

<div class="important">
    <p><strong>Note</strong>: Use Connect-AzAccount to login to Azure before running this script.</p>
</div>

<div class="important">
    <p><strong>Note</strong>: The following script assumes that a resource group named 'rg-learn-vmwinsecpwd-tst' exists.</p>
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
    ResourceGroup = 'rg-learn-vmwinsecpwd-tst'
    TemplateFile  = 'main.bicep'
    # Use the plain text immediately and avoid storing it
    adminPassword = (ConvertFrom-SecureString -SecureString $secureString -AsPlainText)
}

# Deploy the Bicep file with Azure PowerShell
$deployment = New-AzResourceGroupDeployment @params -Verbose

# Clear the plain text
$params = $null

# Optional. Check your deployment output
```

### 4. Execute the PowerShell Deployment Script

Run the PowerShell script to deploy your Bicep file while leveraging the secure password generation from the `idp.utilities` module.

```powershell
.\Deploy-VirtualMachineWithSecurePassword.ps1
```

This approach combines the declarative power of Bicep with the secure password generation capabilities of the `idp.utilities` PowerShell module, ensuring your Azure deployments follow security best practices with integrated secret management from the start.
