const myprojects = [
  {
    img: "http://lorempixel.com/output/fashion-q-c-400-300-7.jpg",
    title: 'Wall'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-300-200-7.jpg",
    title: 'K'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-350-300-7.jpg",
    title: 'Wal'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-300-280-7.jpg",
    title: 'Wawl'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-200-350-7.jpg",
    title: '2all'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-360-250-7.jpg",
    title: 'Wdall'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-330-350-7.jpg",
    title: 'Waldsl'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-390-300-7.jpg",
    title: 'Wagdfsll'
  },
  {
    img: "http://lorempixel.com/output/fashion-q-c-230-350-7.jpg",
    title: 'Waewll'
  }
];

$(() => {
  let main = $("main .home");
  myprojects.forEach(p => {
    let img = $("<img>").attr("src", p.img);
    let cover = $("<div>").addClass("cover");
    let title = $("<div>").addClass("title").html(p.title);

    $("<div>")
      .addClass("box")
      .append(img)
      .append(cover)
      .append(title)
      .appendTo(main)
  })
})

