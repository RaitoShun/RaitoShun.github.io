var EmblaCarousel = require("embla-carousel");
const emblaNode = document.querySelector('.embla')
const emblaNode2 = document.querySelector('.embla2')

const embla = EmblaCarousel(emblaNode,{align: 'center',
containerSelector: '*',
slidesToScroll: 1,
containScroll: false,
draggable: true,
dragFree: true,
loop: false,
speed: 10,
startIndex: 0,
selectedClass: 'is-selected',
draggableClass: 'is-draggable',
draggingClass: 'is-dragging',
})

const embla2 =  EmblaCarousel(emblaNode2,{
loop: false,
speed: 5,
});


const autoPlay = (embla, interval) => {
    const state = { timer: 0 };
  
    const play = () => {
      stop();
      requestAnimationFrame(
        () => (state.timer = window.setTimeout(next, interval))
      );
    };
  
    const stop = () => {
      window.clearTimeout(state.timer);
      state.timer = 0;
    };
  
    const next = () => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
      play();
    };
  
    return { play, stop };
  };

  const autoPlayer = autoPlay(embla2,4000);

  autoPlayer.play();