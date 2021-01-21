$(document).ready(function(){
    let currentNode = 0
    const nodeList = $(".screen-4__block-item")
    nodeList.each(function(i, el){
        $(this).click(function(){
            console.log(el, i)
            currentNode = i
 
            nodeList.removeClass("active-1")
            nodeList.removeClass("active-2")
            nodeList.removeClass("active")
            $(this).addClass("active")
            
            i - 1 >= 0 && nodeList[currentNode-1].classList.add("active-2")
            nodeList[currentNode+1] && nodeList[currentNode+1].classList.add("active-1")
        })
 
    })








})