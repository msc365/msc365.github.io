---
layout: post
title: Part 5 - The Custom Verified Modules folder
author: Martin Swinkels
categories: [Architecture, Examples]
tags: azure iac bicep powershell
comments: true
---

This is part **5** of **7** about the `Azure IaC directory structure template`.

### The Custom Verified Modules folder

#### Bicep Pattern Modules

```pre
root
├─ ...
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
```

#### Bicep Resource Modules

```pre
root
├─ ...
├─ cvm
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
```

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/azure-iac-directory-template-part-2.md %})
- [Part 3 - The Azure DevOps configuration folder]({% link _posts/azure-iac-directory-template-part-3.md %})
- [Part 4 - The workload deployments folder]({% link _posts/azure-iac-directory-template-part-4.md %})
- [Part 5 - The Custom Verified Modules folder]({% link _posts/azure-iac-directory-template-part-5.md %})
- Part 6 - The source configuration folder
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
