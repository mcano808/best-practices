# Services and Utils
Everything in this directory is an Angular service and is generated using the ```ng g s <service-name>```.  Note the 'utils' directory.  These are services that follow a specific pattern and represent simple functionality.  All functions are static and pure.  There is no interaction with class level attributes other than static read-only values.  The idea is that each function is pure and operates only on the information passed to it.  These services should never be used for 'sharing information' and represent chunks of unique functionality.  This is by convention only, and there is nothing in the Angular framework, or Typescript, that reinforces this.

## Dependency Injection
Services should use Angular's DI to make themselves available to other services and components, utils should not (as they are just a collection of static methods).
