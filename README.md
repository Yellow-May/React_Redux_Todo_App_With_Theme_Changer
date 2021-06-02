# React Redux Todo App


## Table of contents

-   [Overview](#overview)
    -   [Functionalities](#functionalities)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [Important Take](#important-take)
    -   [Continued development](#continued-development)
-   [Author](#author)



## Overview


### Functionalities

Users should be able to:

-   Switch between day and night theme
-   Add new task
-   Mark task completed and incomplete
-   Delete specific task
-   Toggle view to all tasks, active tasks and completed tasks
-   Clear all completed task



### Screenshot

![Desktop View ScreenShot](./screenshot.jpeg)



### Links

-   Live Site URL: [Live Site](https://react-redux-todo-app-with-theme-changer.vercel.app/)



## My process


### Built with

-   [ReactJs](https://www.reactjs.org)
-   [Redux Toolkit](https://www.redux-toolkit.js.org)
-   [Styled-Components](https://www.styled-components.com)
-   Mobile-first workflow
-   Typescript



### Important Take

I learnt more about the application of PropsTypes to Style Components

```ts
const Component = styled.div<{short: boolean}>((props) => ({
    height: props.short ? 20 : 40,

    ...
    // css styles
}))
```



### Continued development

In the near future i would like to expand the functionalities of the application, if possible adding a drag and drop functionality to re-order the tasks


## Author

-   Website - [The Yellow May](https://yellow-may.vercel.app/)
-   Frontend Mentor - [@Yellow-May](https://www.frontendmentor.io/profile/Yellow-May)
-   Linkedin - [Precious Onyekwere](https://www.linkedin.com/in/precious-onyekwere-7a87001b5/)
