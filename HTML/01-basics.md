# HTML Basics

<p align="center">
  <img width=45% height=45% src="https://user-images.githubusercontent.com/50701501/93737356-f69da880-fc1d-11ea-8666-3b46dbdfa9fc.png" alt="What is html?">
</p>

`HTML` is not a programming language. it is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.
<br>

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the `browser` how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
<br>
<br>

## Anatomy of an HTML document
All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.
The HTML document itself begins with `<html>` and ends with `</html>`.
The visible part of the HTML document is between `<body>` and `</body>`.

```HTML
<!DOCTYPE html>

    <html>

        <head>
        <meta charset="utf-8">
            <title>Page Title</title>
        </head>
        
        <body>
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
        </body>
        
    </html>
```
- `<!DOCTYPE html>`: It is required preamble. Basically just needed to make sure your document behaves correctly.
- `<html>`:  This element wraps all the content on the entire page and is sometimes known as the root element.
- `<head>`: This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations and more.
- `<meta charset="utf-8">`: This element sets the character set your document should use to `UTF-8` which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this and it can help avoid some problems later on.
- `<title>`: This sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favourite it.
- `<body>`: This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks or whatever else.
<br>
<br>

## Anatomy of an HTML element
<p align="center">
  <img src="https://user-images.githubusercontent.com/50701501/93737652-b3900500-fc1e-11ea-8c6f-fcfc5f209658.png" alt="html element anatomy">
</p>

The `HTML element` is everything from the `start tag` to the `end tag`:
> There are a few exceptions, _empty elements_ & _self-closing elements_ <br>
> Get more info [here](https://clearlydecoded.com/anatomy-of-html-tag)

1. `start tag`: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
2. `end tag`: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
3. `content`: This is the content of the element, which in this case, is just text.
4. `attributes`: This provides additional information about HTML elements.

>
> An attribute should always have the following:
> - A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
> - The attribute name followed by an equal sign.
> - The attribute value wrapped by opening and closing quotation marks.
> [Learn more](https://www.w3schools.com/html/html_attributes.asp)
>

