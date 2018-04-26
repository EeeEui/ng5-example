// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // 基路径：表示karma从那个位置开始找文件
        basePath: '',

        // 框架
        frameworks: ['jasmine', '@angular/cli'],

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],

        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        coverageIstanbulReporter: {
            // 覆盖率报告方式 
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },

        // 指定angular cli环境 
        angularCli: {
            environment: 'dev'
        },

        // 结果报表
        reporters: ['progress', 'kjhtml'],

        // 服务器端口
        port: 9876,

        // 报表中是否有颜色区分
        colors: true,

        // 输出的日志级别
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // 文件变化是否自动刷新
        autoWatch: true,

        // 测试环境
        browsers: ['Chrome'],

        // 是否依附浏览器运行
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};