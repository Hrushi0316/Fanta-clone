let t1 = gsap.timeline();

t1.from("h1",{
    y:-200,
    duration: 3,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
},'orange');

t1.from(".oranges",{

    x:200,
    opacity:0,
    duration:2,
    ease: "power2.out",


},"orange")

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        start:"2% 95%",
        end:"50% 50%",
        //markers:true,
        scrub:true
    }
});

t2.to(".fanta-bottle",{
 top:"110%",
 left:"20%",
 rotation:15
},"asdf");

t2.to(".orange-cut",{
    top:"160%",
    left:"55%",
},"asdf")

t2.to(".leaf",{
    top:"100%",
    left:"7%",
    height:"200px",
},"asdf")

let t3 = gsap.timeline({
    scrollTrigger:{
       trigger:".page3",
        start:"2% 95%",
        end:"50% 50%",
       // markers:true,
        scrub:true
    }
});

t3.to('.fanta-bottle',{
    top:"215%",
    left:"76%",
    rotation:0,
    height:"380px"
},"asdf")

t3.to(".lemon-slices",{
    top:'90%',
    left:"2%,",
    width:"300px",
    height:"250px"
},'asdf')

t3.to(".orange-cut",{
    top:'255%',
    left:"1250px,",
    width:"200px",
    height:"150px"
},'asdf')





