/*



#########################################
www.free-templates.lt - get Your Free template for Your site!
#########################################
Free Joomla, Drupal, Wordpress, Blogger themes and templates!
Free Joomla, Drupal, Wordpress, Blogger themes and templates!
#########################################
www.free-templates.lt - get Your Free template for Your site!
#########################################




*/

// css helper(function($) {    var data = [        {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},        {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},        {prop:window.opera,ver:'Opera',name:'opera'},        {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},        {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];    for (var n=0;n<data.length;n++)	{        if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {            var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};            $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			        }    }})(jQuery);jQuery(function () {    if (!jQuery.browser.msie || parseInt(jQuery.browser.version) > 7) return;    jQuery('ul.free-templates-lt-hmenu>li:not(:first-child)').each(function () { jQuery(this).prepend('<span class="free-templates-lt-hmenu-separator"> </span>'); });    if (!jQuery.browser.msie || parseInt(jQuery.browser.version) > 6) return;    jQuery('ul.free-templates-lt-hmenu li').each(function () {        this.j = jQuery(this);        this.UL = this.j.children('ul:first');        if (this.UL.length == 0) return;        this.A = this.j.children('a:first');        this.onmouseenter = function () {            this.j.addClass('free-templates-lt-hmenuhover');            this.UL.addClass('free-templates-lt-hmenuhoverUL');            this.A.addClass('free-templates-lt-hmenuhoverA');        };        this.onmouseleave = function() {            this.j.removeClass('free-templates-lt-hmenuhover');            this.UL.removeClass('free-templates-lt-hmenuhoverUL');            this.A.removeClass('free-templates-lt-hmenuhoverA');        };    });});jQuery(function() { setHMenuOpenDirection({container: "div.free-templates-lt-sheet-body", defaultContainer: "#free-templates-lt-main", menuClass: "free-templates-lt-hmenu", leftToRightClass: "free-templates-lt-hmenu-left-to-right", rightToLeftClass: "free-templates-lt-hmenu-right-to-left"}); });function setHMenuOpenDirection(menuInfo) {    var defaultContainer = jQuery(menuInfo.defaultContainer);    defaultContainer = defaultContainer.length > 0 ? defaultContainer = jQuery(defaultContainer[0]) : null;    jQuery("ul." + menuInfo.menuClass + ">li>ul").each(function () {        var submenu = jQuery(this);        var submenuWidth = submenu.outerWidth();        var submenuLeft = submenu.offset().left;        var mainContainer = submenu.parents(menuInfo.container);        mainContainer = mainContainer.length > 0 ? mainContainer = jQuery(mainContainer[0]) : null;        var container = mainContainer || defaultContainer;        if (container != null) {            var containerLeft = container.offset().left;            var containerWidth = container.outerWidth();            if (submenuLeft + submenuWidth >=                    containerLeft + containerWidth)                                 submenu.addClass(menuInfo.rightToLeftClass).find("ul").addClass(menuInfo.rightToLeftClass);            if (submenuLeft <= containerLeft)                                submenu.addClass(menuInfo.leftToRightClass).find("ul").addClass(menuInfo.leftToRightClass);        }    });}jQuery(function () {    jQuery("ul.free-templates-lt-hmenu ul li").hover(function () { jQuery(this).prev().children("a").addClass("free-templates-lt-hmenu-before-hovered"); },         function () { jQuery(this).prev().children("a").removeClass("free-templates-lt-hmenu-before-hovered"); });});jQuery(function () {    if (!jQuery.browser.msie) return;    var ieVersion = parseInt(jQuery.browser.version);    if (ieVersion > 7) return;        jQuery.each(jQuery("ul.free-templates-lt-hmenu ul"), function () {        var maxSubitemWidth = 0;        var submenu = jQuery(this);        var subitem = null;        jQuery.each(submenu.children("li").children("a"), function () {            subitem = jQuery(this);            var subitemWidth = subitem.outerWidth();            if (maxSubitemWidth < subitemWidth)                maxSubitemWidth = subitemWidth;        });        if (subitem != null) {            var subitemBorderLeft = parseInt(subitem.css("border-left-width"), 10) || 0;            var subitemBorderRight = parseInt(subitem.css("border-right-width"), 10) || 0;            var subitemPaddingLeft = parseInt(subitem.css("padding-left"), 10) || 0;            var subitemPaddingRight = parseInt(subitem.css("padding-right"), 10) || 0;            maxSubitemWidth -= subitemBorderLeft + subitemBorderRight + subitemPaddingLeft + subitemPaddingRight;            submenu.children("li").children("a").css("width", maxSubitemWidth + "px");        }    });    if (ieVersion > 6) return;    jQuery("ul.free-templates-lt-hmenu ul>li:first-child>a").css("border-top-width", "1px");});jQuery(function () {     var c = jQuery('div.free-templates-lt-content');    if (c.length !== 1) return;    var s = c.parent().children('.free-templates-lt-layout-cell:not(.free-templates-lt-content)');    if (jQuery.browser.msie && parseInt(jQuery.browser.version) < 8) {        jQuery(window).bind('resize', function() {            var w = 0;            c.hide();            s.each(function() { w += this.clientWidth; });            c.w = c.parent().width(); c.css('width', c.w - w + 'px');            c.show();        });    }    jQuery(window).trigger('resize');});jQuery(function() {    if (!jQuery('html').hasClass('ie7')) return;    jQuery('ul.free-templates-lt-vmenu li:not(:first-child),ul.free-templates-lt-vmenu li li li:first-child,ul.free-templates-lt-vmenu>li>ul').each(function () { jQuery(this).append('<div class="free-templates-lt-vmenu-separator"> </div><div class="free-templates-lt-vmenu-separator-bg"> </div>'); });});function artButtonSetup(className) {    jQuery.each(jQuery("a." + className + ", button." + className + ", input." + className), function (i, val) {        var b = jQuery(val);        if (!b.parent().hasClass('free-templates-lt-button-wrapper')) {            if (b.is('input')) b.val(b.val().replace(/^\s*/, '')).css('zoom', '1');            if (!b.hasClass('free-templates-lt-button')) b.addClass('free-templates-lt-button');            jQuery("<span class='free-templates-lt-button-wrapper'><span class='free-templates-lt-button-l'> </span><span class='free-templates-lt-button-r'> </span></span>").insertBefore(b).append(b);            if (b.hasClass('active')) b.parent().addClass('active');        }        b.mouseover(function () { jQuery(this).parent().addClass("hover"); });        b.mouseout(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().removeClass('active'); });        b.mousedown(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().addClass('active'); });        b.mouseup(function () { var b = jQuery(this); if (!b.hasClass('active')) b.parent().removeClass('active'); });    });}jQuery(function() { artButtonSetup("free-templates-lt-button"); });jQuery(function() {    jQuery.each(jQuery('button'), function(i, button) {        button.buttonName = button.getAttribute('name');        button.buttonValue = button.getAttribute('value');        button.prevOnClick = button.onclick;        if (button.outerHTML) {            var re = /\bvalue="([^"]+)"/i;            button.buttonValue = re.test(button.outerHTML) ? re.exec(button.outerHTML)[1] : button.buttonValue;        }        button.setAttribute("name", "_" + button.buttonName);        button.onclick = function() {            if (this.prevOnClick) this.prevOnClick.apply(this);            var f = this;            while (f.tagName.toLowerCase() != "body") {                if (f.tagName.toLowerCase() == "form") {                    var subButton = document.createElement("input");                    subButton.setAttribute("type", "hidden");                    subButton.setAttribute("name", this.buttonName);                    subButton.setAttribute("value", this.buttonValue);                    f.appendChild(subButton);                    return true;                }                f = f.parentNode;            }            return false;        };    });});jQuery(function() {    var imgAssistElem = parent.document.getElementsByName("img_assist_header");    if (null != imgAssistElem && imgAssistElem.length > 0) {        imgAssistElem[0].scrolling = "no";        imgAssistElem[0].style.height = "150px";    }});