---
layout: post
title: Part 6 - The source configuration folder
author: Martin Swinkels
categories: [Architecture, Examples]
tags: azure iac bicep powershell
comments: true
---

This is part **6** of **7** about the `Azure IaC directory structure template`.

### The source configuration folder

#### Shared PowerShell Modules

```pre
root
├─ ...
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
```

#### Solution imports

```pre
root
├─ ...
├─ source
│  ├─ ...
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
```

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/azure-iac-directory-template-part-2.md %})
- [Part 3 - The Azure DevOps configuration folder]({% link _posts/azure-iac-directory-template-part-3.md %})
- [Part 4 - The workload deployments folder]({% link _posts/azure-iac-directory-template-part-4.md %})
- [Part 5 - The Custom Verified Modules folder]({% link _posts/azure-iac-directory-template-part-5.md %})
- [Part 6 - The source configuration folder]({% link _posts/azure-iac-directory-template-part-6.md %})
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
