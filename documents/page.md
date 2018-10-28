---
title: Page section - mixcore
author: smilefounder
description: mixcore is free, open source and cross-platform CMS based on ASP.NET Core (Dotnet Core). It is built using the best and the most modern tools and languages (Visual Studio 2017, C# etc).
manager: Smilefounder
ms.author: mixcore Team
ms.custom: mvc
ms.date: 04/16/2018
ms.prod: asp.net-core
ms.technology: aspnet core
ms.topic: tutorial
uid: client-side/swastika-io/page
---
# Pages

In mixcore CMS, you can put content on your site as either a "article" or a "page". When you're writing a regular blog entry, you write a article. Articles, in a default setup, appear in reverse chronological order on your blog's home page.

In contrast, pages are generally for non-chronological, hierarchical content: pages like "About" or "Contact" would be common examples. See below for examples of subpages in a hierarchy. Pages live outside of the normal blog chronology, and are often used to present timeless information about yourself or your site -- information that is always relevant. You can use Pages to organize and manage the structure of your website content.

In addition to the common "About" and "Contact" pages, other examples include "Copyright", "Disclosure", "Legal Information", "Reprint Permissions", "Company Information" or "Accessibility Statement".

In general, pages are very similar to articles in that they both have titles and content. mixcore CMS Theme template files maintain a consistent look throughout your site. Pages, though, have several key distinctions that make them different from articles.

# What Pages Are

- Pages are for content that isn't specifically time-dependent, or which isn't "blog or article content".
- Pages can be organized into pages and subpages.
- Pages can use different Page Templates, including template files, Template Tags and other ASP code.
- More sophisticated themes may provide a wider range of adjustments or display options for individual pages.
- It's quite possible to make a website using mixcore CMS which only contains pages.

# What Pages Are Not
- Pages are not articles, so they don't appear in the time-structured views within a blog or article section of a website.
- Pages cannot be associated with Categories, but they can be assigned Tags. However, Tags on Pages are not included in lists displayed via the "tag" permalink.
- The organizational structure for Pages comes from hierarchical interrelationship, not from a system of categorization. (e.g. Tags or Categories.)
- Pages are not files. They are stored in your database, just like articles.
- Although you can put Template Tags and ASP.NET code into a Page Template file, you cannot put these into the Page or Post content without using a mixcore CMS Plugin. But be careful: integrating ASP.NET code directly into page or article content may introduce a security problem, or an unexpected error on your website.
- Pages are not included in your site's "feeds". (e.g. RSS or Atom.)
- Pages and Articles can be interpreted differently by site visitors and by search engines. Commonly, search engines place more relevance to time-dependent site content - articles - because a newer article on a topic may be more relevant than a static page.
- A specific page (or a specific article) can be set as a static front page. Websites which are set up in this way usually have a secondary page defined on which the latest blog articles are displayed.

# How to create a page?

To create a new Page, log in to your mixcore CMS installation with sufficient admin privileges to create new pages. Select the **Pages > Create** Page option to begin writing a new Page.

 ![Pages > Create Page](https://raw.githubusercontent.com/mixcore/mix.core-Docs/master/docs/documents/_images/page/create-page.png)

# Organizing Your Pages

Just as you can have subcategories within your Categories, you can also have subpages within your Pages, creating a hierarchy of pages.

For example, a mixcore CMS site for a travel agent may feature an individual Page for each continent and country to which the agency can make travel arrangements. Under the Page titled "Africa" would be subpages for Cameroon, Lesotho, Swaziland and Togo. Another parent Page "South America" would feature subpages of Argentina, Brazil and Chile.

The structure of the pages on the site would then look like this.

- Africa
  - Cameroon
  - Lesotho
  - Swaziland
  - Togo

- South America
  - Argentina
  - Brazil
  - Chile

## To create a subpage

1. Go to Administration > Pages > Create Page.
2. In the "Plug & Play" section, click the "Set Parent" tab menu. Then you will see a list of all the Pages already created for your site.
3. Select the appropriate parent Page to make the current Page a child Page.
5. Add content to the subpage.
6. Click Publish when ready.

![To create a subpage](https://raw.githubusercontent.com/mixcore/mix.core-Docs/master/docs/documents/_images/page/set-parent-pages.png)

# Changing the URL of Your Pages

(TBC)

## Creating a List of Pages

(TBC)

# Page Templates