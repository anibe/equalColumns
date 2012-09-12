# equalColumns

equalColumns is a JQuery polyfill I've written which I used in a project to ensure that all columns within a row have thesame height. Provided the correct parameters are passed and the layout is correct, it will equalise as many columns as possible within the context of each row.

## Usage

The code is small enough to be included within a function or script block but you can inlude source file in your pages the normal way

```html
<!-- Assuming jQuery has already been loaded -->
<script src='/src/jquery.equalcols.js'></script>
```

After the script has been loaded, the following is an example of markup which the polyfill aims to repair

```html
<div class="row" id="row1">
	<div class="span2 col" id="sidebar1">
		<p>Shortest column</p>
	</div>
	<div class="span8 col" id="main">
		<p>Longest column</p>
		<p>... because it has more than one</p>
		<p>PARAGRAPH!</p>
		<hr/>
		<p>...</p>
	</div>
	<div class="span2 col" id="sidebar2">
		<p>Not very long column</p>
		<p>But longer than the first</p>
	</div>
</div>
```

Call the equalColumns function using CSS class names as shown below:

```javascript
equalColumns.init('.row','.col','');
```

The parameters for the function are:

equalColumns.init([classname of row],[classnames of all columns],[classname for columns you wish to exclude]);
