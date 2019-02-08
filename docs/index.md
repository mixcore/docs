---
id: intro
title: Getting Started
---
# mixcore

![Mixcore CMS](https://github.com/mixcore/mix.core/blob/master/assets/mixcore.png?raw=true "What is Mixcore CMS?")

## Buid status:
| Build server| Platform       | Status      |
|-------------|----------------|-------------|
|Travis       | Linux / MacOS  |[![Build Status](https://travis-ci.org/mixcore/mix.core.svg?branch=master)](https://travis-ci.org/mixcore/mix.core) |
|Appveyor      | Windows/Vs2017 |[![Build status](https://ci.appveyor.com/api/projects/status/dup0f5a09j58ud8s?svg=true)](https://ci.appveyor.com/project/Smilefounder/swastika-core)|

## Tutorials
- Demo: http://dev.mixcore.org
- Docs: https://docs.mixcore.org
- Youtube: https://www.youtube.com/channel/UChqzh6JnC8HBUSQ9AWIcZAw

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Note: This project is under heavy construction and is not intended for general production use yet. As such, we are not accepting bugs at the moment and documentation is quite lacking.

### Prerequisites

What things you need to install the software and how to install them

* [.NET](https://www.microsoft.com/net/core) - .NET Core framework
* [Visual Studio Community 2017](https://www.visualstudio.com/downloads/) - Free, fully-featured IDE for students, open-source and individual developers
* [SQL Server 2016+](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) - Database server


### GITs clone

```bash
mkdir mixcore
cd mixcore

git clone https://github.com/mixcore/mix.heart.git
git clone https://github.com/mixcore/mix.identity.git
git clone https://github.com/mixcore/mix.core.git
```

### Build & Run

```bash
cd mix.core/src/Mix.Cms.Web

npm install
gulp build
dotnet restore
dotnet bundle
dotnet build
dotnet run
```

> *Note:* If you facing any System.Data.SqlClient.SqlException error, please replace all content inside "appsettings.json" file with "{}".

Now you can access the site from your localhost (e.g. http://localhost:5000)

> *Note:* Please read the step how to prepare MS SQL Server Database [here](/installing?id=step-2-create-the-database-and-a-user).

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

## Thanks to

This project has been developed using:
* [Creative Tim](https://www.creative-tim.com/)
* [Bootstrap](https://getbootstrap.com/)
* [BrowserStack](https://www.browserstack.com/)
* [Micon](http://xtoolkit.github.io/Micon/icons/)
* [.NET](https://www.microsoft.com/net/core)
* [Designed by Freepik](https://www.freepik.com)
* And more...

## Tags
> Asp.Net Core CMS, Asp.Net Core MVC CMS, C# Core CMS, NetCoreCMS, Core CMS, Modular Architecture, CMS Theme, CMS Widget, Multilangual CMS, .Net CMS Platform, .Net CMS Open Source, .Net CMS Comparison 2017, .Net CMS System, .Net CMS Framework, .Net CMS Open Source MVC, .Net CMS tools, .Net CMS website, Content Management System, Blog Engine, DotNet Core,