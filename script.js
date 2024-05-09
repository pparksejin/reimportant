document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const contents = document.querySelector(".contents");
    const contentFooter = document.querySelector(".content-footer");
    const header = document.querySelector("header");
    const dateArea = document.querySelector(".date");
    const unknownArea = document.querySelector(".unknown");
    const container = document.querySelector(".container");
    const trailSpacing = 1000;

    let selectedItem = null;

    document.addEventListener("mousemove", function(event) {
        createTrail(event.pageX, event.pageY);
    });

    function createTrail(x, y) {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.left = x - trailSpacing / x + "px";
        trail.style.top = y - trailSpacing / y + "px";
        container.appendChild(trail);

        setTimeout(function() {
            trail.remove();
        }, 100);
    }

    function createDescriptionBox(text) {
        const descriptionBox = document.createElement("div");
        descriptionBox.classList.add("description-box");
        descriptionBox.innerHTML = `
            <div class="description-content">
                <span class="close-btn">X</span>
                <textarea class="description-text">${text}</textarea>
            </div>
        `;

        descriptionBox.style.backgroundColor = "black";
        descriptionBox.style.color = "white";
        descriptionBox.style.padding = "20px";
        descriptionBox.style.borderRadius = "5px";
        descriptionBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        descriptionBox.style.position = "fixed";
        descriptionBox.style.top = "50%";
        descriptionBox.style.left = "50%";
        descriptionBox.style.transform = "translate(-50%, -50%)";

        const closeBtn = descriptionBox.querySelector(".close-btn");
        closeBtn.style.cursor = "pointer";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "5px";
        closeBtn.style.right = "5px";

        document.body.appendChild(descriptionBox);

        closeBtn.addEventListener("click", function() {
            descriptionBox.remove();
        });

        const descriptionText = descriptionBox.querySelector(".description-text");
        descriptionText.style.width = "550px";
        descriptionText.style.height = "110px";
        descriptionText.style.resize = "none";
        descriptionText.style.backgroundColor = "black";
        descriptionText.style.color = "white";
        descriptionText.style.padding = "10px";
        descriptionText.style.fontSize = "16px";
        descriptionText.style.fontFamily = "Galmuri14, sans-serif";
        descriptionText.style.boxSizing = "border-box";
        descriptionText.style.border = "none";

        return descriptionBox;
    }

    header.addEventListener("click", function() {
        const descriptionBox = createDescriptionBox("우리는 거짓이 진실을 압도하는 사회에 살아가고 있다. 중요한 것은 그것을 가려내는 슬기로운 안목! <중요한 것은 보이지 않아>를 통해 우리에게 유익한 정보를 식별하고 올바른 혜안을 가져보자.");
    });

    dateArea.addEventListener("click", function() {
        const descriptionBox = createDescriptionBox("5월은 '가정의 달'이라고 불린다. 가정은 우리 삶에서 가장 중요한 공간 중 하나이며 그 안에서 우리는 사랑과 이해, 지지를 받는다. 가정의 달을 기념하여 가족들에게 평소 전하지 못한 감사한 마음을 전해보자! 아니면 지금 옆사람에게라도..");
    });

    unknownArea.addEventListener("click", function() {
        const descriptionBox = createDescriptionBox("사용자를..알 수 없다. 함께 기사를 살펴보자");
    });

    items.forEach(function(item) {
        item.addEventListener("click", function() {
            if (selectedItem) {
                selectedItem.classList.remove("selected");
            }
            selectedItem = this;
            selectedItem.classList.add("selected");

            const articleId = this.getAttribute("data-article");
            const articleData = getArticleContent(articleId);
            displayArticle(articleData);
        });
    });

    function displayArticle(articleData) {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        if (articleData.image) {
            const image = document.createElement("img");
            image.src = articleData.image;
            articleDiv.appendChild(image);
        }

        const contentParagraph = document.createElement("p");
        const contentLines = articleData.content.split('\n');
        contentLines.forEach(line => {
            const lineBreak = document.createElement("br");
            contentParagraph.appendChild(document.createTextNode(line));
            contentParagraph.appendChild(lineBreak);
        });
        articleDiv.appendChild(contentParagraph);
    
        contents.innerHTML = "";
        contents.appendChild(articleDiv);
    }

    const contentParagraph = document.createElement("p");
    contentParagraph.style.whiteSpace = "pre-line";
    contentParagraph.style.textAlign = "justify";
    contentFooter.parentNode.insertBefore(contentParagraph, contentFooter.nextSibling);
});




    function getArticleContent(articleId) {
        switch (articleId) {
            case "article1":
                return {
                    content: "_학교가 끝나면 친구들과 식빵 리필이 가능한 캔모아에 모여서 아삭한 팥빙수를 씹어 먹고, 좋아하는 남학생의 싸이월드를 들락거리다 용기를 모아 일촌을 신청한다. tvN 드라마 '선재 업고 튀어'(이하 '선업튀')의 주인공인 19살 고등학생 임솔의 일상이다. 2일 방송가에 따르면 2000년대 복고 감성을 소환한 드라마 '선업튀'가 최근 인기를 끌고 있다.\n\n_지난달 처음 전파를 탄 '선업튀'는 열렬하게 좋아하던 남자 톱스타 류선재가 세상을 떠나자 그를 살리려 과거로 간 여자의 이야기를 다룬 타임슬립 로맨스물이다. 좋아하는 여자에게 잘 보이고 싶은 마음에 모아둔 용돈을 들고 동대문 옷시장으로 쇼핑을 가고, 괜히 마음을 티 낸답시고 싸이월드 배경음악을 바꾸는 드라마 속 장면들도 추억과 공감을 자아낸다. 젊은 세대 사이에서는 '[응답하라 2008]을 보는 것 같다', '인터넷 소설 같으면서도 풋풋하게 그려낸 첫사랑 이야기가 설렌다', '귀여운 드라마라고 생각하고 봤는데 두 주인공의 서사가 마음 아리다' 등의 반응이 나온다.\n\n2024/05/??",
                    image: "/asset/눈물수정변형.jpg"
                };
            case "article2":
                return {
                    content: "_요즘 우리 경제에 먹구름이 끼어있다. 중동발 위기가 불러온 환율 급등 때문이다. 이로 인해 물가 부담이 가중되고 기준 금리 인하는 점점 어려워지고있다. 서울 외환시장에서는 원.달러환율은 1,400원 선에 바짝 다가섰고 이미 지난 달 1400원 선을 넘어 연중 최고점을 찍었다. 중동의 정세 불안으로 달러 같은 안전자산을 선호하는 심리가 높아졌기 때문이다.\n\n_환율 급등은 수입물가의 상승 요인이며 3%대인 물가상승률을 더 끌어올릴 공산이 커졌다. 과일과 채솟값이 이미 오를만큼 오른 상황에서 소비자들에게 부담이 될 걸로 우려된다. 또한 중동발 3고 위기가 올 수 있다는 우려가 크다. 어느 정도의 요인은 이미 반영된만큼 시장에 미치는 충격은 제한적일 거란 반론도 존재한다. 커다란 대외변수가 생긴 건 분명한 만큼 그 어느 때보다 면밀한 정책적 대응이 요구되고 있다.\n\n\n2024/05/??",
                    image: "/asset/환율급등변형.jpg"
                };
            case "article3":
                return {
                    content: "_미국 대선 레이스가 초박빙 흐름으로 전개되고 있다. 한걸음 앞서가던 트럼프 전 대통령은 바이든 대통령이 턱밑까지 따라왔는데, 이슈를 선점해 유권자의 마음을 사려는 행보가 치열하다. 트럼프는 6주 동안 법정에 묶여 주말 유세에 집중하거나 재판 전후 짬을 내 뉴욕 법원 주변에서 선거 운동을 할 수 밖에 없다. 하지만 지난달 주말 예정됐던 노스캐롤라이나주 유세가 궂은 날씨로 취소된 것처럼 한계가 있을 수밖에 없다. 하루에만 우리 돈 2억원씩 들어가는 법률 비용으로 인해 금전적 손해도 이만저만이 아니다.\n\n_반면 바이든 대통령은 경합주를 누비며 현직 이점을 최대한 활용 중이다. 지지율 격차도 눈에 띄게 줄었다. NBC 방송 여론조사에선 트럼프가 46, 바이든이 44로 석 달 전보다 3% 포인트 좁혀졌다. 무소속 후보까지 포함한 다자 대결에선 오히려 바이든이 트럼프를 앞서는 것으로 나타났다. 다른 조사에서도 두 후보의 격차가 사실상 의미 없어지는 등 예측불허의 초박빙 양상으로 전환되고 있다.\n\n2024/05/??",
                    image: "/asset/트럼프변형.jpg"
                };
            case "article4":
                return {
                    content: "_해당 내용은 스포가 될 수 있으니 편하게 흥행 추이에 대해서만 기재한다.\n\n_'트리플 1000만'이 머지 않았다. 2024년 및 시리즈 최고 속도로 흥행 질주 중인 영화 '범죄도시4'는 개봉 후 14일 연속 박스오피스 1위 자리를 유지했다. 만약 1000만을 돌파할 경우 1269만 명의 '범죄도시2'(2022)와 1068만 명의 '범죄도시3'(2023)에 이어 '시리즈 3편 연속 1000만 명 달성'이라는 유의미한 업적을 남기게 된다.\n\n_'범죄도시4'는 괴물 형사 마석도(마동석)가 대규모 온라인 불법 도박 조직을 움직이는 특수부대 용병 출신의 빌런 백창기(김무열)와 IT 업계 천재 CEO 장동철(이동휘)에 맞서 다시 돌아온 장이수(박지환), 광수대&사이버팀과 함께 펼치는 범죄 소탕 작전을 그린 영화다. 전국 극장에서 절찬 상영 중이다.\n\n\n2024/05/??",
                    image: "/asset/마동석변형.jpg"
                };
            case "article6":
                 return {
                     content: "_이강인은 8일 오전 4시(이하 한국시간) 프랑스 파리 파르크 데 프랭스에서 열린 도르트문트와의 2023-2024시즌 유럽축구연맹(UEFA) 챔피언스리그(UCL) 4강 2차전에 후반 30분 교체 투입 돼 경기 끝까지 뛰었다. 팀은 0-1로 패했다. 1차전에서 0-1로 졌던 PSG는 1,2차전 합계 0-2로 뒤지며 결승 진출에 실패했다. 이강인의 UCL 우승 목표는 실패로 돌아갔다.\n\n_이강인이 손흥민 다음으로 5년 만에 UCL 결승을 밟을 수 있을지 관심을 모았지만, 준결승에서 여정을 마무리했다.이강인에 대한 평가는 긍정적이었다. 골닷컴은 '이강인은 활기찬 모습을 보였다. 너무 늦게 투입됐다'라고 이야기했다.\n\n\n2024/05/??",
                    image: "/asset/손흥민변형.jpg"
                };
            case "article7":
                return {
                    content: "_하이브는 어도어 감사에 돌입한 지난달 22일 감사를 통해 이사회 개최를 요구했지만, 어도어 측이 불참하면서 이사회는 열리지 않았다. 하이브는 지난달 25일 서울서부지법에 임시주총 소집 허가 신청을 냈고, 이를 통해 6월 초 임시주총이 열릴 것으로 기대했다. 민대표 측은 지난달 29일 심문기일 연기 신청을 냈다가 이것이 받아들여지지 않자, 지난달 30일 임시주총 소집 허가 신청 심문기일에서 '우리가 이사회를 열겠다'고 허를 찔렀다.\n\n_특히 민 대표 측이 제시한 시점은 '월말까지 임시주총'으로 하이브가 예상한 시점보다 1~2주 빨랐다. 가요계에서는 이에 대해 뉴진스 컴백 활동과 해임안이 상정된 임시주총의 시기가 맞물리게 해 동정여론을 조성하고 하이브를 압박하는 전략이라는 시각도 나왔다. 그저 뉴진스가 행복했으면 좋겠다.\n\n2024/05/??",
                    image: "/asset/민희진변형.jpg"
                };
            case "article8":
                return {
                    content: "_기록적인 엔화 가치 하락에도 일본은행이 기준금리를 동결하기로 했다. 일본은행이 기준금리 동결을 결정하자, 엔-달려 환율이 '1달러=156엔'을 넘어서며 엔화 가치가 34년 만에 최저 수준을 기록했다. 일본은행은 지난달 26일 금융정책결정회의에서 참석자 만장일치로 현재 기준금리를 그대로 유지하기로 결정했다. 일본흥행은 또한 금융정책결정회의에서 -0.1%였던 기준금리를 올려 0~0.1%로 유도하기로 했다. 2007년 2월 이후 17년 만에 금리 인상에 나선 것이다.\n\n_금리를 인상한 뒤 처음 열린 금융정책결정회의에서는 시장의 예상대로 추가 금리 인상은 없었다. 일본은행은 올여름 이후에나 추가 그림 인상을 검토할 것이란 전망이 나오고 있으며 일본 얼론에선 양적 완화를 벗어나는 방향 전환의 하나로 일본은행이 국채 매입 축솔ㄹ 검토하고 있다는 보도가 나온 바 있다.\n\n2024/05/??",
                    image: "/asset/엔화변형.jpg"
                };
            case "article9":
                return {
                    content: "_[error]해당 기사 내용을 찾을 수 없습니다.",
                    image: "/asset/고양이변형.jpg"
                };
            case "article10":
                return {
                    content: "_홍익대에서 학생 1만2000여명의 개인정보가 다른 학생들에게 유출되는 사고가 발생했다. 유출된 정보는 학생들의 캠퍼스와 학과명, 학번, 이름, 학년, 학적, 이메일 등 10개 항목이다. 대학 측은 이후 피해 학생들에게 메일을 보내 이 사실을 알리고 사과했다.\n\n_대학은 사과문에서 '유출 사고를 인지한 지난 3일 즉시 개인정보 침해사고 대응팀을 구성해 절차에 따라 철저하게 조사했고 추가 피해를 예방하기 위해 발송된 메일을 회수 및 파기하고 있다'며 '이번 사고를 계기로 개인정보를 취급하는 전 구성원의 개인정보 보호에 대한 인식 제고 및 개인정보 관리 체계를 더욱 개선하고 향후 유사한 침해사고가 재발하지 않도록 최선의 노력을 다하겠다'고 설명했다.\n\n_대학 관계자는 이날 경향신문에 '유출된 파일에 전화번호나 주민등록번호 등 민감 정보는 적혀 있지 않았다'고 전했다.\n\n\n2024/05/??",
                    image: "/asset/홍익대변형.jpg"
                };
            default:
                return {
                    content: "_[error]해당 기사 내용을 찾을 수 없습니다."
                };
        }
    }
    

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");

    items.forEach(function(item, index) {
        item.addEventListener("click", function() {
            if (index === 4 || index === 8) {
                this.classList.add("blink");

                setTimeout(() => {
                    this.classList.remove("blink");
                }, 5000);
            }
        });
        
    });
});


document.addEventListener("DOMContentLoaded", async function() {
    const profile = document.getElementById("profile");
    const webcam = document.getElementById("webcam");

    async function setupWebcam() {
        if (navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcam.srcObject = stream;
        }
    }

    setupWebcam();
});




