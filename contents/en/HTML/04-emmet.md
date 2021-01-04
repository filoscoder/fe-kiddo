# Emmet toolkit
Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow. This totally optional, you can choose to get advantage of this feature or simply don't, is there for you. (See the full documentation [here](https://docs.emmet.io/))
![emmettip](https://user-images.githubusercontent.com/50701501/103562462-6c6f0c80-4ebb-11eb-9536-d518a3fde782.jpg)
<br>
<br>

## Introduction and Installation
Sometimes typing all of these HTML tags is quite a pain. There are a lot of characters to type, some of them are awkward to type (especially the opening and closing brackets), and you have to remember to add closing tags as well!

Thankfully, there is a nice tool to help us out called `Emmet`, which makes writing HTML a breeze. We will be using `VS Code` (_Visual Studio Code_) as our text editor so to get started, follow these steps:

- Install VS Code. You can find it [here](https://code.visualstudio.com/).
- Open `VS Code`.
- Create and save a file with a `.html` extension.
- In your `.html` file - type in `!` and press `tab`
- This should appear:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

> 💡 Don't worry about trying to remember all of this HTML boilerplate; Emmet's got you covered!
<br>
<br>

## Emmet Shortcuts
One of the nice things you can do with emmet is write HTML quickly! Get started by typing h1 and pressing tab. You should see `<h1></h1>` with your cursor in the middle!

If you want to nest tags inside of others you can use the > symbol. For example, typing div>span and pressing tab should produce `<div><span></span></div>`. Once again, your cursor should show up in the middle.

If you want to add text inside a tag you can use the {} braces and then press tab. Emmet converts `h1{Hello World}` to `<h1>Hello World</h1>`.

If you want to create multiple tags you can use the * operator.

`p>div{inner}*2` produces:

```HTML
<p>
  <div>inner</div>
  <div>inner</div>
</p>
```
<br>
<br>

You can also create sibling elements (remember, these are elements with the same direct parent) using the + operator.

`div+p>span` produces:
```HTML
<div></div>
<p>
  <span></span>
</p>
```
<br>
<br>

What about attributes? Emmet's got you covered there as well! You can pass in an attribute name and value between square brackets.

`div[id="hello"]{Hi everybody!}>span{Yo}*3` produces:

```HTML
<div id="hello">Hi everybody!
  <span>Yo</span>
  <span>Yo</span>
  <span>Yo</span>
</div>
```

There's a lot more that Emmet can do for you as well. You can always check out the documentation for all of the features, but there's also an Emmet cheat sheet which is a great reference when you're first trying to pick up these shortcuts.
<br>
<br>

## 💡 Opening in browser
A handy `extension` for VS Code is `open in browser`. If you install this, when working with HTML files you can `right-click` on the file and select `"Open in Default Browser"`. This will open your page right in a browser tab! In order for this to work, you need to make sure your file is saved with the `.html` extension.
<br>
<br>

## Emmet Exercises
Write the `one-line Emmet` commands to produce the following HTML:

```HTML
<h1></h1>
```
<details>
  <summary>Solution</summary>
  <strong>h1</strong>
</details>
<br>

```HTML
<div>
    <p>
        <section>
            <h1>Nice!</h1>
        </section>
    </p>
</div>
```
<details>
  <summary>Solution</summary>
  <strong>div>p>section>h1{Nice!}</strong>
</details>
<br>

```HTML
<ul>outside
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
</ul>
```
<details>
  <summary>Solution</summary>
  <strong>ul>li{inside}*4</strong>
</details>
<br>

```HTML
<p>sibling 1</p>
<div>sibling 2</div>
<p>parent
    <div>child
        <div>grandchild</div>
    </div>
</p>
```
<details>
  <summary>Solution</summary>
  <strong>p{sibling 1}+div{sibling 2}+p{parent}>div{child}>div{grandchild}</strong>
</details>
<br>

<br>
<br>
<br>
<br>
---

## [➡ Next :  Coming soon](/contents/en/HTML/04-emmet.md)