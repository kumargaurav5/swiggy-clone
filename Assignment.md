## what is NPM?
NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

NPM consists of two main parts:

a CLI (command-line interface) tool for publishing and downloading packages, and
an online repository that hosts JavaScript packages

## What is parcel or Webpack? why do we need it?
Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. 
- for more information see Readme.md

## What is .parcel-cache?
stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## why is npx?
NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. 

| NPM                                                                                                                                            | NPX                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NPM is a package manager used to install, delete, and update Javascript packages on your machine.                                              | NPX is a package executer, and it is used to execute javascript packages directly, without installing them.                                                        |
| NPM installs packages globally, which means that your machine may be polluted by packages that are not required anymore in the long run.       | NPX does not install packages, so package pollution on the machine is not a concern.                                                                               |
| To use create-react-app using NPM, we would first have to install it globally, and then run it, which makes using NPM in such cases redundant. | The most common application of NPX is the create-react-app command. Since we only need to use it once, i.e., while initializing the project, we do not install it. |

