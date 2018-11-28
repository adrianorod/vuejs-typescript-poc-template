export default class DOMUtils {

  public static getElementById(selector: string): HTMLElement {
    return <HTMLElement>document.getElementById(selector);
  }

  public static querySelector(className: string, element: HTMLElement | Element | Document = document): HTMLElement {
    return <HTMLElement>element.querySelector(className);
  }

  public static querySelectorAll(className: string, element: HTMLElement | Element | Document = document): NodeListOf<HTMLElement> {
    return <NodeListOf<HTMLElement>>element.querySelectorAll(className);
  }

  public static getElementsByClassName(selector: string, element: HTMLElement | Element | Document = document): HTMLCollectionOf<HTMLElement> {
    return <HTMLCollectionOf<HTMLElement>>element.getElementsByClassName(selector);
  }

  public static isHTMLElement(element: any): HTMLElement {
    return <HTMLElement>element;
  }

  public static isElement(element: any): Element {
    return <Element>element;
  }

  public static isVideoElement(element: any): HTMLVideoElement {
    return <HTMLVideoElement>element;
  }

}
