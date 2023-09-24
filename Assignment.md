## what is Emmet?
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaign.

## Difference Between a Library and Framework?
A framework can abstract away logic, behavior, and even architectural patterns. It's especially useful when you begin a new project. A library can help with complexity, but typically focuses on code reuse.

Most frameworks provide a functional starting point, such as a skeleton or boilerplate, to help you build web apps quickly. A library becomes part of your already established codebase.

React js is Library because it can be used in some portion of website.

## What is CDN and Why do we use it?
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
It is used to empower your website with power of React .

## why is React Known as React?
React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.



## what is cross-orgin in Script Tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

## Differnce between React and ReactDOM?
So coming to the crux of this article, i.e. the difference between React and React-DOM :

React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

The Split
Why did the React team decide to split React and React-DOM into two different libraries?

Because React-DOM binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter. That’s why we’re seeing tools and frameworks like React-Native, React-Three being developed. These tools and frameworks don’t use React-DOM, but they do in fact use the idea behind React.


## Diffence between React Development Cdn and React Production Cdn?
In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

## what is aysn and defer?

### Html parsing using Script
```<script src="">```
while parsing html, if it incounter a script tag it stops and fetch script from network and then excute it and then start parsing html.

### Html parsing using async vs defer?
```<script asyn src="script.js"></script```
               vs
```<script defer src="script.js"></script```
The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other