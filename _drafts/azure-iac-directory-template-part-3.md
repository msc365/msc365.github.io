---
layout: post
title: The Azure DevOps configuration folder - Part 3
author: Martin Swinkels
categories: [DevOps, Guidelines]
tags: azure iac bicep powershell
comments: true
---

This structure helps in organizing Azure DevOps configurations and scripts, making it easier to manage and maintain CI/CD pipelines for the project.

This is part **3** of **7** about [The Azure IaC directory structure template]({% link _posts/2024-09-23-azure-iac-directory-template-part-1.md %}).

```pre
root
├─ ...
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
│     ├─ Deploy-WorkLoad-001.ps1
│     └─ ...
```

Here's a breakdown of each subdirectory and files within the `azdevops` directory:

- **azdevops**  
  This directory contains configurations and scripts related to Azure DevOps, which is used for continuous integration and continuous deployment (CI/CD) pipelines.

  - **config**  
    This subdirectory holds configuration files for Azure DevOps.

    - **variables.yml**  
      This file contains variable definitions that can be used across multiple pipelines, making it easier to manage and reuse common settings.

  - **pipelines**  
    This subdirectory contains pipeline definitions and templates.

    - **templates**  
      This subdirectory holds reusable pipeline templates.

      - **build.yml**  
        A template for build pipelines, defining the steps required to compile and package the code.

      - **deployment.yml**  
        A template for deployment pipelines, outlining the steps to deploy the infrastructure and applications.

      - **linter.yml**  
        A template for linting pipelines, specifying the steps to run code quality checks.

      - **validate.yml**  
        A template for validation pipelines, detailing the steps to validate the infrastructure code.

    - **pipeline-001.yml**  
      A specific pipeline definition, which could be for a particular environment or application.

    - **pipeline-002.yml**  
      Another specific pipeline definition, similar to `pipeline-001.yml`.

  - **scripts**  
    This subdirectory contains scripts used within the Azure DevOps pipelines.

    - **helper**  
      A subdirectory for helper scripts, which might include utility functions or common tasks used across multiple scripts.

    - **Deploy-ResourceGroup.ps1**  
      A PowerShell script for deploying a resource group, which could be invoked by the deployment pipeline.

    - **Deploy-WorkLoad-001.ps1**  
      A PowerShell script for deploying resources for `workload-001`, which could be invoked by the deployment pipeline.

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/2024-09-23-azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/2024-09-24-azure-iac-directory-template-part-2.md %})
- [Part 3 - The Azure DevOps configuration folder]({% link _posts/2024-09-25-azure-iac-directory-template-part-3.md %})
- Part 4 - The workload deployments folder
- Part 5 - The Custom Verified Modules folder
- Part 6 - The source configuration folder
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
