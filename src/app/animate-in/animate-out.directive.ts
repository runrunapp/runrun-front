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
  selector: '[animateOut]',
})
export class AnimateOutDirective implements OnInit {
  @Input() animateOutAnimation!: AnimationMetadata;
  @Input() animateOutThreshold: number | number[] = 0;
  @Input() unObserveOut = true;
  playerAnimOut!: AnimationPlayer;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit(): void {
    let animationOut: AnimationFactory;
    // let animationOut: AnimationFactory;

    if (
      this.animateOutAnimation !== null &&
      this.animateOutAnimation !== undefined
    ) {
      animationOut = this.animationBuilder.build(this.animateOutAnimation);
    } else {
      animationOut = this.animationBuilder.build([
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
      this.playerAnimOut = animationOut.create(this.el.nativeElement);
      this.playerAnimOut.init();
      const intersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          entries.forEach((entry) => {
            if (entry.target == this.el.nativeElement) {
              if (entry.isIntersecting) {
                if (this.unObserveOut) {
                  observer.unobserve(entry.target);
                }
                this.playerAnimOut.play();
                // target?.callback(true);
              }
            }
          });
        },
        {
          threshold: this.animateOutThreshold,
        }
      );

      intersectionObserver.observe(this.el.nativeElement);
    }
  }
}
