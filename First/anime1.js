const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')

gsap.to([circle1, circle2], {
    x: 300,
    duration: 3,
    ease: 'none',
    backgroundColor: '#f77234',
})

gsap.to('.box1', {
    rotation: 360,
    x: '50vw',
    duration: 3,
    repeat: 3,
    ease: 'none',
    yoyo: true,
})
