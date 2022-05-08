# slidev-theme-vuestorefront

[![NPM version](https://img.shields.io/npm/v/slidev-theme-vuestorefront?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-vuestorefront)[![Netlify Status](https://api.netlify.com/api/v1/badges/6ec33b49-92d9-4315-bbf7-f222a4fae33e/deploy-status)](https://app.netlify.com/sites/slidev-theme-vuestorefront/deploys)

A Vue Storefront inspired theme for [Slidev](https://github.com/slidevjs/slidev).

Live demo: https://slidev-theme-vuestorefront.netlify.app/

### Features

* Pretty and full of awesomeness
* Code Highlighting with Material Theme
* SFC Playground Integration
* Flexible Default Layout using Grids
* Follow Vue Storefront designs

![Default](screenshots/named/default-title.png)

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>vuestorefront</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

> Note: I'm still in the process of adding more slide variations.

This theme provides the following layouts:

 - Default (improved w/grid)
 - BigPoints
 - Cover
 - Image Title
 - Section
 - Quote
 - SFC
 - Video
 - Grid Based Section
 - Outro

### Default

The default slide has a few tricks up it's sleeve.

It an of course be used as-is:

```frontmatter
---

# This will be the heading

And this can be used as test below it

-  We can have a list.
- With a few items.

---

```

But it can also have the title in a special row:

```frontmatter
---
contextTitle: "Vue Storefront 2"
name: Perfect acceleration
title: Perfect acceleration
text: "Best starting point for any eCommerce project.
Don’t waste months on repetitive groundwork and focus
on your own features & customization"
titleRow: true
cols: '1-1'
---

This content can now be styled/positioned independent of the title,
because it will be in a separate grid cell.

---
```

We can also do a quick column:

```frontmatter
---
cols: 1-1 # Other values: 2-1 or 1-2, as well as any valid grid-cols-* class from windiwcss
---

This will go in the left column

:::right:::

This will go into the right column

---
```

You can also combine this with the separate titleRow:

```frontmatter
---
contextTitle: "Vue Storefront 2"
name: Perfect acceleration
title: Perfect acceleration
text: "Best starting point for any eCommerce project.
Don’t waste months on repetitive groundwork and focus
on your own features & customization"
titleRow: true
cols: '1-1'
---

- Ready eCommerce theme
- Server-Side Rendering and JAM Stack
- Fast and scalable
- Fast, accessible, easy to customize

::right::

```html
<template>
  <h1>Hello World"</h1>
  <div class="message">{{ message }}</div>
</template>
<script>
  export default {
    data:() => ({
      message: 'Great to be here!',
    })
  }
</script>
<style scoped>
  .message {
    color: red;
  }
</style>
```

---
```frontmatter

### Cover

A Cover slide for the Talk Title & Subtitle
#### Example

![Screenshot of Cover Slide](./screenshots/default-title.png)

### Big Points

This slide type is much like the default slide, the main difference is that the content font-size is bigger and the content in centered.

Useful for slides that just contain a few points or sentences.

#### Example


```frontmatter
---
layout: big-points
titleRow: true
---

# Need to make a few big points?

- Increased font size...
- ...and centered content
- Also show badges <Badge type="info">info</Badge><Badge type="success">success</Badge><Badge type="warn">warn</Badge><Badge type="error">error</Badge><Badge type="default">default</Badge>
- help stressing a few points

```

![Screenshot of Big-Points Slide](screenshots/named/big-points.png)

### Section

This slide can be used to split your talks into sections. It's meant to only have a single heading.

![Section Slide](screenshots/named/section.png)

### Quote

Sometimes you want to drive home a point with a quote. This slide provides a nice way of doing that.

#### Example

```frontmatter
---
layout: quote
author: Bob Ross
---

# We don't make mistakes, just happy little accidents.

---
```

![Quote Slide](screenshots/named/quote.png)

### SFC (Single File Component Preview)

This template integrates the SF playground ([sfc.vuejs.org](https://sfc.vuejs.org)) which allows for live demos. It's usage requires a bit of preparation/config.


#### Config

```ts
// ./setup/main.ts
import { defineAppSetup } from '@slidev/types'

// use Vite's raw imports to get file content as string
// (see: https://vitejs.dev/guide/features.html#static-assets)
import Test from '../examples/Test.vue?raw'
import App from '../examples/App.vue?raw'
import Child from '../examples/Child.vue?raw'


interface Examples {
  [key: string]: string | {
    [key: string]: string
  }
}
const examples: Examples = {
  // for examples consisting of a single file,
  // just pass its content as value
  // File will be named App.vue
  Test: Test,
  // to construct an example from multiple files,
  // or have a custom name for the file,
  // pass an object where each key is the filename
  // and value is the file content string
  Multiple: {
    'App.vue': App,
    'Child.vue': Child,
  }
}

export default defineAppSetup(({ app }) => {
  // use app.provide to make all examples
  // available to the SFC Slide implementation
  app.provide('sfc-examples', examples)
})
```

### Usage

```frontmatter
---
layout: sfc
example: Test
---

# This will be the slide's title
```

#### Example

![Slide Example for SFC Playground](screenshots/named/sfc.png)

### Video
This layout can handle videos from YouTube, Vimeo, Dailymotion and Coub

![Slide for Videos](screenshots/named/video.png)

#### Example

```frontmatter
---
layout: video
video: https://www.youtube.com/watch?v=BRVhZcObPQU
---

# You can include Video!

---
```

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
