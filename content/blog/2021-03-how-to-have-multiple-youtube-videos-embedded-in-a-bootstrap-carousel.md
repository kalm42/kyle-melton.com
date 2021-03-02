---
templateKey: blog-post
title: How to have multiple YouTube video's embedded in a Bootstrap Carousel
description: A friend reached out to me for assistance with the JavaScript on
  this. I thought I would share the final code and how it works so that others
  could use it. I want a slideshow with multiple YouTube videos. When the user
  is on a slide that is showing a YouTube video the video should play and no
  other video should be playing. When the user is on a slide without a video
  then no video should be playing.
tags:
  - bootstrap
thumbnail: /img/bootstrap-carousel.png
thumbnailAlt: People enjoying a carousel.
date: 2021-03-01T01:17:49.820Z
---

A friend reached out to me for assistance with the JavaScript on this. I thought I would share the final code and how it works so that others could use it.

## The Ask

I want a slideshow with multiple YouTube videos. When the user is on a slide that is showing a YouTube video the video should play and no other video should be playing. When the user is on a slide without a video then no video should be playing.

Some of that might seem silly to state but it is important to clearly state everything that software should do and how it should act.

## The Solution

First the HTML for the slides.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Image & Youtube Video Carousel For Bootstrap 4 Example</title>
    <link
      href="https://www.jqueryscript.net/css/jquerysctipttop.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./style.css" />
    <script src="./index.js"></script>
  </head>
  <body>
    <div class="container contenedor-slide">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://source.unsplash.com/Be8TdJZPaBE/1280x720"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://source.unsplash.com/0crv9tTkzhk/1280x720"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://source.unsplash.com/8LWtpfhGP4U/1280x720"
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <div
              class="carousel-video-inner embed-responsive embed-responsive-16by9"
            >
              <div
                class="video-player"
                id="player1"
                data-video-id="dOy7vPwEtCw"
              ></div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="carousel-video-inner embed-responsive embed-responsive-16by9"
            >
              <div
                class="video-player"
                id="player2"
                data-video-id="QWtsV50_-p4"
              ></div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </body>
</html>
```

Pretty basic HTML. We import some styling, jquery, popper, and lastly our JavaScript. The Bootstrap carousel is all standard. The interesting bits are the two YouTube video containers.

Here are the interesting bits.

```html
<div class="carousel-video-inner embed-responsive embed-responsive-16by9">
  <div class="video-player" id="player1" data-video-id="dOy7vPwEtCw"></div>
</div>
```

It is important that all the video placeholders have the same class and have a [`data-`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) attribute. That's what we're going to use to get the video id from the element. Lastly they must have a unique `id`.

```javascript
// index.js
const videos = []
const tag = document.createElement("script")
const firstScriptTag = document.getElementsByTagName("script")[0]

tag.src = "https://www.youtube.com/iframe_api"
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// YouTube wants this function, don't rename it
function onYouTubeIframeAPIReady() {
  const slides = Array.from(document.querySelectorAll(".carousel-item"))
  slides.forEach((slide, index) => {
    // does this slide have a video?
    const video = slide.querySelector(".video-player")
    if (video && video.dataset) {
      const player = createPlayer({
        id: video.id,
        videoId: video.dataset.videoId,
      })
      videos.push({ player, index })
    }
  })
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    videoId: playerInfo.videoId,
    playerVars: {
      showinfo: 0,
    },
  })
}

function theBigPause() {
  videos.map(video => video.player.pauseVideo())
}

$(function () {
  $(".carousel").on("slide.bs.carousel", function (e) {
    theBigPause()
    const next = $(e.relatedTarget).index()
    const video = videos.filter(v => v.index === next)[0]
    if (video) {
      video.player.playVideo()
    }
  })
})
```

First we make an array to hold references to the videos so that we can interact with them later.

Secondly we use JavaScript to add the YouTube iframe api to the DOM. We use JavaScript to ensure that JavaScript is enabled. If JavaScript isn't enabled, this doesn't run and the script isn't downloaded saving an unnecessary call.

When the page is loaded the iframe api gets added to the DOM, the variables, and the functions are read by the interpreter into memory including the immediately invoked function expression (IIFE). The IIFE registers a callback function for when the bootstrap carousel slide changes.

Then the YouTube iframe api will finish loading and it will run the `onYouTubeIframeAPIReady` function. That function gathers all of the slides video and non-video alike.

Then it loops over each slide. On each slide it does a scoped query for a video. If there's a video then the variable is a reference to that node. If there isn't a video then the variable is undefined.

Undefined is a falsy value so the if statement will not be run and we would move on to the next slide. If there is a video, a node reference is a truthy value so the jit compiler would proceed to check if that node reference had a dataset attached to it. If there is, because you remembered to add the `data-` attribute, then the if statement is ran.

We pass to a small helper function an object with two properties. `id` and `videoId`. We get that information from the video DOM node. That function returns a reference to the new player instance created.

We take the player reference and the index of the slide array the player relates to and add them as attributes of an object to the videos array. This gives us an array of all videos, and the slide number that video is in.

Remember this is all done as the page is loading. So now that the video placeholders have been swapped out for the iframes and we have a collection of them we can look at what happens when a user changes the slide.

This is all handled by the IIFE at the bottom. The first thing it does when the slide changes is make sure all videos are _not_ playing. The `theBigPause` function loops through our videos array grabs the reference to the video player and programmatically pauses the video.

The next thing it does is get the index number of the slide we're going to.

Then we filter our videos array to find the one with the matching index. If the slide we're going to has a video then the filter will return an array with 1 entry otherwise the array will be empty. This means our video variable will be either undefined (no video) or defined (has a video). Defined is a truthy value and undefined is a falsy value. If it's defined we play the video otherwise there's nothing to do and we can exit the function.

That's it. I hope that helps. Give me a shout-out on twitter if it did. @kalm42
