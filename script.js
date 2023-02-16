var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('anim'), // required
    path: 'data.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
  });