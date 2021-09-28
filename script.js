let postsArray = [];
const http = new XMLHttpRequest();
http.open(
  "GET",
  "https://api.themoviedb.org/3/trending/all/day?api_key=02530912851d8bc8f42261485003989c"
);
http.send();
http.status; //404  403 200
http.readyState; //0 1 2 3 4

http.addEventListener("readystatechange", function () {
  if (http.status == 200 && http.readyState == 4) {
    postsArray = JSON.parse(http.response).results;
    display();
  }
});

function display() {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  let box = ``;
  for (i = 0; i < postsArray.length; i++) {
    box += `<div class="col-md-6 col-lg-4 col-xl-3 my-5 px-4 d-flex flex-column align-items-center  ">
    <img src="${baseImageUrl + postsArray[i].poster_path}" class="w-100 rounded-3" >
        <h2 class"">${postsArray[i].name || postsArray[i].title}</h2>
        <p class"">
        ${postsArray[i].overview}
        </p>
      </div>`;
  }
  document.getElementById("postsRow").innerHTML = box;
}

function home() {
  const http = new XMLHttpRequest();
  http.open(
    "GET",
    "https://api.themoviedb.org/3/trending/all/day?api_key=02530912851d8bc8f42261485003989c"
  );
  http.send();
  http.status; //404  403 200
  http.readyState; //0 1 2 3 4

  http.addEventListener("readystatechange", function () {
    if (http.status == 200 && http.readyState == 4) {
      postsArray = JSON.parse(http.response).results;
      display();
    }
  });

  function display() {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    let box = ``;
    for (i = 0; i < postsArray.length; i++) {
      box += `<div class="col-md-6 col-lg-4 col-xl-3 my-5 px-4 d-flex flex-column align-items-center  ">
    <img src="${
      baseImageUrl + postsArray[i].poster_path
    }" class="w-100 rounded-3" >
        <h2 class"">${postsArray[i].name || postsArray[i].title}</h2>
        <p class"">
        ${postsArray[i].overview}
        </p>
      </div>`;
    }
    document.getElementById("postsRow").innerHTML = box;
  }
}

function tvShow() {
  const http = new XMLHttpRequest();
  http.open(
    "GET",
    "https://api.themoviedb.org/3/trending/tv/day?api_key=02530912851d8bc8f42261485003989c"
  );
  http.send();
  http.status; //404  403 200
  http.readyState; //0 1 2 3 4

  http.addEventListener("readystatechange", function () {
    if (http.status == 200 && http.readyState == 4) {
      postsArray = JSON.parse(http.response).results;
      display();
    }
  });

  function display() {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    let box = ``;
    for (i = 0; i < postsArray.length; i++) {
      box += `<div class="col-md-6 col-lg-4 col-xl-3 my-5 px-4 d-flex flex-column align-items-center  ">
    <img src="${
      baseImageUrl + postsArray[i].poster_path
    }" class="w-100 rounded-3" >
        <h2 class"">${postsArray[i].name || postsArray[i].title}</h2>
        <p class"">
        ${postsArray[i].overview}
        </p>
      </div>`;
    }
    document.getElementById("postsRow").innerHTML = box;
  }
}
