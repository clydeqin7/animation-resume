var result =`
/*
 * 你好，面试官！
 * 我是覃琪
 * 只用文字介绍太单调了
 * 下面我将用代码来介绍下自己
 */

 // 先添加点样式吧
 *{
     transiton: all 0.5s;
 }

 html{
     background-color: rgb(222, 222, 222);
     font-size: 1.5em;
 }

 #code{
     border: 1px solid red;
     padding: 8px;
 }
`

var n = 0
var id = setInterval(function(){
  n += 1
  code.innerHTML = result.substring(0, n)
  codeStyle.innerHTML = result.substring(0, n)
  if(n > result.length){
      window.clearInterval(id)
  }
}, 50)
