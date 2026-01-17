//Image zoom in/out script- by javascriptkit.com
//Visit JavaScript Kit (http://www.javascriptkit.com) for script
//Credit must stay intact for use

var zoomfactor=0.05 //Enter factor (0.05=5%)

function zoomhelper(){
if (parseInt(whatcache.style.width)>10&&parseInt(whatcache.style.height)>10){
whatcache.style.width=parseInt(whatcache.style.width)+parseInt(whatcache.style.width)*zoomfactor*prefix
whatcache.style.height=parseInt(whatcache.style.height)+parseInt(whatcache.style.height)*zoomfactor*prefix
}
}

function zoom(originalW, originalH, what, state){
if (!document.all&&!document.getElementById)
return
whatcache=eval("document.images."+what)
prefix=(state=="in")? 1 : -1
if (whatcache.style.width==""||state=="restore"){
whatcache.style.width=originalW
whatcache.style.height=originalH
if (state=="restore")
return
}
else{
zoomhelper()
}
beginzoom=setInterval("zoomhelper()",100)
}

function clearzoom(){
if (window.beginzoom)
clearInterval(beginzoom)
}
