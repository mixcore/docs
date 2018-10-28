---
title: All about mixcore
author: smilefounder
description: mixcore is free, open source and cross-platform CMS based on ASP.NET Core (Dotnet Core). It is built using the best and the most modern tools and languages (Visual Studio 2017, C# etc).
manager: Smilefounder
ms.author: mixcore Team
ms.custom: mvc
ms.date: 04/16/2018
ms.prod: asp.net-core
ms.technology: aspnet core
ms.topic: tutorial
uid: client-side/swastika-io/index
---
# mixcore

mixcore is free, open source and cross-platform CMS based on ASP.NET Core (Dotnet Core). It is built using the best and the most modern tools and languages (Visual Studio 2017, C# etc). Be the best and join our team!

[![Gitter](https://badges.gitter.im/mixcore/mix.core.svg)](https://gitter.im/mixcore/mix.core?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSwastika-IO%2FSwastika-IO-Core.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FSwastika-IO%2FSwastika-IO-Core?ref=badge_shield)
[![CodeFactor](https://www.codefactor.io/repository/github/mixcore/mix.core/badge)](https://www.codefactor.io/repository/github/mixcore/mix.core)
[![codecov](https://codecov.io/gh/mixcore/mix.core/branch/master/graph/badge.svg)](https://codecov.io/gh/mixcore/mix.core)
[![codebeat badge](https://codebeat.co/badges/dcd5aeaf-f8d5-412e-bc22-e937ccf3a698)](https://codebeat.co/projects/github-com-smileway-swastika-io-core-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bbd56b2b0e1f4711a83dfe61181ed894)](https://www.codacy.com/app/Smilefounder/Swastika-IO-Core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mixcore/mix.core&amp;utm_campaign=Badge_Grade)
[![Sonarcloud](https://sonarcloud.io/api/project_badges/measure?project=Swastika.Core&metric=alert_status)](https://sonarcloud.io/dashboard?id=Swastika.Core)

## Buid status:
| Build server| Platform       | Status      |
|-------------|----------------|-------------|
|Travis       | Linux / MacOS  |[![Build Status](https://travis-ci.org/mixcore/mix.core.svg?branch=master)](https://travis-ci.org/mixcore/mix.core) |
|Appveyor      | Windows/Vs2017 |[![Build status](https://ci.appveyor.com/api/projects/status/dup0f5a09j58ud8s?svg=true)](https://ci.appveyor.com/project/Smilefounder/swastika-core)|

- Docs: [http://docs.mixcore.org](http://docs.mixcore.org)
- Demo: [http://demo.mixcore.org](http://demo.mixcore.org) | [https://www.mixcore.org](https://www.mixcore.org)
- Screenshot:  
  - **Default template:**
![mixcore CMS default template with Now UI Pro](https://github.com/mixcore/mix.core/blob/master/docs/_images/readme/Swastika-IO-Default-Template-Now-UI-Pro-800px.gif?raw=true "mixcore CMS default template with Now UI Pro")
  - **Admin Portal:**
![mixcore Admin Portal Bootstrap 4](https://swastika-io.github.io/Swastika-IO-Admin/img/white.png "mixcore Admin Portal Bootstrap 4")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Note: This project is under heavy construction and is not intended for general production use yet. As such, we are not accepting bugs at the moment and documentation is quite lacking.

### Prerequisites

What things you need to install the software and how to install them

* [.NET](https://www.microsoft.com/net/core) - .NET Core framework
* [Visual Studio Community 2017](https://www.visualstudio.com/downloads/) - Free, fully-featured IDE for students, open-source and individual developers
* [SQL Server 2016+](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) - Database server

### Installing

1. Download the source code from [Github](https://github.com/mixcore/mix.core)
2. Restore dotnet core Nuget's packages

```bash
cd [github-project-folder]\src\Mix.Cms.Web]
dotnet restore
```

3. Build dotnet core packages

```bash
cd [github-project-folder]\src\Mix.Cms.Web]
dotnet build
```

4. Then run! That it's!

```bash
cd [github-project-folder]\src\Mix.Cms.Web]
dotnet run
```

5. Now you can access the site from your localhost (e.g. http://localhost:58511)

Or just simple click "_run.bat" file inside "[github-project-folder]\src\Mix.Cms.Web" folder. :)

Note: Please read the step how to prepare MS SQL Server Database [here](/installing?id=step-2-create-the-database-and-a-user).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mixcore/mix.core/tags). 

## Authors

* **Smileway Team** - *Initial work* - [Smileway.co](http://www.smileway.co)

See also the list of [contributors](https://github.com/mixcore/mix.core/graphs/contributors) who participated in this project.

## References
(TBC)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSwastika-IO%2FSwastika-IO-Core.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FSwastika-IO%2FSwastika-IO-Core?ref=badge_large)

## Thanks to

This project has been developed using:
* [Creative Tim](https://www.creative-tim.com/)
* [Bootstrap](https://getbootstrap.com/)
* [BrowserStack](https://www.browserstack.com/)
* [Micon](http://xtoolkit.github.io/Micon/icons/)
* [.NET](https://www.microsoft.com/net/core)
* And more...

## Tags
Asp.Net Core CMS, Asp.Net Core MVC CMS, C# Core CMS, NetCoreCMS, Core CMS, Modular Architecture, CMS Theme, CMS Widget, Multilangual CMS, .Net CMS Platform, .Net CMS Open Source, .Net CMS Comparison 2017, .Net CMS System, .Net CMS Framework, .Net CMS Open Source MVC, .Net CMS tools, .Net CMS website, Content Management System, Blog Engine, DotNet Core,