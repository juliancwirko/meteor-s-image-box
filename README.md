### Simple image popup/lightbox for Meteor

- Website: [http://s-image-box.meteor.com/](http://s-image-box.meteor.com/)
- Demo: [http://s-image-box-demo.meteor.com/](http://s-image-box-demo.meteor.com/)

### Usage

Add package:

    meteor add juliancwirko:s-image-box

Then you can use two functions:

1. sImageBox.open()

```javascript
sImageBox.open('/path/to/full/image', {
    originalHeight: false, // image will be responsive you can enable original height
    originalWidth: false, // image will be responsive you can enable original width
    animation: '' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
});
```

2. sImageBox.close()

```javascript
sImageBox.close()
```

### Usage example in your app

Html:

```html
<template name="categoryPageItemImage">
    <div class="image-preview">
        <div class="js-activate-s-image-box" data-full-image-src="{{fullUrl}}" style="background-image: url({{previewUrl}})"></div>
    </div>
</template>
```

JavaScript:

```javascript
Template.categoryPageItem.events({
    'click .js-activate-s-image-box': function (e) {
        var imgPath = $(e.currentTarget).data('full-image-src');
        if (imgPath) {
            sImageBox.open(imgPath);
        }
    }
});
```

or you can pass more custom settings for this one:

```javascript
Template.categoryPageItem.events({
    'click .js-activate-s-image-box': function (e) {
        var imgPath = $(e.currentTarget).data('full-image-src');
        if (imgPath) {
            sImageBox.open(imgPath, {
                originalHeight: true,
                originalWidth: true,
                animation: 'slideInDown'
            });
        }
    }
});
```

### sImageBox global config

You can set up your global config and also you will be able to overwrite it with custom `sImageBox.open()` calls. If you need your global config place the code below in the client side of your app:

```javascript
Meteor.startup(function () {

    sImageBox.config({
        originalHeight: false, // image will be responsive you can enable original height
        originalWidth: false, // image will be responsive you can enable original width
        animation: '' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
    });

});
```

### Styling and custom animations

You can of course overwrite the styles of sImageBox. Go to GitHub repo and check `s-image-box.css` file. You will find all styles there.

If you want to write your own animation for the image you should add it in you css files. Remember to name it like: `.s-image-box-anim-yourAnimationName` then pass `yourAnimationName` in the config. See `s-image-box.css` for examples.

### Change log

- v0.2.0 better UX with loader and imagesloaded check
- v0.1.1 Settings extend fix
- v0.1.0 Init. Standard simple image popup.

Ideas and PRs are welcomed.
