import css from 'dom-css';
import isArray from 'isarray';

function exists(id){
    return id !== void 0 && !!id && !!document.getElementById(id + '');
}

function mixinCSS(proto){
    Object.assign(proto, {
        css: function css$1(prop, value){
            if(value === void 0){
                if(typeof prop === 'string' || isArray(prop)){
                    return css.get(this.element, prop);
                }
                css.set(this.element, prop);
                return this;
            }
            css.set(this.element, prop, value);
            return this;
        },
        stylesheet: function stylesheet(styles, id){
            var css$$1 = document.createElement('style');
            css$$1.type = 'text/css';

            if(id !== void 0){
                css$$1.id = id;
            }

            if(css$$1.styleSheet){
                css$$1.styleSheet.cssText = styles;
            }else{
                css$$1.appendChild(
                    document.createTextNode(styles)
                );
            }

            var onload = function (){
                if(exists(id)){
                    return;
                }
                document.getElementsByTagName("head")[0].appendChild(css$$1);
                window.removeEventListener('load', onload);
            };

            window.addEventListener('load', onload);

            return css$$1;
        },
        stylelink: function stylelink(fileName, id){
            var link = document.createElement("link");
            if(id !== void 0){
                link.id = id;
            }
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = fileName;

            var onload = function (){
                if(exists(id)){
                    return;
                }
                document.getElementsByTagName("head")[0].appendChild(link);
                window.removeEventListener('load', onload);
            };

            window.addEventListener('load', onload);
        }
    });

    return proto;
}

export { mixinCSS };
//# sourceMappingURL=bundle.es.js.map
