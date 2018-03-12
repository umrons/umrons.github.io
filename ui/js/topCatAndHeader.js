!function () {
  window.onscroll = function () { 
    let t = document.documentElement.scrollTop || document.body.scrollTop  //获取距离页面顶部的距离
    let div = document.getElementById( "top-cat" )
    if( t >= 300 ) { //当距离顶部超过300px时
      div.style.top = 'calc( -900px + 80vmin )'
    } else { //如果距离顶部小于300px
      div.style.top = -900 + 'px'
    }
    let header = document.getElementById( "header-pc" )
    if( t >= 1 ) {
      header.setAttribute('style', 'background: rgba(255,255,255, .87)')
    } else {
      header.setAttribute('style', 'background: transparent')
    }
  }
}()