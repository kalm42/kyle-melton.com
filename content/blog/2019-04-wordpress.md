---
slug: /why-not-to-use-wordpress
templateKey: blog-post
title: Why Not To Use WordPress
description: There are plenty of reasons people give to use WordPress, and by
  all means my opinion is just that. Also as with everything computer related
  "it depends". If you're stupid good with PHP then yeah you can get WordPress
  to do just about anything you want it to. This post isn't for you. This post
  is for everyone else. For those that don't know why many dislike WordPress
  (myself included).
tags:
  - brewing
  - chemex
thumbnail: /img/why-not-to-use-wordpress.png
date: 2019-04-09T15:04:10.000Z
---

# Why Not To Use WordPress

There are plenty of reasons people give to use WordPress, and by all means my opinion is just that. Also as with everything computer related "it depends". If you're stupid good with PHP then yeah you can get WordPress to do just about anything you want it to. This post isn't for you. This post is for everyone else. For those that don't know why many dislike WordPress (myself included).

1. WordPress' minimum PHP version is PHP 5.2

5.2 was released on January 6, 2006. As of today that's 13 years ago. For reference, that's the year that the Da Vinci Code movie came out. 5.2 became upsupported by the PHP group January 6, 2011, 8 years ago, and the year Thor was released. That's 8 years of security exploits to be found and not patched.

I'm not saying that you're using php 5.2, but do you know which version you are using or how to upgrade it if you are using 5.2? You might, you might not. I'm saying it's bad practice to let users make poor choices like running software on old, outdated, unsupported platforms.

2. Where in the codebase is X?

You want to change something, anything, it doesn't really matter what. Where do you find it? Is it in the Admin Dashboard, theme options, a plugin, in the template code, plugin code, both?

You can program a large amount of functionality in a theme to the point where you don't have any plugins, or you can have a lot of plugins and a sparse theme.

View and logic are not nicely seperated in WordPress as a result of this often it can be very difficult to find an error.

I have spent hours digging through code only to find a toggle 5-7 clicks deep that would have fixed it also. That's unacceptable.

3. Coding Standards

Maybe I'm just being picky (I'm not) but you should not be allowed to mix a object oriented programming (OOP) and functional programming.

The fact that this function is in their codebase.

```php
function __return_false() {
    return false;
}
```

It's a function that returns false. WHY? Why tf would you add that?

4. Templating

I've said it before but I'll say it again. You can program all of a plugin's functionality directly into a template (theme). No. Just no.

Their templating is so complex that they require not [1](https://i.stack.imgur.com/c1UYR.png), but [2](https://developer.wordpress.org/files/2014/10/template-hierarchy.png) complex diagrams to explain it.

5. Hacking target

As the number 1 Content Management System on the internet it is the number 1 target by hackers. Once an exploit is found there are hundreds of thousands of sites that are vulnerable.

I have seen small sites getting less than 50 requests a day suddenly be hit with hundreds of brute force attacks out of no where. I'll repeat that these were small, unpopular sites.

## The Good

It's not all bad. If you have no skill in web development then you can make a website. Need it to do something else, there's probably a plugin that does it. It won't do it well. It won't do it quickly. But ... it will do it. So if you're low on skill, and money. It does do the job, and honestly sometimes, that's good enough.

## Works Cited

- [PHP Unsupported Branches](https://www.php.net/eol.php)
- [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/)
- [WP Return False](https://developer.wordpress.org/reference/functions/__return_false/)
- [Complex Diagram 1](https://i.stack.imgur.com/c1UYR.png)
- [Complex Diagram 2](https://developer.wordpress.org/files/2014/10/template-hierarchy.png)
