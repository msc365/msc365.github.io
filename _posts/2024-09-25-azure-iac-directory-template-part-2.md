---
layout: post
title: Part 2 - The Visual Studio Code configuration folder
author: Martin Swinkels
categories: [Architecture, Examples]
tags: azure iac bicep powershell
comments: true
---

This is part **2** of **7** about the `Azure IaC directory structure template`.

### The Visual Studio Code configuration folder

This structure helps in maintaining a consistent development environment across the team, making it easier to work on the project collaboratively.

```pre
root
├─ .vscode
│  ├─ bicep.code-snippets
│  ├─ powershell.code-snippets
│  ├─ extensions.json
│  ├─ launch.json
│  └─ settings.json
```

Here's a breakdown of each file within the `.vscode` directory:

- **.vscode**  
  This directory contains configuration files specific to VSCode, which help in setting up the development environment for the project.

- **bicep.code-snippets**  
This file contains code snippets for Bicep, which can be used to quickly insert commonly used Bicep code patterns.

- **powershell.code-snippets**  
This file contains code snippets for PowerShell, which can be used to quickly insert commonly used PowerShell code patterns.

- **extensions.json**  
This file lists recommended extensions for VSCode, ensuring that all team members use the same set of tools and extensions.

- **launch.json**  
This file contains configurations for debugging the project, allowing developers to set breakpoints and debug their code within VSCode.

- **settings.json**  
This file contains workspace-specific settings for VSCode, such as formatting rules, linting configurations, and other preferences.

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/azure-iac-directory-template-part-2.md %})
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
