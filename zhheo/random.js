var posts=["posts/b4199951.html","posts/e6d4ba92.html","posts/8fe47ff4.html","posts/e7bf99e2.html","posts/2b8bb09d.html","posts/95ecbeba.html","posts/35d6d7eb.html","posts/f60c0327.html","posts/db8566f5.html","posts/a1e1aa91.html","posts/b76107bc.html","posts/1ef88850.html","posts/5851f7f6.html","posts/ac0a2a38.html","posts/73a73fbd.html","posts/2013454d.html","posts/4a17b156.html","posts/15a522ae.html","posts/ad4a944a.html","posts/2f3f0f05.html","posts/615e2dec.html","posts/a1da6a9a.html","posts/5f6deee1.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}