---
layout: post
title: Azure resource naming convention with Bicep Imports
author: Martin Swinkels
categories: [Azure, Snippets]
tags: automation azure bicep iac
comments: true
---

The custom <i>user-defined functions</i> discussed in this article map _abbreviations_ to both _resource_ and resource _provider namespaces_. These functions adhere to the [Abbreviation recommendations for Azure resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations). By following these guidelines, you can ensure consistency and clarity in your Azure resource naming conventions, which is crucial for maintaining organized and easily manageable cloud environments.

### Introduction

In the world of Azure infrastructure as code, Bicep has emerged as a powerful language for defining and deploying resources. One of the key advantages of Bicep is its ability to create reusable modules, which can significantly streamline your deployment processes. In this article, we will explore user-defined functions that you can incorporate into your custom Bicep modules to enhance their functionality and maintainability.

User-defined functions in Bicep allow you to encapsulate logic that can be reused across multiple modules. This not only reduces redundancy but also ensures consistency in your deployments. Here we explore some custom functions that you might find useful:

### Resource Abbreviation functions

The custom _resource abbreviation_ functions in this article are designed to map _abbreviations_ (e.g.: `rg`, `vm`, `vmss`) to _resource_ and resource _provider namespaces_. This is particularly useful for maintaining clarity and consistency in your resource naming conventions.

### Examples
Let's take a look at an example of user-defined functions that you could include in your Bicep modules:

The user-defined function itself. (For clarity, only the `getManagementAndGovernanceAbbr` function is shown.)

```bicep
// Management and Governance
@export()
@description('Returns the abbreviation recommendation for Azure management and 
              governance resources.')
@metadata({
  example: 'getManagementAndGovernanceAbbr("Resources/resourceGroups")'
  input: 'The provider name space without the `Microsoft` part due to template size 
          limitations e.g.: Resources/resourceGroups'
})
func getManagementAndGovernanceAbbr(providerNameSpace string) string =>
  {
    'AlertsManagement/actionRules': 'apr'
    'Automation/automationAccounts': 'aa'
    'Authorization/policyDefinitions': '<descriptive>'
    'Blueprint/blueprints': 'bp'
    'Blueprint/blueprints/artifacts': 'bpa'
    'Insights/actionGroups': 'ag'
    'Insights/components': 'appi'
    'Insights/dataCollectionEndpoints': 'dce'
    'Insights/dataCollectionRules': 'dcr'
    'Management/managementGroups': 'mg'
    'OperationalInsights/querypacks': 'pack'
    'OperationalInsights/workspaces': 'log'
    'Purview/accounts': 'pview'
    'Resources/resourceGroups': 'rg'
    'Resources/resourceGroups/subscriptions': 'sub'
    'Resources/templateSpecs': 'ts'
  }[providerNameSpace]
```

Usage example in a `.bicep` file.

```bicep
metadata name = 'Import all user-defined functions'
metadata description = '''
This example imports all available user-defined functions of the given module.
Note: In your module you would import only the functions you need.
'''
metadata owner = 'platform-engineers'

// -------------- //
// TEST EXECUTION //
// -------------- //

import {
  getAIAndMachineLearningAbbr
  getAnalyticsAndIoTAbbr
  getComputeAndWebAbbr
  getContainerAbbr
  getDatabaseAbbr
  getDeveloperToolsAbbr
  getDevOpsAbbr
  getIntegrationAbbr
  getManagementAndGovernanceAbbr
  getMigrationAbbr
  getNetworkAbbr
  getSecurityAbbr
  getStorageAbbr
  getVirtualDesktopInfraAbbr
} from '../../../main.bicep'

// Common parameters
param ResourceName string = '${ResourceGroupsAbbr}-example-dev-weu'
output ResourceNameOutput string = ResourceName

// Management and governance
param ResourceGroupsAbbr string = getManagementAndGovernanceAbbr('Resources/resourceGroups')
output ResourceGroupsAbbrOutput string = ResourceGroupsAbbr
```

<br>

Usage example in a `.bicepparam` file.

<div class="tip">
    <p><strong>Tip</strong>: A user-defined function in a <b>bicepparam</b> file is evaluated during design-time. This offers an advantage over using it in a <b>bicep</b> file, where the function becomes part of the actual ARM build file. This could pose a potential problem when your template is used as a nested module within a <i>foreach</i> loop, as it will add the function to the ARM build file for each iteration of the loop.</p>
</div>

```bicep
metadata description = '''
This example imports only the functions you need.
Note: In your module you would import only the functions you need.
'''

using none

import {
  getManagementAndGovernanceAbbr
} from '../../../main.bicep'

param ResourceName string = '${ResourceGroupsAbbr}-example-dev-weu'

// Management and governance
param ResourceGroupsAbbr = getManagementAndGovernanceAbbr('Resources/resourceGroups')
```

<br>

Usage example in a `.JSON` parameter file.

<div class="tip">
    <p><strong>Tip</strong>: If you want to test this function without going through the deployment process, you can use <b>Build parameter file</b> by right-clicking on the <i>.bicepparam</i> file. This will output the results in a parameter <i>JSON</i> file like the following example:</p>
</div>

```json
{
  "$schema": "https://schema.management.azure.com/schemas/
              2019-04-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "ResourceName": {
      "value": "rg-example-dev-weu"
    },
    "ResourceGroupsAbbr": {
      "value": "rg"
    }
  }
}
```

### Conclusion

By incorporating user-defined functions into your custom Bicep modules, you can enhance the readability, maintainability, and consistency of your Azure deployments. Whether you're mapping resource abbreviations or defining reusable logic, these functions will help you achieve a more streamlined and efficient infrastructure as code experience.

### Resources

- <a href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations" target="_blanc">Azure Abbreviations</a>
- <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/parameters" target="_blanc">Parameter in Bicep</a>
- <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-import" target="_blanc">Imports in Bicep</a>
