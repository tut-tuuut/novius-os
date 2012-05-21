(function(h){var i=h.DOM,g=h.dom.Event,c=h.extend,f=h.each,a=h.util.Cookie,e,d=h.explode;function b(m,k){var q,p=m.dom,n="",o,l;previewStyles=m.settings.preview_styles;if(previewStyles===false){return""}if(!previewStyles){previewStyles="font-family font-size font-weight text-decoration text-transform color background-color"}function j(r){return r.replace(/%(\w+)/g,"")}name=k.block||k.inline||"span";q=p.create(name);f(k.styles,function(s,r){s=j(s);if(s){p.setStyle(q,r,s)}});f(k.attributes,function(s,r){s=j(s);if(s){p.setAttrib(q,r,s)}});f(k.classes,function(r){r=j(r);if(!p.hasClass(q,r)){p.addClass(q,r)}});p.setStyles(q,{position:"absolute",left:-65535});m.getBody().appendChild(q);o=p.getStyle(m.getBody(),"fontSize",true);o=/px$/.test(o)?parseInt(o,10):0;f(previewStyles.split(" "),function(r){var s=p.getStyle(q,r,true);if(r=="background-color"&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(s)){s=p.getStyle(m.getBody(),r,true);if(p.toHex(s).toLowerCase()=="#ffffff"){return}}if(r=="font-size"){if(/em|%$/.test(s)){if(o===0){return}s=parseFloat(s,10)/(/%$/.test(s)?100:1);s=(s*o)+"px"}}n+=r+":"+s+";"});p.remove(q);return n}h.ThemeManager.requireLangPack("nos");h.create("tinymce.themes.NosTheme",{sizes:[8,10,12,14,18,24,36],controls:{bold:["bold_desc","Bold"],italic:["italic_desc","Italic"],underline:["underline_desc","Underline"],strikethrough:["striketrough_desc","Strikethrough"],bullist:["bullist_desc","InsertUnorderedList"],numlist:["numlist_desc","InsertOrderedList"],outdent:["outdent_desc","Outdent"],indent:["indent_desc","Indent"],cut:["cut_desc","nosCut"],copy:["copy_desc","nosCopy"],paste:["paste_desc","nosPaste"],undo:["undo_desc","Undo"],redo:["redo_desc","Redo"],code:["code_desc","mceCodeEditor"],hr:["hr_desc","InsertHorizontalRule"],removeformat:["removeformat_desc","RemoveFormat"],sub:["sub_desc","subscript"],sup:["sup_desc","superscript"],forecolor:["forecolor_desc","ForeColor"],forecolorpicker:["forecolor_desc","mceForeColor"],backcolor:["backcolor_desc","HiliteColor"],backcolorpicker:["backcolor_desc","mceBackColor"],charmap:["charmap_desc","mceCharMap"],anchor:["anchor_desc","mceInsertAnchor"],newdocument:["newdocument_desc","mceNewDocument"],blockquote:["blockquote_desc","mceBlockQuote"],brclearall:["brclearall_desc","nosBrClearAll"],image:["image_title","nosImage",null,null,"image_label"]},stateControls:["bold","italic","underline","strikethrough","bullist","numlist","sub","sup","blockquote"],init:function(l,n){var p=this,q,k,r;p.editor=l;p.url=n;p.onResolveName=new h.util.Dispatcher(this);p.settings=q=c({theme_nos_path:true,theme_nos_toolbar_location:"external",theme_nos_toolbar_align:"left",theme_nos_statusbar_location:"bottom",theme_nos_buttons1:"tablecontrols",theme_nos_buttons2:"underline,strikethrough,sub,sup,|,forecolor,backcolor,|,outdent,indent,blockquote,|,anchor,charmap,hr,nonbreaking,brclearall,|,styleprops,removeformat",theme_nos_buttons3:"search,replace,|,spellchecker,|,newdocument,visualhtmlcontrols,code",theme_nos_buttons4:"image,nosmedia,linkcontrols,enhancer",theme_nos_buttons5:"styleselect,bold,italic,justifycontrols,bullist,numlist,|,cut,copy,pastecontrols,undo,redo,|,toolbar_toggle",theme_nos_style_formats:[{block:"p",title:"nos.paragraph"},{block:"address",title:"nos.address"},{block:"pre",title:"nos.pre"},{block:"h1",title:"nos.h1"},{block:"h2",title:"nos.h2"},{block:"h3",title:"nos.h3"},{block:"h4",title:"nos.h4"},{block:"h5",title:"nos.h5"},{block:"h6",title:"nos.h6"},{block:"div",title:"nos.div"},{block:"blockquote",title:"nos.blockquote"},{block:"code",title:"nos.code"},{block:"dt",title:"nos.dt"},{block:"dd",title:"nos.dd"},{block:"samp",title:"nos.samp"}],theme_nos_blockformats:"p,address,pre,h1,h2,h3,h4,h5,h6",theme_nos_fonts:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",theme_nos_more_colors:1,theme_nos_row_height:23,theme_nos_resize_horizontal:1,theme_nos_resizing_use_cookie:1,theme_nos_font_sizes:"1,2,3,4,5,6,7",theme_nos_font_selector:"span",theme_nos_show_current_color:0,theme_nos_enhancers:[],readonly:l.settings.readonly},l.settings);if(!q.font_size_style_values){q.font_size_style_values="8pt,10pt,12pt,14pt,18pt,24pt,36pt"}if(h.is(q.theme_nos_font_sizes,"string")){q.font_size_style_values=h.explode(q.font_size_style_values);q.font_size_classes=h.explode(q.font_size_classes||"");r={};l.settings.theme_nos_font_sizes=q.theme_nos_font_sizes;f(l.getParam("theme_nos_font_sizes","","hash"),function(t,s){var o;if(s==t&&t>=1&&t<=7){s=t+" ("+p.sizes[t-1]+"pt)";o=q.font_size_classes[t-1];t=q.font_size_style_values[t-1]||(p.sizes[t-1]+"pt")}if(/^\s*\./.test(t)){o=t.replace(/\./g,"")}r[s]=o?{"class":o}:{fontSize:t}});q.theme_nos_font_sizes=r}if((k=q.theme_nos_path_location)&&k!="none"){q.theme_nos_statusbar_location=q.theme_nos_path_location}if(q.theme_nos_statusbar_location=="none"){q.theme_nos_statusbar_location=0}if(l.settings.content_css!==false){l.contentCSS.push(l.baseURI.toAbsolute(n+"/skins/"+l.settings.skin+"/content.css"))}l.onInit.add(function(){if(!l.settings.readonly){l.onNodeChange.add(p._nodeChanged,p);l.onKeyUp.add(p._updateUndoStatus,p);l.onMouseUp.add(p._updateUndoStatus,p);l.dom.bind(l.dom.getRoot(),"dragend",function(){p._updateUndoStatus(l)})}});var j=this;l.addButton("nosmedia",{title:"nos.media_title",label:"nos.media_label","class":"mce_media",cmd:"mceMedia"});function m(o){var s=$(o.getBody());s.find(".nosEnhancer, .nosEnhancerInline").each(function(){var t=$(this);t.html("Loading...");var w=$(this).data("enhancer");var u=j.settings.theme_nos_enhancers[w];var v=$(this).data("config");$.ajax({url:u.previewUrl,type:"POST",dataType:"json",data:v,success:function(x){t.html(x.preview);j.onEnhancerAdd(t,u)},error:function(){t.html("Error when loading the preview of the application")}})})}l.onGetContent.add(function(s,u){var t=$(u.content);t.filter(".nosEnhancer, .nosEnhancerInline").empty();t.find(".nosEnhancer, .nosEnhancerInline").empty();t.find("img").filter(function(){return $(this).data("mediaId")||($(this).data("media")||{}).id}).replaceWith(function(){var o=$(this);var w=o.data("media");var v=(w&&w.id)?w.id:o.data("mediaId");var x="nos://media/"+v;if(o.attr("width")&&o.attr("height")){x+="/"+o.attr("width")+"/"+o.attr("height")}return $("<img />").attr({"data-media-id":v,src:o.attr("src"),title:o.attr("title"),alt:o.attr("alt"),style:o.attr("style")})});u.content=$("<div></div>").append(t).html()});l.onSetContent.add(function(s,t){setTimeout(function(){m(s)},1)});l.onSaveContent.add(function(s,u){var t=$(u.content);t.find("img").filter(function(){return $(this).data("mediaId")||($(this).data("media")||{}).id}).replaceWith(function(){var v=$(this);var x=v.data("media");var w=(x&&x.id)?x.id:v.data("media-id");var y="nos://media/"+w;if(v.attr("width")&&v.attr("height")){y+="/"+v.attr("width")+"/"+v.attr("height")}var o=$("<img />").attr({src:y,title:v.attr("title"),alt:v.attr("alt"),style:v.attr("style")});return o});u.content=$("<div></div>").append(t).html()});l.onClick.add(function(o,x){var w=$(x.target);var u=w.data("action");var v=null;if(u=="addParagraphBefore"){v=$("<p>New paragraph</p>");w.closest(".nosEnhancer, .nosEnhancerInline").before(v);o.selection.select(v.get(0),true);o.focus(false);o.execCommand("mceSelectNode",false,v.get(0),{skip_undo:1});o.execCommand("mceEndUndoLevel");x.preventDefault()}if(u=="addParagraphAfter"){v=$("<p>New paragraph</p>");w.closest(".nosEnhancer, .nosEnhancerInline").after(v);o.selection.select(v.get(0),true);o.focus(false);o.execCommand("mceSelectNode",false,v.get(0),{skip_undo:1});o.execCommand("mceEndUndoLevel");x.preventDefault()}if(u=="editEnhancer"){var s=w.closest(".nosEnhancer, .nosEnhancerInline");var t=j.settings.theme_nos_enhancers[$(s).data("enhancer")];j._nosEnhancer(null,t,s);x.preventDefault()}if(u=="removeEnhancer"){w.closest(".nosEnhancer, .nosEnhancerInline").remove();o.execCommand("mceEndUndoLevel");x.preventDefault()}});l.onSetProgressState.add(function(t,o,u){var v,w=t.id,s;if(o){p.progressTimer=setTimeout(function(){v=t.getContainer();v=v.insertBefore(i.create("DIV",{style:"position:relative"}),v.firstChild);s=i.get(t.id+"_tbl");i.add(v,"div",{id:w+"_blocker","class":"mceBlocker",style:{width:s.clientWidth+2,height:s.clientHeight+2}});i.add(v,"div",{id:w+"_progress","class":"mceProgress",style:{left:s.clientWidth/2,top:s.clientHeight/2}})},u||0)}else{i.remove(w+"_blocker");i.remove(w+"_progress");clearTimeout(p.progressTimer)}});i.loadCSS(q.editor_css?l.documentBaseURI.toAbsolute(q.editor_css):n+"/skins/"+l.settings.skin+"/ui.css");if(q.skin_variant){i.loadCSS(n+"/skins/"+l.settings.skin+"/ui_"+q.skin_variant+".css")}},createControl:function(m,j){var k,l;if(l=j.createControl(m)){return l}switch(m){case"enhancer":return this._createEnhancer();case"linkcontrols":return this._createLink();case"justifycontrols":return this._createJustify();case"file":return this._createFileButton();case"pastecontrols":return this._createPaste();case"toolbar_toggle":return this._createToolbarToggle();case"visualhtmlcontrols":return this._createVisualHtml();case"styleselect":return this._createStyleSelect();case"formatselect":return this._createBlockFormats();case"fontselect":return this._createFontSelect();case"fontsizeselect":return this._createFontSizeSelect();case"forecolor":return this._createForeColorMenu();case"backcolor":return this._createBackColorMenu()}if((k=this.controls[m])){return j.createButton(m,{title:"nos."+k[0],cmd:k[1],ui:k[2],value:k[3],label:k[4]?"nos."+k[4]:""})}},execCommand:function(n,m,o){var l=this["_"+n],j=this.editor;switch(n){case"nosCut":case"nosCopy":case"nosPaste":j.windowManager.alert(j.getLang("nos.clipboard_msg"));try{j.getDoc().execCommand(n.replace("nos",""),m,o)}catch(k){if(this.isGecko){j.windowManager.alert(j.getLang("nos.clipboard_msg"))}else{j.windowManager.alert(j.getLang("clipboard_no_support"))}}return true;break;default:if(l){l.call(this,m,o);return true}}return false},_createLink:function(){var n,k=this,l=k.settings,m={},j;n=k.editor.controlManager.createSplitButton("linkcontrols",{title:"nos.link_title",label:"nos.link_label",onclick:function(){k.editor.execCommand("mceLink",true,"")},"class":"mce_link"},h.ui.NosSplitButton);n.onRenderMenu.add(function(p,o){o.add({title:"nos.link_title","class":"mceMenuItemTitle"}).setDisabled(1);o.add({title:"nos.link_title",icon:"link",onclick:function(){k.editor.execCommand("mceLink",true,"")},id:"link"});o.add({title:"nos.unlink_desc",icon:"unlink",onclick:function(){k.editor.execCommand("unlink",false,"")},id:"unlink"});o.onShowMenu.add(function(q){var r=k.editor,v=r.selection.getNode(),u,t,s;u=i.getParent(v,"A");t=!!u;s=t&&!!u.name;q.items.link.setDisabled(s);q.items.link.setActive(t&&!s);q.items.unlink.setDisabled(!t)})});return n},_createFileButton:function(){var n,k=this,l=k.settings,m={},j;n=k.editor.controlManager.createButton("file",{title:"nos.file_title",label:"nos.file_label","class":"mce_file"});return n},_createToolbarToggle:function(){var q,w=this,x=w.settings,j={},r,m=w.editor,l=new Array(),u=["1","2","3"],k;for(k=0;k<u.length;k++){l[k]=m.getParam("","toolbar"+(u[k]).replace(" ",""))}q=w.editor.controlManager.createButton("toolbar_toggle",{title:"nos.toolbar_toggle_title",label:"nos.toolbar_toggle_label_open","class":"mce_toolbar_toggle_open",cmd:"mceToggleToolbars"});var p=function(s,o){if(x.theme_nos_toolbar_location==="external"){var t=i.get(s.id+"_external");$(t).css("top",($(t).position().top+o)+"px")}else{var v=s.getContentAreaContainer().firstChild;i.setStyle(v,"height",i.getSize(v).h+o);s.theme.deltaHeight+=o}},n=function(o){q.setActive(o);i.setAttrib(i.select(".mceIcon",q.id),"class","mceIcon");i.addClass(i.select(".mceIcon",q.id),o?"mce_toolbar_toggle_close":"mce_toolbar_toggle_open");i.setHTML(i.select(".mceButtonLabel",q.id),m.getLang(o?"nos.toolbar_toggle_label_close":"nos.toolbar_toggle_label_open",0))};m.addCommand("mceToggleToolbars",function(){var o=m.controlManager,A,y,s=h.util.Cookie,t,z=s.getHash("TinyMCE_toggle")||new Object(),v=0;for(y=0;y<l.length;y++){obj=m.controlManager.get(l[y]);if(typeof obj=="undefined"){continue}A=obj.id;if(i.isHidden(A)){t=1;i.show(A);v=v-26}else{t=0;i.hide(A);v=v+26}}p(m,v);n(t);z[m.id]=t;s.setHash("TinyMCE_toggle",z)});m.onPostRender.add(function(){var s=h.util.Cookie.getHash("TinyMCE_toggle")||new Object(),v=0,y=false;if(s[m.id]==null){y=true}else{if(s[m.id]==="0"){y=true}}if(y){var o=m.controlManager,t,z;for(k=0;k<u.length;k++){tbId=m.getParam("","toolbar"+(u[k]).replace(" ",""));z=m.controlManager.get(tbId).id;i.hide(z);v=v+26}p(m,v);n(0)}});return q},_createPaste:function(){var n,k=this,l=k.settings,m={},j;n=k.editor.controlManager.createSplitButton("paste",{title:"nos.paste_desc",cmd:"nosPaste","class":"mcePasteBouton"});n.onRenderMenu.add(function(p,o){o.add({title:"nos.paste_desc","class":"mceMenuItemTitle"}).setDisabled(1);o.add({title:"nos.paste_desc",icon:"paste",cmd:"nosPaste"});o.addSeparator();o.add({title:"paste.paste_text_desc",icon:"pastetext",onclick:function(){k.editor.execCommand("mcePasteText",true,"")}});o.add({title:"paste.paste_word_desc",icon:"pasteword",onclick:function(){k.editor.execCommand("mcePasteWord",true,"")}});o.add({title:"nos.paste_html_desc",icon:"pastehtml",onclick:function(){k.editor.execCommand("nosPasteHtml",true,"")}})});return n},_createEnhancer:function(){var n,k=this,l=k.settings,m={},j;if(!l.theme_nos_enhancers){return false}n=k.editor.controlManager.createMenuButton("enhancer",{title:"nos.enhancer_desc",label:"nos.enhancer_desc",cmd:"nosEnhancer"});n.onRenderMenu.add(function(p,o){o.settings.max_height=300;o.add({title:"nos.enhancer_desc","class":"mceMenuItemTitle"}).setDisabled(1);f(l.theme_nos_enhancers,function(q){o.add({title:q.title,style:"background: url("+q.iconUrl+") no-repeat 5px center;",id:"enhancer_"+q.id,onclick:function(){k.editor.execCommand("nosEnhancer",false,q)}})})});return n},_createVisualHtml:function(){var n,k=this,l=k.settings,m={},j;n=k.editor.controlManager.createButton("visualhtml",{title:"nos.visualthml_desc",icon:"visualhtml",onclick:function(){k.editor.execCommand("nosVisualHtml",false,"")}});return n},_createFontSelect:function(){var l,k=this,j=k.editor;l=j.controlManager.createListBox("fontselect",{title:"nos.fontdefault",onselect:function(m){var n=l.items[l.selectedIndex];if(!m&&n){j.execCommand("FontName",false,n.value);return}j.execCommand("FontName",false,m);l.select(function(o){return m==o});if(n&&n.value==m){l.select(null)}return false}});if(l){f(j.getParam("theme_nos_fonts",k.settings.theme_nos_fonts,"hash"),function(n,m){l.add(j.translate(m),n,{style:n.indexOf("dings")==-1?"font-family:"+n:""})})}return l},_createFontSizeSelect:function(){var m=this,k=m.editor,n,l=0,j=[];n=k.controlManager.createListBox("fontsizeselect",{title:"nos.font_size",onselect:function(o){var p=n.items[n.selectedIndex];if(!o&&p){p=p.value;if(p["class"]){k.formatter.toggle("fontsize_class",{value:p["class"]});k.undoManager.add();k.nodeChanged()}else{k.execCommand("FontSize",false,p.fontSize)}return}if(o["class"]){k.focus();k.undoManager.add();k.formatter.toggle("fontsize_class",{value:o["class"]});k.undoManager.add();k.nodeChanged()}else{k.execCommand("FontSize",false,o.fontSize)}n.select(function(q){return o==q});if(p&&(p.value.fontSize==o.fontSize||p.value["class"]&&p.value["class"]==o["class"])){n.select(null)}return false}});if(n){f(m.settings.theme_nos_font_sizes,function(p,o){var q=p.fontSize;if(q>=1&&q<=7){q=m.sizes[parseInt(q)-1]+"pt"}n.add(o,p,{style:"font-size:"+q,"class":"mceFontSize"+(l++)+(" "+(p["class"]||""))})})}return n},_createJustify:function(p){var m=this,k=m.editor,l=k.controlManager,o,j={justifyleft:{title:"nos.justifyleft_desc",cmd:"JustifyLeft"},justifycenter:{title:"nos.justifycenter_desc",cmd:"JustifyCenter"},justifyright:{title:"nos.justifyright_desc",cmd:"JustifyRight"},justifyfull:{title:"nos.justifyfull_desc",cmd:"JustifyFull"}};o=l.createListBox("justifycontrols",{title:"nos.justify_select",onselect:function(n){var q=j[n];k.execCommand(q.cmd,false);return false}},h.ui.NosListBox);k.onInit.add(function(){var n=0;f(j,function(r,q){o.add(r.title,q,h.extend(r,{icon:q}))})});return o},_createStyleSelect:function(p){var m=this,k=m.editor,l=k.controlManager,o;o=l.createListBox("styleselect",{title:"nos.style_select",onselect:function(r){var s,n=[],q;f(o.items,function(t){n.push(t.value)});k.focus();k.undoManager.add();s=k.formatter.matchAll(n);h.each(s,function(t){if(!r||t==r){if(t){k.formatter.remove(t)}q=true}});if(!q){k.formatter.apply(r)}k.undoManager.add();k.nodeChanged();return false}});var j=k.getParam("theme_nos_style_formats",m.settings.theme_nos_style_formats);k.onPreInit.add(function(){var n=0;f(j,function(q){var r,s=0;f(q,function(){s++});if(s>1){r=q.name=q.name||"style_"+(n++);k.formatter.register(r,q);o.add(q.title,r,{style:function(){return b(k,q)}})}else{o.add(q.title)}})});return o},_createBlockFormats:function(){var n,j={p:"nos.paragraph",address:"nos.address",pre:"nos.pre",h1:"nos.h1",h2:"nos.h2",h3:"nos.h3",h4:"nos.h4",h5:"nos.h5",h6:"nos.h6",div:"nos.div",blockquote:"nos.blockquote",code:"nos.code",dt:"nos.dt",dd:"nos.dd",samp:"nos.samp"},l=this,k,m;n=l.editor.controlManager.createListBox("formatselect",{title:"nos.block",cmd:"FormatBlock"});if(n){fmts_site=l.editor.getParam("theme_nos_blockformats",l.settings.theme_nos_blockformats,"hash");f(fmts_site,function(p,o){n.add(l.editor.translate(o!=p?o:j[p]),p,{"class":"mce_formatPreview mce_"+p,style:function(){return b(l.editor,{block:p})}})})}return n},_createForeColorMenu:function(){var n,k=this,l=k.settings,m={},j;if(l.theme_nos_more_colors){m.more_colors_func=function(){k._mceColorPicker(0,{color:n.value,func:function(o){n.setColor(o)}})}}if(j=l.theme_nos_text_colors){m.colors=j}if(l.theme_nos_default_foreground_color){m.default_color=l.theme_nos_default_foreground_color}m.title="nos.forecolor_desc";m.cmd="ForeColor";m.scope=this;n=k.editor.controlManager.createColorSplitButton("forecolor",m);return n},_createBackColorMenu:function(){var n,k=this,l=k.settings,m={},j;if(l.theme_nos_more_colors){m.more_colors_func=function(){k._mceColorPicker(0,{color:n.value,func:function(o){n.setColor(o)}})}}if(j=l.theme_nos_background_colors){m.colors=j}if(l.theme_nos_default_background_color){m.default_color=l.theme_nos_default_background_color}m.title="nos.backcolor_desc";m.cmd="HiliteColor";m.scope=this;n=k.editor.controlManager.createColorSplitButton("backcolor",m);return n},renderUI:function(l){var q,m,r,w=this,u=w.editor,x=w.settings,v,k,j;if(u.settings){u.settings.aria_label=x.aria_label+u.getLang("nos.help_shortcut")}q=k=i.create("span",{role:"application","aria-labelledby":u.id+"_voice",id:u.id+"_parent","class":"mceEditor "+u.settings.skin+"Skin"+(x.skin_variant?" "+u.settings.skin+"Skin"+w._ufirst(x.skin_variant):"")+(u.settings.directionality=="rtl"?" mceRtl":"")});i.add(q,"span",{"class":"mceVoiceLabel",style:"display:none;",id:u.id+"_voice"},x.aria_label);if(!i.boxModel){q=i.add(q,"div",{"class":"mceOldBoxModel"})}q=v=i.add(q,"table",{role:"presentation",id:u.id+"_tbl","class":"mceLayout",cellSpacing:0,cellPadding:0});q=r=i.add(q,"tbody");switch((x.theme_nos_layout_manager||"").toLowerCase()){case"rowlayout":m=w._rowLayout(x,r,l);break;case"customlayout":m=u.execCallback("theme_nos_custom_layout",x,r,l,k);break;default:m=w._simpleLayout(x,r,l,k)}q=l.targetNode;j=v.rows;i.addClass(j[0],"mceFirst");i.addClass(j[j.length-1],"mceLast");f(i.select("tr",r),function(o){i.addClass(o.firstChild,"mceFirst");i.addClass(o.childNodes[o.childNodes.length-1],"mceLast")});if(i.get(x.theme_nos_toolbar_container)){i.get(x.theme_nos_toolbar_container).appendChild(k)}else{i.insertAfter(k,q)}g.add(u.id+"_path_row","click",function(n){n=n.target;if(n.nodeName=="A"){w._sel(n.className.replace(/^.*mcePath_([0-9]+).*$/,"$1"));return false}});if(!u.getParam("accessibility_focus")){g.add(i.add(k,"a",{href:"#"},"<!-- IE -->"),"focus",function(){tinyMCE.get(u.id).focus()})}if(x.theme_nos_toolbar_location=="external"){l.deltaHeight=0}w.deltaHeight=l.deltaHeight;l.targetNode=null;u.onKeyDown.add(function(p,n){var s=121,o=122;if(n.altKey){if(n.keyCode===s){if(h.isWebKit){window.focus()}w.toolbarGroup.focus();return g.cancel(n)}else{if(n.keyCode===o){i.get(p.id+"_path_row").focus();return g.cancel(n)}}}});u.addShortcut("alt+0","","mceShortcuts",w);return{iframeContainer:m,editorContainer:u.id+"_parent",sizeContainer:v,deltaHeight:l.deltaHeight}},getInfo:function(){return{longname:"Nos theme",author:"Novius-OS",authorurl:"http://www.novius-os.org",version:"0.1"}},resizeBy:function(j,k){var l=i.get(this.editor.id+"_ifr");this.resizeTo(l.clientWidth+j,l.clientHeight+k)},resizeTo:function(j,n,l){var k=this.editor,m=this.settings,o=i.get(k.id+"_tbl"),p=i.get(k.id+"_ifr");j=Math.max(m.theme_nos_resizing_min_width||100,j);n=Math.max(m.theme_nos_resizing_min_height||100,n);j=Math.min(m.theme_nos_resizing_max_width||65535,j);n=Math.min(m.theme_nos_resizing_max_height||65535,n);i.setStyle(o,"height","");i.setStyle(p,"height",n);if(m.theme_nos_resize_horizontal){i.setStyle(o,"width","");i.setStyle(p,"width",j);if(j<o.clientWidth){j=o.clientWidth;i.setStyle(p,"width",o.clientWidth)}}if(l&&m.theme_nos_resizing_use_cookie){a.setHash("TinyMCE_"+k.id+"_size",{cw:j,ch:n})}},destroy:function(){var j=this.editor.id;g.clear(j+"_resize");g.clear(j+"_path_row");g.clear(j+"_external_close")},_simpleLayout:function(z,u,l,j){var y=this,v=y.editor,w=z.theme_nos_toolbar_location,q=z.theme_nos_statusbar_location,m,k,r,x;if(z.readonly){m=i.add(u,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"});return k}if(w=="top"){y._addToolbars(u,l)}if(w=="external"){m=x=i.create("div",{style:"position:relative"});m=i.add(m,"div",{id:v.id+"_external","class":"mceExternalToolbar"});i.add(m,"a",{id:v.id+"_external_close",href:"javascript:;","class":"mceExternalClose"});m=i.add(m,"table",{id:v.id+"_tblext",cellSpacing:0,cellPadding:0});r=i.add(m,"tbody");if(j.firstChild.className=="mceOldBoxModel"){j.firstChild.appendChild(x)}else{j.insertBefore(x,j.firstChild)}y._addToolbars(r,l);v.onMouseUp.add(function(){var p=i.get(v.id+"_external");i.show(p);i.hide(e);var o=g.add(v.id+"_external_close","click",function(){i.hide(v.id+"_external");g.remove(v.id+"_external_close","click",o)});i.show(p);var n=i.getRect(v.id+"_tblext");i.setStyle(p,"top",0-n.h-1);if(n.w+n.x>window.innerWidth){i.setStyle(p,"left",window.innerWidth-n.w-n.x-1)}i.hide(p);i.show(p);p.style.filter="";e=v.id+"_external";p=null})}if(q=="top"){y._addStatusBar(u,l)}if(!z.theme_nos_toolbar_container){m=i.add(u,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"})}if(w=="bottom"){y._addToolbars(u,l)}if(q=="bottom"){y._addStatusBar(u,l)}return k},_rowLayout:function(x,p,l){var w=this,q=w.editor,v,y,j=q.controlManager,m,k,u,r;v=x.theme_nos_containers_default_class||"";y=x.theme_nos_containers_default_align||"center";f(d(x.theme_nos_containers||""),function(s,o){var n=x["theme_nos_container_"+s]||"";switch(s.toLowerCase()){case"mceeditor":m=i.add(p,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"});break;case"mceelementpath":w._addStatusBar(p,l);break;default:r=(x["theme_nos_container_"+s+"_align"]||y).toLowerCase();r="mce"+w._ufirst(r);m=i.add(i.add(p,"tr"),"td",{"class":"mceToolbar "+(x["theme_nos_container_"+s+"_class"]||v)+" "+r||y});u=j.createToolbar("toolbar"+o);w._addControls(n,u);i.setHTML(m,u.renderHTML());l.deltaHeight-=x.theme_nos_row_height}});return k},_addControls:function(k,j){var l=this,m=l.settings,n,o=l.editor.controlManager;if(m.theme_nos_disable&&!l._disabled){n={};f(d(m.theme_nos_disable),function(p){n[p]=1});l._disabled=n}else{n=l._disabled}f(d(k),function(q){var p;if(n&&n[q]){return}if(q=="tablecontrols"){f(["table","|","row_props","cell_props","|","row_before","row_after","delete_row","|","col_before","col_after","delete_col","|","split_cells","merge_cells"],function(r){r=l.createControl(r,o);if(r){j.add(r)}});return}p=l.createControl(q,o);if(p){j.add(p)}})},_addToolbars:function(y,k){var B=this,q,p,u=B.editor,C=B.settings,A,j=u.controlManager,w,l,r=[],z,x,m=false;x=j.createToolbarGroup("toolbargroup",{name:u.getLang("nos.toolbar"),tab_focus_toolbar:u.getParam("theme_nos_tab_focus_toolbar")});B.toolbarGroup=x;z=C.theme_nos_toolbar_align.toLowerCase();z="mce"+B._ufirst(z);l=i.add(i.add(y,"tr",{role:"presentation"}),"td",{"class":"mceToolbar "+z,role:"presentation"});for(q=1;(A=C["theme_nos_buttons"+q]);q++){m=true;p=j.createToolbar("toolbar"+q,{"class":"mceToolbarRow"+q});if(C["theme_nos_buttons"+q+"_add"]){A+=","+C["theme_nos_buttons"+q+"_add"]}if(C["theme_nos_buttons"+q+"_add_before"]){A=C["theme_nos_buttons"+q+"_add_before"]+","+A}B._addControls(A,p);x.add(p);k.deltaHeight-=C.theme_nos_row_height}if(!m){k.deltaHeight-=C.theme_advanced_row_height}r.push(x.renderHTML());r.push(i.createHTML("a",{href:"#",accesskey:"z",title:u.getLang("nos.toolbar_focus"),onfocus:"tinyMCE.getInstanceById('"+u.id+"').focus();"},"<!-- IE -->"));i.setHTML(l,r.join(""))},_addStatusBar:function(p,k){var l,w=this,q=w.editor,x=w.settings,j,u,v,m;l=i.add(p,"tr");l=m=i.add(l,"td",{"class":"mceStatusbar"});l=i.add(l,"div",{id:q.id+"_path_row",role:"group","aria-labelledby":q.id+"_path_voice"});if(x.theme_nos_path){i.add(l,"span",{id:q.id+"_path_voice"},q.translate("nos.path"));i.add(l,"span",{},": ")}else{i.add(l,"span",{},"&#160;")}if(x.theme_nos_resizing){i.add(m,"a",{id:q.id+"_resize",href:"javascript:;",onclick:"return false;","class":"mceResize",tabIndex:"-1"});if(x.theme_nos_resizing_use_cookie){q.onPostRender.add(function(){var n=a.getHash("TinyMCE_"+q.id+"_size"),r=i.get(q.id+"_tbl");if(!n){return}w.resizeTo(n.cw,n.ch)})}q.onPostRender.add(function(){g.add(q.id+"_resize","click",function(n){n.preventDefault()});g.add(q.id+"_resize","mousedown",function(E){var t,r,s,o,D,A,B,G,n,F,y;function z(H){H.preventDefault();n=B+(H.screenX-D);F=G+(H.screenY-A);w.resizeTo(n,F)}function C(H){g.remove(i.doc,"mousemove",t);g.remove(q.getDoc(),"mousemove",r);g.remove(i.doc,"mouseup",s);g.remove(q.getDoc(),"mouseup",o);n=B+(H.screenX-D);F=G+(H.screenY-A);w.resizeTo(n,F,true)}E.preventDefault();D=E.screenX;A=E.screenY;y=i.get(w.editor.id+"_ifr");B=n=y.clientWidth;G=F=y.clientHeight;t=g.add(i.doc,"mousemove",z);r=g.add(q.getDoc(),"mousemove",z);s=g.add(i.doc,"mouseup",C);o=g.add(q.getDoc(),"mouseup",C)})})}k.deltaHeight-=21;l=p=null},_updateUndoStatus:function(k){var j=k.controlManager,l=k.undoManager;j.setDisabled("undo",!l.hasUndo()&&!l.typing);j.setDisabled("redo",!l.hasRedo())},_nodeChanged:function(o,u,E,r,F){var z=this,D,G=0,y,H,A=z.settings,x,l,w,C,m,k,j;h.each(z.stateControls,function(n){u.setActive(n,o.queryCommandState(z.controls[n][1]))});function q(p){var s,n=F.parents,t=p;if(typeof(p)=="string"){t=function(v){return v.nodeName==p}}for(s=0;s<n.length;s++){if(t(n[s])){return n[s]}}}z._updateUndoStatus(o);u.setDisabled("outdent",!o.queryCommandState("Outdent"));u.setActive("visualhtml",!(o.dom.select("body.debug")==""));D=q("A");if(H=u.get("linkcontrols")){H.setDisabled(r);H.setActive(!!D)}if(H=u.get("anchor")){H.setActive(!r&&!!D&&D.name)}D=q("IMG");if(H=u.get("image")){H.setActive(!r&&!!D&&E.className.indexOf("mceItem")==-1)}if(H=u.get("styleselect")){H.showMenu();H.hideMenu();o.focus();k=[];f(H.items,function(n){k.push(n.value)});j=o.formatter.matchAll(k);H.select(j[0]);h.each(j,function(p,n){if(n>0){H.mark(p)}})}if(H=u.get("justifycontrols")){f(H.items,function(p,n){if(o.queryCommandState(p.cmd)){H.selectByIndex(n)}})}if(H=u.get("formatselect")){D=q(o.dom.isBlock);if(D){H.select(D.nodeName.toLowerCase())}}q(function(p){if(p.nodeName==="SPAN"){if(!x&&p.className){x=p.className}}if(o.dom.is(p,A.theme_nos_font_selector)){if(!l&&p.style.fontSize){l=p.style.fontSize}if(!w&&p.style.fontFamily){w=p.style.fontFamily.replace(/[\"\']+/g,"").replace(/^([^,]+).*/,"$1").toLowerCase()}if(!C&&p.style.color){C=p.style.color}if(!m&&p.style.backgroundColor){m=p.style.backgroundColor}}return false});if(H=u.get("fontselect")){H.select(function(n){return n.replace(/^([^,]+).*/,"$1").toLowerCase()==w})}if(H=u.get("fontsizeselect")){if(A.theme_nos_runtime_fontsize&&!l&&!x){l=o.dom.getStyle(E,"fontSize",true)}H.select(function(n){if(n.fontSize&&n.fontSize===l){return true}if(n["class"]&&n["class"]===x){return true}})}if(A.theme_nos_show_current_color){function B(p,n){if(H=u.get(p)){if(!n){n=H.settings.default_color}if(n!==H.value){H.displayColor(n)}}}B("forecolor",C);B("backcolor",m)}if(A.theme_nos_show_current_color){function B(p,n){if(H=u.get(p)){if(!n){n=H.settings.default_color}if(n!==H.value){H.displayColor(n)}}}B("forecolor",C);B("backcolor",m)}if(A.theme_nos_path&&A.theme_nos_statusbar_location){D=i.get(o.id+"_path")||i.add(o.id+"_path_row","span",{id:o.id+"_path"});if(z.statusKeyboardNavigation){z.statusKeyboardNavigation.destroy();z.statusKeyboardNavigation=null}i.setHTML(D,"");q(function(I){var p=I.nodeName.toLowerCase(),s,v,t="";if(I.nodeType!=1||p==="br"||I.getAttribute("data-mce-bogus")||i.hasClass(I,"mceItemHidden")||i.hasClass(I,"mceItemRemoved")){return}if(h.isIE&&I.scopeName!=="HTML"&&I.scopeName){p=I.scopeName+":"+p}p=p.replace(/mce\:/g,"");switch(p){case"b":p="strong";break;case"i":p="em";break;case"img":if(y=i.getAttrib(I,"src")){t+="src: "+y+" "}break;case"a":if(y=i.getAttrib(I,"name")){t+="name: "+y+" ";p+="#"+y}if(y=i.getAttrib(I,"href")){t+="href: "+y+" "}break;case"font":if(y=i.getAttrib(I,"face")){t+="font: "+y+" "}if(y=i.getAttrib(I,"size")){t+="size: "+y+" "}if(y=i.getAttrib(I,"color")){t+="color: "+y+" "}break;case"span":if(y=i.getAttrib(I,"style")){t+="style: "+y+" "}break}if(y=i.getAttrib(I,"id")){t+="id: "+y+" "}if(y=I.className){y=y.replace(/\b\s*(webkit|mce|Apple-)\w+\s*\b/g,"");if(y){t+="class: "+y+" ";if(o.dom.isBlock(I)||p=="img"||p=="span"){p+="."+y}}}p=p.replace(/(html:)/g,"");p={name:p,node:I,title:t};z.onResolveName.dispatch(z,p);t=p.title;p=p.name;v=i.create("a",{href:"javascript:;",role:"button",onmousedown:"return false;",title:t,"class":"mcePath_"+(G++)},p);if(D.hasChildNodes()){D.insertBefore(i.create("span",{"aria-hidden":"true"},"\u00a0\u00bb "),D.firstChild);D.insertBefore(v,D.firstChild)}else{D.appendChild(v)}},o.getBody());if(i.select("a",D).length>0){z.statusKeyboardNavigation=new h.ui.KeyboardNavigation({root:o.id+"_path_row",items:i.select("a",D),excludeFromTabOrder:true,onCancel:function(){o.focus()}},i)}}},_sel:function(j){this.editor.execCommand("mceSelectNodeDepth",false,j)},_mceInsertAnchor:function(l,k){var j=this.editor;j.windowManager.open({url:this.url+"/anchor.htm",width:320+parseInt(j.getLang("nos.anchor_delta_width",0)),height:90+parseInt(j.getLang("nos.anchor_delta_height",0)),inline:true},{theme_url:this.url})},_mceCharMap:function(){var j=this.editor;j.windowManager.open({url:this.url+"/charmap.htm",width:550+parseInt(j.getLang("nos.charmap_delta_width",0)),height:250+parseInt(j.getLang("nos.charmap_delta_height",0)),inline:true},{theme_url:this.url})},_mceColorPicker:function(l,k){var j=this.editor;k=k||{};j.windowManager.open({url:this.url+"/color_picker.htm",width:375+parseInt(j.getLang("nos.colorpicker_delta_width",0)),height:250+parseInt(j.getLang("nos.colorpicker_delta_height",0)),close_previous:false,inline:true},{input_color:k.color,func:k.func,theme_url:this.url})},_mceCodeEditor:function(k,l){var j=this.editor;j.windowManager.open({url:this.url+"/source_editor.htm",width:parseInt(j.getParam("theme_nos_source_editor_width",720)),height:parseInt(j.getParam("theme_nos_source_editor_height",580)),inline:true,resizable:true,maximizable:true},{theme_url:this.url})},_mceLink:function(k,l){var j=this.editor;j.windowManager.open({url:this.url+"/link.htm",width:310+parseInt(j.getLang("nos.link_delta_width",0)),height:200+parseInt(j.getLang("nos.link_delta_height",0)),inline:true},{theme_url:this.url})},_mceNewDocument:function(){var j=this.editor;j.windowManager.confirm("nos.newdocument",function(k){if(k){j.execCommand("mceSetContent",false,"")}})},_mceForeColor:function(){var j=this;this._mceColorPicker(0,{color:j.fgColor,func:function(k){j.fgColor=k;j.editor.execCommand("ForeColor",false,k)}})},_mceBackColor:function(){var j=this;this._mceColorPicker(0,{color:j.bgColor,func:function(k){j.bgColor=k;j.editor.execCommand("HiliteColor",false,k)}})},_nosPasteHtml:function(k,l){var j=this.editor;j.windowManager.open({url:this.url+"/pastehtml.htm",width:600,height:420,inline:true},{theme_url:this.url})},_nosBrClearAll:function(k,l){var j=this.editor;br='<br style="clear: both"/>';j.execCommand("mceInsertContent",false,br)},_nosVisualHtml:function(k,l){var j=this.editor;if((j.dom.select("body.debug")=="")){j.dom.addClass(j.dom.select("body"),"debug")}else{j.dom.removeClass(j.dom.select("body"),"debug")}},_nosEnhancer:function(p,q,r){var m=tinyMCE.activeEditor;var o=null;var s=this;var n=function(t){var v=$(t.preview);v.attr({id:"__mce_tmp","data-config":t.config,"data-enhancer":q.id}).addClass("mceNonEditable");if(r){r.empty().removeClass("mceNonEditable nosEnhancer").data("config","").data("enhancer","");m.selection.select(r.get(0),true);m.focus(false);m.execCommand("mceSelectNode",false,r.get(0),{skip_undo:1});m.execCommand("mceReplaceContent",false,$("<div></div>").append(v).html(),{skip_undo:1})}else{m.execCommand("mceInsertContent",false,$("<div></div>").append(v).html(),{skip_undo:1})}var u=$(m.dom.get("__mce_tmp"));u.attr("id","");s.onEnhancerAdd(u,q);m.selection.select(u.get(0),true);m.selection.collapse(true);m.focus(false);m.execCommand("mceSelectNode",false,u.get(0),{skip_undo:1});m.execCommand("mceStartTyping");m.execCommand("mceEndUndoLevel")};if(!$.isPlainObject(q.dialog)||!q.dialog.contentUrl){$.ajax({url:q.previewUrl,type:"POST",dataType:"json",success:n,error:function(){console.log("Error: unable to add the enhancer in the Wysiwyg (no popup)")}});return}if(q.dialog.ajax||!r){o=$(m.formElement).nos().dialog($.extend({title:q.title},r?$.extend({},q.dialog,{ajax:r.data("config")}):q.dialog))}else{o=$(m.formElement).nos().dialog($.extend({title:q.title},$.extend({},q.dialog,{contentUrl:null})));var k=$("<form></form>").attr("action",q.dialog.contentUrl).attr("method","post").attr("target","tinymce_dialog").appendTo(o),l=$("<iframe></iframe>").attr("src",/^https/i.test(window.location.href||"")?"javascript:false":"about:blank").attr("frameborder","0").attr("name","tinymce_dialog").css({width:"100%",height:"99%"}).appendTo(o),j=function(t,u){if($.isArray(u)){$.each(u,function(v,w){j(t+"[]",w)})}else{$('<input type="hidden" name="'+t+'">').attr("value",u).appendTo(k)}};$.each(r.data("config")||{},function(t,u){j(t,u)});o.css("padding","0px");k.submit()}o.bind("save.enhancer",function(u,t){n(t);o.dialog("close")})},_nosImage:function(l,n){var j=this.editor;if(j.dom.getAttrib(j.selection.getNode(),"class","").indexOf("mceItem")!=-1){return}var m=j.selection.getNode().nodeName=="IMG";var k=null;k=$(j.formElement).nos().dialog({contentUrl:"admin/nos/wysiwyg/image"+(m?"/edit":""),title:m?j.getLang("nos.image_edit"):j.getLang("nos.image_insert"),ajax:true,open:function(o){$(o.target).data("tinymce",j)}});k.bind("insert.media",function(q,o){k.dialog("close");var p=$("<div></div>").append($(o).addClass("nosMedia")).html();if(m){j.execCommand("mceReplaceContent",false,p,{skip_undo:1})}else{j.execCommand("mceInsertContent",false,p,{skip_undo:1})}j.execCommand("mceEndUndoLevel")})},onEnhancerAdd:function(j,o){var k=tinyMCE.activeEditor;j=$(j);var n=$('<a href="#" data-action="removeEnhancer">Delete</a>').attr("title",k.getLang("nos.enhancer_delete")).addClass("nos_enhancer_action nos_enhancer_action_delete"),m=$('<a href="#" data-action="editEnhancer">Options</a>').attr("title",k.getLang("nos.enhancer_options")).addClass("nos_enhancer_action nos_enhancer_action_edit"),p=$('<a href="#" data-action="addParagraphAfter">New paragraph after</a>').attr("title",k.getLang("nos.enhancer_p_after")).addClass("nos_enhancer_action nos_enhancer_action_after"),l=$('<a href="#" data-action="addParagraphBefore">New paragraph before</a>').attr("title",k.getLang("nos.enhancer_p_before")).addClass("nos_enhancer_action nos_enhancer_action_before");if(j.is("span")){j.addClass("nosEnhancerInline");j.append(document.createTextNode(" "));if($.isPlainObject(o.dialog)&&o.dialog.contentUrl){j.append(m)}j.append(n);j.before($("<span> </span>"));j.after($("<span> </span>"))}else{j.addClass("nosEnhancer");j.prepend(p.addClass("nos_enhancer_action_block"));j.prepend(l.addClass("nos_enhancer_action_block"));if($.isPlainObject(o.dialog)&&o.dialog.contentUrl){j.prepend(m.addClass("nos_enhancer_action_block"))}j.prepend(n.addClass("nos_enhancer_action_block"))}},_ufirst:function(j){return j.substring(0,1).toUpperCase()+j.substring(1)}});h.ThemeManager.add("nos",h.themes.NosTheme)}(tinymce));(function(c){var b=c.DOM,a=c.dom.Event,d=c.each;c.create("tinymce.ui.NosSplitButton:tinymce.ui.SplitButton",{NosSplitButton:function(g,f,e){this.parent(g,f,e);this.classPrefix="mceSplitButton";f.label=e.translate(f.label)},renderHTML:function(){var k=this.classPrefix,j=this.settings,i,e,g=this,f;e=b.encode(j.label||"");i="<tbody><tr>";if(j.image){f=b.createHTML("img ",{src:j.image,role:"presentation","class":"mceAction "+j["class"]})+e}else{f=b.createHTML("span",{"class":"mceAction "+j["class"]},"")}f+=(e?'<span class="'+k+'Label">'+e+"</span>":"");f+=b.createHTML("span",{"class":"mceVoiceLabel mceIconOnly",id:g.id+"_voice",style:"display:none;"},j.title);i+="<td >"+b.createHTML("a",{role:"button",id:g.id+"_action",tabindex:"-1",href:"javascript:;","class":"nosActionLabel mceAction "+(e?" "+k+"Labeled":"")+" "+j["class"],onclick:"return false;",onmousedown:"return false;",title:j.title},f)+"</td>";f=b.createHTML("span",{"class":"mceOpen "+j["class"]},'<span style="display:none;" class="mceIconOnly" aria-hidden="true">\u25BC</span>');i+="<td >"+b.createHTML("a",{role:"button",id:g.id+"_open",tabindex:"-1",href:"javascript:;","class":"mceOpen "+j["class"],onclick:"return false;",onmousedown:"return false;",title:j.title},f)+"</td>";i+="</tr></tbody>";i=b.createHTML("table",{role:"presentation","class":"mceSplitButton mceSplitButtonEnabled "+j["class"],cellpadding:"0",cellspacing:"0",title:j.title},i);return b.createHTML("div",{id:g.id,role:"button",tabindex:"0","aria-labelledby":g.id+"_voice","aria-haspopup":"true"},i)}})})(tinymce);(function(c){var b=c.DOM,a=c.dom.Event,d=c.each;c.create("tinymce.ui.NosListBox:tinymce.ui.ListBox",{NosListBox:function(g,f,e){this.parent(g,f,e)},renderMenu:function(){var f=this,e;e=f.settings.control_manager.createDropMenu(f.id+"_menu",{menu_line:1,"class":f.classPrefix+"Menu",max_width:150,max_height:150});e.onHideMenu.add(function(){f.hideMenu();f.focus()});e.add({title:f.settings.title,"class":"mceMenuItemTitle",onclick:function(){if(f.settings.onselect("")!==false){f.select("")}}});d(f.items,function(g){if(g.value===undefined){e.add({title:g.title,role:"option","class":"mceMenuItemTitle",onclick:function(){if(f.settings.onselect("")!==false){f.select("")}}})}else{g.id=b.uniqueId();g.role="option";g.onclick=function(){if(f.settings.onselect(g.value)!==false){f.select(g.value)}};e.add(g)}});f.onRenderMenu.dispatch(f,e);f.menu=e}})})(tinymce);