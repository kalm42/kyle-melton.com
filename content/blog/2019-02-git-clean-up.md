---
slug: "2019-02-git-clean-up"
title: "Remove All Your Local Git Branches"
date: 2019-02-19T15:04:10.000Z
description: Clear up hard disk space by removing all your old git branches.
tags:
  - css
  - html
  - grid
templateKey: "blog-post"
thumbnail: /img/remove-all-your-local-git-branches.png
thumbnailAlt: Shopping cart full of trash atop of a pile of more rubbish.
---

# Remove All Your Local Git Branches

Why in the world would you want to do this?! Well, after you work on a few projects for a few months/years you tend to accrue a bunch of crud sitting in your `.git` folder.

Time to clean house. Well a little anyways.

```shell
git branch | egrep -v “(master|\*)” | xargs git branch -D
```

That will remove all branches but master and the one you’re currently on.

There are some nifty things you can do to integrate this into your workflow a little more.

You could add it as a git alias.

```shell
git config --global alias.clean-branches "!git branch | egrep -v “(master|\*)” | xargs git branch -D”
```

You could add more branches to not delete by changing the regular expression.

```shell
git branch | egrep -v “(master\|develop\|\*)” | xargs git branch -D
```

Have fun with it. I mean, this is supposed to be fun.

I hope this helps. If it did, let me know.
