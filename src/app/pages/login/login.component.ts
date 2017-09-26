import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    sub: Subscription;
    constructor(
        private fb: FormBuilder,
        private AuthService$: AuthService,
        private router: Router
    ) { }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit() {

        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.form = this.fb.group({
            username: ["", Validators.compose([Validators.required])],
            password: ["", Validators.required]
        })
    }

    public ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    onSubmit({value,Validators},ev: Event) {
        ev.preventDefault();
        console.log(value);
        
        this.AuthService$
            .login(value.username, value.password)
            .subscribe(res => this.router.navigate(['/', 'dashboard']));
    }
}
