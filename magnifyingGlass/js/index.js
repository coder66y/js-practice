window.addEventListener('load', () => {
  // 
  const box = document.querySelector('.box'); // 盒子
  const img = document.querySelector('.img'); // 图片
  const bigWrapper = document.querySelector('.bigWrapper'); // 大图片的盒子
  const glassWrapper = document.querySelector('.glassWrapper'); // 放大镜的盒子
  const glass = document.querySelector(".glass"); // 放大镜
  const bigImg = document.querySelector('.bigImg'); // 大图片

  glassWrapper.addEventListener('mouseover', () => {
    glass.style.display = 'block';
    bigImg.style.display = 'block';
  });

  glassWrapper.addEventListener('mouseout', () => {
    glass.style.display = 'none';
    bigImg.style.display = 'none';
  })
  box.addEventListener('mousemove', (e) => {
    // 该操作让glassWrapper的左上角变成坐标原点, 因为glass是先相对于glassWrapper而移动的
    const x = e.pageX - glassWrapper.offsetLeft;
    const y = e.pageY - glassWrapper.offsetTop;
    // 让鼠标在glass的中间位置
    let width = x - glass.offsetWidth / 2;
    let height = y - glass.offsetHeight / 2;
    // 让glass不超出img内部
    if (width <= 0) {
        width = 0;
    } else if (width >= glassWrapper.offsetWidth - glass.offsetWidth) {
        width = glassWrapper.offsetWidth - glass.offsetWidth;
    }
    if (height <= 0) {
        height = 0;
    } else if (height >= glassWrapper.offsetHeight - glass.offsetHeight) {
        height = glassWrapper.offsetHeight - glass.offsetHeight;
    }

    // 改变放大镜的位置
    glass.style.left = width + 'px';
    glass.style.top = height + 'px';

    // 改变大图片的位置
    bigImg.style.width = img.offsetWidth * bigWrapper.offsetWidth / glass.offsetWidth + 'px';
    bigImg.style.left = - width * bigImg.offsetWidth / img.offsetWidth + 'px';
    bigImg.style.top = - height * bigImg.offsetHeight / img.offsetHeight + 'px';
  })
})