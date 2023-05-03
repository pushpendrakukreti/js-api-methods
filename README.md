# js-api-methods

### In JavaScript, you can make API calls using different methods depending on the requirements of the API and the data format you are working with. Here are some commonly used API call methods in JavaScript:

![difference](https://user-images.githubusercontent.com/41129279/235898760-0f949bb7-577f-4fd5-9e97-b40c7404ad21.png)

> Note
> ### XHR has been around for a long time and is widely supported by all modern browsers. Fetch and Axios are more recent additions to the language and provide a simpler, more intuitive API for making HTTP requests. While all three methods can be used to achieve similar results, “Axios” is often preferred due to its ease of use and built-in support for interceptors and global error handling.

#### XMLHttpRequest (XHR): is a legacy API for making HTTP requests. It has been around for a long time and is supported by all modern browsers. However, its syntax is complex and it does not support request cancellation or interceptors.
#### Example code for XHR API call:

![XMLHttpRequest](https://user-images.githubusercontent.com/41129279/235904515-288831f0-fe6f-4b79-8591-e91ed6e88ddc.png)

#### Fetch API: is a modern alternative to XHR. It is simple to use and returns a promise, which makes error handling and chaining requests easy. It supports request cancellation, but does not support interceptors.
#### Example code for Fetch API call:

![Fetch](https://user-images.githubusercontent.com/41129279/235904584-68501b4e-446c-440d-a4ad-0e020f6c72b4.png)

#### Axios: is a popular library for making HTTP requests in JavaScript. It is based on the Fetch API and adds support for interceptors and request cancellation. It also supports authentication and timeout options, making it a popular choice for complex applications.
#### Example code for Axios API call:

![Axios](https://user-images.githubusercontent.com/41129279/235904660-331c15da-4fca-4c34-aaba-34c30ed7cf28.png)