# BestPractices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

This project is used as a cookbook of best practices for a non-trivial Angular project and includes architectural/design/testing patterns that are meant to serve as examples for others.  READMEs are provided for higher level concepts and comments in the code point out specific ideas and implementation notes. Code is meant to be highly readable & we prefer clarity over brevity.
We include here:
* Testing - this project is based on TDD principles and practices.
* Material Design components and animation
* Store via the use of the Ngrx library
* Lazy loading of feature modules
* Deployment pipelines

The use of the angular cli and the commands used to generate components/services are in the comments of each.

## Application explanation
This software represents a fictitious sales management company with products, customers and orders and is a site that allows:
* Customers to place orders
* Inventory managers to manage stock levels
* Sales reps to manage orders

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
