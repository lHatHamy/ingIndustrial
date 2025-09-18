
  let index = 0;

  function moveSlide(direction) {
    const track = document.getElementById("track");
    const totalSlides = track.children.length;
    const slideWidth = track.clientWidth / totalSlides;

    index += direction;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    track.style.transform = `translateX(-${index * 100}%)`;
  }

