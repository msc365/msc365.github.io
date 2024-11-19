---
layout: post
title: The Azure IaC directory template
author: Martin Swinkels
categories: [DevOps, Guidelines]
tags: azure iac bicep powershell
comments: true
---

While Infrastructure as Code (IaC) is gaining popularity and Bicep is becoming increasingly mature, I noticed that teams struggle to find a consistent way to organize their code within repositories. Although there are no strict rules, establishing standards and some governance for your team can be highly beneficial.

The teams I work with come from diverse backgrounds, including engineers and developers, having different maturity-levels and using a variety of tools and project configurations. This diversity often results in inconsistencies in code structure and management.

To tackle this issue, you could implementing a standardized _minimal_ directory structure that can be tailored to meet the needs of most teams. In this post, I will further highlight a directory structure template sample.

#### Example: Directory structure template

Over the past year, I have gained insights by examining community solutions and their code structures. I was impressed by the high level of maturity and organization in the _Common Azure Resource Module Library_ (CARML) repository on GitHub, now referred to as _Azure Verified Modules_ (AVM).

This template is primarily inspired by the AVM community and offers a foundational setup for Visual Studio Code and Azure DevOps directories, workload deployments, and _Custom Verified Modules_ (see tips). It also features a source code directory containing shared PowerShell modules and solutions, and finally some key root files.

#### High-level summary

```pre
root
├─ .vscode
├─ azdevops
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
├─ cvm
│  ├─ ptn
│  └─ res
├─ source
│  ├─ shared
│  ├─ app-001
│  ├─ app-002
│  └─ ...
├─ .gitignore
├─ bicepconfig.json
└─ README.md
```

<br>

<div class="tip">
    <p><strong>Tip</strong>: Sometimes, you may need a resource template without the overhead of an Azure Verified Module (AVM). For instance, if you are deploying a simple Azure Storage Account and do not require the additional features and configurations provided by an AVM, you can create a <i>Custom Verified Module (CVM)</i> tailored to your specific needs, still using the guidelines and directory structure from AVM.</p>
</div>

<div class="tip">
    <p><strong>Tip</strong>: This approach allows you to streamline the deployment process and reduce complexity. The advantage of adopting the directory structure from AVM is the ease of transition if you are already familiar with AVM. Additionally, you can benefit from their documentation and utilities for your own modules.</p>
</div>

<div class="note">
    <p><strong>Note</strong>: Don't try to reinvent the wheel. Get inspired what is already available online but respect authors copyright.</p>
</div>


Here's a breakdown of the files within the `root` directory:

- **.vscode**  
  This directory contains configuration files specific to VSCode, which help in setting up the development environment for the project.

- **azdevops**  
  This directory contains configurations and scripts related to Azure DevOps, which is used for continuous integration and continuous deployment (CI/CD) pipelines.

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

        - **main.bicep**  
          The main Bicep file that defines the resources and configurations for this workload.

        - **README.md**  
          A markdown file that provides documentation or instructions related to this resource group and its deployment.

- **cvm**  
  This subdirectory represent the `Custom Verified Modules` that could be published to a _private_ Azure Container Registry.

  - **ptn**  
    This folder contains modules that are designed to be used as building blocks for creating complex Azure environments. Each pattern module typically includes the same structure as the `res` folder.

  - **res**  
    This folder contains reusable resource-specific module templates.

    - **resource-name**  
    Contains modules and tests for resource configurations.

    - **modules**  
      Contains Bicep files for nested resources within the resource group.

    - **tests**  
      Contains end-to-end tests for the resource group configurations.

    - **README.md**  
      Documentation for the resource group module.

    - **main.bicep**  
      Main Bicep file for the resource group module.

- **source**  
  This code folder structure is as follows:

  - **shared**  
    This directory contains shared resources that can be used across different parts of the project.

    - **modules**  
      This subdirectory contains PowerShell modules.

      - **Bicep.Utilities**  
        This folder contains for example a `Bicep.Utilities` module.

        - **1.0.0**  
          This subfolder contains version 1.0.0 of the `Bicep.Utilities` module.

          - **Bicep.Utilities.psd1**  
            The PowerShell manifest file for the `Bicep.Utilities` module.

          - **Bicep.Utilities.psm1**  
            The PowerShell script module file for the `Bicep.Utilities` module.

        - **README.md**  
          Documentation for the `Bicep.Utilities` module.

        - **RELEASE.md**  
          Release notes for the `Bicep.Utilities` module.

    - **scripts**  
      This subdirectory contains shared scripts.

    - **README.md**  
      Documentation for the `shared` directory.

- **.gitignore**  
  This file specifies which files and directories should be ignored by Git. It helps to exclude files that are not necessary to track, such as build artifacts, temporary files, and sensitive information.

- **bicepconfig.json**  
  This configuration file is used by Bicep, a domain-specific language (DSL) for deploying Azure resources. It typically contains settings and configurations that control the behavior of Bicep.

- **README.md**  
  This Markdown file provides documentation and information about the project. It usually includes an overview, setup instructions, usage guidelines, and other relevant details to help users understand and work with the project.

<!-- omit from toc -->
### Useful links and info

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Bicep Azure Landing Zones</a>
