const storeContainer = document.querySelector("tbody"),
      storeList = storeContainer.querySelectorAll("tr");

let preMarker,preInfowindow;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.570071, 126.986798), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

function searchAddress(address,name){
    
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${address}`, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
             /*console.log(coords.Ga);*/
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
        });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;color:#444;">${name}<br><a href="https://map.kakao.com/link/map/${name},${coords.Ha},${coords.Ga}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${name},${coords.Ha},${coords.Ga}" style="color:blue" target="_blank">길찾기</a></div></div>`
        });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            
            preMarker = marker;
            preInfowindow = infowindow;
        }    
    });
}

function findStore(){
    const storeName = this.querySelector(".storeName"),
          storeAddress = this.querySelector(".storeAddress"),
          storeNameText = storeName.innerText,
          storeAddressText = storeAddress.innerText;
    
//    console.log(preMarker,preInfowindow);
    preMarker.setMap(null);
    preInfowindow.close();
    searchAddress(storeAddressText,storeNameText);
}
    
function init(){
    searchAddress("서울 종로구 종로 84","할리스 종로 본점");
//    console.log(searchAddress[0]);
    storeList.forEach(function(e){
        e.addEventListener("click",findStore);
    });
}

init();