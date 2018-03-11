!function () {
const bg = [
  {
    title: '✿❀',
    type: 'illustration',
    author: 'Bison仓鼠仓',
    authorImg: '/ui/bg/Bison仓鼠仓.jpg',
    authorUrl: 'https://link.bilibili.com/p/world/index#/136107/world/',
    img: '/ui/bg/Bison-moon.jpg'
  },
  {
    title: 'THORNS',
    type: 'illustration',    
    author: 'Miv4t',
    authorImg: '/ui/bg/Miv4t.jpg',
    authorUrl: 'https://www.pixiv.net/member.php?id=11246082',
    img: '/ui/bg/THORNS.jpg'
  },
  {
    title: '薇尔莉特・伊芙加登',
    type: 'bangumi',
    author: '紫罗兰永恒花园',
    authorImg: '/ui/bg/Violet.png',
    authorUrl: 'https://bangumi.bilibili.com/anime/21542',
    img: '/ui/bg/Violet.png'
  },
  {
    title: '“再说一次”',
    type: 'bangumi',    
    author: '02',
    authorImg: '/ui/bg/02.png',
    authorUrl: 'http://bangumi.bilibili.com/anime/21680',
    img: '/ui/bg/02.png'
  },
  {
    title: '旅游',
    type: 'bangumi',    
    author: '小埋',
    authorImg: '/ui/bg/umaru-travel.png',
    authorUrl: 'https://www.bilibili.com/bangumi/play/ep115439',
    img: '/ui/bg/umaru-travel.png'
  }
]
let jumbotron = document.getElementById('jumbotron')
let jbg = document.getElementById('jbg')
let w = document.body.clientWidth

let bgia1 = document.getElementById('bgia1')
let bgi1 = document.getElementById('bgi1')
let bgai1 = document.getElementById('bgai1')
let bgt1 = document.getElementById('bgt1')
let bgan1 = document.getElementById('bgan1')

let bgia2 = document.getElementById('bgia2')
let bgi2 = document.getElementById('bgi2')
let bgai2 = document.getElementById('bgai2')
let bgt2 = document.getElementById('bgt2')
let bgan2 = document.getElementById('bgan2')

  bg.sort((a,b) => {
    return Math.random() > 0.5 ? 1 : -1
  })
  bg.map((x) => {
    if (x.type === 'illustration') {
      x.author += 'の作品'
    }
  })
  if (jumbotron) {
    jumbotron.style.backgroundImage = `url(${bg[0].img})`
    bgi1.href = `${bg[0].authorUrl}`
    bgai1.style.backgroundImage = `url(${bg[0].authorImg})`
    bgt1.innerHTML = `${bg[0].title}`
    bgan1.innerHTML = `${bg[0].author}`  
    bgia1.style.opacity = '1' 
  }
  if ((w >= 768) && jumbotron && jbg) { 
    jbg.style.backgroundImage = `url(${bg[1].img})`
    bgi2.href = `${bg[1].authorUrl}`
    bgai2.style.backgroundImage = `url(${bg[1].authorImg})`
    bgt2.innerHTML = `${bg[1].title}`
    bgan2.innerHTML = `${bg[1].author}` 
    setbg(jumbotron, jbg)
  }


// 图片提前加载
function setbg (div1, div2) {
  let i = 1
  let timer = setInterval(function () {
    i++
    if (i === bg.length) {
      i = 0
    }
    if (div2.style.display !== 'block') {
      div2.style.display = 'block'
      setTimeout( () => {
        div2.style.opacity = '1'
        bgia2.style.opacity = '1'
      }, 100)
      setTimeout( () => {
        div1.style.backgroundImage = `url(${bg[i].img})`
        bgi1.href = `${bg[i].authorUrl}`
        bgai1.style.backgroundImage = `url(${bg[i].authorImg})`
        bgt1.innerHTML = `${bg[i].title}`
        bgan1.innerHTML = `${bg[i].author}` 
      }, 2000)
    } else {
      bgia2.style.opacity = '0'
      div2.style.opacity = '0'
      setTimeout( () => {
        div2.style.display = 'none'
      }, 1000)
      setTimeout( () => {      
        div2.style.backgroundImage = `url(${bg[i].img})`
        bgi2.href = `${bg[i].authorUrl}`
        bgai2.style.backgroundImage = `url(${bg[i].authorImg})`
        bgt2.innerHTML = `${bg[i].title}`
        bgan2.innerHTML = `${bg[i].author}`
      }, 2000)
    }
  }, 20000)
}
}()
