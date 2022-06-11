var i = 0;

curr = body.scrollTop;
console.log(curr, " ", body.scrollHeight);

function scrolme() {
  console.log("script loaded");
  var element = document.getElementById("trig");
  console.log("Scroll element ", element);
  height = element.scrollHeight;
  curr = element.scrollTop;
  console.log(
    "Body Height",
    document.body.scrollHeight,
    "Component height",
    height,
    " ",
    "Body scroll",
    document.body.scrollTop,
    "Element scroll",
    curr,
    "screen height",
    screen.height
  );

  if (body.scrollTop > body.scrollHeight * 0.98 - 900) {
    console.log(
      "Hiiiiiiiiii",
      body.scrollTop,
      " .................................. ",
      body.scrollHeight - 900
    );
    body.style.overflow = "hidden";
    setTimeout(duplicate, 500);
  } else if (screen.width < 1000) {
    console.log(
      "Triggered",
      screen.height + document.body.scrollTop,
      document.body.scrollHeight - 1090
    );
    if (
      document.body.scrollHeight - 1090 <
      screen.height + document.body.scrollTop
    ) {
      console.log("Triggered");
      body.style.overflow = "hidden";
      setTimeout(duplicate, 500);
    }
  }
}

function duplicate() {
  var original = document.getElementById("posts0");

  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "duplicater" + ++i; // there can only be one element with an ID

  const k = i.toString();

  // event handlers are not cloned
  original.parentNode.appendChild(clone);
  document.querySelector("#duplicater" + i + " > #postImg > #poste ").src = "/";

  var img = "";
  var app = "n";
  fetch(
    "https://api.unsplash.com/photos/?client_id=SzVS_jGjke9XsnTSbT2xOdEsVjiIC19y7Ate1lCM1Mo"
  )
    .then((res) => res.json())
    .then((result) => {
      console.log("Hii  ", result);
      img = result[Math.floor(Math.random() * 10)].urls.full;
      div = document.querySelector("#duplicater" + k + " > #postImg > #poste ");
      console.log("        source          ", img);
      div.src = img;

      //  div.getElementById('') = img;
      //result[Math.floor(Math.random() * 10)].urls.full
      //"http://dog.ceo/api/breeds/image/random"
      //img=result.message;     ----- dog waali
    });
  console.log(img);

  if (
    document.querySelector("#duplicater" + k + " > #postImg > #poste ").src ==
    "/"
  ) {
    document.querySelector("#duplicater" + k).remove();
  }
  body.style.overflow = "scroll";
}
