---
title: Quieter by design
slug: quieter-by-design
date: 2026-03-06
tags: idea
published: false
description: A couple of small changes to how notifications and data work could make a real difference.
# meta_image: https://pixelfed.social/storage/m/_v2/922948153550144730/a1431798c-70628a/hg5ybGTUis4Z/rnEhOPBCMvENuCyLk0GbOU0PZozmsflpuc78fLJi.webp
lang: en
---

_last edited {{ post_last_modified }} ago_

Social media has an attention problem, everyone knows it, and yet the design stays the same. I've been thinking about two small structural changes that might actually help, without dismantling what makes these platforms useful in the first place.

---

### Notifications on a schedule

What if you picked one moment in the day to receive everything and the rest of the day was just quiet? Say 8pm. You open the app, a digest arrives, you catch up. Then you close it.

The underlying assumption is that most social media communication isn't urgent. If a friend really needs you, they call or text through a different channel. Nobody is waiting on you to respond to a meme within the hour. I'm not sure everyone would agree (some people do use DMs for things that feel time-sensitive) but I think it holds for most interactions, most of the time.

The more interesting part is what this does to the checking habit. A lot of compulsive phone-picking isn't really about expecting something important. It's more like a reflex, a small anxiety looking for relief. If you genuinely know nothing is coming until the evening, that loop might lose some of its grip. Or maybe you'd just find another way to fill the gap. Hard to say.

> This can already be achieved by setting up some automations on your phone. But why not push social platforms to embrace this natively? Why not make it a feature?

---

### Choosing what data you share

Since my last digital detox, the only way I've been getting news from the internet is through RSS. I've grown to love how it works, since I'm the one who decides what comes through.

That got me thinking about a social platform built on a similar idea: one where you don't just choose _what_ content you subscribe to, but also _what that content looks like_. 
Just the post body, or the body with likes, or likes and views too... you pick. And it could work both ways: if I don't want to share the comment count or likes on my posts, I simply leave them out of my feed.

Something like this:
```xml
<feed xmlns="http://www.w3.org/2005/Atom">
  <profile>
    <name>paco</name>    
    <handle>@paco34</handle>
  </profile>
  <!-- Other Feed/Profile Specific Data... -->

  <!-- Entries -->
  <entry>
    <id>#ABC123</id>
    <published>2026-02-06</published>
    <link href="https://www..." rel="alternate" />

    <!-- Some content -->
    <content> blablabla/picture... </content>
    <interactions>
	    <likes>15</likes>
	    <!-- Additional interactions -->
    </interactions>
  </entry>
  
  <!-- ... -->
</feed>
```

The idea is that you'd use templates to define what gets shared (*eg: one with everything included, one with just the post content and profile info, etc...*). You choose what you put on the network.

The same logic applies to what you consume. You could parse someone else's feed and intentionally ignore certain fields. I'd find this genuinely useful in something like Strava, where I have a tendency to start comparing my runs with everyone else's the moment the numbers are in front of me.

I find the metric layer genuinely distorting. \**(Not always, but often enough)*. Giving the user the option to strip that away, seems worth exploring.

Of course, it's not as simple as it sounds. Some data is fairly static (the post content itself), while other data is constantly changing (interactions with the post). Should the feed update with every new like? That's just one of the questions this opens up.

There's also the technical side: client apps would need to handle missing data gracefully. No follower count to display? The field just isn't there. A design challenge, but not an impossible one.

---

These two ideas come from a similar place: the feeling that somewhere along the way, the user stopped being the person the network was serving. Time-limiting is about when the network gets your attention. Content-limiting is about what it gets to tell you and what it gets to say about you.

I don't think either idea is a complete solution to anything. But as a starting point for a different kind of architecture it feels like a reasonable place to begin.