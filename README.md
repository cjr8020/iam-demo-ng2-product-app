# iam-demo-ng2-product-app

Consider 
  configuration service injectable into 
  some form of "data" service for getting mdm-product-data.

### create config service

```
$ mkdir src/app/shared
craiskin@xubi-one:~/ws/standard/iam/iam-demo-ng2-product-app $ ng g s shared/Config
Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
installing service
  create src/app/shared/config.service.spec.ts
  create src/app/shared/config.service.ts
  WARNING Service is generated but not provided, it must be provided to be used

```

### create mdm product service

```
$ ng g s MdmProduct
Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
installing service
  create src/app/mdm-product.service.spec.ts
  create src/app/mdm-product.service.ts
  WARNING Service is generated but not provided, it must be provided to be used

```



## Scaffold Notes

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
