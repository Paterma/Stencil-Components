import { Component, Prop, h } from '@stencil/core';


// defineCustomElements()

@Component({
    tag: 'my-first-comp',
    styleUrl: 'my-first-comp.css'
  })



export class MyFirstComp {

     /**
   */  @Prop() disabled: boolean = true 

            render() {

             
          let button = document.getElementById("hoverBtn")
          if (button) {
                button.addEventListener("click", function () {
                 alert("Look at me, I hover")
               })}

                const { disabled } = this
            
                return ( 
                
               
            <button-group>
            
            <button id='mainBtn'>Secondary Button</button>
            
            <button id='disabledBtn' aria-disabled={disabled ? 'true' : null}
            disabled={disabled}>
            Disabled button
            </button>
            
            <button id='hoverBtn'> <span id='hoverTxt'>Hover Button</span></button>
            
            
              </button-group>  
            
            
                )
            }
            }

