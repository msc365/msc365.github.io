---
layout: post
title: Using a custom PowerShell module to generate Secure Passwords for Bicep deployments
author: Martin Swinkels
categories: [Azure, DevOps, Snippets]
tags: azure iac powershell
comments: false
---

When deploying Azure resources that require secure passwords (such as _Virtual Machines_, _SQL Databases_, or _Key Vault Secrets_), it's crucial to generate strong, random passwords programmatically. The `idp.utilities` PowerShell sample module provides a function with secure password generation capabilities.

<div class="important">
    <p><strong>Note</strong>: Download the [idp-utilities](https://github.com/msc365/az-idp-utilities) module on GitHub.</p>
</div>

While Bicep files themselves do not directly execute PowerShell, you can leverage a PowerShell module in your deployment process to generate secure passwords and pass them as parameters to your Bicep templates.

### Here's how you can achieve this

#### 1. Import the PowerShell module

Ensure that you download the `idp.utilities` module and imported in your PowerShell session:

```powershell
# Install the module from the specified path
$name = 'idp.utilities'
$version = '1.0.1'

$params = @{
    Name            = ('.\modules\{0}' -f $name)
    RequiredVersion = $version
    Force           = $true
}

Import-Module @params -ErrorAction Stop

# Verify the module is loaded
Get-Module -Name 'idp.utilities'
```

#### 2. Prepare a Bicep file with a Secure parameter

Create (or update) a Bicep file to accept a _secure password parameter_.

This example deploys a Virtual Machine based on the [AVM - Virtual Machine module](https://github.com/Azure/bicep-registry-modules/tree/main/avm/res/compute/virtual-machine#example-5-using-only-defaults-for-windows) with the minimum set of required parameters.

```bicep
// ---------- //
// PARAMETERS //
// ---------- //

@description('Required. When specifying a Windows Virtual Machine, this value should be passed.')
@secure()
param adminPassword string

// --------- //
// RESOURCES //
// --------- //

module virtualMachine 'br/public:avm/res/compute/virtual-machine:0.20.0' = {
  name: 'virtualMachineDeployment'
  params: {
    adminUsername: 'localAdminUser'
    adminPassword: adminPassword
    availabilityZone: -1
    imageReference: {
      offer: 'WindowsServer'
      publisher: 'MicrosoftWindowsServer'
      sku: '2022-datacenter-azure-edition'
      version: 'latest'
    }
    name: 'cvmwinmin'
    nicConfigurations: [
      {
        ipConfigurations: [
          {
            name: 'ipconfig01'
            subnetResourceId: '<subnetResourceId>'
          }
        ]
        nicSuffix: '-nic-01'
      }
    ]
    osDisk: {
      caching: 'ReadWrite'
      diskSizeGB: 128
      managedDisk: {
        storageAccountType: 'Premium_LRS'
      }
    }
    osType: 'Windows'
    vmSize: 'Standard_D2s_v3'
  }
}
```

#### 3. Generate a Secure Password and Deploy the Bicep File

Create a PowerShell deployment script named `Deploy-VirtualMachineWithSecurePassword.ps1` that uses the `idp.utilities` module to generate a secure password and then deploys the Bicep template.

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
$deploymentName = -join ('dep-vmwin-{0}' -f (Get-Date -Format 'yyyyMMdd-hhmmss'))[0..63]

$params = @{
    Name          = $deploymentName
    ResourceGroup = 'rg-learn-vmwin'
    TemplateFile  = 'main.bicep'
    WhatIf        = $true
    adminPassword = (ConvertFrom-SecureString -SecureString $secureString -AsPlainText)
}

# Deploy the Bicep file with Azure PowerShell
$deployment = New-AzResourceGroupDeployment @params -Verbose

```

#### 4. Execute the PowerShell Deployment Script

Run the PowerShell script to deploy your Bicep file while leveraging the secure password generation from the `idp.utilities` module.

```powershell
.\Deploy-VirtualMachineWithSecurePassword.ps1
```

This approach combines the declarative power of Bicep with the secure password generation capabilities of the `idp.utilities` PowerShell module, ensuring your Azure deployments follow security best practices with integrated secret management from the start.
