import { LightningElement, api, track } from 'lwc';
import Set_this_Output from '@salesforce/label/c.Set_this_Output';
import To_the_value_of_this_key from '@salesforce/label/c.To_the_value_of_this_key';

export default class TargetKeyInput extends LightningElement {
    @api entity = {};
    labels = {
        Set_this_Output,
        To_the_value_of_this_key
    }
    get key(){
        return this.entity.key;
    }

    get value(){
        return this.entity.value;
    }

    get showButton() {
        return this.entity.order > 0;
    }
    changeKey(event) {
        this.entity = JSON.parse(JSON.stringify(this.entity));
        this.entity.key = event.detail.value;
        const valueChangedEvent = new CustomEvent('changeinput', {
            detail: {
                entity: this.entity,
            }
        });
        this.dispatchEvent(valueChangedEvent);
    }

    changeValue(event) {
        this.entity = JSON.parse(JSON.stringify(this.entity));
        this.entity.value = event.detail.value;
        const valueChangedEvent = new CustomEvent('changeinput', {
            detail: {
                entity: this.entity,
            }
        });
        this.dispatchEvent(valueChangedEvent);
    }

    remove() {
        const removeItemEvent = new CustomEvent('removeitem', {
            detail: {
                entity: this.entity,
            }
        });
        this.dispatchEvent(removeItemEvent);
    }
}