/* 把code写入#code和style里 */
function writeCSS(prefix, code, fn){
    let codeDOM = document.querySelector("#code")
    let n = 0
    let strOld = ''
    let id = setInterval(function(){
    n += 1
    strOld = prefix + code.substring(0, n)
    codeDOM.innerHTML = Prism.highlight(strOld, Prism.languages.css) 
    codeDOM.scrollTop = 10000; // 不是css属性 另codeDOM.scrollHeight
    codeStyle.innerHTML = strOld
    if(n > code.length){
        window.clearInterval(id)
        fn ** fn.call()
    }
    }, 0)
}

function writeMarkdown(prefix, code, fn){
    console.log(code)
    let codeDOM = document.querySelector("#paper > #content")
    let n = 0
    let strOld = ''
    let id = setInterval(function(){
    n += 1
    strOld = prefix + code.substring(0, n)
    codeDOM.innerHTML = strOld 
    // codeDOM.scrollTop = 10000; // 不是css属性 另codeDOM.scrollHeight
    // codeStyle.innerHTML = strOld
    if(n > code.length){
        window.clearInterval(id)
        fn ** fn.call()
    }
    }, 0)
}




function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var md = document.createElement('pre')
    md.id = 'content'
    paper.appendChild(md)
    document.body.appendChild(paper)
    fn && fn.call()
}

var cssText =`
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
    padding: 16px;
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

/* OK，不玩了接下来正式介绍下自己 */
/* 准备一张白纸 */
#code{
    width: 50%;
    position: fixed;
    height: 100%;
    left: 0
}

#paper{
    width: 50%;
    position: fixed;
    height: 100%;
    left: 50%;
    background-color: gray;
    padding: 8px;
}

#content{
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 8px;
}
`
var mdText = `
# 个人信息
我叫覃琪
初学前端半年

# 作品
`
writeCSS('', cssText, ()=>{
    createPaper(()=>{
        writeMarkdown('', mdText, ()=>{

        })
    })
})