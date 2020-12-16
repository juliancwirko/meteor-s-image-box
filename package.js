Package.describe({
    summary: 'Image lightbox / popup with animations',
    version: '0.3.0',
    name: 'kakadais:s-image-box',
    git: 'https://github.com/juliancwirko/meteor-s-image-box.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.11.1');
    api.use('templating');
    api.use('ui');
    api.use('underscore');
    api.use(['jquery'], ['client']);
    api.addFiles([
        'client/loaders.css',
        'client/imagesloaded.js',
        'client/s-image-box.css',
        'client/s-image-box.html',
        'client/s-image-box.js'
    ], 'client');
    api.export('sImageBox', ['client']);
});
