---
layout: post
title: "Azure DevOps: Self-service Team Configuration"
author: Martin Swinkels
categories: [DevOps, Automation]
tags: azure-devops cli powershell self-service
image: https://msc365.eu/assets/img/posts-az-devops-boards-team-configuration.png
comments: true
---

One of my favorite things is automating processes so you will comply to governance and guidelines set by an organization, and you don't have to keep repeating manual steps. This week I created a PowerShell script, as part of a self-service Azure DevOps solution, to update team configuration settings for Azure DevOps teams.

The easiest way to do this, is to invoke `Azure CLI` and `Azure DevOps Extension` commands with PowerShell, in this particular case; the [az devops invoke](https://learn.microsoft.com/en-us/cli/azure/devops?view=azure-cli-latest#az-devops-invoke) command. You could also fallback on using the `Azure DevOps API`, but `Azure CLI` is esier to use, and is my prefered tool to use in other solutions as well. The `az deveops invoke` will invoke request for any DevOps area and resource, so I use it when there isn't a command available yet.

<div class="note">
    <p><strong>Note</strong>: Did you know that 'Azure CLI' and 'Azure DevOps Extension' are available on <a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#software" target="_blanc">Microsoft-hosted agents</a>.</p>
</div>

### Features

- Update 'General' team configuration settings:
  - Bugs behavior
  - Backlog visibilities
  - Working days

### Business value

- Higher productivity due to easy and ad-hoc team setup
- Less work, less sensitive to errors, less need for knowledge at operational level
- A standardized process of teams creation that respects customer's governance, security and compliance policies

### Preview

<br>
<a href="https://msc365.eu/assets/img/posts-az-devops-boards-team-configuration.png" target="_blank"><img alt="team configuration settings" src="https://msc365.eu/assets/img/posts-az-devops-boards-team-configuration.png" width="1024"/></a>

<small>Team configuration sample</small>

By defining a JSON-formated string value, you will be setting the team configuration settings.

```powershell
$settingsJson = @{
    "bugsBehavior" = "asRequirements"
    "backlogVisibilities" = @{
        "Microsoft.EpicCategory" = $true
        "Microsoft.FeatureCategory" = $true
        "Microsoft.RequirementCategory" = $true
    }
    "workingDays" = @(
        "monday", 
        "tuesday", 
        "wednesday", 
        "thursday"
    )
} | ConvertTo-Json -Depth 99
```

Just set the `-TeamSettings` parameter of the script with the JSON-formated string value and run the command.

```powershell
.\Update-ADOTeam-Settings.ps1 `
    -Organization $env:ORGANIZATION -ProjectName $env:PROJECT_NAME `
    -TeamName $env:TEAM_NAME -TeamSettings $settingsJson -Verbose
```

That's it 👊, happy automating!

<div class="tip">
    <p><strong>Tip</strong>: This PowerShell script can be used locally and in an Azure pipeline as part of an automated process.<p> 
</div>  

### Source code

- [MSC365 on GitHub](https://github.com/msc365/az-devops/blob/main/update-adoteam-settings)

### Tools and technologies

- [az cli](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- [az devops extension](https://learn.microsoft.com/en-us/cli/azure/devops?view=azure-cli-latest)
- Microsoft PowerShell
- Microsoft Graph API
- Azure DevOps Boards
