/* 把code写入#code和style里 */
function writeCSS(prefix, code, fn){
    let codeDOM = document.querySelector("#code")
    let n = 0
    let strOld = ''
    let id = setInterval(function(){
    n += 1
    strOld = prefix + code.substring(0, n)
    codeDOM.innerHTML = Prism.highlight(strOld, Prism.languages.css) 
    codeDOM.parentNode.scrollTop = 10000; // 不是css属性 另codeDOM.scrollHeight
    codeStyle.innerHTML = strOld
    if(n > code.length){
        window.clearInterval(id)
        fn ** fn.call()
    }
    }, 0)
}

function writeMarkdown(prefix, code, fn){
    let codeDOM = document.querySelector("#paper > #content")
    let n = 0
    let strOld = ''
    let id = setInterval(function(){
    n += 1
    strOld = prefix + code.substring(0, n)
    codeDOM.innerHTML = strOld
    codeDOM.scrollTop = 10000; // 不是css属性 另codeDOM.scrollHeight
    // codeStyle.innerHTML = strOld
    if(n > code.length){
        window.clearInterval(id)
        fn ** fn.call()
    }
    }, 0)
}

function createMarkdown2HTML(fn){
    let div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(mdText)
    let markdownContainer = document.querySelector('#paper > #content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
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
    border: 1px solid white;
    padding: 16px;
}

/* 接着给代码高亮 */
#code .token.selector { color: #690; }
#code .token.punctuation { color: #999; }
#code .token.property{ color: #905; }
#code .token.function { color: #DD4A68; }

/* 加个呼吸效果 */
#code{
    animation: breath 2s infinite alternate-reverse;
}

/* OK，不玩了接下来正式介绍下自己 */
/* 准备一张白纸 */
#codeWrapper{
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
    padding: 16px;
}

#content{
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 8px;
    overflow: hidden;
}

/* 请看右边 */
`
var markedText = `

/* 接下来使用库 marked.js
*  把Markdown 变成 HTML
*/
`
var endText =`


/* 这就是我的个人简历
 * 谢谢观看
 */
`
var mdText = `
## 个人信息
我叫覃琪
初学前端半年  


# 作品
 - [网站导航页](http://clydeqin7.top/webNav/index.html)
 - 画板
 - [TODO 苹果风格的轮播]  


## 个人博客
[clyde's blog](http://clydeqin7.top/)  


## 联系我
- QQ: xxxxxxxxx
- 微信: xxxxxxx
- e-mail: xxxxxxxxxx
- tel: xxxxxxxxxxxx  


### 模块
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx  


### 模块
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx  



### 模块
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx  



### 模块
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx
- 内容xxxxxxxxxxxxxxx  


`
writeCSS('', cssText, ()=>{
    createPaper(()=>{
        writeMarkdown('', mdText, ()=>{
            writeCSS(cssText, markedText, ()=>{
                createMarkdown2HTML(()=>{
                    writeCSS(cssText+markedText, endText, ()=>{

                    })
                })
            })
        })
    })
})