import { Component, Input } from "@angular/core";

@Component({
    selector:'app-custom-error',
    templateUrl: './custom-error.component.html'
})
export class CustomErrorComponent {
    
    @Input() error: Error | null = null;
}
