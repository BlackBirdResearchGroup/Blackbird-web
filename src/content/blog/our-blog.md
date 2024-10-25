---
title: Astro- What Powers our Blog
author: Blackbird Research Club
pubDatetime: 2024-10-25T00:00:00Z
slug: astro-what-powers-our-blog
featured: true
draft: false
tags:
  - Software Development
  - Carleton University
  - Student Club
description: "An introduction to Astro, the modern static site generator that powers our blog, and how it enables us to create fast, dynamic, and accessible websites."
---

# Building Our Blog with Astro Paper

In this post, we'll discuss how our blog is built using the Astro Paper template and how you can contribute to it.

## Why Astro Paper?

Astro Paper is a minimal, responsive, and SEO-friendly blog theme for Astro. It provides a clean and modern design, making it easy to focus on content creation without worrying about the underlying infrastructure.

## Getting Started with Astro Paper

To get started with Astro Paper, follow these steps:

1. **Clone the Repository**: First, clone the Astro Paper repository to your local machine.

   ```sh
   git clone https://github.com/satnaing/astro-paper.git
   cd astro-paper
   ```

2. **Install Dependencies**: Next, install the project dependencies using npm or yarn.

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. **Start the Development Server**: Finally, start the development server to preview your blog locally.

   ```sh

   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

   Your blog should now be running at `http://localhost:3000`.

## Contributing to Our Blog

We welcome contributions to our blog! Follow these guidelines to ensure your posts are consistent and well-structured.

### Frontmatter

Each blog post should start with frontmatter to define metadata. Here's an example:

```markdown
---
title: "How to Use Astro"
description: "A guide on using Astro for your blog"
author: "Jane Doe"
date: "2023-10-01"
draft: false
---
```

Our Blog has a few more meta tags, such as `featured` and `tags`, which you can use to categorize your posts.
It also makes it easier to find in our Search Page for users, so be sure to include them in your posts!

```markdown
---
title: "How to Use Astro"
description: "A guide on using Astro for your blog"
author: "Jane Doe"
date: "2023-10-01"
draft: false
featured: true
tags:
  - Astro
  - Static Site Generator
---
```

### Adding Titles

Use Markdown headers to add titles and subtitles to your post:

```markdown
# Main Title

## Subtitle

### Sub-subtitle
```

### Submitting Your Post

To contribute to the blog, make sure to check out the blog branch. Once your post is ready, create a pull request (PR) to merge it into the main branch. Follow these steps:

- Clone the repository and checkout the blog branch:

```sh
git https://github.com/BlackBirdResearchGroup/Blackbird-web
cd Blackbird-web
git checkout blog
```

- Add your blog post in the appropriate directory.
  `sh
cd src/content/blog`
- Commit your changes and push them to the blog branch:

```sh
git add .
git commit -m "Add new blog post: <your-post-title>"
git push origin blog
```

- Create a pull request on GitHub to merge your changes into the main branch.

That's it! Your post will be reviewed by our team and published on our blog once approved.

Stay tuned for more updates and exciting projects from the Blackbird Research Club!
