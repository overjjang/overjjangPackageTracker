const apiurlbase = "https://gubsicmenu.overjjang99.workers.dev/api";
let packageCode = "";
const companyList= {
    "Company": [
        {
            "International": "false",
            "Code": "01",
            "Name": "우체국택배"
        },
        {
            "International": "false",
            "Code": "04",
            "Name": "CJ대한통운"
        },
        {
            "International": "false",
            "Code": "05",
            "Name": "한진택배"
        },
        {
            "International": "false",
            "Code": "06",
            "Name": "로젠택배"
        },
        {
            "International": "false",
            "Code": "08",
            "Name": "롯데택배"
        },
        {
            "International": "false",
            "Code": "11",
            "Name": "일양로지스"
        },
        {
            "International": "false",
            "Code": "16",
            "Name": "한의사랑택배"
        },
        {
            "International": "false",
            "Code": "17",
            "Name": "천일택배"
        },
        {
            "International": "false",
            "Code": "18",
            "Name": "건영택배"
        },
        {
            "International": "false",
            "Code": "20",
            "Name": "한덱스"
        },
        {
            "International": "false",
            "Code": "22",
            "Name": "대신택배"
        },
        {
            "International": "false",
            "Code": "23",
            "Name": "경동택배"
        },
        {
            "International": "false",
            "Code": "24",
            "Name": "GS Postbox 택배"
        },
        {
            "International": "false",
            "Code": "32",
            "Name": "합동택배"
        },
        {
            "International": "false",
            "Code": "40",
            "Name": "굿투럭"
        },
        {
            "International": "false",
            "Code": "43",
            "Name": "애니트랙"
        },
        {
            "International": "false",
            "Code": "44",
            "Name": "SLX택배"
        },
        {
            "International": "false",
            "Code": "45",
            "Name": "우리택배(구호남택배)"
        },
        {
            "International": "false",
            "Code": "46",
            "Name": "CU편의점택배"
        },
        {
            "International": "false",
            "Code": "47",
            "Name": "우리한방택배"
        },
        {
            "International": "false",
            "Code": "53",
            "Name": "농협택배"
        },
        {
            "International": "false",
            "Code": "54",
            "Name": "홈픽택배"
        },
        {
            "International": "false",
            "Code": "71",
            "Name": "IK물류"
        },
        {
            "International": "false",
            "Code": "72",
            "Name": "성훈물류"
        },
        {
            "International": "false",
            "Code": "73",
            "Name": "CR로지텍"
        },
        {
            "International": "false",
            "Code": "74",
            "Name": "용마로지스"
        },
        {
            "International": "false",
            "Code": "75",
            "Name": "원더스퀵"
        },
        {
            "International": "false",
            "Code": "82",
            "Name": "컬리넥스트마일"
        },
        {
            "International": "false",
            "Code": "85",
            "Name": "풀앳홈"
        },
        {
            "International": "false",
            "Code": "89",
            "Name": "두발히어로"
        },
        {
            "International": "false",
            "Code": "90",
            "Name": "위니아딤채"
        },
        {
            "International": "false",
            "Code": "92",
            "Name": "지니고 당일배송"
        },
        {
            "International": "false",
            "Code": "94",
            "Name": "카카오 T 당일배송"
        },
        {
            "International": "false",
            "Code": "95",
            "Name": "큐익스프레스"
        },
        {
            "International": "false",
            "Code": "103",
            "Name": "NDEX KOREA"
        },
        {
            "International": "false",
            "Code": "104",
            "Name": "도도플렉스(dodoflex)"
        },
        {
            "International": "false",
            "Code": "107",
            "Name": "LG전자"
        },
        {
            "International": "false",
            "Code": "112",
            "Name": "1004홈"
        },
        {
            "International": "false",
            "Code": "113",
            "Name": "썬더히어로"
        },
        {
            "International": "false",
            "Code": "116",
            "Name": "(주)팀프레시"
        },
        {
            "International": "false",
            "Code": "118",
            "Name": "롯데칠성"
        },
        {
            "International": "false",
            "Code": "119",
            "Name": "핑퐁"
        },
        {
            "International": "false",
            "Code": "120",
            "Name": "발렉스 특수물류"
        },
        {
            "International": "false",
            "Code": "123",
            "Name": "엔티엘피스"
        },
        {
            "International": "false",
            "Code": "125",
            "Name": "GTS로지스"
        },
        {
            "International": "false",
            "Code": "127",
            "Name": "로지스팟"
        },
        {
            "International": "false",
            "Code": "129",
            "Name": "홈픽 오늘도착"
        },
        {
            "International": "false",
            "Code": "130",
            "Name": "로지스파트너"
        },
        {
            "International": "false",
            "Code": "131",
            "Name": "딜리래빗"
        },
        {
            "International": "false",
            "Code": "132",
            "Name": "지오피"
        },
        {
            "International": "false",
            "Code": "134",
            "Name": "에이치케이홀딩스"
        },
        {
            "International": "false",
            "Code": "135",
            "Name": "HTNS"
        },
        {
            "International": "false",
            "Code": "136",
            "Name": "케이제이티"
        },
        {
            "International": "false",
            "Code": "137",
            "Name": "더바오"
        },
        {
            "International": "false",
            "Code": "138",
            "Name": "라스트마일"
        },
        {
            "International": "false",
            "Code": "142",
            "Name": "탱고앤고"
        },
        {
            "International": "false",
            "Code": "143",
            "Name": "투데이"
        },
        {
            "International": "false",
            "Code": "145",
            "Name": "현대글로비스"
        },
        {
            "International": "false",
            "Code": "148",
            "Name": "ARGO(테크타카)"
        },
        {
            "International": "false",
            "Code": "155",
            "Name": "HY"
        },
        {
            "International": "false",
            "Code": "156",
            "Name": "유피로지스(제주)"
        },
        {
            "International": "false",
            "Code": "157",
            "Name": "우진인터로지스"
        },
        {
            "International": "false",
            "Code": "159",
            "Name": "삼다수 가정배송"
        },
        {
            "International": "false",
            "Code": "160",
            "Name": "와이드테크"
        },
        {
            "International": "false",
            "Code": "163",
            "Name": "위니온"
        },
        {
            "International": "false",
            "Code": "167",
            "Name": "딜리박스"
        },
        {
            "International": "false",
            "Code": "168",
            "Name": "이스트라"
        },
        {
            "International": "false",
            "Code": "170",
            "Name": "유피로지스"
        },
        {
            "International": "false",
            "Code": "171",
            "Name": "올인닷컴"
        },
        {
            "International": "false",
            "Code": "172",
            "Name": "화통"
        },
        {
            "International": "false",
            "Code": "173",
            "Name": "물류대장(LCS)"
        },
        {
            "International": "false",
            "Code": "175",
            "Name": "풀무원샘물㈜"
        },
        {
            "International": "false",
            "Code": "178",
            "Name": "든든택배"
        },
        {
            "International": "false",
            "Code": "179",
            "Name": "SLO(모든)"
        },
        {
            "International": "true",
            "Code": "12",
            "Name": "EMS"
        },
        {
            "International": "true",
            "Code": "13",
            "Name": "DHL"
        },
        {
            "International": "true",
            "Code": "14",
            "Name": "UPS"
        },
        {
            "International": "true",
            "Code": "21",
            "Name": "Fedex"
        },
        {
            "International": "true",
            "Code": "25",
            "Name": "TNT Express"
        },
        {
            "International": "true",
            "Code": "26",
            "Name": "USPS"
        },
        {
            "International": "true",
            "Code": "28",
            "Name": "GSMNtoN"
        },
        {
            "International": "true",
            "Code": "30",
            "Name": "KGL네트웍스"
        },
        {
            "International": "true",
            "Code": "37",
            "Name": "LX판토스"
        },
        {
            "International": "true",
            "Code": "38",
            "Name": "ECMS Express"
        },
        {
            "International": "true",
            "Code": "48",
            "Name": "ACI Express"
        },
        {
            "International": "true",
            "Code": "49",
            "Name": "A.C.E EXPRESS INC"
        },
        {
            "International": "true",
            "Code": "50",
            "Name": "GPS Logix"
        },
        {
            "International": "true",
            "Code": "51",
            "Name": "성원글로벌카고"
        },
        {
            "International": "true",
            "Code": "55",
            "Name": "EuroParcel"
        },
        {
            "International": "true",
            "Code": "60",
            "Name": "YJS글로벌(영국)"
        },
        {
            "International": "true",
            "Code": "63",
            "Name": "은하쉬핑"
        },
        {
            "International": "true",
            "Code": "65",
            "Name": "YJS글로벌(월드)"
        },
        {
            "International": "true",
            "Code": "66",
            "Name": "Giant Network Group"
        },
        {
            "International": "true",
            "Code": "67",
            "Name": "디디로지스"
        },
        {
            "International": "true",
            "Code": "69",
            "Name": "대림통운"
        },
        {
            "International": "true",
            "Code": "70",
            "Name": "LOTOS CORPORATION"
        },
        {
            "International": "true",
            "Code": "77",
            "Name": "LineExpress"
        },
        {
            "International": "true",
            "Code": "84",
            "Name": "스마트로지스"
        },
        {
            "International": "true",
            "Code": "87",
            "Name": "이투마스(ETOMARS)"
        },
        {
            "International": "true",
            "Code": "91",
            "Name": "하이브시티"
        },
        {
            "International": "true",
            "Code": "93",
            "Name": "팬스타국제특송(PIEX)"
        },
        {
            "International": "true",
            "Code": "97",
            "Name": "에이씨티앤코아물류"
        },
        {
            "International": "true",
            "Code": "99",
            "Name": "롯데택배 해외특송"
        },
        {
            "International": "true",
            "Code": "102",
            "Name": "배송하기좋은날 (SHIPNERGY)"
        },
        {
            "International": "true",
            "Code": "105",
            "Name": "브릿지로지스㈜"
        },
        {
            "International": "true",
            "Code": "108",
            "Name": "MEXGLOBAL"
        },
        {
            "International": "true",
            "Code": "111",
            "Name": "SBGLS"
        },
        {
            "International": "true",
            "Code": "114",
            "Name": "캐나다쉬핑"
        },
        {
            "International": "true",
            "Code": "117",
            "Name": "YUNDA EXPRESS"
        },
        {
            "International": "true",
            "Code": "121",
            "Name": "바바바(bababa)"
        },
        {
            "International": "true",
            "Code": "122",
            "Name": "BAIMA EXPRESS"
        },
        {
            "International": "true",
            "Code": "124",
            "Name": "LTL"
        },
        {
            "International": "true",
            "Code": "126",
            "Name": "올타코리아"
        },
        {
            "International": "true",
            "Code": "128",
            "Name": "판월드로지스틱"
        },
        {
            "International": "true",
            "Code": "140",
            "Name": "직구문"
        },
        {
            "International": "true",
            "Code": "141",
            "Name": "인터로지스"
        },
        {
            "International": "true",
            "Code": "144",
            "Name": "큐브플로우(CUBEFLOW)"
        },
        {
            "International": "true",
            "Code": "146",
            "Name": "국제로지스틱(KSE)"
        },
        {
            "International": "true",
            "Code": "147",
            "Name": "에스더쉬핑"
        },
        {
            "International": "true",
            "Code": "149",
            "Name": "골드스넵스"
        },
        {
            "International": "true",
            "Code": "151",
            "Name": "자이언트"
        },
        {
            "International": "true",
            "Code": "152",
            "Name": "엠티인터내셔널"
        },
        {
            "International": "true",
            "Code": "153",
            "Name": "이지로지스틱"
        },
        {
            "International": "true",
            "Code": "154",
            "Name": "케이티익스프레스"
        },
        {
            "International": "true",
            "Code": "158",
            "Name": "AusPost"
        },
        {
            "International": "true",
            "Code": "162",
            "Name": "SAP EXPRESS"
        },
        {
            "International": "true",
            "Code": "164",
            "Name": "ICS LOGISTICS(아이씨에스 로지스틱스)"
        },
        {
            "International": "true",
            "Code": "165",
            "Name": "서림특송"
        },
        {
            "International": "true",
            "Code": "166",
            "Name": "Rincos"
        },
        {
            "International": "true",
            "Code": "169",
            "Name": "JNT"
        },
        {
            "International": "true",
            "Code": "177",
            "Name": "티에스지로지스"
        },
        {
            "International": "true",
            "Code": "182",
            "Name": "지씨에스"
        }
    ]
}

// set cookie
function setCookie(companyName, packageCode, exp) {
    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    console.log(companyName, packageCode);
    document.cookie = "companyCode" + '=' + companyName + ';expires=' + date.toUTCString() + ';path=/';
    document.cookie = "packageCode" + '=' + packageCode + ';expires=' + date.toUTCString() + ';path=/';
}
function getCookie(name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}

function loadCookie(){
    let companyCode = getCookie("companyCode");
    let packageCode = getCookie("packageCode");
    const cookieList = document.getElementById("lastestPackageNumber");
    if(companyCode && packageCode){
        console.log(companyCode, packageCode);
        cookieList.innerHTML = `최근 조회한 운송장번호:<br><button id="cookieButton" onclick="loadLastestPackage()"> ${companyList.Company[companyCode].Name}-${packageCode}</button>`;
    }
}
loadCookie();

loadLastestPackage = ()=>{
    let companyCode = getCookie("companyCode");
    let packageCode = getCookie("packageCode");
    document.getElementById("companyInput").selectedIndex = companyCode;
    document.getElementById("packageNumberInput").value = packageCode+1;
    getPackageInfo();
};

// page load

const packageInfoHead = document.getElementById("packageInfoHead");
const packageInfoBody = document.getElementById("packageInfoBody");
const packageInfoVisual = document.getElementById("packageInfoVisual");
const container = document.getElementById("container");
const title = document.getElementById("title");

for(let i = 0; i < companyList.Company.length; i++){
    let option = document.createElement("option");
    option.value = companyList.Company[i].Code;
    option.text = companyList.Company[i].Name;
    // console.log(option);
    document.getElementById("companyInput").appendChild(option);
}
getPackageInfo = async () => {
    title.classList.remove("error");
    container.style.display = "none";
    container.style.visibility = "hidden";
    title.innerHTML = "조회중...";
    let companyCode = document.getElementById("companyInput").value;
    let packageCode = document.getElementById("packageNumberInput").value;
    let companyName = document.getElementById("companyInput").selectedIndex;
    console.log(companyCode, packageCode, companyName);
    setCookie(companyName, packageCode, 1);
    let url = `${apiurlbase}?mode=package&companyCode=${companyCode}&packageCode=${packageCode}`;
    console.log("fetching data from: "+url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("get").classList.add("bg-light");
            document.getElementById("get").classList.remove("bg-isCompleted");document.getElementById("move").classList.add("bg-light");
            document.getElementById("move").classList.remove("bg-isCompleted");document.getElementById("arrive").classList.add("bg-light");
            document.getElementById("arrive").classList.remove("bg-isCompleted");document.getElementById("start").classList.add("bg-light");
            document.getElementById("start").classList.remove("bg-isCompleted");document.getElementById("complete").classList.add("bg-light");
            document.getElementById("complete").classList.remove("bg-isCompleted");packageInfoHead.classList.remove("bg-isCompleted");
            title.innerHTML = "배송 조회 결과";
            if(data.code === '105'){
                title.innerHTML = data.msg;
                // title.innerHTML += `버짱의 API코드 하루 요청 건수가 초과되었으니 내일 다시 시도해주세요.(아니면 돈주던가)`;
                title.classList.add("error");
            }
            else if(data.level > 1) {
                title.classList.remove("error");
                packageInfoHead.innerHTML = "";
                packageInfoHead.innerHTML += `<h3>상품명: ${data.itemName}</h3><h3>현재 상태: ${data.lastDetail.kind}</h3>`;
                packageInfoHead.innerHTML += `<h3>현위치: ${data.lastDetail.where}</h3>`;
                packageInfoHead.innerHTML += `일자: ${data.lastDetail.timeString}<br>`;
                if (data.estimate) packageInfoHead.innerHTML += `배송예상시각: ${data.estimate} <br>`;
                if (data.lastDetail.manName) packageInfoHead.innerHTML += `담당 기사: ${data.lastDetail.manName} <br>`;
                if (data.lastDetail.telno) packageInfoHead.innerHTML += `기사 연락처: ${data.lastDetail.telno} <br>`;
                packageInfoHead.innerHTML += ``;
                packageInfoBody.innerHTML += "<h3>배송 상세 내역</h3>";
                for (let i = 0; i < data.trackingDetails.length; i++) {
                    packageInfoBody.innerHTML += `<div class="w-auto p-1 bg-${ i%2 === 1 ? "isCompleted" : "light"}">${data.trackingDetails[i].timeString} - ${data.trackingDetails[i].kind} - ${data.trackingDetails[i].where}</div>`;
                }
                container.style.display = "inline-block";
                container.style.visibility = "visible";
                if(data.level >= 2){
                    document.getElementById("get").classList.remove("bg-light");
                    document.getElementById("get").classList.add("bg-isCompleted");

                }
                if(data.level >= 3){
                    document.getElementById("move").classList.remove("bg-light");
                    document.getElementById("move").classList.add("bg-isCompleted");

                }
                if(data.level >= 4){
                    document.getElementById("arrive").classList.remove("bg-light");
                    document.getElementById("arrive").classList.add("bg-isCompleted");

                }
                if(data.level >= 5){
                    document.getElementById("start").classList.remove("bg-light");
                    document.getElementById("start").classList.add("bg-isCompleted");

                }
                if(data.level >= 6){
                    document.getElementById("complete").classList.add("bg-isCompleted");
                    document.getElementById("complete").classList.remove("bg-light");
                    packageInfoHead.classList.add("bg-isCompleted");

                }
            }
            else{
                title.innerHTML = "잘못된 운송장번호거나 배송준비중인 상품입니다.";
                title.classList.add("error");
            }
            if(data.code === 'noKeyRemain'){
                title.innerHTML = `${data.msg}<br>예시 데이터를 전송합니다.`;
                title.classList.add("error");
            }
        })
        .catch(error =>{
            console.error('Error:', error);
            title.innerHTML = "오류가 발생했습니다. 다시 시도해주세요.";
            title.classList.add("error");
        });
};
