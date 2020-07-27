(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("e3c375fb-e01c-4c38-aab6-e98c3b41cee4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3c375fb-e01c-4c38-aab6-e98c3b41cee4' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;ef686246-e4e5-4a55-917f-6de8a36e1e69&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65812&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65813&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65814&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65816&quot;}},&quot;id&quot;:&quot;65815&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65779&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65818&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65845&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65812&quot;}},&quot;id&quot;:&quot;65816&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;HIzNVbLFYUBgp0Q0eoxpQLkTfhv0tHVASkXv2Y9se0Dp232dC/CAQPk2UCKmJoRAh2/6lLvYikAM96jDrgaOQBPA7A80m5BALgAl3ga0kkC7JpWUaP+TQMn7+Cp2cJVAJTl3/zpWlkB8CCW6zVKYQH7sMXK5gplAVv3VSBOzm0ButHj4/62fQJnVefRus6BAmrdQWHedoUCgof7eHNqhQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65846&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65845&quot;}},&quot;id&quot;:&quot;65817&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65847&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65817&quot;}},&quot;id&quot;:&quot;65821&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65829&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65848&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;line_dash&quot;:[6],&quot;line_width&quot;:3,&quot;location&quot;:400},&quot;id&quot;:&quot;65832&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65801&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65819&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65781&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65848&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65847&quot;}},&quot;id&quot;:&quot;65822&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65841&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;orange&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65823&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Total number of draws&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;65839&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65786&quot;}},&quot;id&quot;:&quot;65785&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65856&quot;},{&quot;id&quot;:&quot;65854&quot;}]},&quot;id&quot;:&quot;65857&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65822&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65823&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65824&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65826&quot;}},&quot;id&quot;:&quot;65825&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65786&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65827&quot;}},&quot;id&quot;:&quot;65831&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65793&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65822&quot;}},&quot;id&quot;:&quot;65826&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65783&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65849&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65785&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65788&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;orange&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65824&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65850&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65849&quot;}},&quot;id&quot;:&quot;65827&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65850&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;ESS&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;65841&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65790&quot;}},&quot;id&quot;:&quot;65789&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65828&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65790&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65802&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65789&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65792&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65801&quot;}},&quot;id&quot;:&quot;65795&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;bulk&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65815&quot;},{&quot;id&quot;:&quot;65820&quot;}]},&quot;id&quot;:&quot;65834&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;65855&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;65856&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65827&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65828&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65829&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65831&quot;}},&quot;id&quot;:&quot;65830&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65814&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65794&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;65800&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;above&quot;:[{&quot;id&quot;:&quot;65833&quot;}],&quot;below&quot;:[{&quot;id&quot;:&quot;65785&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65788&quot;},{&quot;id&quot;:&quot;65792&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65789&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65815&quot;},{&quot;id&quot;:&quot;65820&quot;},{&quot;id&quot;:&quot;65825&quot;},{&quot;id&quot;:&quot;65830&quot;},{&quot;id&quot;:&quot;65832&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65836&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65803&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;65777&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65781&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65779&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65783&quot;}},&quot;id&quot;:&quot;65776&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;click_policy&quot;:&quot;hide&quot;,&quot;items&quot;:[{&quot;id&quot;:&quot;65834&quot;},{&quot;id&quot;:&quot;65835&quot;}],&quot;location&quot;:&quot;center_right&quot;,&quot;orientation&quot;:&quot;horizontal&quot;},&quot;id&quot;:&quot;65833&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65799&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;tail&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65830&quot;},{&quot;id&quot;:&quot;65825&quot;}]},&quot;id&quot;:&quot;65835&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65796&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65813&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65802&quot;}},&quot;id&quot;:&quot;65797&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65777&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65798&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65817&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65818&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65819&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65821&quot;}},&quot;id&quot;:&quot;65820&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;65803&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;65793&quot;},{&quot;id&quot;:&quot;65794&quot;},{&quot;id&quot;:&quot;65795&quot;},{&quot;id&quot;:&quot;65796&quot;},{&quot;id&quot;:&quot;65797&quot;},{&quot;id&quot;:&quot;65798&quot;},{&quot;id&quot;:&quot;65799&quot;},{&quot;id&quot;:&quot;65800&quot;}]},&quot;id&quot;:&quot;65855&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;65776&quot;},0,0]]},&quot;id&quot;:&quot;65854&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;b&quot;},&quot;id&quot;:&quot;65836&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65846&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;HIzNVbLFYUBgp0Q0eoxpQLkTfhv0tHVASkXv2Y9se0Dp232dC/CAQPk2UCKmJoRAh2/6lLvYikAM96jDrgaOQBPA7A80m5BALgAl3ga0kkC7JpWUaP+TQMn7+Cp2cJVAJTl3/zpWlkB8CCW6zVKYQH7sMXK5gplAVv3VSBOzm0ButHj4/62fQJnVefRus6BAmrdQWHedoUCgof7eHNqhQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65844&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65843&quot;}},&quot;id&quot;:&quot;65812&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65843&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65793&quot;},{&quot;id&quot;:&quot;65794&quot;},{&quot;id&quot;:&quot;65795&quot;},{&quot;id&quot;:&quot;65796&quot;},{&quot;id&quot;:&quot;65797&quot;},{&quot;id&quot;:&quot;65798&quot;},{&quot;id&quot;:&quot;65799&quot;},{&quot;id&quot;:&quot;65800&quot;}]},&quot;id&quot;:&quot;65803&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65844&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65839&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;65857&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ef686246-e4e5-4a55-917f-6de8a36e1e69","root_ids":["65857"],"roots":{"65857":"e3c375fb-e01c-4c38-aab6-e98c3b41cee4"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();