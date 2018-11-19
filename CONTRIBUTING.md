Feel welcome to create any issue and pull request.  
To work on this library you can use the commands shown below.  
All PRs are validated via Travis CI. Please ensure that all checks complete successfully.

## Testing

Run unit tests:
```bash
npm test
```

## Building and packaging

When unit tests has been finished with success you can build and test package locally.
```bash
npm run build
npm run pack-lib
```
If you want see your changes quickly in app then run:
```bash
npm run example-install
```
This will cause installation latest version in example app. Then you can go into `example-app` directory, run `npm install` and `ng serve`.
