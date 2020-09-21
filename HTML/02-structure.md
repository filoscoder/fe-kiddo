
# HTML Structure
<p align="center">
  <img width=35% height=37% src="https://user-images.githubusercontent.com/50701501/93736254-b7ba2380-fc1a-11ea-9392-4093a6eb1c7b.jpg" alt="HTML family tree">
</p>
HTML is organized as a collection of `family tree relationships`. Let me explain: when an element is contained inside another element, it is considered the `child` of that element, and _the container element_ is considered the `parent`. The child element is said to be nested inside of the parent element.

See the example
```HTML
    <head>
        I'm title's PARENT  
        <title>I'm head's CHILD</title>
    </head>
```

In the example above, the `<p>` element is nested inside the `<body>` element. The `<p>` element is considered a child of the `<body>` element, and the `<body>` element is considered the parent. You can also see that we’ve added two spaces of `indentation` for better readability.
<br>

> The `indentation` is a common convention, it improves readability and helps to write better code. [Learn more](https://www.w3schools.com/html/html5_syntax.asp) <br>
> You can use the space bar, but we recommend installing plugins or extensions from your favorite code editor (ex. Visual Studio Code)
<br>

Since there can be multiple levels of nesting, this analogy can be extended to `grandchildren`, `great-grandchildren`, and beyond. The relationship between elements and their ancestor and descendent elements is known as `hierarchy`.

Let’s consider a more complicated example that uses some new tags:

```HTML
    <body>
        I'm body's PARENT, but also grandfather of h1 and p 
        <div>
            I'm h1 and p's PARENT, but also child of body 
            <h1>Sibling to p, but also grandchild of body</h1>
            <p>Sibling to h1, but also grandchild of body</p>
        </div>
    </body>
```

In this example, the `<body>` element is the parent of the `<div>` element. Both the `<h1>` and `<p>` elements are children of the `<div>` element. Because the `<h1>` and `<p>` elements are at the same level, they are considered **siblings** and are both _grandchildren_ of the `<body>` element.

Understanding `HTML hierarchy` is important because child elements can _inherit_ behavior and styling from their parent element. You’ll learn more about webpage hierarchy when you start digging into CSS.