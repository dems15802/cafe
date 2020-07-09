const academyInfo = document.querySelector(".academyInfo"),
    academyFindBtn = academyInfo.querySelectorAll(".academyFind");

let preMarker, preInfowindow;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.570071, 126.986798), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

function searchAddress(address, name) {

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${address}`, function (result, status) {

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
                content: `<div style="width:150px;text-align:center;padding:6px 0;color:#444;">${name} 아카데미<br><a href="https://map.kakao.com/link/map/${name} 아카데미,${coords.Ha},${coords.Ga}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${name} 아카데미,${coords.Ha},${coords.Ga}" style="color:blue" target="_blank">길찾기</a></div></div>`
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);

            preMarker = marker;
            preInfowindow = infowindow;
        }
    });
}

function findAcamey(e) {
    const academyInfo = this.parentNode.parentNode,
        academyAddress = academyInfo.querySelector(".academyAddress"),
        academyAddressText = academyAddress.innerText,
        academyNameText = this.parentNode.innerText.slice(0, 3);
    
    e.preventDefault();

    //    console.log(preMarker,preInfowindow);
    preMarker.setMap(null);
    preInfowindow.close();
    searchAddress(academyAddressText, academyNameText);
}

function init() {
    searchAddress("서울특별시 종로구 삼일대로 395 종로빌딩 5층", "서울");
    //    console.log(searchAddress[0]);
    academyFindBtn.forEach(function (e) {
        e.addEventListener("click", findAcamey);
    });
}

init();
