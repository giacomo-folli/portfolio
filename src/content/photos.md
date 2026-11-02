---
title: photos
slug: photos
published_date: 2026-01-26T08:20:00+00:00
publish: true
discoverable: true
is_page: true
meta_description: Some pics I've taken throught time
lang: en
---

<p>
I like to take photos sometimes. Some of them are also <a href="https://unsplash.com/@giacomofolli" class="squiggly">on unsplash</a>
</p>

<div class="container">
    <div class="row first">
        <img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/paco/chamonix_09-7.webp" alt="Image 1" style="flex-basis: 200px;">
        <img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/paco/chamonix_09-11.webp" alt="Image 2">
    </div>
    <div class="row">
        <img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/paco/chamonix_09-32.webp" alt="Image 3">
        <img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/paco/img_1741.webp" alt="Image 4">
        <img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/paco/img_1768.webp" alt="Image 5">
    </div>
</div>

<style>
     .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 100%;
    }
    .row {
        display: flex;
        gap: 10px;
        width: 100%;
        flex-wrap: wrap;
    }
    .row img {
        flex: 1;
        min-width: 0;
        height: 350px;
        object-fit: cover;
    }
    .first img {
        height: 330px;
    }
</style>
