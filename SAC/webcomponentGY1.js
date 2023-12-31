(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Hello GY bbb</h1>
    `;

    customElements.define('custom-buttongy', class HelloWorld1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			this._tagContainer;
    			this._tagType = "h1";
    			this._tagText = "Hello World bbbb";
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            this.redraw();
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */

        redraw(){
		if (this._tagText != null){
       			 if (this._tagContainer){
            			this._tagContainer.parentNode.removeChild(this._tagContainer);
        		}
        	var shadow = window.getSelection(this._shadowRoot);
        	this._tagContainer = document.createElement(this._tagType);
        	var theText = document.createTextNode(this._tagText);    
        	this._tagContainer.appendChild(theText); 
        	this._shadowRoot.appendChild(this._tagContainer);
    }
	}
    });
})();
