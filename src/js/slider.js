const slider = () => {
  const sliderItem = document.querySelectorAll('.slider-item'),
    dotsWrapper = document.querySelector('.slider-dots-wrapper')

  let index = 0

  const activeSlide = (n) => {
    for (const slide of sliderItem) {
      slide.classList.remove('slider-item-active')
    }
    sliderItem[n].classList.add('slider-item-active')
  }

  const dotArr = []

  for (let i = 0; i < sliderItem.length; i++) {
    const dots = document.createElement('li')
    dots.classList.add('slider-dots-item')
    dots.setAttribute('data-slide-to', i)
    dotsWrapper.append(dots)
    if (i == 0) {
      dots.classList.add('slider-dots-item-active')
    }
    dotArr.push(dots)
  }

  dotArr.forEach((dot) => dot.classList.remove('slider-dots-item-active'))
  dotArr[index].classList.add('slider-dots-item-active')

  dotArr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to')
      index = slideTo
      activeSlide(index)
      dotArr.forEach((item) => {
        item.classList.remove('slider-dots-item-active')
      })
      dotArr[index].classList.add('slider-dots-item-active')
    })
  })
}

export default slider
