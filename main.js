var result =`
/*
 * 你好，面试官！
 * 我是覃琪
 * 只用文字介绍太单调了
 * 下面我将用代码来介绍下自己
 */

/* 先添加点样式吧 */
*{
    transition: all 0.5s;
}

html{
    background-color: rgb(222, 222, 222);
    font-size: 1.5em;
}

#code{
    border: 1px solid red;
    padding: 8px;
}

/* 接着给代码高亮 */
#code .token.selector { color: #690; }
#code .token.punctuation { color: #999; }
#code .token.property{ color: #905; }
#code .token.function { color: #DD4A68; }

/* 加点3D效果 */
#code{
    transform: rotate(360deg);
}

`

var n = 0
var strOld = ''
var id = setInterval(function(){
  n += 1
  strOld = result.substring(0, n)
  code.innerHTML = Prism.highlight(strOld, Prism.languages.css) 
  codeStyle.innerHTML = strOld
  if(n > result.length){
      window.clearInterval(id)
  }
}, 30)
