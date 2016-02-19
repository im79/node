$(document).ready(function() {
    OODocApp = {
        docappinit: function() {
            OODocApp.DocSidebarToggle();
            OODocApp.DocHandlePanel();
            OODocApp.DocPanelMenu();
            OODocApp.DocMenuOpener();
        },

        DocMenuOpener: function() {
            $('#ood-container').css("height", $(document).height());
        },

        DocPanelMenu: function() {
            $(".oo-has-menu > a").on("click", function() {
                var menulength = $(this)["closest"](".oo-minimized-lpanel")["length"];
                if (menulength === 0) {
                    $(this)["parent"](".oo-has-menu")["parent"]("ul")["find"]("ul:visible")["slideUp"]("fast");
                    $(this)["parent"](".oo-has-menu")["parent"]("ul")["find"](".opened")["removeClass"]("opened");
                    var mysubmenu = $(this)["parent"](".oo-has-menu")["find"](">.oo-sub-menu");
                    if (mysubmenu["is"](":hidden")) {
                        mysubmenu["slideDown"]("fast");
                        $(this)["parent"](".oo-has-menu")["addClass"]("opened");
                    } else {
                        $(this)["parent"](".oo-has-menu")["parent"]("ul")["find"]("ul:visible")["slideUp"]("fast");
                        $(this)["parent"](".oo-has-menu")["removeClass"]("opened");
                    };
                };
            })
        },
        DocSidebarToggle: function() {
            $(".oo-sidebar-toggle a")["on"]("click", function() {
                
                if ($("#ood-wrapper")["attr"]("oo-device-type") !== "phone") {
                    $("#ood-container")["toggleClass"]("oo-minimized-lpanel");
                   $("#oo-header")["toggleClass"]("oo-minimized-lpanel");
                    if ($("body")["attr"]("oo-navigation-type") !== "vertical-compact") {
                        $("body")["attr"]("oo-navigation-type", "vertical-compact")
                    } else {
                        $("body")["attr"]("oo-navigation-type", "vertical")
                    };
                    
                } else {
                    if (!$("#ood-wrapper")["hasClass"]("oo-hide-lpanel")) {
                        $("#ood-wrapper")["addClass"]("oo-hide-lpanel")
                    } else {
                        $("#ood-wrapper")["removeClass"]("oo-hide-lpanel")
                    }
                }  
            })
        },
        DocHandlePanel: function() {
            function funcpanel() {
                var docwidth = $(window)[0]["innerWidth"];
                if (docwidth >= 768 && docwidth <= 1024) {
                    //$("#ood-wrapper")["attr"]("oo-device-type", "tablet");
                    //$("#oo-header, #ood-container")["addClass"]("oo-minimized-lpanel");
                    
                    $("#ood-wrapper")["attr"]("oo-device-type", "phone");
                        $("#oo-header, #ood-container")["removeClass"]("oo-minimized-lpanel");
                        
                } else {
                    if (docwidth < 768) {
                        $("#ood-wrapper")["attr"]("oo-device-type", "phone");
                        $("#oo-header, #ood-container")["removeClass"]("oo-minimized-lpanel");
                    } else {
                       $("#ood-wrapper")["attr"]("oo-device-type", "desktop");
                       $("#oo-header, #ood-container")["removeClass"]("oo-minimized-lpanel");
                    }
                };
            }
            
            funcpanel();
            $(window).resize(function() {
                funcpanel();
            });
        }
    };
    OODocApp.docappinit();
});