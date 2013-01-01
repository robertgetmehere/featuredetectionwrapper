window.Agent = {
    initialize: function() {

        //BROWSER SETTINGS
        this.browserSettings = {};
        this.browserSettings.browserBase = navigator.appCodeName;
        this.browserSettings.browserName = navigator.appName;
        this.browserSettings.browserVersion=navigator.appVersion;
        this.browserSettings.browserPlatform=navigator.platform;
        this.browserSettings.screenAvailWidth=screen.availWidth;
        this.browserSettings.screenAvailHeight=screen.availHeight;
        this.browserSettings.screenPixelDepth=screen.pixelDepth;
        this.browserSettings.isOnline = (typeof navigator.onLine != 'undefined'? navigator.onLine: 'unsupported');
        this.browserSettings.isGeolocation = (typeof navigator.geolocation != 'undefined'? true: 'unsupported');
        this.browserSettings.isCookieEnabled = navigator.cookieEnabled;
        this.browserSettings.language = navigator.language;
        this.printBrowserSettings();

        //FEATURE TESTING
        this.features = {};
        this.features.css = {};
        this.features.graphics = {};
        this.features.multiMedia = {};
        this.features.html = {};
        this.features.device = {};

        //CSS DETECTION VIA MODERNIZR
        this.features.css.backgroundSize = Modernizr.backgroundsize;
        this.features.css.borderImage = Modernizr.borderimage;
        this.features.css.borderRadius = Modernizr.borderradius;
        this.features.css.boxShadow = Modernizr.boxshadow;
        this.features.css.textShadow = Modernizr.textshadow;
        this.features.css.opacity = Modernizr.opacity;
        this.features.css.rgba = Modernizr.rgba;
        this.features.css.fontFace = Modernizr.fontface;
        this.features.css.gradients = Modernizr.cssgradients;
        this.features.css.transitions = Modernizr.csstransitions;
        this.features.css.transformations = Modernizr.csstransforms;
        this.features.css.reflections = Modernizr.cssreflections;

        //GRAPHICS DETECTION VIA MODERNIZR
        this.features.graphics.canvas = Modernizr.canvas;
        this.features.graphics.svg = Modernizr.svg;
        this.features.graphics.webgl = Modernizr.webgl;

        //MULTIMEDIA DETECTION VIA MODERNIZR
        this.features.multiMedia.m4a = Modernizr.audio.m4a;
        this.features.multiMedia.mp3 = Modernizr.audio.mp3;
        this.features.multiMedia.wav = Modernizr.audio.wav;
        this.features.multiMedia.ogg = Modernizr.audio.ogg;
        this.features.multiMedia.h264 = Modernizr.video.h264;

        //BROWSER/DEVICE DETECTION VIA MODERNIZR
        this.features.device.geolocation = Modernizr.geolocation;
        this.features.device.history = Modernizr.history;
        this.features.device.sessionStorage = Modernizr.sessionstorage;
        this.features.device.localSqlDatabase = Modernizr.websqldatabase;
        this.features.device.sockets = Modernizr.websockets;

        //HTML FEATURE DETECTION VIA MODERNIZR
        this.features.html.inputPlaceholder = Modernizr.input.placeholder;
        this.features.html.inputRequred = Modernizr.input.required;
        this.features.html.dragAndDrop = Modernizr.draganddrop;

        this.printFeatures();
    },
    printBrowserSettings: function() {
        $('.appCodeName').html(this.browserSettings.browserBase);
        $('.appName').html(this.browserSettings.browserName);
        $('.appVersion').html(this.browserSettings.browserVersion);
        $('.appPlatform').html(this.browserSettings.browserPlatform);
        $('.appAvailWidth').html(this.browserSettings.screenAvailWidth);
        $('.appAvailHeight').html(this.browserSettings.screenAvailHeight);
        $('.appPixelDepth').html(this.browserSettings.screenPixelDepth);
        $('.appOnline').html(this.browserSettings.isOnline.toString());
        $('.appGeolocation').html(this.browserSettings.isGeolocation.toString());
        $('.appCookies').html(this.browserSettings.isCookieEnabled.toString());
        $('.appLanguage').html(this.browserSettings.language);
    },
    getObjectLength: function(obj) {
        var i=0;
        $.each(obj,function(val){
           i++;
        });
        return i;
    },
    getDotForValue: function(val) {
        return (val == true || val == 'probably') ? '<div class="result yes"></div>' : '<div class="result no"></div>';
    },
    printFeatures: function() {
        var i=0;
        $.each(this.features.css,function(val) {
            if (i==0) {
                $('.features').append('<tr><td rowspan="' + window.Agent.getObjectLength(window.Agent.features.css) + '">CSS</td><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.css[val]) + '</td></tr>')
            } else {
                $('.features').append('<tr><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.css[val]) + '</td></tr>')
            }
            i++;
        });

        i=0;
        $.each(this.features.graphics,function(val) {
            if (i==0) {
                $('.features').append('<tr><td rowspan="' + window.Agent.getObjectLength(window.Agent.features.graphics) + '">Graphics</td><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.graphics[val]) + '</td></tr>')
            } else {
                $('.features').append('<tr><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.graphics[val]) + '</td></tr>')
            }
            i++;
        });

        i=0;
        $.each(this.features.multiMedia,function(val) {
            if (i==0) {
                $('.features').append('<tr><td rowspan="' + window.Agent.getObjectLength(window.Agent.features.multiMedia) + '">Multimedia</td><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.multiMedia[val]) + '</td></tr>')
            } else {
                $('.features').append('<tr><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.multiMedia[val]) + '</td></tr>')
            }
            i++;
        });

        i=0;
        $.each(this.features.device,function(val) {
            if (i==0) {
                $('.features').append('<tr><td rowspan="' + window.Agent.getObjectLength(window.Agent.features.device) + '">Device</td><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.device[val]) + '</td></tr>')
            } else {
                $('.features').append('<tr><td>' + val + '</td><td>' +  window.Agent.getDotForValue(window.Agent.features.device[val]) + '</td></tr>')
            }
            i++;

        });
    }
}
