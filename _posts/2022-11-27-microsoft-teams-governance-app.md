---
layout: post
title: Teams Governance App
author: Martin Swinkels
categories: [Microsoft-365, Portfolio]
tags: azure powerapps powerautomate low-code alm powershell sharepoint microsoftteams
image: https://msc365.eu/assets/img/posts-teams-app-my.png
comments: false
published: false
---

At many companies, Microsoft Teams is not being used to its full potential regarding team collaboration. Often organizations don't even allow self-serviced team creation, because they fear the consequences of everything that will be created, without compromising security, compliance, and retention policies.

For a customer project I opened up Microsoft's Teams potential to provide users a self-service provisioning tool to create ad-hoc teams when needed. This is done by respecting the customer's governance, security and compliance policies, which is not being respected when you allow all users to create teams through the Microsoft Teams setting.

<div class="note">
    <p><strong>Note</strong>: The 'Teams Governance App' is a Power App for Microsoft Teams that optimizes new team creation for business users. Just contact me and I will be happy to put you in touch with the company for which I developed this beautiful solution.</p>
</div>

<br>

<a href="https://msc365.eu/assets/img/posts-teams-app-wizard.png" target="_blanc"><img alt="wizard dialog" src="https://msc365.eu/assets/img/posts-teams-app-wizard.png" width="1024"/></a>

<small>Wizard guided dialog</small>

### Requirements

- The app must support standardization and best practices when creating a new team instances through the integration of:
  - A wizard guided request form
  - An embedded approval process
  - A request status dashboard
  - Automated team builds based on Microsoft 365 Groups
- Must respect customer's governance, security and compliance policies
- Must be easy to implement and update
- Must be prepaired to productize

### Business value

- More collaboration throughout the organization (with external guest in a later stage)
- Higher productivity due to easy and ad-hoc team collaboration setup
- A standardized process of teams creation that respects customer's governance, security and compliance policies
- Less work and need for knowledge at operations/servicedesk

### Considered alternatives

Manual creation of teams for the whole organization by a selected group of users, with at least Microsoft Teams Admin privileges. This selected group will need to manually:

- Check unique alias availability (for AAD Group, Email, SharePoint URL, etc.)
- Create a MS 365 Group
- Create a Microsoft Team
- Check created MS group, team and SharePoint site
- Communicate with requester
- Deliver created team to requester
- Support call administration

This selected group should have basic understanding and knowledge about Azure Services, Azure AD, MS 365 Groups, Security, Microsoft Teams, SharePoint Online, governance, security and compliance policies.

### Microsoft App Templates

Furthermore I did explore the (open source) Request-a-team App Template from Microsoft.

Pros:

- Great example for understanding the process
- No need to design most of the requirements

Cons:

- Large footprint due to many implementation steps
- Depends on community development speed and resolving issues on the backlog
- No 100% match with customers own requirements
- Does not follow customer development guidelines
- Not intended to productize and monetize

### Tools and technologies

- Power Apps
- Power Automate
- SharePoint Online
- PnP Microsoft 365
- Azure Logic Apps
- Azure ARM
- Azure Web App
- Azure Key Vault
- Microsoft PowerShell
- Microsoft Graph API
- Azure DevOps (Source Control, Wiki, Backlogs and Boards)

### Third-party resources

- The (open source) [Request-a-team App Template](https://github.com/OfficeDev/microsoft-teams-apps-requestateam) from Microsoft.

### Preview images

<a href="https://msc365.eu/assets/img/posts-teams-app-my.png" target="_blanc"><img alt="request overview" src="https://msc365.eu/assets/img/posts-teams-app-my.png" width="1024"/></a>

<small>User request overview</small>

<a href="https://msc365.eu/assets/img/posts-teams-app-approvals.png" target="_blanc"><img alt="admin approval dialog" src="https://msc365.eu/assets/img/posts-teams-app-approvals.png" width="1024"/></a>

<small>Admin approval dialog</small>

<a href="https://msc365.eu/assets/img/posts-teams-app-message.png" target="_blanc"><img alt="responsive cards" src="https://msc365.eu/assets/img/posts-teams-app-message.png" width="1024"/></a>

<small>Responsive cards</small>

<a href="https://msc365.eu/assets/img/posts-teams-app-script.png" target="_blanc"><img alt="PnP automation" src="https://msc365.eu/assets/img/posts-teams-app-script.png"/></a>

<small>PowerShell deployment script</small>
