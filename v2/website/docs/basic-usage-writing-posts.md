---
id: basic-usage-writing-posts
title: Writing Your 1st Post
---
Post are entries that display in reverse order on your home page. Post usually have comments fields beneath them and are included in your site's RSS feed.

## To write a post:

1. Log in to your mixcore CMS Administration Panel (Dashboard).
2. Click the 'Post' tab.
3. Hover the 'Create Post' sub-tab.
4. Start filling in the blanks: enter your post title in the upper field, and enter your post body content in the main post editing box below it.
5. As needed, input/select/fill-in general, SEO, parents, media, related,... and make other selections from the sections below the post. (Each of these sections is explained below.)
6. When you are ready, select **Published** button then press **Save** button from action navigation.

## Descriptions of Post Fields
[API Properties Document](https://api-docs.mixcore.org/api/Mix.Cms.Lib.ViewModels.MixPosts.ReadMvcViewModel.html#properties)

### Title/Headline
The title of your post. You can use any phrases, words or characters. Avoid using the same title twice as that will cause problems. You can use commas, apostrophes, quotes, hyphens/dashes and other typical symbols in the post like "My Site - Here's Lookin' at You, Kid". mixcore CMS will then clean it up to generate a user-friendly and URL-valid name of the post (also called the "post slug") to compose the permalink for the post.

### Excerpt 
A summary or brief teaser of your post featured on the front page of your site as well as on the category, archives, and search non-single post pages. Note that the Excerpt does not usually appear by default. It only appears in your post if you have modified the template file listing the post to use `model.excerpt` instead of `model.content` to display the Excerpt instead of the full content of a post. 

### Body Content
The blank box where you enter your writing, links, links to images, and any information you want to display on your site. You can use either the Visual or the Text view to compose your post. 

## Tabs

### General

1. Source URL
2. Tags

### SEO

1. Friendly Title:

   Google displays the entire title on the search results, which has 63 characters.

2. Meta Description:

   We recommend descriptions between 50–160 characters.

3. Friendly URL:

   Easy to read: Users and search engines should be able to understand what is on each page just by looking at the URL.Keyword-rich: Keywords still matter and your target queries should be within URLs. Just be wary of overkill; extending URLs just to include more keywords is a bad idea.Consistent: There are multiple ways to create an SEO-friendly URL structure on any site. It’s essential that, whatever logic you choose to follow, it is applied consistently across the site.

4. Meta Keywords:

   Do make sure your most important keywords for the webpage show up in the meta description. Often search engines will highlight in bold where it finds the searchers query in your snippet.

### Parents

1. Page parent:

   If the choosed page type is "List". All of the posts will display as a list inside the page. For example under "Blogs" page will contain a list of posts.

Example: 
- Blog
  - Food
    - Post 1
    - Post 2
   - Drink
      - Post 3

1. Module parent:

   If the choosed module type is "List". All of the posts will display as a list inside the module.

### Media

### Related

## Custom Fields (with admin permission only)

Custom Fields are default extra fields for post type. Fields structure & schema can be change by go to "Advanced" tab > Default Attributes

![Default Attributes](/img/post/advanced_default-attribute.jpg)

