(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2wnfF",title:"ImageGallery_title__13CNs",error:"ImageGallery_error__2OcOh"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__jhp78",modal:"Modal_modal__21vlh"}},16:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2a1y5",imageGalleryItem__image:"ImageGalleryItem_imageGalleryItem__image__1DB0W"}},17:function(e,t,a){e.exports={button:"Button_button__3CpzS",container:"Button_container__2uMP5"}},29:function(e,t,a){e.exports={loader:"Loader_loader__3oMws"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),s=a.n(o),c=(a(34),a(4)),l=a(5),i=a(7),u=a(6),m=a(12),h=(a(35),a(15)),d=a.n(h),g=a(1),b=document.querySelector("#modal-root"),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleCloseClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props,t=e.largeImageURL,a=e.tags;return Object(o.createPortal)(Object(g.jsx)("div",{className:d.a.overlay,onClick:this.handleCloseClick,children:Object(g.jsx)("div",{className:d.a.modal,children:Object(g.jsx)("img",{src:t,alt:a})})}),b)}}]),a}(r.Component),p=j,_=a(9),y=a.n(_),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return m.b.error("Enter a normal query!");e.props.onSubmit(e.state.query),e.setState({query:""})},e.handlEqueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:y.a.searchbar,children:Object(g.jsxs)("form",{className:y.a.searchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:y.a.searchForm__button,children:Object(g.jsx)("span",{className:y.a.searchForm__label,children:"Search images and fotos"})}),Object(g.jsx)("input",{className:y.a.searchForm__input,type:"text",name:"search",value:this.state.query,placeholder:"Search images and photos",onChange:this.handlEqueryChange})]})})}}]),a}(r.Component),O=f,v=a(19),x=a(16),w=a.n(x),I=function(e){var t=e.tags,a=e.webformatURL,r=e.largeImageURL,n=e.onClick;return Object(g.jsx)("li",{className:w.a.imageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:t,className:w.a.imageGalleryItem__image,onClick:function(){return n(t,r)}})})},S=a(17),C=a.n(S),k=function(e){var t=e.loadMore;return Object(g.jsx)("div",{className:C.a.container,children:Object(g.jsx)("button",{type:"button",className:C.a.button,onClick:t,children:"Load more"})})},q=a(28),L=a.n(q),M=a(29),F=a.n(M),N=function(){return Object(g.jsxs)("div",{children:[" ",Object(g.jsx)(L.a,{className:F.a.loader,type:"TailSpin",color:"#3f51b5",height:80,width:80}),"; loading ..."]})},G=a(18),R=a.n(G);R.a.defaults.baseURL="https://pixabay.com/api/?image_type=photo&orientation=horizontal";var U=function(e,t){var a="&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("23134758-68ab0efee1477745fc8aff6a6");return R.a.get(a)},E=a(13),D=a.n(E),T="idle",A="pending",B="resolved",K="rejected",z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,status:T},e.loadImages=function(){e.setState({status:A});var t=e.state.page;U(e.props.query,t).then((function(t){var a=t.data.hits;return e.setState((function(e){return{images:[].concat(Object(v.a)(e.images),Object(v.a)(a)),status:B}}))})).catch((function(t){return e.setState({error:t,status:K})}))},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.query!==this.props.query&&(this.setState({status:A}),this.loadImages()),t.page!==this.state.page&&(this.setState({status:A}),this.loadImages()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.images,t=this.props.onImageClick,a=this.state.status;return a===T?Object(g.jsx)("h2",{className:D.a.title,children:"Enter name image"}):a===A?Object(g.jsx)(N,{}):a===K?Object(g.jsx)("h2",{className:D.a.error,children:"ERROR"}):a===B?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:D.a.imageGallery,children:e.map((function(e){var a=e.id,r=e.tags,n=e.webformatURL,o=e.largeImageURL;return Object(g.jsx)(I,{tags:r,webformatURL:n,largeImageURL:o,onClick:t},a)}))}),Object(g.jsx)(k,{loadMore:this.loadMore})]}):void 0}}]),a}(r.Component),J=z,P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:"",showModal:!1,tags:"",largeImageURL:""},e.handleFormSubmit=function(t){e.setState({query:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t,a){e.setState({tags:t,largeImageURL:a}),e.toggleModal()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.tags,r=e.largeImageURL;return Object(g.jsxs)("div",{children:[Object(g.jsx)(O,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(J,{query:this.state.query,onImageClick:this.onImageClick}),t&&Object(g.jsx)(p,{onClose:this.toggleModal,tags:a,largeImageURL:r}),Object(g.jsx)(m.a,{autoClose:5e3})]})}}]),a}(r.Component),W=P;s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1GD99",searchForm:"Searchbar_searchForm__3w4_y",searchForm__button:"Searchbar_searchForm__button__6TM4L",searchForm__label:"Searchbar_searchForm__label__2Voyn",searchForm__input:"Searchbar_searchForm__input__3-86c"}}},[[75,1,2]]]);
//# sourceMappingURL=main.d85c3423.chunk.js.map