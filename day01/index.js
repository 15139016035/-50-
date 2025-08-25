//拿到合集
const images =document.querySelectorAll('.image');

//遍历循环处理 ,添加点击事件，和对应的回调函数
images.forEach(item=>{
    item.addEventListener('click',()=>{
        //先移除
        removeActiveClass();
        //再添加
        item.classList.add('active');
    })
});

function removeActiveClass(){
    images.forEach(item=>{
        item.classList.remove('active');
    })
}