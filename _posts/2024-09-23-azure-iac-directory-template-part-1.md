---
layout: post
title: Part 1 - The Azure IaC directory template
author: Martin Swinkels
categories: [DevOps, Guidelines]
tags: azure iac bicep powershell
comments: true
---

While Infrastructure as Code (IaC) is gaining popularity and Bicep is becoming increasingly mature, I also notice that teams struggle to find a consistent way to organize their code within repositories. Although there are no strict rules, establishing standards and some governance for your team can be highly beneficial.

The teams I work with come from diverse backgrounds, including engineers and developers, having different maturity-levels and using a variety of tools and project configurations. This diversity often results in inconsistencies in code structure and management.

To tackle this issue, I recommend implementing a standardized _minimal_ directory structure that can be tailored to meet the needs of most teams. In upcoming series I will highlight each subdirectory of the directory structure template.

#### Example: Directory structure template

This template includes basic setup for Visual Studio Code and Azure DevOps folders, workload deployments and _Custom Verified Modules_ (see tips). Additionally, it covers a source code folder with shared PowerShell modules and solution imports, and finally I will highlight some basic root files.

<br>

<div class="tip">
    <p><strong>Tip</strong>: Sometimes, you may need a resource template without the overhead of an Azure Verified Module (AVM). For instance, if you are deploying a simple Azure Storage Account and do not require the additional features and configurations provided by an AVM, you can create a <i>Custom Verified Module (CVM)</i> tailored to your specific needs, still using the guidelines and directory structure from AVM.</p>
</div>

<div class="tip">
    <p><strong>Tip</strong>: This approach allows you to streamline the deployment process and reduce complexity. The advantage of adopting the directory structure from AVM is the ease of transition if you are already familiar with AVM. Additionally, you can benefit from their documentation and utilities for your own modules.</p>
</div>

#### High-level summary

```pre
root
├─ .vscode
├─ azdevops
├─ deployments
│  ├─ authorization
│  ├─ management
│  ├─ network
│  ├─ workloads
│  └─ ...
├─ cvm
│  ├─ ptn
│  └─ res
├─ source
│  ├─ shared
│  ├─ solution-001
│  ├─ solution-002
│  └─ ...
├─ .gitignore
├─ bicepconfig.json
└─ README.md
```

<br>

<div class="note">
    <p><strong>Note</strong>: Please don't try to reinvent the wheel. Use what is already available with respect to copyrights.</p>
</div>

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
