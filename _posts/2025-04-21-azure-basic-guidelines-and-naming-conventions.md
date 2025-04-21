---
layout: post
title: Basic guidelines and naming conventions
author: Martin Swinkels
categories: [Azure, DevOps, Guidelines]
tags: azure bicep powershell
image: https://msc365.eu/assets/img/posts-az-devops-basic-guidelines-and-naming-conventions.png
comments: false
---

Starting a new Azure Infrastructure as Code (IaC) project can be a challenging task. Establishing clear and concise guidelines for team members is crucial to write consistent, maintainable, and efficient code. This blog post outlines some basic guidelines that can help streamline the process and set a solid foundation for your Azure IaC projects.

<div class="tip">
    <p><strong>Tip</strong>: Feel free to copy/paste the following guidelines into a <a href="https://msc365.eu/assets/source/CONTRIBUTING.md" target="_blank">CONTRIBUTING</a> file and save it into the root directory of your project.</p>
</div>

By following these guidelines, team members can contribute effectively to Azure IaC and Azure DevOps projects, ensuring a consistent and high-quality codebase. Happy 💪 coding!

<!-- omit from toc -->
## Contributing Azure IaC w/Bicep

- [Coding guidelines](#coding-guidelines)
- [Naming convention](#naming-convention)
- [Markdown styling](#markdown-styling)
- [Terminology](#terminology)
- [Resources](#resources)

### Coding guidelines

To make life easier, a `.vscode/settings.json` file is configured to enforce _some_ of the syntax and style guidelines automatically. These will apply when `Saving` a file for example `ps1`, `bicep`, `json`, `yaml` or `md` files. For this to work you need to install the recommended `extensions` in vscode.

- Use `PascalCase` for _all_ public identifiers like module names, function names, properties, parameters, global variables and constants.
- Use `camelCase` for _all_ variables within functions (or modules) to distinguish private variables from parameters.
- Use `camelCase` for _all_ keys within Json files.
- Use `four` spaces per indentation level.
- Avoid using line continuation characters (`) in PowerShell code and examples.
- Use PowerShell [splatting](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_splatting) to reduce line length for cmdlets that have several parameters.
- Use [approved verbs](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands) for PowerShell Commands.
- Take notice of the [PowerShell development guidelines](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/strongly-encouraged-development-guidelines) when you write modules or cmdlets.
- Take notice of the [PowerShell-Docs](https://learn.microsoft.com/en-us/powershell/scripting/community/contributing/powershell-style-guide) style guide when you write documentation content.

### Naming convention

The information in resource names ideally includes whatever you need to identify specific instances of resources. For example, a public IP address (PIP) for a production SharePoint workload in the West Europe region might be:

```text
sub-gov-guardians-prd-weu-001
\_/ \_/ \_______/ \_/ \_/ \_/
 1   2      3      4   5   6

Diagram 1: Components of an Azure resource name
```

1. `Resource type`  
   An abbreviation that represents the type of Azure resource or asset. Examples, `sub`, `rg`, `sg`, `id`

1. `Prefix`  
   A random prefix to ensure globally unique names. Examples,  `e2egov`, `jh3gb4`

1. `Workload` / `Application` / `Service`  
   Name of the application, workload, or service that the resource is a part of. Examples, `avengers`, `guardians`, `galaxy`

1. `Environment`  
   The environment to support RBAC. Examples, `prd`, `dev`, `shared`

1. `Azure region` (optional)  
   The Azure region where the resource is deployed. Examples, `weu`, `eus`, `wus`

1. `Instance` (optional)  
   The instance count for a specific resource, to differentiate it from other resources that have the same naming convention and naming components. Examples, `001`

### Markdown styling

Use alerts to provide distinctive styling for significant content.

> 📄 **Note**  
> Highlights information that users should take into account, even when skimming.

> 💡 **Tip**  
> Optional information to help a user be more successful.

> 🛟 **Important**  
> Crucial information necessary for users to succeed.

> ⚠️ **Warning**  
> Critical content demanding immediate user attention due to potential risks.

> ⛔ **Caution**  
> Negative potential consequences of an action.

### Terminology

- `lowercase` - all lowercase, no word separation.
- `UPPERCASE` - all capitals, no word separation.
- `PascalCase` - capitalize the first letter of each word.
- `camelCase` - capitalize the first letter of each word _except_ the first.
- `kebab-case` - all lowercase, with dash (`-`) word separation.
- `snake_case` - all lowercase, with underscore (`_`) word separation.

### Resources

Please take notice of the following documentation:

- [Define your naming convention](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming).
- [Abbreviation recommendations for Azure resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations).