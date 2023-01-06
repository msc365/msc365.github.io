---
layout: post
title: Microsoft Intune Plugin
author: Martin Swinkels
categories: [Portfolio, DevelopmentS]
tags: azure powerapps powerautomate
comments: false
---

**The main purpose for the Endpoint Application Management (EAM) plugin is to fill the gap between deploying applications from Microsoft Intune and keeping them up to date.**

For this project I worked together in a team to redesign the way EAM was build and operating. My primary role was to create new ideas on how to develop a more robust, resilient and self-serviced solution.

### Features

To provide Microsoft Intune as a service you need to manually:

- Create application packages
- Manage package versions for pilot and production
- Publish packages from pilot to production​
- Check for new application versions and recreate packages
​- Manage software inventory groups​
- Manage already installed software on end points for pilot and production

The EAM 1.0 plugin, automated all of these processes.

### Requirements

The new pluging for endpoint application management should become more robust, resilient and self-serviced. The following areas were defined for improvements:

- Maintainability and manageability​  
  Version 1.0 was hard to manage with up to 150+ pipelines, technical limitations, and it was hard to onboard new customers​ because of platform boundaries.
- Team collaboration on PowerShell code​  
  There were large PowerShell scripts with a lot of embedded functions, no code testing, no code conventions​, which was really hard for team collaboration.
- Troubleshooting​  
  There were too many processes, no insights available and no alert mechanism​, which made it hard to troubleshoot.
- Customer interactions  
  An Azure DevOps pipeline approval step, for approving a deployment to production devices, was done by an internal Customer Landscape Owner (CLO)​, and was not accessible for external users.
- Ops adoption​  
  All customer and application configurations were stored in 1 XML-file, which was hard to adopt by operations, mistakes were easily made or were not noticed.

### Delivery

<div class="note">
    <p><strong>Note</strong>: The team adopted an Azure DevOps way-of-working during this project, which turned out to be a success story and opened up the transformation to an Azure DevOps way-of-working for other teams as well.</p>
</div>

The team deliverd the following improvements:

- PowerShell Modules​  
  I developed a new PowerShell Module template with embedded Pester tests and coding guidelines. All scrips were reviewed, optimized and migrated into reusable and distributable PowerShell modules​, ready to publish as Azure Artifacts.

  <a href="https://msc365.eu/assets/img/posts-intune-plugin-build-status-badges.png" target="_blanc"><img alt="Build status badges" src="https://msc365.eu/assets/img/posts-intune-plugin-build-status-badges.png"/></a>

  <small>Build status badges on Azure DevOps</small>

- Maintainable Azure DevOps Pipelines​  
  We implemented CI/CD to build, test and deploy the PowerShell modules as Azure artifacts​. We also reduced the number of pipelines to only 1 pipeline for the entire process, and 1 pipeline per customer.
- Azure Automation​  
  We configured Azure Runbooks and Azure DevOps repositories to use the latest PowerShell modules​, to run the automated download and package process.

  <a href="https://msc365.eu/assets/img/posts-intune-plugin-ado-release-pipeline.png" target="_blanc"><img alt="Release pipeline" src="https://msc365.eu/assets/img/posts-intune-plugin-ado-release-pipeline.png" width="1024"/></a>

  <small>Release pipeline on Azure DevOps</small>

- Microsoft Dataverse​  
  We replaced the XML configuration file with a structured and managed database, and used with triggers to run Power Automate flows and integrate with Intune and DevOps APIs.
- Microsoft Power Platform​  
  I developed an model-driven 'Operator' app, a customer accessible approval workflow with Power Automate, and deployed it as a solution to different staged environments (best practice Application Lifecycle Management).

  <a href="https://msc365.eu/assets/img/posts-intune-plugin-model-driven-app.png" target="_blanc"><img alt="Model-driven app" src="https://msc365.eu/assets/img/posts-intune-plugin-model-driven-app.png" width="1024"/></a>

  <small>Model-driven app on Microsoft Power Platform</small>

### Tools and technologies

- Microsoft Intune
- Azure Runbooks, Logic Apps, Blob Storage, Key Vault, Web Applications, and Kubernetes Services
- Dataverse REST APIs, DevOps REST APIs, and Intune REST APIs
- Azure DevOps Boards, Repos, Pipelines, Artifacts, Wiki, and Custom Agents
- Microsoft Power Platform, Power Apps, Power Automate, Dataverse, ALM Solutions, Business Process Flows (BPF)
- Microsoft PowerShell

### Third-party resources

- [Evergreen](https://www.powershellgallery.com/packages/Evergreen)  
  Evergreen is a PowerShell module that retrieves the latest version numbers and download URLs for various software products directly from the vendor source.
