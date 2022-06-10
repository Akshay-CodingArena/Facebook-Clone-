var i = 0;

curr = document.body.scrollTop;
console.log(curr, " ", document.body.scrollHeight);

function scrolme() {
  console.log("script loaded");
  var element = document.getElementsByTagName("trig");
  console.log("Scroll element ", element);
  height = element.scrollHeight;
  curr = element.scrollTop;
  console.log(height, " ", curr);

  if (document.body.scrollTop > document.body.scrollHeight * 0.98 - 900) {
    console.log(
      body.scrollTop,
      " .................................. ",
      body.scrollHeight - 900
    );
    body.style.overflow = "hidden";
    setTimeout(duplicate, 500);
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
