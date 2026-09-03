// AOS initialization

AOS.init({duration:1000 , once:true});

// menu toggle
function toggleMenu(){
    document.getElementById('menu').classList.toggle('active');
}

//counte animation

function animateCounter(id , target , speed ){
    let count = 0;
    const interval =  setInterval(() =>{
        if(count < target){
            count++ ;
            document.getElementById(id).innerText= count ;
        }else{
            clearInterval(interval);
        }
    } , speed)
}
animateCounter('courseCount' , 20 , 50);
animateCounter('studentCount' , 10 ,50);

// Testimonial slider

// const wrapper = document.getElementById('testimonialwrapper');
// const dots = document.querySelectorAll('.dot');
// let currentSlide = 0;
// const totalSlides =2 ;

// function moveToSlide(index){
//     currentSlide = index ;
//     const slideWidth = wrapper.clientWidth ;
//     wrapper.style.transform =` translateX(-${index * 100}%)`;
//     dots.forEach(dot => dot.classList.remove('active'));
// }

//     dots[index].classList.add('active');
//     setInterval(()=>{
//         currentSlide = (currentSlide + 1) % totalSlides ;
// moveToSlide(currentSlide);
//     }, 5000);
const wrapper = document.getElementById('testimonial-wrapper');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = 2;

function moveToSlide(index) {
    currentSlide = index;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    moveToSlide(currentSlide);
}, 5000);

// scroll events 

// window.onscroll = () => {
//     const scrollY = window.scrollY
//     header = document.getElementById("mainHeader"),
//     header = document.getElementById("Top") ;
//     header.classList.toggle("fixed" , scrollY > 100 ) ;
//     topBtn.style.display = scrollY > 300 ? "block" : "none" ;
// } ;

// document.getElementById("Top")?.addEventListener("click" , () =>{
//     window.scrollTo({top:0 , behavior:"smooth"});
// })
const header = document.getElementById("mainHeader");
const topBtn = document.getElementById("Top");

window.onscroll = () => {
    const scrollY = window.scrollY;
    header.classList.toggle("fixed", scrollY > 100);
    topBtn.style.display = scrollY > 300 ? "block" : "none";
};

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});