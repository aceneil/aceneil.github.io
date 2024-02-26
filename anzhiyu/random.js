var posts=["posts/2583/","posts/b295/","posts/670b/","posts/9fc1e5d1/","posts/22b6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };