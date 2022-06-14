# App Level
Things at this level, whether components, services, or state are defined as application wide.
* Services at this level can be used anywhere in the app.  Think common.
* Components at this level can be used anywhere in the app.  Think common.
* Routing at this level is for the different sections of the app and should be mainly focused on loading common components or lazy-loading feature modules.
* Store at this level is the base store and provides application level state.  It also serves as a base for feature module state to be added to.

## Feature Modules
Feature modules should represent discreet chunks of functionality and have their own directories that inlcude feature level components, services/utils & state.  If something is used in multiple features that generally indicates it belongs in the app (common) level.
