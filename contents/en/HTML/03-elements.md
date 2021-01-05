# HTML Basic elements
As we already see before, HTML `elements` are defined by a start tag, some content, and an end tag.
Let's check some of the most common HTML elements.

> 💡 HTML elements are not `Case sensitive`<br>
> HTML tags are not case sensitive: `<P>` means the same as `<p>`.<br>
> The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

<br>
<br>

## Headings
HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important (and bigger) heading. `<h6>` defines the least important heading.
`<h1>` headings should be used for main headings, followed by `<h2>` headings, then the less important `<h3>`, and so on.

![스크린샷 2021-01-04 오후 5 57 57](https://user-images.githubusercontent.com/50701501/103559453-717d8d00-4eb6-11eb-97c3-cdb5a0b5158c.png)

> 💡 Search engines use the headings to index the structure and content of your web pages.

<br>
<br>

## Paragraphs
The HTML `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

![스크린샷 2021-01-04 오후 6 01 57](https://user-images.githubusercontent.com/50701501/103559756-f1a3f280-4eb6-11eb-9a1a-0727f3bea883.png)

> 💡 You cannot change the display by adding extra spaces or extra lines in your HTML code.

<br>
<br>

## Preformated pagragh
Using `<p>` to show some text, you cannot change the display by adding extra spaces or extra lines in your HTML code.
But you can solve this with the element defines preformatted text. `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks

![스크린샷 2021-01-04 오후 6 02 31](https://user-images.githubusercontent.com/50701501/103559806-05e7ef80-4eb7-11eb-8e0e-cc01f1decde6.png)
<br>
<br>

## Horizontal rules & Line breaks
The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
Use `<br>` if you want a line break (a new line) without starting a new paragraph.

![스크린샷 2021-01-04 오후 6 03 12](https://user-images.githubusercontent.com/50701501/103559861-1f893700-4eb7-11eb-86a9-3e7244d4cb41.png)

<br>
<br>

## Text modifications
To change the look of text on the page we can use tags like `<b></b>`, `<u></u>`, `<em></em>`, `<small></small>`, `<sup></sup>`, `<sub></sub>`, `<blockquote></blockquote>` and `<cite></cite>`. Take a look at what these do!
<br>
<br>

## Lists
HTML lists allow web developers to group a set of related items in lists. There are 3 types of list:

- **Unordered list**: `<ul>` 
  - Define the item: `<li>`
- **Ordered list**: `<ol>` 
  - Define the item: `<li>`
- **Description list**: `<dl>` 
  - Define the item: `<dt>`
  - Define the description: `<dd>`

![스크린샷 2021-01-04 오후 6 01 00](https://user-images.githubusercontent.com/50701501/103559681-d0db9d00-4eb6-11eb-8821-68208462eff4.png)


💡 By default, ordered lists will be numbered starting from `1`. You can change the numbering by setting the `type` attribute on the list. What do you think the ordering will look like for each of the following lists?

![스크린샷 2021-01-05 오전 11 37 47](https://user-images.githubusercontent.com/50701501/103636563-7429c200-4f4a-11eb-98f9-b9a05dbfd6ad.png)


<br>
<br>

## Divs + Spans
In HTML there are two important tags which do not have much semantic significance, but are useful for laying out a page. These tags are `<div></div>` and `<span></span>`. Both can be used to format text, but they behave differently on the page. Try pasting the following into an HTML document, and take a look at how your browser renders the text:
```HTML
<div>I'm in a div.</div>
<div>I'm in a div as well.</div>
<span>I'm in a span.</span>
<span>I'm in a span as well.</span>
```

<br>
<br>

## Links
You can click on a link and jump to another document, specific section inside de document or even to another URL.
When you move the mouse over a link, the mouse arrow will turn into a little hand.
> 💡 A `link` does not have to be text. A link can be an image or any other HTML element!

The HTML `<a>` tag defines a hyperlink. It has the following syntax:
```HTML
  <a href="absolute_url | relative_url" target="where_open_link">link text</a>
```
### href: absolute vs relative
- Absolute: Full web address
```HTML
  <a href="https://www.google.com/">Google</a>
```
- Relative: Full web address
```HTML
  <a href="../HTML/00-history.md">CSS Tutorial</a>
```
> 💡 dot (`.`) and a double-dot (`..`), which translate into the `current directory` and the `parent directory`.

### Target
By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute can have one of the following values:

- `_self`: Default. Opens the document in the same window/tab as it was clicked
- `_blank`: Opens the document in a new window or tab
- `_parent`: Opens the document in the parent frame
- `_top`: Opens the document in the full body of the window

<br>
<br>

## Images
We can add images and specify their source using the `src` attribute. Another important attribute for image tags is the `alt` attribute which is what is displayed when the image fails to load and is very important for SEO purposes as well. It looks something like this: 

![스크린샷 2021-01-04 오후 6 24 24](https://user-images.githubusercontent.com/50701501/103561676-21a0c500-4eba-11eb-9e3a-fa08683d1584.png)


<br>
<br>
<br>
<br>
---

## [➡ Next :  Emmet](/contents/en/HTML/04-emmet.md)