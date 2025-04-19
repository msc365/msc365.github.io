---
layout: post
title: Azure DevOps Wiki Export Utility
author: Martin Swinkels
categories: [DevOps, Portfolio]
tags: azure azure-devops yaml dotnet sharepoint
image: https://msc365.eu/assets/img/posts-wiki-export-utility-pipeline.png
comments: false
published: false
---

This wiki export utility converts an Azure DevOps Wiki to a PDF file, publishes it on SharePoint Online, and makes it available through Microsoft Teams.

For a customer project I enhanced a community developed tool, to publish an Azure DevOps Wiki outside Azure DevOps for team members such as Stakeholders, who do not have access to code repositories.

<div class="important">
    <p><strong>Important</strong>: Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. In general, Stakeholder access users gain limited access to Azure Boards, Azure Pipelines, and collaboration tools. They have no access to code repositories.</p>
    <p>More information: <a href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/stakeholder-access?view=azure-devops" target="_blanc">Azure DevOps</a></p>
</div>

<br>

<a href="https://msc365.eu/assets/img/posts-wiki-export-utility-preview.png" target="_self"><img alt="Utility preview" src="https://msc365.eu/assets/img/posts-wiki-export-utility-preview.png" width="1024"/></a>

<small>PDF preview</small>

The tool can be used on a Windows x64 machine as executable or as downloadable artifact in an Azure DevOps pipeline, which allows you to implement a CI/CD process to publish your documentation.

<a href="https://msc365.eu/assets/img/posts-wiki-export-utility-pipeline.png" target="_self"><img alt="Utility pipeline preview" src="https://msc365.eu/assets/img/posts-wiki-export-utility-pipeline.png" width="1024"/></a>

<small>Pipeline preview</small>

### Features

Currently this utility supports:

- Conversion of all wiki (sub) pages based on .order file(s)
- Default wiki styles and formatting
- Pictures with remote and relative URLs
- Page bookmarks for easier PDF navigation
- Hyperlinks to other wiki pages
- Azure DevOps [Markdown syntax](https://docs.microsoft.com/en-us/azure/devops/project/wiki/markdown-guidance?view=azure-devops)
- Emojis
- Mermaid Diagrams
- Mathematical notation and characters
- Telemetry with Application Insights

It is self-contained; members can download the .exe file, set arguments, run, done!

### Requirements

The utility is developed as a .NET 5.0 console application and requires the runtime to be installed. Currently it requires the x64 runtime.

### Telemetry

The utility uses Application Insights for basic telemetry:

- The duration of the export and the count of wiki pages will be submitted.
- In case of an error, the exception is submitted.
- No wiki content is or will be submitted.

### Tools and technologies

- Microsoft .NET 5.0
- Microsoft PowerShell
- Microsoft Graph API
- Azure DevOps (CI/CD, Build Pipelines, Source Control)

### Third-party resources

This utility is a wrapper, originally created by [Max Mecher](https://github.com/MaxMelcher) (version 3.3.0), which uses open source libraries that do the actual work.

- [CommandLineParser](https://github.com/commandlineparser/commandline) – 2.8.0
- [DinkToPdf.Standard](https://github.com/konzen/DinkToPdf) – 1.1.0
- [Markdig](https://github.com/lunet-io/markdig/) – 0.26.0
- [PuppeteerSharp](https://github.com/hardkoded/puppeteer-sharp) – 5.0.0
