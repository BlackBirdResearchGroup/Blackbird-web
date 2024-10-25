# Blog Post Guidelines

Welcome to the Astro Blog! Follow these guidelines to ensure your posts are consistent and well-structured.

## Frontmatter

Each blog post should start with frontmatter to define metadata. Here's an example:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post"
author: "Your Name"
date: "YYYY-MM-DD"
draft: true
---
```

### Elements in Frontmatter

- **title**: The title of your blog post.
- **description**: A short summary of your post.
- **author**: Your name or username.
- **date**: The publication date in `YYYY-MM-DD` format.
- **draft**: Set to `true` if the post is a draft and should not be published yet.

For more details on frontmatter, refer to the [Astro documentation](https://docs.astro.build/en/guides/markdown-content/#frontmatter).

## Adding Titles

Use Markdown headers to add titles and subtitles to your post:

```markdown
# Main Title

## Subtitle

### Sub-subtitle
```

## Draft Posts

To create a draft post, set the `draft` field in the frontmatter to `true`. Draft posts will not be published until this field is set to `false`.

## Example Post

```markdown
---
title: "How to Use Astro"
description: "A guide on using Astro for your blog"
author: "Jane Doe"
date: "2023-10-01"
draft: false
---

# How to Use Astro

Astro is a modern static site generator. In this post, we'll explore its features and how to get started.

## Getting Started

To start using Astro, follow these steps:

1. Install Astro
2. Create a new project
3. Write your first post
```

## Contributing to the Blog

To contribute to the blog, make sure to check out the `blog` branch. Once your post is ready, create a pull request (PR) to merge it into the `main` branch. Follow these steps:

1. Clone the repository and checkout the `blog` branch:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   git checkout blog
   ```

2. Add your blog post in the appropriate directory.

3. Commit your changes and push them to the `blog` branch:

   ```sh
   git add .
   git commit -m "Add new blog post: <your-post-title>"
   git push origin blog
   ```

4. Create a pull request to merge your changes into the `main` branch.

Follow these guidelines to ensure your blog posts are clear, consistent, and ready for publication. Happy blogging!

For more information on using Astro, refer to the [Astro documentation](https://docs.astro.build/).
