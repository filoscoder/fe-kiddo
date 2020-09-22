# HTML elements I
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

<iframe height="265" style="width: 100%;" scrolling="no" title="headings" src="https://codepen.io/filoscoder/embed/YzqRpMQ?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filoscoder/pen/YzqRpMQ'>headings</a> by Wonjang Son
  (<a href='https://codepen.io/filoscoder'>@filoscoder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> 💡 Search engines use the headings to index the structure and content of your web pages.

<br>
<br>

## Paragraphs
The HTML `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

<iframe height="265" style="width: 100%;" scrolling="no" title="Paragraph" src="https://codepen.io/filoscoder/embed/abNQpGw?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filoscoder/pen/abNQpGw'>Paragraph</a> by Wonjang Son
  (<a href='https://codepen.io/filoscoder'>@filoscoder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> 💡 You cannot change the display by adding extra spaces or extra lines in your HTML code.

<br>
<br>

## Preformated pagragh
Using `<p>` to show some text, you cannot change the display by adding extra spaces or extra lines in your HTML code.
But you can solve this with the element defines preformatted text. `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks

<iframe height="265" style="width: 100%;" scrolling="no" title="Preformated pagragh" src="https://codepen.io/filoscoder/embed/KKzraRw?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filoscoder/pen/KKzraRw'>Preformated pagragh</a> by Wonjang Son
  (<a href='https://codepen.io/filoscoder'>@filoscoder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br>
<br>

## Horizontal rules & Line breaks
The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
Use `<br>` if you want a line break (a new line) without starting a new paragraph.

<iframe height="265" style="width: 100%;" scrolling="no" title="Horizontal rules &amp; Line breaks" src="https://codepen.io/filoscoder/embed/dyMQNmd?height=465&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filoscoder/pen/dyMQNmd'>Horizontal rules &amp; Line breaks</a> by Wonjang Son
  (<a href='https://codepen.io/filoscoder'>@filoscoder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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

<iframe height="565" style="width: 100%;" scrolling="no" title="MWyzJWN" src="https://codepen.io/filoscoder/embed/MWyzJWN?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filoscoder/pen/MWyzJWN'>MWyzJWN</a> by Wonjang Son
  (<a href='https://codepen.io/filoscoder'>@filoscoder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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

<br>
<br>
<br>
<br>
---

## [➡ Next :  HTML Elements](https://github.com/filoscoder/fe-soon/blob/master/src/en/HTML/03-elements.md)