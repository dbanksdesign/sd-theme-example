const StyleDictionary = require('style-dictionary');
const glob = require('glob');

const themes = glob.sync('theme/*.json', {});

themes.forEach(theme => {
  StyleDictionary.extend({
    source: [
      'core/**/*.json',
      'components/**/*.json',
      theme
    ],
    platforms: {
      css: {
        buildPath: `build/${theme.split('/')[1].replace('.json','')}/`,
        transformGroup: 'web',
        files: [{
          destination: 'variables.css',
          format: 'css/variables'
        }]
      }
    }
  }).buildAllPlatforms();
});