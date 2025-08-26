const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circles = document.querySelectorAll('.circle');

//当前选中的哪一个active;
let currentActive = 1;

//给next按钮添加点击事件和对应的回调函数
next.addEventListener('click', () => {
    // 不能超过4
    if (currentActive < 4) {
        currentActive++;
    }
    console.log("当前的currentActive的值：",currentActive);
    update();
});

//给prev按钮添加点击事件和对应的回调函数
prev.addEventListener('click', () => {
    //不能小于1
    if (currentActive > 1) {
        currentActive--;
    }
    console.log("当前的currentActive的值：",currentActive);
    update();
});


function update() {

    //1.circles进行遍历，根据当前的currentActive来增加或者一处active的class标识；
    circles.forEach((item, index) => {
        if (index < currentActive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })

    //2.拿到所有有的active；
    const actives = document.querySelectorAll('.active');
    //选中的元素 与 总的元素；计算出占比关系就是蓝色线的宽度
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%';

    //3. 根据当前的currentActive 来判断按钮是否变为灰色；
    if (currentActive === 1) {
        prev.disabled=true;
    }else if (currentActive === circles.length) {
        next.disabled=true;
    }else{
        next.disabled=false;
        prev.disabled=false;
    }
}



