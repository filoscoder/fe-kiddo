# Semantic HTML
When `HTML5` was released, a number of new elements came along with it. These elements have given rise to a term called Semantic HTML, which refers to the practice of using these new elements to structure your HTML in such a way that the element name is descriptive of the content inside of it. 

![html-semantic-tags-html5-sectioning-high-level-730x548](https://user-images.githubusercontent.com/50701501/103638295-05019d00-4f4d-11eb-930b-43226125924c.jpg)

Prior to HTML5 you may have seen much of the content of an HTML page inside of `div`, `span`, and `p` tags with a lot of "`ID`/`Classes`", but HTML5 allows us to be a little more precise in pairing our content with our elements.
(For more on `Semantic HTML`, check out [this](https://en.wikipedia.org/wiki/Semantic_HTML) article.)

<br>
<br>

Semantic HTML tags don't alter your page in any specific way, but make more sense to the developer and reader of the HTML as to what they do. Here are some semantic HTML5 tags (there are many [more](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5#Semantics)):

* `header` - used to display the header information on a page
* `nav` - used to display a navbar for navigating a page
* `section` - used to display a section of the page
* `article` - used to display independent, self-contained content.
* `aside` - used to display content aside from main content (on the side)
* `footer` - used to display the footer information on a page

Here's a quick example illustrating what Semantic HTML looks like.
<br>

First, take a look at this HTML document (without Semantic HTML):

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-semantic HTML</title>
</head>
<body>
  <div>
    <h1>My super cool blog</h1>
  </div>
  <div>
    <ul>
      <li>About Me</li>
      <li>Contact</li>
      <li>Search</li>
      <li>Store</li>
    </ul>
  </div>
  <div>
    <div>
      <h2>Important Title</h2>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam maiores? Ex, eum! Ducimus ut velit ad ullam quisquam fugit vitae harum eligendi, qui necessitatibus, laudantium reprehenderit nihil, sint aperiam!</p>
    <p>Recusandae fugiat, eum, modi odio, quis quibusdam a maxime impedit accusamus ipsum nulla maiores commodi voluptas saepe nisi laudantium doloremque perferendis suscipit! Ullam consequuntur veritatis, atque quidem reiciendis facilis voluptatum!</p>
    <p>Animi sit, facere, molestiae vel consequuntur suscipit alias dolorem adipisci hic non id sint illum, doloremque iure ut assumenda! Provident neque asperiores, vitae ab. Ducimus recusandae sed rerum doloribus consequatur!</p>
  </div>
  <div>
    <div>
      <h2>Super Important Title</h2>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur ab, aliquid facilis omnis praesentium recusandae. Aliquid itaque omnis nam harum sit! Explicabo eum consectetur aut repellendus, nostrum hic iste.</p>
    <p>Illo repellat quia, minima reiciendis. Laudantium, perferendis! Laudantium consectetur impedit at nobis error aspernatur repellendus quaerat, quas repudiandae maxime. Architecto consequatur, autem natus quaerat illo accusamus! Voluptatem accusantium pariatur perspiciatis!</p>
    <p>Vitae corrupti, tempora itaque ab est facere eius optio fugiat, ex possimus beatae nulla esse molestias suscipit quisquam nostrum sunt quod mollitia. Mollitia reiciendis, aspernatur. Quas, eligendi temporibus earum debitis?</p>
  </div>
  <div>
    <div>
      <h4>Recent Posts</h4>
    </div>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
      <li>Post 3</li>
      <li>Post 4</li>
    </ul>
  </div>
  <div>
    <p>Copright MyAwesomeBlog.net. All Rights Reserved. Don't steal my stuff!</p>
  </div>
</body>
</html>
```
<br>

There's nothing too complex going on here, but with so many divs floating around it can be hard to visualize the structure of this document.

Here's the same file, but refactored to use some HTML5 elements:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-semantic HTML</title>
</head>
<body>
  <header>
    <h1>My super cool blog</h1>
  </header>
  <nav>
    <ul>
      <li>About Me</li>
      <li>Contact</li>
      <li>Search</li>
      <li>Store</li>
    </ul>
  </nav>
  <article>
    <header>
      <h2>Important Title</h2>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam maiores? Ex, eum! Ducimus ut velit ad ullam quisquam fugit vitae harum eligendi, qui necessitatibus, laudantium reprehenderit nihil, sint aperiam!</p>
    <p>Recusandae fugiat, eum, modi odio, quis quibusdam a maxime impedit accusamus ipsum nulla maiores commodi voluptas saepe nisi laudantium doloremque perferendis suscipit! Ullam consequuntur veritatis, atque quidem reiciendis facilis voluptatum!</p>
    <p>Animi sit, facere, molestiae vel consequuntur suscipit alias dolorem adipisci hic non id sint illum, doloremque iure ut assumenda! Provident neque asperiores, vitae ab. Ducimus recusandae sed rerum doloribus consequatur!</p>
  </article>
  <article>
    <header>
      <h2>Super Important Title</h2>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur ab, aliquid facilis omnis praesentium recusandae. Aliquid itaque omnis nam harum sit! Explicabo eum consectetur aut repellendus, nostrum hic iste.</p>
    <p>Illo repellat quia, minima reiciendis. Laudantium, perferendis! Laudantium consectetur impedit at nobis error aspernatur repellendus quaerat, quas repudiandae maxime. Architecto consequatur, autem natus quaerat illo accusamus! Voluptatem accusantium pariatur perspiciatis!</p>
    <p>Vitae corrupti, tempora itaque ab est facere eius optio fugiat, ex possimus beatae nulla esse molestias suscipit quisquam nostrum sunt quod mollitia. Mollitia reiciendis, aspernatur. Quas, eligendi temporibus earum debitis?</p>
  </article>
  <article>
    <header>
      <h4>Recent Posts</h4>
    </header>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
      <li>Post 3</li>
      <li>Post 4</li>
    </ul>
  </article>
  <footer>
    <p>Copright MyAwesomeBlog.net. All Rights Reserved. Don't steal my stuff!</p>
  </footer>
</body>
</html>
```
<br>

In this particular case, we've been able to eliminate all the divs, and replace them with elements that have more semantic meaning regarding the layout of the page and the purpose of the content. We can look at this document and see where the footer his, what the header for each area is, and so on. That's the beauty of semantic HTML!


<br>
<br>
<br>
<br>
---

## [➡ Next :  Tables & Forms](/contents/en/HTML/06-tables-and-forms.md)