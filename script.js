const openMenu = document.getElementById("openMenu");
const mainNav = document.getElementById("mainNav");
const navBack = document.getElementById("navBack");
const openM = () => {
    
    setTimeout(() => {
        openMenu.addEventListener("click",closeM,{once : true})
    },500)

    openMenu.children[0].style.top = "5px";
    openMenu.children[1].style.display = "none";
    openMenu.children[2].style.top = "5px";
    setTimeout(()=>{
        openMenu.children[0].style.transform = "rotate(45deg)";
        openMenu.children[2].style.transform = "rotate(-45deg)";
    },250)

    mainNav.style.right = "calc(0px)";
    navBack.style.display = "flex";
    document.body.style.overflowY = "hidden";
}
const closeM = () => {
    setTimeout(() => {
        openMenu.addEventListener("click",openM,{once : true})
    },500)

    openMenu.children[0].style.transform = "rotate(0deg)";
    openMenu.children[1].style.display = "inline-block";
    openMenu.children[2].style.transform = "rotate(0deg)";

    setTimeout(()=>{
        openMenu.children[0].style.top = "0px";
        openMenu.children[2].style.top = "10px";
    },250)

    mainNav.style.right = "calc(-400px)";
    navBack.style.display = "none";
    document.body.style.overflowY = "visible";

}
openMenu.addEventListener("click",openM, {once : true});

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


const level1 = document.getElementsByClassName("level1");
let lastOpen = null;

const openC = (obj) => {
    if (lastOpen)
    {
        lastOpen.click();
    }

    if (obj.parentNode.children.length == 1)
    {
        
        obj.addEventListener('click',()=>{openC(obj)}, {once : true} )
            
        lastOpen=null;
    }
    else
    {
        const subCnt = obj.parentNode.children[1].children.length;
        const heightValue = parseInt(getComputedStyle(obj).height.split('p')[0])+1;
        obj.parentNode.style.minHeight = (heightValue*(subCnt+1))+"px"
        obj.parentNode.children[1].style.top = heightValue+"px";
        obj.parentNode.children[2].style.transform = "rotate(135deg)";
        obj.parentNode.children[3].style.transform = "rotate(225deg)";
        obj.addEventListener('click',()=>{closeC(obj)}, {once : true} )
            
        lastOpen = obj;
    }

}
const closeC = (obj) => {
    const heightValue = parseInt(getComputedStyle(obj).height.split('p')[0])+1;
    obj.parentNode.style.minHeight = heightValue+"px"
    obj.parentNode.children[1].style.top=-heightValue+"px";
    obj.parentNode.children[2].style.transform = "rotate(0deg)";
    obj.parentNode.children[3].style.transform = "rotate(90deg)";
    obj.addEventListener('click',()=>{openC(obj)}, {once : true} )
    
    lastOpen = null;
}

for (let i = 0; i<level1.length; i++)
{
    level1[i].children[0].addEventListener('click',()=>{openC(level1[i].children[0])}, {once : true} )
}