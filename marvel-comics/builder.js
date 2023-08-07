var ghpages = require('gh-pages');

ghpages.publish('dist', {
    dest: 'marvel-comics2',
    message: 'feat: deploying a build using gh-pages npm',
    add: true
}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deployment successful!');
    }
});