const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.tsx')
    .addEntry('file-splitter', './assets/scripts/file-splitter.ts')
    .addEntry('question-autocomplete', './assets/scripts/question-autocomplete.ts')
    .splitEntryChunks()
    .enableStimulusBridge('./assets/controllers.json')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })
    .enableSassLoader()
    .enableTypeScriptLoader()
    .enableReactPreset()
    .enablePostCssLoader()
    .configureWatchOptions(watchOptions => {
        watchOptions.poll = 1000;
    })
;

module.exports = Encore.getWebpackConfig();
