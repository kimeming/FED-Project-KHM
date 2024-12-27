// main.js
$(() => {
    let imgEl = ``;
    for (let i = 0; i < 64; i++) {
    const firstClass = i == 0 ? "on" : "";
    imgEl += `<img class="${firstClass}" src="./img/main/${i.toString().padStart(4, "0")}.png" alt>`;
    }

    $(".animation-box").html(imgEl);

    const loading = gsap.timeline({});
    
    loading.to(".section.intro .animation-box", {
      opacity: 1
    },)
    
    loading.to(".section.intro .animation-box", {
      scale: 1, y: 0, duration: 1
    }, "text")
    
    loading.to(".section.intro .title-box h2", {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1,
    }, "text");

    const introTitle = gsap
    .timeline({
        scrollTrigger: {
        trigger: ".section.intro",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
        onEnter: function () {
            $(".nav").addClass("active");
        },
        onLeaveBack: function () {
            $(".nav").removeClass("active");
        },
        },
    })
    .to(".section.intro .title-box", 1, { scale: 1.15 })
    .to(".section.intro .title-box", { opacity: 0, duration: 2 }, "title+=0.5")
    .to(".section.intro .sub-title-box", {
        opacity: 1,
        scale: 1,
        duration: 1,
    })
    .to(".section.intro", { opacity: 0 });

    const introImg = gsap.timeline({
    scrollTrigger: {
        trigger: ".section.intro",
        start: "0% 0%",
        end: "80% 100%",
        scrub: 0,
        // markers: true,
        onUpdate: function (self) {
        imgLength = $(".animation-box img").length - 1;
        idx = Math.floor(self.progress * imgLength);

        $(".animation-box img")
            .eq(idx)
            .addClass("on")
            .siblings()
            .removeClass("on");

        idx == 63 ? $(".animation-box img").removeClass("on") : '';
        },

        }
    });
});

