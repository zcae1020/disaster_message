// //window.history.pushState({ data: 'some data' }, 'Some history entry title', '/admin');
// console.log(history.state);


// window.onpopstate = () => {
//   appDiv.innerHTML = routes[window.location.pathname]
// }

let center = new kakao.maps.LatLng(33.450701, 126.570667);

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
    center: center, // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

function defaultState() {
  msg = document.getElementById("message");
  sbackground = document.getElementById("searchbackground");
  searchbar = document.getElementById("searchbar");
  searchresult = document.getElementById("searchresult");

  sbackground.style.display = "none";
  searchresult.style.display = "none";
  searchbar.style.display = "block";
  msg.style.display = "none";
}

mapContainer.onclick = defaultState;