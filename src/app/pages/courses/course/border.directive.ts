import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[myBorder]'
})

export class BorderDirective implements OnInit {
	@Input() myBorder: string;
	constructor(private el: ElementRef) {
	}

	ngOnInit(): void {
		this.setBorder();
	}

	setBorder(): void {
		const currentDate = new Date();
		const formattedDate = currentDate.getTime();
		const courseDate = new Date(this.myBorder);
		const formattedCourseDate = courseDate.getTime();

		if (formattedDate < formattedCourseDate) {
			this.el.nativeElement.style.border = '1px solid green';
		} else {
			this.el.nativeElement.style.border = '1px solid blue';
		}

	}

	@HostListener('mouseenter') onMouseEnter() {
	  this.highlight('grey');
	}

	@HostListener('mouseleave') onMouseLeave() {
	 this.highlight(null);
	}

	private highlight(color: string) {
	  this.el.nativeElement.style.backgroundColor = color;
	}
}
