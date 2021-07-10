function clicked(index){
  var ele = document.getElementsByClassName('collapse')[index].nextElementSibling
  ele.style.display === 'block' ? ele.style.display = 'none' : ele.style.display = 'block'
}
function contact(index){
  var des = document.getElementsByClassName('infor')[0].childNodes
  for (i=0;i<4;i++){
    var chn = des[(i*2)+1]
    chn.style.display = 'none'
  }
  var chn = (des[(index*2)+1]);
  chn.style.display = 'block'
}
function scrollWin(x,y){
  window.scroll({
    top: y,
    left:x,
    behavior: 'smooth'})
}
function menu(){
  var ele = document.getElementsByClassName('slide')[0].childNodes
  if (ele[1].style.visibility === 'hidden'){
    ele[1].style.visibility = 'visible'
    ele[1].style.opacity = '1'
  }
  else{
    ele[1].style.visibility = 'hidden'
    ele[1].style.opacity = '0'
  }
}
function closeSlide(x,y){
  var ele = document.getElementsByClassName('slide')[0].childNodes
  ele[1].style.visibility = 'hidden'
  ele[1].style.opacity = '0'
  window.scroll({
    top: y,
    left:x,
    behavior: 'smooth'})
}
