# ANGULAR - FORMS

Angular trannsforms the HTML form in Javascript object. The object looks like:
```javascript
{
	value: {
		key-one: 'value-one',
		key-two: 'value-two',
		key-n: 'value-n'
	},
	valid: true
}
```

## Two Approache: Template Driven and Reactive
**Angular** implements two methods to manage a form:
### Template Driven
Angular infers de Form Object from the DOM.
### Reactive
More complex. Form is created programmatically and synchonized with the DOM. This approach allow a better form handling.

## Template Driven
> **ngModel** Creates a FormControl instance from a domain model and binds it to a form control element. More info: https://angular.io/api/forms/NgModel
> **ngModel** also can be used to expose additional information about a specific form `#email="ngModel"`.
### Use ngModel
- HTML code
    Add `ngModel` directive to each input in the form
    ```html
    <input type="text" id="example" ngModel name="example">
    ```
### *"Submit"* form
- HTML code
    ```html
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
    ```
    1. Add `ngSubmit` directive in form tag. More info https://angular.io/guide/forms#submit-the-form-with-ngsubmit
    2. Bind form with method signature in `ngSubmit` directive.
    3. Send `ngForm` as a parameter.More info https://angular.io/api/forms/NgForm
- Typescript code
    1. Import `NgForm` and `ViewChild`
        ```typescript
        import { NgForm } from '@angular/forms';
        import { ViewChild } from '@angular/core';
        ```
    2. Create `@ViewChild` variable.
        ```typescript
        @ViewChild('f') signupForm: NgForm;
        ```
    3. Use it in method
        ```typescript
        onSubmit() {
         console.log(this.signupForm);
        }
        ```
### Validators
More info, visit https://angular.io/api/forms/Validators

### Validator directives
More info, visit https://angular.io/api?type=directive

### Set default value in select
In select add `[ngModel]="'defaultValueInTS'"`
**Example**
```html
<!-- HTML code  -->
<select id="secret"
    class="form-control"
    [ngModel]="defaultQuestion"
    name="secret">
    <option value="pet">Your first pet?</option>
    <option value="teacher">Your first teacher?</option>
</select>
```
```typescript
// TypeScript code
defaultQuestion: string = 'pet';
```
### Two-Way-Binding with `ngModel`
```html
<!-- HTML code  -->
<textarea
 name="questionAnswer"
 rows="3"
 class="form-control"
 [(ngModel)]="answer">
</textarea>
<p>Your reply: {{ answer }}</p>
```
```typescript
answer: string = '';
```
### `NgModelGroup`
Creates and binds a FormGroup instance to a DOM element.
**Example**
```html
<div ngModelGroup="stringId">
```
To access to the javascript object before _submit_ the form, use the following code:
```html
<div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
```
