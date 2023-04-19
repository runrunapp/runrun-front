import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationMetadata,
  AnimationPlayer,
  style,
} from '@angular/animations';

@Directive({
  selector: '[animateIn]',
})
export class AnimateInDirective implements OnInit {
  @Input() animateInAnimation!: AnimationMetadata;
  @Input() animateInThreshold: number | number[] = 0;
  @Input() unObserveIn = true;
  playerAnimIn!: AnimationPlayer;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit(): void {
    let animationIn: AnimationFactory;
    // let animationOut: AnimationFactory;

    if (
      this.animateInAnimation !== null &&
      this.animateInAnimation !== undefined
    ) {
      animationIn = this.animationBuilder.build(this.animateInAnimation);
    } else {
      animationIn = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]);
    }

    if (
      'IntersectionObserver' in window && // IntersectionObserver supported in browser
      'IntersectionObserverEntry' in window
    ) {
      this.playerAnimIn = animationIn.create(this.el.nativeElement);
      this.playerAnimIn.init();
      const intersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          entries.forEach((entry) => {
            if (entry.target == this.el.nativeElement) {
              if (entry.isIntersecting) {
                if (this.unObserveIn) {
                  observer.unobserve(entry.target);
                }
                this.playerAnimIn.play();
              }
            }
          });
        },
        {
          threshold: this.animateInThreshold,
        }
      );

      intersectionObserver.observe(this.el.nativeElement);
    }
  }
}
