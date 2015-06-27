Package.describe({
    summary: 'Image lightbox / popup with animations',
    version: '0.1.0',
    name: 'juliancwirko:s-image-box',
    git: ''
});

Package.onUse(function (api) {
    api.use('templating@1.0.0');
    api.use('ui@1.0.0');
    api.use('underscore@1.0.0');
    api.use(['jquery@1.0.0'], ['client']);
    api.addFiles([
        'client/s-image-box.css',
        'client/s-image-box.html',
        'client/s-image-box.js'
    ], 'client');
    api.export('sImageBox', ['client']);
});
