# TypingJs Documentation 🚀

## Get Started

Start adding a delightful typing animation to your webpage with just one line of code:

```html
<script src="https://cdn.jsdelivr.net/gh/Tegorinternational/typing.js@1.0.0/typing.min.js"></script>
```

## Features

- 🖋️ Simulates dynamic typing and backspacing effects.
- 🎨 Customize strings, type speed, backspace speed, and more!
- 🔄 Supports looping behavior for continuous animation.
- 🌈 Style your cursor with different characters and colors.
- 🎉 Callbacks for onComplete and onStop events.

## Usage

For use directly in the browser via `<script>`:

```html
<script>
  var typing = new TypingJs('elementId', {
    strings: ['First sentence', 'Second sentence'],
    typeSpeed: 120
  });
</script>
```

## Default Values

TypingJs is flexible but comes with sensible defaults:

```html
<script>
var typing = new TypingJs('elementId', {
    strings: [],
    typeSpeed: 50,
    backSpeed: 30,
    startDelay: 0,
    cursorChar: '|',
    cursorColor: 'black',
    loop: false,
    onComplete: null,
    onStop: null
});
</script>
```

## Limitations

- 🧩 May not handle complex HTML structures or nested elements well.
- ⚠️ Keep in mind the impact on page performance with extensive use.

## Pro Tip 💡

Experiment with different cursor characters and colors to match your website's theme and create a unique user experience.

## Properties Table

| Property     | Default Value | Customization Value           |
|--------------|---------------|-------------------------------|
| strings      | [ ]           | ['First sentence', 'Second sentence'] |
| typeSpeed    | 50            | Between 10 - 9999 || 120      |
| backSpeed    | 30            | Between 10 - 9999 || 30       |
| startDelay   | 0             | Between 0 - 9999 || 0         |
| cursorChar   | '&VerticalLine;'           | 'Any Character'                |
| cursorColor  | 'black'       | 'Any Color'                   |
| loop         | false         | true/false                    |
| onComplete   | null          | function() { /* Custom function */ } |
| onStop       | null          | function() { /* Custom function */ } |

Explore the possibilities and make your content more engaging with TypingJs!
