import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./app.component";
import { PaymentgatwayComponent } from './paymentgatway/paymentgatway.component';


@NgModule({
    declarations:[
        LoginComponent,
        PaymentgatwayComponent

    ],
imports:[

        BrowserModule
    ],

    providers:[],
    bootstrap:[LoginComponent]
})

export class AppModule{}