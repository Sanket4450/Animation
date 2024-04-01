const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')

gsap.to([circle1, circle2], {
    x: 300,
    duration: 4,
    backgroundColor: '#f77234',
})
