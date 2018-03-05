import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HidebarDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hidebar]',
  host:{
    '(ionScroll)': 'onScrollCreate($event)'
  }  // Attribute selector
})
export class HidebarDirective {
  footer:any;
  oldScrollTop:number=0;
  another:any;
  superTab:any;
  header:any;



  constructor( public renderer:Renderer, public element:ElementRef) {
    console.log('Hello HidebarDirective Directive');
  }
 
  ngOnInit(){
    this.header=document.getElementsByClassName("head")[0];
    this.superTab=document.getElementsByClassName("hed-border")[0];
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'opacity 1000ms');
    // this.renderer.setElementStyle(this.superTab, 'webkitTransition', 'opacity 1000ms');
    // this.footer=document.getElementsByClassName("hed-border disable-hover bar-buttons bar-buttons-md button button-md button-default button-default-md button-menutoggle button-menutoggle-md")[0];
    this.another=document.getElementsByClassName("f")[0];
    // // this.superTab=document.getElementsByClassName("super")[0];
    this.renderer.setElementStyle(this.another, 'webkitTransition', 'opacity 750ms');
  

  }

  onScrollCreate(e){
 if(e.scrollTop- this.oldScrollTop>10){
   
  console.log(this.footer)
  console.log(this.another)
  console.log(this.header);
  // console.log(this.superTab)

  //  this.renderer.setElementStyle(this.footer,"display","none");
   this.renderer.setElementStyle(this.another,"opacity","0");
   this.renderer.setElementStyle(this.header,"opacity","0");
   this.renderer.setElementStyle(this.superTab,"opacity","0");
 
  //  this.renderer.setElementStyle(this.superTab," height","712px")

 } else if(e.scrollTop- this.oldScrollTop<0){
   console.log('Up')
  //  this.renderer.setElementStyle(this.footer,"display","block");
   this.renderer.setElementStyle(this.another,"opacity","1");
   this.renderer.setElementStyle(this.header,"opacity","1");
   this.renderer.setElementStyle(this.superTab,"opacity","1");
  //  this.renderer.setElementStyle(this.superTab,"opacity","1");
 
 }
    
//  this.oldScrollTop=e.scrollTop;
  }


}
