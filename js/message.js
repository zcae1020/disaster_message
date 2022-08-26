listBtn = document.getElementById("listBtn");
searchbar = document.getElementById("searchbar");
msg = document.getElementById("message");
msgul = document.querySelector("#message ul");
sbackground = document.getElementById("searchbackground");
searchresult = document.getElementById("searchresult");

let isClicked = false;

function listBtnClick() {
  if (isClicked) {
    isClicked = false;
    sbackground.style.display = "none";
    msg.style.display = "none";
    searchbar.style.display = "block";
  }
  else {
    isClicked = true;
    sbackground.style.display = "block";
    msg.style.display = "block";
    searchbar.style.display = "none";
    searchresult.style.display = "none";


    let url = 'http://localhost:8080/api';
    const res = async () => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    let result;
    (async () => {
      result = await res();
      await console.log(result, dcode);
      await display(result);
    })();
  }
}

function display(results) {
  delList();

  if (results == null) {
    alert("재난메시지가 없습니다.");
    return;
  }

  console.log(results);

  for (idx in results) {
    data = results[idx];
    msgul.appendChild(createList(idx + 1, data));
    msgul.appendChild(document.createElement("br"));
  }
}

function createList(idx, data) {
  let d = document.createElement("div");
  let img = document.createElement("img");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");

  d.id = "msglist" + idx;
  img.src = `../img/${dcode[data.disasterCode]}`;
  img.style = "width:40px; height:40px;";
  li1.innerText = data.place;
  li2.innerText = data.date;
  li2.style = "font-size:12px;color: rgb(134, 134, 147);";

  d.appendChild(img);
  d.appendChild(li1);
  d.appendChild(li2);

  d.addEventListener("mouseover", function() {
    d.style = "background-color:#ecedd8";
  });
  d.addEventListener("mouseout", function() {
    d.style = "background-color:white";
  });
  // d.addEventListener("click", function() {
  //   placePosition = new kakao.maps.LatLng(data.y, data.x);
  //   map.setCenter(placePosition);
  //   map.setLevel(3);
  // })

  return d;
}

function delList() {
  while (msgul.firstChild) {
    msgul.removeChild(msgul.firstChild);
  }
}

listBtn.addEventListener('click', listBtnClick)