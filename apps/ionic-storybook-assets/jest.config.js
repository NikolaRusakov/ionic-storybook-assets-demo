module.exports = {
  name: 'ionic-storybook-assets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ionic-storybook-assets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
