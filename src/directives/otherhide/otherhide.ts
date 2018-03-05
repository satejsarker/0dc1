import { Directive, Renderer, ElementRef,Input } from '@angular/core';


@Directive({
  selector: '[otherhide]',
  host:{
    '(ionScroll)': 'onScrollCreate($event)'
  } // Attribute selector
})
export class OtherhideDirective {
  @Input("header") header: HTMLElement;
  headerHeight;
  scrollContent;
  footer:any;
  oldScrollTop:number=0;
  another:any;
  superTab:any;




  constructor( public renderer:Renderer, public element:ElementRef) {
    console.log('Hello HidebarDirective Directive');
  }
  ngOnInit(){
    // this.headerHeight = this.header.clientHeight;
    // this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
    this.superTab=document.getElementsByClassName("hed-border")[0];
    this.scrollContent=document.getElementsByClassName("head")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 500ms');
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'opacity 1200ms');
    // // this.renderer.setElementStyle(this.superTab, 'webkitTransition', 'opacity 1000ms');
    // // this.footer=document.getElementsByClassName("hed-border disable-hover bar-buttons bar-buttons-md button button-md button-default button-default-md button-menutoggle button-menutoggle-md")[0];
    this.another=document.getElementsByClassName("f")[0];
    // // this.superTab=document.getElementsByClassName("super")[0];
    this.renderer.setElementStyle(this.another, 'webkitTransition', 'opacity 800ms');
  

  }

  onScrollCreate(event){
    if(event.scrollTop- this.oldScrollTop>10){
      this.renderer.setElementStyle(this.header, "opacity", "0")
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px")
      this.renderer.setElementStyle(this.another,"opacity", "0");
      this.renderer.setElementStyle(this.superTab,"display","none");
    } else  if(event.scrollTop -this.oldScrollTop<0){
      this.renderer.setElementStyle(this.header, "opacity", "1");
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px")
      this.renderer.setElementStyle(this.another,"opacity", "1")
      this.renderer.setElementStyle(this.superTab,"display","block");
    }
    this.oldScrollTop=event.scrollTop;
  }


}
