import css from 'dom-css';
import isArray from 'isarray';

function exists(id){
    return id !== void 0 && !!id && !!document.getElementById(id + '');
}

export function mixinCSS(proto){
    Object.assign(proto, {
        css(prop, value){
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
        stylesheet(styles, id){
            let css = document.createElement('style');
            css.type = 'text/css';

            if(id !== void 0){
                css.id = id;
            }

            if(css.styleSheet){
                css.styleSheet.cssText = styles;
            }else{
                css.appendChild(
                    document.createTextNode(styles)
                );
            }

            const onload = ()=>{
                if(exists(id)){
                    return;
                }
                document.getElementsByTagName("head")[0].appendChild(css);
                window.removeEventListener('load', onload);
            };

            window.addEventListener('load', onload);

            return css;
        },
        stylelink(fileName, id){
            let link = document.createElement("link");
            if(id !== void 0){
                link.id = id;
            }
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = fileName;

            const onload = ()=>{
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
