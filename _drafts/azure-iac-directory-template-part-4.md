---
layout: post
title: Part 4 - The workload deployments folder
author: Martin Swinkels
categories: [Architecture, Examples]
tags: azure iac bicep powershell
comments: true
---

This is part **4** of **7** about the `Azure IaC directory structure template`.

### The workload deployments folder

This structure helps in organizing deployment configurations for different environments and workloads, making it easier to manage and maintain the infrastructure code.

```pre
├─ deployments
│  ├─ lz
│  │  ├─ sub
│  │  │  ├─ rg-workload-001
│  │  │  │  ├─ modules
│  │  │  │  ├─ parameters
│  │  │  │  │  ├─ dev.bicepparam
│  │  │  │  │  ├─ stg.bicepparam
│  │  │  │  │  └─ prd.bicepparam
│  │  │  │  ├─ main.bicep
│  │  │  │  └─ README.md
│  │  │  ├─ rg-workload-002
│  │  │  └─ ...
│  │  └─ ...
│  └─ ...  
```

Here's a detailed explanation of each component:

- **deployments**  
  This is the root directory for deployment configurations.

- **lz**  
  This subdirectory stands for `landing zone`, which is a foundational environment setup in cloud architecture.

- **sub**  
  This subdirectory represent a `subscription` within the landing zone.

- **rg-workload-001**  
  This directory represents a specific resource group for a workload.

- **modules**  
  This subdirectory is intended to contain reusable Bicep modules specific to this resource group.

- **parameters**  
  This subdirectory contains parameter files for different environments.

- **dev.bicepparam**  
  Parameter file for the development environment.

- **stg.bicepparam**  
  Parameter file for the staging environment.

- **prd.bicepparam**  
  Parameter file for the production environment.

- **main.bicep**  
  The main Bicep file that defines the resources and configurations for this workload.

- **README.md**  
  A markdown file that provides documentation or instructions related to this resource group and its deployment.
  
- **rg-workload-002**  
  Another resource group for a different workload, following a similar structure to `rg-workload-001`.

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/azure-iac-directory-template-part-2.md %})
- [Part 3 - The Azure DevOps configuration folder]({% link _posts/azure-iac-directory-template-part-3.md %})
- [Part 4 - The workload deployments folder]({% link _posts/azure-iac-directory-template-part-4.md %})
- Part 5 - The Custom Verified Modules folder
- Part 6 - The source configuration folder
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
