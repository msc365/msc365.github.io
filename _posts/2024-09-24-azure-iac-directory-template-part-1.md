---
layout: post
title: Part 1 - The Azure IaC directory template
author: Martin Swinkels
categories: [Examples, Snippets]
tags: azure iac bicep powershell
comments: true
---

With the rise in popularity of Bicep for Azure Infrastructure as Code (IaC), I’ve noticed that teams struggle finding a consistent way to organize their code within repositories. While there are no strict rules, establishing standards and some governance for your team can be highly beneficial.

The teams I work with come from diverse backgrounds, including engineers and developers, having different maturity-levels and using a variety of tools and project configurations. This diversity often results in inconsistencies in code structure and management.

To tackle this issue, I recommend implementing a standardized _minimal_ directory structure that can be tailored to meet the needs of most teams. In upcoming series I will highlight each subdirectory of the directory structure template.

#### Example: Directory structure template

This template includes basic setup for Visual Studio Code and Azure DevOps folders, workload deployments and _Custom Verified Modules_ (see tips). Additionally, it covers a source code folder with shared PowerShell modules and solution imports, and finally I will highlight some basic root files.

<div class="tip">
    <p><strong>Note</strong>: Sometimes, you may need a resource template without the overhead of an Azure Verified Module (AVM). For instance, if you are deploying a simple Azure Storage Account and do not require the additional features and configurations provided by an AVM, you can create a <i>Custom Verified Module (CVM)</i> tailored to your specific needs, still using the guidelines and directory structure from AVM.</p>
</div>

<div class="tip">
    <p><strong>Note</strong>: This approach allows you to streamline the deployment process and reduce complexity. The advantage of adopting the directory structure from AVM is the ease of transition if you are already familiar with AVM. Additionally, you can benefit from their documentation and utilities for your own modules.</p>
</div>

<div class="important">
    <p><strong>Remarks</strong>: Please don't try to reinvent the wheel.</p>
</div>

<br>

```pre
root
├─ .vscode
│  ├─ bicep.code-snippets
│  ├─ powershell.code-snippets
│  ├─ extensions.json
│  ├─ launch.json
│  └─ settings.json
├─ azdevops
│  ├─ config
│  │  └─ variables.yml
│  ├─ pipelines
│  │  ├─ templates
│  │  │  ├─ build.yml
│  │  │  ├─ deployment.yml
│  │  │  ├─ linter.yml
│  │  │  └─ validate.yml
│  │  ├─ pipeline-001.yml
│  │  ├─ pipeline-002.yml
│  │  └─ ...
│  └─ scripts
│     ├─ helper
│     ├─ Deploy-ResourceGroup.ps1
│     └─ ...
├─ deployments
│  ├─ lz
│  │  ├─ sub
│  │  │  ├─ rg-workload-001
│  │  │  ├─ rg-workload-002
│  │  │  └─ ...
│  │  └─ ...
│  └─ ...  
├─ cvm
│  ├─ ptn
│  │  ├─ lz
│  │  │  ├─ management-group
│  │  │  │  ├─ modules
│  │  │  │  │  ├─ nested_groups.bicep
│  │  │  │  │  └─ ...
│  │  │  │  ├─ tests
│  │  │  │  │  └─ e2e
│  │  │  │  │     ├─ defaults
│  │  │  │  │     │  └─ main.test.bicep
│  │  │  │  │     └─ min
│  │  │  │  │        └─ main.test.bicep
│  │  │  │  ├─ README.md
│  │  │  │  └─ main.bicep
│  │  │  └─ ...
│  │  └─ ...
│  └─ res
│     ├─ resource-group
│     │  ├─ modules
│     │  │  ├─ nested_lock.bicep
│     │  │  └─ nested_roleAssignments.bicep
│     │  ├─ tests
│     │  │  └─ e2e
│     │  │     ├─ defaults
│     │  │     │  └─ main.test.bicep
│     │  │     └─ min
│     │  │        └─ main.test.bicep
│     │  ├─ README.md
│     │  └─ main.bicep
│     └─ ...
├─ source
│  ├─ shared
│  │  ├─ modules
│  │  │  ├─ Bicep.Utilities
│  │  │  │  ├─ 1.0.0
│  │  │  │  │  ├─ Bicep.Utilities.psd1
│  │  │  │  │  └─ Bicep.Utilities.psm1
│  │  │  │  ├─ README.md
│  │  │  │  └─ RELEASE.md
│  │  │  └─ ..
│  │  ├─ scripts
│  │  └─ README.md
│  ├─ authenticationMethods
│  │  ├─ azdevops
│  │  ├─ config
│  │  ├─ helper
│  │  ├─ v1.0.0
│  │  └─ README.md
│  ├─ conditionAccess
│  ├─ privilegedIdentityManagement
│  ├─ README.md
│  └─ ...
├─ .gitignore
├─ bicepconfig.json
└─ README.md
```

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/2024-09-24-azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/2024-09-25-azure-iac-directory-template-part-2.md %})
- Part 3 - The Azure DevOps configuration folder
- Part 4 - The workload deployments folder
- Part 5 - The Custom Verified Modules folder
- Part 6 - The source configuration folder
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
