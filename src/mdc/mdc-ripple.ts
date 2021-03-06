
import {bindable, customAttribute, inject} from 'aurelia-framework';
import {MDCRipple} from '@material/ripple/index';
import '@material/ripple/mdc-ripple.scss';

@customAttribute('mdc-ripple')
@inject(Element)
export class MdcRipple {
    @bindable() unbounded = false;
    mdcRipple;

    constructor(private element: Element) { }

    bind() {
        this.mdcRipple = new MDCRipple(this.element);
    }

    attached() {
        this.element.classList.add('mdc-ripple-surface');
    }

    detached() {
        this.mdcRipple.destroy();
    }

    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = (newValue === true || newValue === 'true');
    }
}
