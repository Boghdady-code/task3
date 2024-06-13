import { AfterViewInit, Component,  Input, OnChanges, OnInit, Renderer2} from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges,OnInit,AfterViewInit {
  
  nameElement : any;
  jobElement : any;
  emailElement : any;
  addressElement : any;
  websiteElement : any;
  qrCodeElement : any;
  phonesElement : any;

  constructor (private renderer: Renderer2) {
  }

  ngOnInit(): void {
    
    
  }

  ngAfterViewInit(): void {
    this.nameElement = document.querySelector('.name');
    this.jobElement = document.querySelector('.job');
    this.emailElement = document.querySelector('.email');
    this.addressElement = document.querySelector('.address');
    this.websiteElement = document.querySelector('.website');
    this.phonesElement = document.querySelector('.phones');
    const styleElement = this.renderer.createElement('style');
    const textNode = this.renderer.createText(this.css!);
    this.renderer.appendChild(styleElement, textNode);
    const container = document.querySelector('.container-fluid');
    this.renderer.appendChild(container, styleElement);
  }
  
@Input() name: string | undefined;
@Input() job: string | undefined;
@Input() email: string | undefined;
@Input() phones: any[] | undefined;
@Input() address: string | undefined;
@Input() website: string | undefined;
@Input() qrCode: string | undefined;
@Input() html: string | undefined;
@Input() css: string | undefined;

ngOnChanges() {
  const setElementInnerHTML = (element: any, content: any) => {
    if (element) {
      this.renderer.setProperty(element, 'innerHTML', content);
    }
  };

  setElementInnerHTML(this.nameElement, this.name);
  setElementInnerHTML(this.jobElement, this.job);
  setElementInnerHTML(this.emailElement, this.email);
  setElementInnerHTML(this.addressElement, this.address);
  setElementInnerHTML(this.websiteElement, this.website);
  

  if (this.phonesElement) {
    this.renderer.setProperty(this.phonesElement, 'innerHTML', '');
    if (this.phones) {
      this.phones.forEach(phone => {
        const phoneElement = this.renderer.createElement('li');
        this.renderer.addClass(phoneElement, 'list-group-item');
        this.renderer.setProperty(phoneElement, 'innerHTML', phone);
        this.renderer.appendChild(this.phonesElement, phoneElement);
      });
    }
  }
}
}
