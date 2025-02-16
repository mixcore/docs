---
id: installation-before-you-install
title: Before You Install
---

Mixcore CMS is well-known for its ease of installation. Under most circumstances, installing Mixcore CMS is a very simple process and takes less than five minutes to complete. To install Mixcore CMS yourself, the following guide will help.

## Things to Know Before Installing

Before you begin the install, there are a few things you need to have and do.

These are:

- Hosting with IIS or VPS.
- Access to your web server (eg. FTP, Remote Desktop...)
- Ability to create [MS SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database) databases
- A [text editor](https://notepad-plus-plus.org/)
- An [FTP Client](https://filezilla-project.org/)
- Your web browser of choice

## Things You Need to Do to Install

Begin your installation by:

1. Checking to ensure that you and your web host have the minimum requirements to run Mixcore CMS. [Host and deploy ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-3.1)
2. Downloading the most current version of Mixcore CMS.
3. Unzipping the downloaded file to a folder on your hard drive.
4. Creating a secure password for your Secret Key during install/setup the site.
5. Keeping this webpage open so you have it handy during the installation.

## Famous 5-Minute Installation

Here's the quick version of the instructions for those who are already comfortable with performing such installations. More detailed instructions follow.

1. Download and unzip the Mixcore CMS package if you haven't already.
2. Create a database for Mixcore CMS on your web server, as well as a MS SQL Server Database user who has all privileges for accessing and modifying it.
3. (Optional) Find and delete existing appsettings.json file if you want to re-install the site from initinal step. (TBC)
4. Upload the Mixcore CMS files to the desired location on your web server:
    - If you want to integrate Mixcore CMS into the root of your domain (e.g. http://example.com/), move or upload all contents of the unzipped Mixcore CMS directory (excluding the Mixcore CMS directory itself) into the root directory of your web server.
    - If you want to have your Mixcore CMS installation in its own subdirectory on your website (e.g. http://example.com/blog/), create the blog directory on your server and upload the contents of the unzipped Mixcore CMS package to the directory via FTP.
   Note: If your FTP client has an option to convert file names to lower case, make sure it's disabled.

5. Run the Mixcore CMS installation script by accessing the URL in a web browser. This should be the URL where you uploaded the Mixcore CMS files.
    - If you installed Mixcore CMS in the root directory, you should visit: http://example.com/
    - If you installed Mixcore CMS in its own subdirectory called blog, for example, you should visit: http://example.com/blog/

That's it! Mixcore CMS should now be installed.

## Detailed Instructions
### Step 1: Download and Extract
Download and unzip the Mixcore CMS package from [https://github.com/mixcore/mix.core/releases](https://github.com/mixcore/mix.core/releases).

 - If you will be uploading Mixcore CMS to a remote web server, download the Mixcore CMS package to your computer with a web browser and unzip the package.
 - If you will be using FTP, skip Step 2 and go to the next step - uploading files is covered later.

### Step 2: Create the Database and a User

If you are using a hosting provider, you may already have a Mixcore CMS database set up for you, or there may be an automated setup solution to do so. Check your hosting provider's support pages or your control panel for clues about whether or not you'll need to create one manually.

If you determine that you'll need to create one manually, follow the instructions for accessing phpMyAdmin/Sql Studio Management on various servers, or follow the instructions for Using Plesk, Using cPanel or Using phpMyAdmin/Sql Studio below.

If you are installing Mixcore CMS on your own web server, follow the Using phpMyAdmin or Using the MySQL Client or SQL Studio Management instructions below to create your Mixcore CMS username and database.

If you have only one database and it is already in use, you can install Mixcore CMS in it - just make sure to have a distinctive prefix for your tables to avoid over-writing any existing database tables.

#### Using Plesk

Note: Plesk recommends all users to install and manage Mixcore CMS using the Mixcore CMS Toolkit. However, if you wish to install Mixcore CMS manually, follow these steps to create a database:

1. Log in to Plesk.
2. In the upper right corner of the screen, click Databases.
3. Click Add Database.
4. Type in the database name.
5. Type in the database user name and password, and then click Ok.
6. Once the database has been created, click Connection info to see the information you will need to connect to the database (database server hostname and port, database name, and the database user name).

[![Create Database via Pleak](http://img.youtube.com/vi/XzJEfh8I9ek/0.jpg)](http://www.youtube.com/watch?v=XzJEfh8I9ek "Create Database via Plesk")

### Step 3: Set up appsettings.json (optional)
(TBD)

### Step 4: Upload the files

Now you will need to decide where on your domain you'd like your Mixcore CMS-powered site to appear:

- In the root directory of your website. (For example, http://example.com/)
- In a subdirectory of your website. (For example, http://example.com/blog/). How to setup app in subfolder with [IIS](https://docs.microsoft.com/en-us/iis/configuration/system.applicationhost/sites/site/application/).

**Note:** The location of your root web directory in the filesystem on your web server will vary across hosting providers and operating systems. Check with your hosting provider or system administrator if you do not know where this is.

#### In the Root Directory
- If you need to upload your files to your web server, use an FTP client to upload all the contents of the Mixcore CMS directory (but not the directory itself) into the root directory of your website.
- If your files are already on your web server, and you are using shell access to install Mixcore CMS, move all of the contents of the Mixcore CMS directory (but not the directory itself) into the root directory of your website.

#### In a Subdirectory
- If you need to upload your files to your web server, rename the Mixcore CMS directory to your desired name, then use an FTP client to upload the directory to your desired location within the root directory of your website.
- If your files are already on your web server, and you are using shell access to install Mixcore CMS, move the Mixcore CMS directory to your desired location within the root directory of your website, and rename the directory to your desired name.

**Note:** If your FTP client has an option to convert file names to lower case, make sure it's disabled.


