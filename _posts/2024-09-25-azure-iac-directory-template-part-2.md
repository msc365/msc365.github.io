---
layout: post
title: Part 2 - The Visual Studio Code configuration folder
author: Martin Swinkels
categories: [DevOps, Guidelines]
tags: azure iac bicep powershell
comments: true
---

The `.vscode` folder helps in maintaining a consistent development environment across the team, making it easier to work on the project collaboratively.

This is part **2** of **7** about `The Azure IaC directory structure template`.

```pre
root
├─ .vscode
│  ├─ bicep.code-snippets
│  ├─ powershell.code-snippets
│  ├─ extensions.json
│  ├─ launch.json
│  └─ settings.json
```

Here's a breakdown of the subdirectory and file within the `.vscode` directory:

- **.vscode**  
  This directory contains configuration files specific to VSCode, which help in setting up the development environment for the project.

- **bicep.code-snippets**  
  This file contains code snippets for Bicep, which can be used to quickly insert commonly used Bicep code patterns.

  Example:

  ```json
  {
      "bicep-baseline-module": {
          "scope": "bicep",
          "prefix": "bicep-baseline-module",
          "description": "",
          "body": [
              "metadata name = ''",
              "metadata description = ''",
              "metadata owner = 'platform-engineers'",
              "",
              "targetScope = 'resourceGroup'",
              "",
              "// TYPES",
              "",
              "// PARAMETERS",
              "",
              "// VARIABLES",
              "",
              "// DEPLOYMENT",
              "",
              "// OUTPUTS",
          ]
      }
  }
  ```

- **powershell.code-snippets**  
  This file contains code snippets for PowerShell, which can be used to quickly insert commonly used PowerShell code patterns.

  Example:

  ```json
  {
      "PowerShell Function Baseline": {
          "scope": "powershell",
          "prefix": "function-baseline",
          "description": "A sample function that's aligned to base coding guidelines.",
          "body": [
              "function ${1:Verb-Noun} {",
              "    <#",
              "    .SYNOPSIS",
              "    .DESCRIPTION",
              "    .PARAMETER ParamName",
              "        A brief description of the parameter.",
              "    .NOTES",
              "    .LINK",
              "    .EXAMPLE",
              "    #>",
              "    [CmdletBinding()]",
              "    param (",
              "        [Parameter(Mandatory = \\$false)]",
              "        [string] ${2:\\$ParamName} = ''",
              "    )",
              "",
              "    begin {",
              "        Write-Debug ('{0} entered' -f \\$MyInvocation.MyCommand)",
              "    }",
              "",
              "    process {",
              "        try {",
              "",
              "        } catch {",
              "            throw ('Error: {0}' -f \\$_)",
              "        }",
              "    }",
              "",
              "    end {",
              "        Write-Debug ('{0} exited' -f \\$MyInvocation.MyCommand)",
              "    }",
              "}"
          ]
      },
      "PowerShell Parameter Baseline": {
          "scope": "powershell",
          "prefix": "parameter-baseline",
          "description": "A sample parameter that's aligned to base coding guidelines.",
          "body": [
              "[Parameter(Mandatory = \\$false)]",
              "[string] \\$ParamName = ''"
          ]
      }
  }
  ```

- **extensions.json**  
  This file lists recommended extensions for VSCode, ensuring that all team members use the same set of tools and extensions.

  Example:

  ```json
  {
      "recommendations": [
          "ms-azuretools.vscode-bicep",
          "yzhang.markdown-all-in-one",
          "DavidAnson.vscode-markdownlint",
          "pspester.pester-test",
          "ms-vscode.powershell",
          "bewhite.psrule-vscode",
          "streetsidesoftware.code-spell-checker",
          "redhat.vscode-yaml"
      ]
  }
  ```

- **launch.json**  
  This file contains configurations for debugging the project, allowing developers to set breakpoints and debug their code within VSCode.

  Example:

  > Use IntelliSense to learn about possible attributes.  
    Hover to view descriptions of existing attributes.  
    For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387

  ```json
  {
      "version": "0.2.0",
      "configurations": [
          {
              "name": "PowerShell: Launch Current File",
              "type": "PowerShell",
              "request": "launch",
              "script": "${file}",
              "args": []
          }
      ]
  }
  ```

- **settings.json**  
  This file contains workspace-specific settings for VSCode, such as formatting rules, linting configurations, and other preferences.

  Example:

  ```json
  {
      "[bicep]": {
          "editor.insertSpaces": true,
          "editor.tabSize": 2
      },
      "[json]": {
          "editor.insertSpaces": true,
          "editor.tabSize": 4,
          "editor.detectIndentation": false
      },
      "[markdown]": {
          "files.encoding": "utf8"
      },
      "[powershell]": {
          "editor.insertSpaces": true,
          "editor.tabSize": 4,
          "files.encoding": "utf8bom",
          "editor.formatOnSave": true
      },
      "[yaml]": {
          "editor.insertSpaces": true,
          "editor.tabSize": 2
      },
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.insertSpaces": true,
      "files.insertFinalNewline": true,
      "files.trimTrailingWhitespace": true,
      "markdown.extension.orderedList.marker": "one",
      "markdown.extension.tableFormatter.enabled": false,
      "markdownlint.config": {
          "MD007": {
              "indent": 4
          },
          "MD013": false,
          "MD025": {
              "front_matter_title": ""
          },
          "MD028": false,
          "MD033": false,
          "MD034": true,
          "MD041": false
      },
      "powershell.codeFormatting.autoCorrectAliases": true,
      "powershell.codeFormatting.newLineAfterCloseBrace": false,
      "powershell.codeFormatting.pipelineIndentationStyle": "IncreaseIndentationForFirstPipeline",
      "powershell.codeFormatting.preset": "OTBS",
      "powershell.codeFormatting.trimWhitespaceAroundPipe": true,
      "powershell.codeFormatting.useConstantStrings": true,
      "powershell.codeFormatting.useCorrectCasing": true,
      "powershell.codeFormatting.whitespaceBetweenParameters": true,
      "javascript.preferences.quoteStyle": "single",
      "typescript.preferences.quoteStyle": "single",
      "yaml.format.singleQuote": true
  }
  ```

### What's next

- [Part 1 - The Azure IaC directory structure template]({% link _posts/2024-09-24-azure-iac-directory-template-part-1.md %})
- [Part 2 - The Visual Studio Code configuration folder]({% link _posts/2024-09-25-azure-iac-directory-template-part-2.md %})
- [Part 3 - The Azure DevOps configuration folder]({% link _posts/2024-09-26-azure-iac-directory-template-part-3.md %})
- Part 4 - The workload deployments folder
- Part 5 - The Custom Verified Modules folder
- Part 6 - The source configuration folder
- Part 7 - The root configuration files

<!-- omit from toc -->
### Resources

- <a href="https://azure.github.io/PSRule.Rules.Azure" target="_blanc">PSRule for Azure</a>
- <a href="https://azure.github.io/Azure-Verified-Modules/" target="_blanc">Azure Verified Modules</a>
- <a href="https://github.com/Azure/ALZ-Bicep" target="_blanc">Azure Landing Zones - Bicep</a>
