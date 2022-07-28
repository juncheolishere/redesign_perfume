const openMenu = document.getElementById("openMenu");
const openM = () => {
    openMenu.removeEventListener("click",openM);
    openMenu.addEventListener("click",closeM);

    openMenu.children[0].style.top = "5px";
    openMenu.children[1].style.display = "none";
    openMenu.children[2].style.top = "5px";
    setTimeout(()=>{
        openMenu.children[0].style.transform = "rotate(45deg)";
        openMenu.children[2].style.transform = "rotate(-45deg)";
    },250)
}
const closeM = () => {
    openMenu.removeEventListener("click",closeM);
    openMenu.addEventListener("click",openM);

    openMenu.children[0].style.transform = "rotate(0deg)";
    openMenu.children[1].style.display = "inline-block";
    openMenu.children[2].style.transform = "rotate(0deg)";

    setTimeout(()=>{
        openMenu.children[0].style.top = "0px";
        openMenu.children[2].style.top = "10px";
    },250)
}
openMenu.addEventListener("click",openM);

const trigger1 = document.getElementById("trigger1");
const trigger2 = document.getElementById("trigger2");
const height1 = trigger2.offsetTop - trigger1.offsetTop;
const mainPcImg = document.getElementById("mainPcImg");
const wrap1 = document.getElementById("wrap1");

const renew = () => {
    // 메인화면 스크롤 이벤트
    let k = window.scrollY - trigger1.offsetTop;
    if (k <= 0)
    {
        wrap1.style.backgroundColor = "white";
        mainPcImg.children[0].style.transform = "scale(0.5,0.5)";
        mainPcImg.style.opacity = 1;
    }
    else if (k >= 0 && k <= 1000)
    {
        wrap1.style.backgroundColor = "white";
        mainPcImg.children[0].style.transform = "scale("+(0.5+k/1000)+","+(0.5+k/1000)+")";
        mainPcImg.style.opacity = 1;
    }
    else if (k>1000 && k <= 2500)
    {
        wrap1.style.backgroundColor = "rgba(246,243,240,255)";
        mainPcImg.children[0].style.transform = "scale(1.5,1.5)";
        mainPcImg.style.opacity = 1 - (k-1000)/1000;
    }
    else if (k>2500)
    {
        wrap1.style.backgroundColor = "rgba(246,243,240,255)";
        mainPcImg.children[0].style.transform = "scale(1.5,1.5)";
        mainPcImg.style.opacity = 0;

    }
}
setInterval(renew,16)
// 메인화면 타이핑 애니메이션
let mainTyping= new TypeIt(".typeIt1", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("눅눅해진 몸과마음에", { delay: 300 })
    .move(-3)
    .type(" ")
    .move(null, { to: "END" })
    .type("<br>")
    .pause(300)
    .type("리프레시가")
    .move(-5)
    .type("'")
    .move(null, { to: "END" })
    .type(" 필요한 때'")
    .pause(500)
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type("<em>- 당신을 위한 향수 15가지</em>")
    .go();

const perfumeComment2 = document.getElementsByClassName("perfumeComment2");

new TypeIt(perfumeComment2[0], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
  })
    .type("'하얀색 벽과 푸른 지붕이 이어진 산토리니 해변,", { delay: 300 })
    .pause(300)
    .break()
    .type("전망대에 다다라 바다를 본 순간")
    .pause(300)
    .break()
    .type("누군가의 상쾌한 비누향기가 내 코 끝에 와닿는다.'")
    .go();

new TypeIt(perfumeComment2[1], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'한차례 소나기가 지나간 공원에서 느껴지는", { delay: 300 })
    .pause(300)
    .break()
    .type(" 공기중의 여유로운 이슬과 녹색 내음'")
    .pause(300)
    .break()
    .go();

new TypeIt(perfumeComment2[2], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'모래알을 잘게 부수며 철썩대는 파도 소리에", { delay: 300 })
    .pause(300)
    .break()
    .type(" 못 이기는 척 온몸을 던지게 만드는 시원함'")
    .pause(300)
    .break()
    .go();

new TypeIt(perfumeComment2[3], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'사라진 대륙 아틀란티스,", { delay: 300 })
    .pause(300)
    .break()
    .type(" 대륙을 감쪽같이 뒤덮은 대서양의 바다 내음'")
    .pause(300)
    .break()
    .go();

new TypeIt(perfumeComment2[4], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'고운 모래위에 설치된 푹신한 의자에 누워,", { delay: 300 })
    .pause(300)
    .break()
    .type(" 밀키스를 마시고 있는 풍경이 연상되는 향기'")
    .pause(300)
    .break()
    .go();

new TypeIt(perfumeComment2[5], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'따스한 햇살 아래보다", { delay: 300 })
    .pause(300)
    .break()
    .type(" 우중충한 회색 하늘 옅게 둘러싸인 안개 아래서")
    .pause(300)
    .break()
    .type(" 더욱 선명한 생기를 뿜어내는 곳'")
    .pause(300)
    .break()
    .go();

new TypeIt(perfumeComment2[6], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'얼음장처럼 차가운 호수가 가득한 곳", { delay: 300 })
    .pause(300)
    .break()
    .type(" 호수위도 떠가는 하얀 구름이")
    .pause(300)
    .break()
    .type(" 내 마음을 씻겨주는 듯한 시원하고 달콤한 향기'")
    .pause(300)
    .go();

new TypeIt(perfumeComment2[7], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'푸른 지중해 바다가 기분 좋게 넘실거리고", { delay: 300 })
    .pause(300)
    .break()
    .type(" 그 위로 새하얀 요트가 바람을 천천히 가르면서")
    .pause(300)
    .break()
    .type(" 여유와 풍경을 만끽하는 것 같은 향기'")
    .pause(300)
    .go();

new TypeIt(perfumeComment2[8], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'녹색의 식물들로 가득한 숲이", { delay: 300 })
    .pause(300)
    .break()
    .type("가끔은 푸르게 보일 수도 있구나 생각했다.")
    .pause(300)
    .break()
    .type("그 푸른빛의 시린 공기가 바닥에 닿아")
    .pause(300)
    .break()
    .type("꽃 처럼 부서지는 얼음'")
    .go();

new TypeIt(perfumeComment2[9], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'강렬하게 내리는 태양빛에 풍성하게 익은 오렌지,", { delay: 300 })
    .pause(300)
    .break()
    .type(" 오렌지의 묵직달콤함이 느껴지는 향'")
    .pause(300)
    .go();

new TypeIt(perfumeComment2[10], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'고개를 돌려보니 갈대숲을 얼추 닮은 숲과 언덕,", { delay: 300 })
    .pause(300)
    .break()
    .type("이국적인 편안함을 가져다 주는 자연 풍경'")
    .pause(300)
    .go();

new TypeIt(perfumeComment2[11], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'수수함과 화사함의 중간", { delay: 300 })
    .pause(300)
    .break()
    .type(" 예쁜 청량 캐쥬얼 끝판왕'")
    .pause(300)
    .go();
    
new TypeIt(perfumeComment2[12], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'캐주얼한 복장과 늘 짓는 환한 미소로", { delay: 300 })
    .pause(300)
    .break()
    .type(" 어디에서나 인기가 많은 주목받는 사람'")
    .pause(300)
    .go();

new TypeIt(perfumeComment2[13], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'함께 푸른 빛의 시원한 바람을 가로지를 때,", { delay: 300 })
    .pause(300)
    .break()
    .type(" 뺨을 스치는 기분 좋은 신선함에")
    .pause(300)
    .break()
    .type("저절로 지어지는 미소'")
    .go();

new TypeIt(perfumeComment2[14], {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: false,
    })
    .type("'드럼세탁기에서 따듯한 바람으로", { delay: 300 })
    .pause(300)
    .break()
    .type("살균까지 마치고 막 나온")
    .pause(300)
    .break()
    .type("촉촉한 새하얀 호텔 수건'")
    .pause(300)
    .go();

const trigger3 = document.getElementsByClassName("trigger3");
const perfumeBox = document.getElementsByClassName("perfumeBox");
const perfumImage = document.getElementsByClassName("perfumImage");
const textBox = document.getElementsByClassName("textBox");
for( let i = 0 ; i < trigger3.length; i ++)
{
    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic
                    .Scene({
                        triggerElement: trigger3[i], 
                        duration: 500})
                    .addTo(controller)
                    .on("progress", function (e) {
                        if(e.progress.toFixed(3) <= 0.5)
                        {
                            perfumeBox[i].style.top = "calc("+(80-e.progress.toFixed(3)*160)+"%)";
                            perfumImage[i].style.transform = "scale("+(0.5+e.progress.toFixed(3)/2)+","+(0.5+e.progress.toFixed(3)/2)+")";
                            textBox[i].style.opacity = e.progress.toFixed(3) * 2;
                        }
                        else
                        {
                            perfumeBox[i].style.top = "calc(0%)";
                            perfumImage[i].style.transform = "scale("+(0.5+e.progress.toFixed(3)/2)+","+(0.5+e.progress.toFixed(3)/2)+")";
                            textBox[i].style.opacity = 1;
                        }

                    });
}



let depth = 0;

const prevPage = (obj) => {
    const perfumeWrap = obj.parentNode.children[2];
    const wrapStyle = getComputedStyle(perfumeWrap);
    // 보이는 전체 폭 wrapWidth
    const wrapWidth = parseFloat(wrapStyle.width.split("p")[0]);

    const perfumeList = perfumeWrap.children[0];
    const listStyle = getComputedStyle(perfumeList);
    const listWidth = parseFloat(listStyle.width.split("p")[0]);

    const perfumeListItem = perfumeList.children[0];
    const listItemStyle = getComputedStyle(perfumeListItem);
    // 한 상자 폭 listWidth
    const listItemWidth =  parseFloat(listItemStyle.width.split("p")[0]);
    const listMarginRight = parseFloat(listItemStyle.marginRight.split("p")[0]);

    if (depth==0)
    {
        // 아무일도 일어나지 않는다.
    }
    else
    {
        depth += (listItemWidth+listMarginRight);
        perfumeList.style.transform = "translate("+depth+"px)";
    }
}

const nextPage = (obj) => {
    const perfumeWrap = obj.parentNode.children[2];
    const wrapStyle = getComputedStyle(perfumeWrap);
    // 보이는 전체 폭 wrapWidth
    const wrapWidth = parseFloat(wrapStyle.width.split("p")[0]);

    const perfumeList = perfumeWrap.children[0];
    const listStyle = getComputedStyle(perfumeList);
    const listWidth = parseFloat(listStyle.width.split("p")[0]);

    const perfumeListItem = perfumeList.children[0];
    const listItemStyle = getComputedStyle(perfumeListItem);
    // 한 상자 폭 listWidth
    const listItemWidth =  parseFloat(listItemStyle.width.split("p")[0]);
    const listMarginRight = parseFloat(listItemStyle.marginRight.split("p")[0]);

    // listWidth  vs depth + wrapWidth
    if (listWidth <= -depth + wrapWidth)
    {
        // 아무일도 일어나지 않는다.
    }
    else
    {
        depth -= (listItemWidth+listMarginRight);
        perfumeList.style.transform = "translate("+depth+"px)";
    }
}

let depth2 = 0;

const prevPage2 = (obj) => {
    const perfumeWrap = obj.parentNode.children[2];
    const wrapStyle = getComputedStyle(perfumeWrap);
    // 보이는 전체 폭 wrapWidth
    const wrapWidth = parseFloat(wrapStyle.width.split("p")[0]);

    const perfumeList = perfumeWrap.children[0];
    const listStyle = getComputedStyle(perfumeList);
    const listWidth = parseFloat(listStyle.width.split("p")[0]);

    const perfumeListItem = perfumeList.children[0];
    const listItemStyle = getComputedStyle(perfumeListItem);
    // 한 상자 폭 listWidth
    const listItemWidth =  parseFloat(listItemStyle.width.split("p")[0]);
    const listMarginRight = parseFloat(listItemStyle.marginRight.split("p")[0]);

    if (depth2==0)
    {
        // 아무일도 일어나지 않는다.
    }
    else
    {
        depth2 += (listItemWidth+listMarginRight);
        perfumeList.style.transform = "translate("+depth2+"px)";
    }
}

const nextPage2 = (obj) => {
    const perfumeWrap = obj.parentNode.children[2];
    const wrapStyle = getComputedStyle(perfumeWrap);
    // 보이는 전체 폭 wrapWidth
    const wrapWidth = parseFloat(wrapStyle.width.split("p")[0]);

    const perfumeList = perfumeWrap.children[0];
    const listStyle = getComputedStyle(perfumeList);
    const listWidth = parseFloat(listStyle.width.split("p")[0]);

    const perfumeListItem = perfumeList.children[0];
    const listItemStyle = getComputedStyle(perfumeListItem);
    // 한 상자 폭 listWidth
    const listItemWidth =  parseFloat(listItemStyle.width.split("p")[0]);
    const listMarginRight = parseFloat(listItemStyle.marginRight.split("p")[0]);

    // listWidth  vs depth2 + wrapWidth
    if (listWidth <= -depth2 + wrapWidth)
    {
        // 아무일도 일어나지 않는다.
    }
    else
    {
        depth2 -= (listItemWidth+listMarginRight);
        perfumeList.style.transform = "translate("+depth2+"px)";
    }
}