/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyFirstComp {
        "disabled": boolean;
    }
}
declare global {
    interface HTMLMyFirstCompElement extends Components.MyFirstComp, HTMLStencilElement {
    }
    var HTMLMyFirstCompElement: {
        prototype: HTMLMyFirstCompElement;
        new (): HTMLMyFirstCompElement;
    };
    interface HTMLElementTagNameMap {
        "my-first-comp": HTMLMyFirstCompElement;
    }
}
declare namespace LocalJSX {
    interface MyFirstComp {
        "disabled"?: boolean;
    }
    interface IntrinsicElements {
        "my-first-comp": MyFirstComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-first-comp": LocalJSX.MyFirstComp & JSXBase.HTMLAttributes<HTMLMyFirstCompElement>;
        }
    }
}