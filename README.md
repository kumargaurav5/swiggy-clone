## pakage.json
It is configuration for npm.

There are two type of dependency
1.Normal Dependency=> It can be required during production .
2.DEV Dependency =>It is generally required during Development.

## pakage-lock.json
Track extact version of Dependency and their dependency.

## node_module
It is collection of dependency.

# .gitingore
file which you can't wish to push on Github .
no need to push node_module as it can be installed with help of package-Json
``` npm install ```

# Common
npx means excuting  a package .
Using cdn link for React is not a good Way as it made network call ,import from npm is better way



## parcel
parcel is a beast.
- Dev Build
- local server
- HMR (hot module replacement)
- file watching algorithm - Written in c++
- Caching - Faster Builds
- Image Optimization
- Minifiation
- Bunding
- Compressing
- consistent Hashing
- Code Splitting
- Differential Bundling- support older browers
- Diagnostic - error in better way
- Error Handling
- HTTPs
- Tree Shaking -remove unused code
- Different dev and pro bundles

remove this line for production build
"main": "App.js"  in package.json,

# command for running server 
```console
npx parcel index.html
```

# command for Production build
```console
npx parcel build index.html
```

dist and .parcel-cache can we generated so, there are also put in .gitignore.