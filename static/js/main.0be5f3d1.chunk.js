(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(62)},35:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(27),o=n.n(s);n(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(66),l=n(68),u=n(65),c=n(64),m=r.a.createContext(null),h=n(3),p=n(4),d=n(6),f=n(5),b=n(7),E=r.a.createContext(null),g=function(e){return function(t){return r.a.createElement(E.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},v=E,O=n(9),S=n(15),j=n.n(S),C=(n(42),n(44),n(63),{apiKey:"AIzaSyC6bP04YvBrK70SLjBroGnSMmwOJ42rfaU",authDomain:"question-air-test.firebaseapp.com",databaseURL:"https://question-air-test.firebaseio.com",projectId:"question-air-test",storageBucket:"question-air-test.appspot.com",messagingSenderId:'messagingSenderId: "1093848224065'}),y=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"/questionair",REACT_APP_API_KEY:"AIzaSyC6bP04YvBrK70SLjBroGnSMmwOJ42rfaU",REACT_APP_AUTH_DOMAIN:"question-air-test.firebaseapp.com",REACT_APP_DATABASE_URL:"https://question-air-test.firebaseio.com",REACT_APP_PROJECT_ID:"question-air-test",REACT_APP_STORAGE_BUCKET:"question-air-test.appspot.com",REACT_APP_MESSAGING_SENDER_ID:'messagingSenderId: "1093848224065'}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles=[]),a=Object(O.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData},n),e(a)}):n()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},this.test=function(e,n){return t.db.ref("users/".concat(e,"/tests/").concat(n))},this.tests=function(e){return t.db.ref("users/".concat(e,"/tests"))},this.image=function(e,n){return t.storage.ref("".concat(e,"/images/").concat(n))},this.images=function(e){return t.storage.ref("".concat(e,"/images"))},j.a.initializeApp(C),this.serverValue=j.a.database.ServerValue,this.emailAuthProvider=j.a.auth.EmailAuthProvider,this.auth=j.a.auth(),this.db=j.a.database(),this.storage=j.a.storage(),this.googleProvider=new j.a.auth.GoogleAuthProvider,this.facebookProvider=new j.a.auth.FacebookAuthProvider,this.twitterProvider=new j.a.auth.TwitterAuthProvider},w=function(e){var t=function(t){function n(e){var t;return Object(h.a)(this,n),(t=Object(d.a)(this,Object(f.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(b.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(m.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return g(t)},k=n(67),I=n(11),P="/",U=function(e){return function(t){var n=function(n){function a(){return Object(h.a)(this,a),Object(d.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,n),Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(m.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(I.a)(k.a,g)(n)}},A=g(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),T=(n(52),function(e){var t=e.authUser;return r.a.createElement("header",null,r.a.createElement("h1",null,"Question Air"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:P},"Home")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/student"},"Student")),(t.roles.includes("ADMIN")||t.roles.includes("INSTRUCTOR"))&&r.a.createElement("li",null,r.a.createElement(c.a,{to:"/instructor"},"Instructor")),t.roles.includes("ADMIN")&&r.a.createElement("li",null,r.a.createElement(c.a,{to:"/admin"},"Admin")),r.a.createElement("li",null,r.a.createElement(A,null)))))}),D=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Question Air"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"/signin"},"Sign In")))))},N=function(){return r.a.createElement(m.Consumer,null,function(e){return e?r.a.createElement(T,{authUser:e}):r.a.createElement(D,null)})},q=n(8),M={username:"",email:"",passwordOne:"",passwordTwo:"",requestAdmin:!1,requestInstructor:!1,error:null},R="auth/email-already-in-use",x="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",L=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,s=t.passwordOne,o=t.requestAdmin,i=t.requestInstructor,l=[];o&&l.push("admin"),i&&l.push("instructor"),n.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,requests:l})}).then(function(){return n.props.firebase.doSendEmailVerification()}).then(function(){n.setState(Object(O.a)({},M)),n.props.history.push(P)}).catch(function(e){e.code===R&&(e.message=x),n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(q.a)({},e.target.name,e.target.checked))},n.state=Object(O.a)({},M),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,s=e.passwordTwo,o=e.error,i=e.requestInstructor,l=e.requestAdmin,u=a!==s||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:s,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("label",null,"Request Admin:",r.a.createElement("input",{name:"requestAdmin",type:"checkbox",checked:l,onChange:this.onChangeCheckbox})),r.a.createElement("label",null,"Request Instructor:",r.a.createElement("input",{name:"requestInstructor",type:"checkbox",checked:i,onChange:this.onChangeCheckbox})),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),o&&r.a.createElement("p",null,o.message))}}]),t}(a.Component),W=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(c.a,{to:"/signup"},"Sign Up"))},_=Object(k.a)(g(L)),B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(_,null))},J={email:"",error:null},Q=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(O.a)({},J))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=Object(O.a)({},J),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),G=function(){return r.a.createElement("p",null,r.a.createElement(c.a,{to:"/pw-forget"},"Forgot Password?"))},F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(V,null))},V=g(Q),H={email:"",password:"",error:null},K="auth/account-exists-with-different-credential",z="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",Y=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(O.a)({},H)),n.props.history.push(P)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=Object(O.a)({},H),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,s=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),$=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===K&&(e.message=z),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),X=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===K&&(e.message=z),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===K&&(e.message=z),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ee=Object(I.a)(k.a,g)(Y),te=Object(I.a)(k.a,g)($),ne=Object(I.a)(k.a,g)(X),ae=Object(I.a)(k.a,g)(Z),re=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(ee,null),r.a.createElement(te,null),r.a.createElement(ne,null),r.a.createElement(ae,null),r.a.createElement(G,null),r.a.createElement(W,null))},se=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={users:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().on("value",function(t){e.setState({users:t.val()})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))}}]),t}(a.Component),oe=Object(I.a)(g,U(function(e){return!!e}))(se),ie={passwordOne:"",passwordTwo:"",error:null},le=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(O.a)({},ie))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=Object(O.a)({},ie),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,s=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),ue=g(le),ce=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],me=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then(function(e){return n.setState({activeSignInMethods:e,error:null})}).catch(function(e){return n.setState({error:e})})},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.state={activeSignInMethods:[],error:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSignInMethods,a=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,ce.map(function(t){var a=1===n.length,s=n.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(pe,{onlyOneLeft:a,isEnabled:s,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(he,{onlyOneLeft:a,isEnabled:s,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),a&&a.message)}}]),t}(a.Component),he=function(e){var t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,s=e.onLink,o=e.onUnlink;return n?r.a.createElement("button",{type:"button",onClick:function(){return o(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("button",{type:"button",onClick:function(){return s(a.provider)}},"Link ",a.id)},pe=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,s=e.onUnlink,o=this.state,i=o.passwordOne,l=o.passwordTwo,u=i!==l||""===i;return n?r.a.createElement("button",{type:"button",onClick:function(){return s(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:i,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:u,type:"submit"},"Link ",a.id))}}]),t}(a.Component),de=g(me),fe=Object(I.a)(U(function(e){return!!e}))(function(){return r.a.createElement(m.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(V,null),r.a.createElement(ue,null),r.a.createElement(de,{authUser:e}))})}),be=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return Object(O.a)({},n[e],{uid:e})});e.setState({users:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Enrolled Users"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(c.a,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(a.Component),Ee=g(be),ge=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.state.user.email)},n.state=Object(O.a)({loading:!1,user:null},e.location.state),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),n&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(a.Component),ve=g(ge),Oe=Object(I.a)(U(function(e){return e&&e.roles.includes("ADMIN")}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/admin/:id",component:ve}),r.a.createElement(u.a,{exact:!0,path:"/admin",component:Ee})))}),Se=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={tests:[],authUser:JSON.parse(localStorage.getItem("authUser")),loading:!1},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.tests(this.state.authUser.uid).on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return Object(O.a)({},n[e],{uid:e})});e.setState({tests:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.tests().off()}},{key:"render",value:function(){var e=this.state,t=e.tests,n=e.loading;return console.log(t),r.a.createElement("div",null,r.a.createElement("h2",null,"Available Tests"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.tid},r.a.createElement("strong",null,"Take Test ID Number: "),r.a.createElement(c.a,{to:{pathname:"".concat("/tests","/").concat(e.tid),state:{test:e}}},e.tid))})))}}]),t}(a.Component),je=g(Se),Ce=(n(54),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchUser=function(){n.props.firebase.auth.onAuthStateChanged(function(e){e&&n.setState({user:e,error:null})})},n.handleOnSubmit=function(e){e.preventDefault();var t={tid:n.state.tid,totalPoints:n.state.totalPoints,passingScore:n.state.passingScore};n.props.firebase.user(n.state.authUser.uid).child("tests").child(n.state.tid).set(t),n.setState({tid:"",totalPoints:"",passingScore:""})},n.handleChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state={authUser:JSON.parse(localStorage.getItem("authUser")),error:"",tid:"",totalPoints:"",passingScore:""},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h2",null,"Create Test Bank"),r.a.createElement("p",null,"Instructor Name: ",this.state.authUser.username),r.a.createElement("form",{id:"newTestBank",onSubmit:this.handleOnSubmit},r.a.createElement("label",null,"Test Bank ID Number"),r.a.createElement("input",{type:"number",value:this.state.testBankId,name:"tid",onChange:this.handleChange}),r.a.createElement("label",null,"Total Points"),r.a.createElement("input",{type:"number",value:this.state.totalPoints,name:"totalPoints",onChange:this.handleChange}),r.a.createElement("label",null,"Passing Score"),r.a.createElement("input",{type:"number",value:this.state.passingScore,name:"passingScore",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",name:"submit",value:"Submit"})))}}]),t}(r.a.Component)),ye=g(Ce),we=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.onRadioSelect=function(e){n.setState(Object(q.a)({},e.target.name,e.target.checked))},n.state={authUser:JSON.parse(localStorage.getItem("authUser")),uid:"",tid:"",questions:[],answersGiven:[]},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.tests(this.state.authUser.uid).on("value",function(t){e.setState({tid:t.val(),loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Host A Test"))}}]),t}(r.a.Component),ke=g(we),Ie=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){if(function(e){return e&&e.roles.includes("INSTRUCTOR")})return r.a.createElement(ke,null)}},{key:"render",value:function(){return r.a.createElement("h2",null,"Take the Test")}}]),t}(r.a.Component),Pe=g(Ie),Ue=(n(56),g(function(){return r.a.createElement("main",{id:"taketest"},r.a.createElement("h2",null,"Select A Test"),r.a.createElement("div",{className:"select-test"},r.a.createElement(je,null)))})),Ae=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser")),test:null,tid:"",questions:[],loading:!0},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.authUser;if(t.tests){var n=this.props.history.location.state.test.tid;this.setState({tid:n}),this.props.firebase.test(t.uid,this.props.history.location.state.test.tid).on("value",function(t){e.setState({test:t.val(),questions:Object.values(t.val().questions),loading:!1})})}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.authUser,n=e.tid;this.props.firebase.test(t.uid,n).off()}},{key:"render",value:function(){var e=this.state,t=e.test,n=e.tid,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Test #",n),a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Possible Points: ",this.state.test.totalPoints),r.a.createElement("li",null,"Passing Score: ",this.state.test.passingScore),r.a.createElement("li",null,"Number of Questions: ",this.state.test.questions.length-1),r.a.createElement("li",null,"Questions:",r.a.createElement("ul",null,this.state.questions.map(function(e){return console.log(e),r.a.createElement("li",{key:e.questionNum},"#",e.questionNum,"\xa0",r.a.createElement("p",null,e.reference1,r.a.createElement("br",null),e.reference2),e.question,r.a.createElement("ol",null,e.options.map(function(e){return r.a.createElement("li",{key:e},e)})),"Answer: ",e.answer)}))))))}}]),t}(r.a.Component),Te=g(Ae),De=Object(I.a)(U(function(e){return e&&e.roles.includes("ADMIN")||e.roles.includes("INSTRUCTOR")}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Instructor"),r.a.createElement("p",null,"The Instructor Page is accessible by every signed in Instructor user."),r.a.createElement(c.a,{to:"/tests/create"},"Create Test Bank"),r.a.createElement("br",null),r.a.createElement(c.a,{to:"/tests/new_question"},"New Question"),r.a.createElement("br",null),r.a.createElement(c.a,{to:"/tests/host/:id"},"Host Test"),r.a.createElement(je,null))}),Ne=Object(I.a)(U(function(e){return e&&e.roles.includes("ADMIN")||e.roles.includes("INSTRUCTOR")||e.roles.includes("STUDENT")}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Student"),r.a.createElement("p",null,"The Student Page is accessible by every signed in user."),r.a.createElement("h3",null,"What you can do"),r.a.createElement("ol",null,r.a.createElement("li",null,"Take a Quiz"),r.a.createElement("li",null,"See Your Results")))}),qe=(n(58),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchUser=function(){n.props.firebase.auth.onAuthStateChanged(function(e){e&&n.setState({user:e,error:null})})},n.handleOnSubmit=function(e){e.preventDefault(),n.state.op1&&n.state.options.push(n.state.op1),n.state.op2&&n.state.options.push(n.state.op2),n.state.op3&&n.state.options.push(n.state.op3),n.state.op4&&n.state.options.push(n.state.op4),n.state.op5&&n.state.options.push(n.state.op5),n.state.op6&&n.state.options.push(n.state.op6),n.state.op7&&n.state.options.push(n.state.op7),n.state.op8&&n.state.options.push(n.state.op8),n.state.op9&&n.state.options.push(n.state.op9),n.state.op10&&n.state.options.push(n.state.op10);var t=e.target.uploadImage.files[0],a=t.name;n.props.firebase.image(n.state.user.uid,a).put(t).then(function(e){console.log(e)});var r={reference1:n.state.reference1,reference2:n.state.reference2,question:n.state.question,questionNum:n.state.questionNum,options:n.state.options,answer:n.state.answer,image:n.state.image};n.props.firebase.user(n.state.user.uid).child("tests").child(n.state.tid).child("questions/").child(n.state.questionNum).set(r),n.setState({reference1:"",reference2:"",question:"",questionNum:"",op1:"",op2:"",op3:"",op4:"",op5:"",op6:"",op7:"",op8:"",op9:"",op10:"",answer:"",options:[],image:""})},n.handleChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state={tid:"",reference1:"",reference2:"",question:"",questionNum:"",op1:"",op2:"",op3:"",op4:"",op5:"",op6:"",op7:"",op8:"",op9:"",op10:"",options:[],answer:"",user:"",image:""},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h2",null,"Create Questions"),r.a.createElement("form",{id:"newQuestion",onSubmit:this.handleOnSubmit},r.a.createElement("label",null,"Test Bank ID Number"),r.a.createElement("input",{type:"number",value:this.state.testBankId,name:"tid",onChange:this.handleChange}),r.a.createElement("label",null,"Reference 1"),r.a.createElement("input",{type:"text",value:this.state.reference1,name:"reference1",onChange:this.handleChange}),r.a.createElement("label",null,"Reference 2"),r.a.createElement("input",{type:"text",value:this.state.reference2,name:"reference2",onChange:this.handleChange}),r.a.createElement("fieldset",{form:"newQuestion"},r.a.createElement("legend",null,"Question"),r.a.createElement("label",null,"Question Number and Content"),r.a.createElement("input",{type:"number",value:this.state.questionNum,name:"questionNum",onChange:this.handleChange}),r.a.createElement("input",{type:"text",value:this.state.question,name:"question",onChange:this.handleChange}),r.a.createElement("input",{accept:".jpg,.png",type:"file",id:"uploadImage",name:"image",onChange:this.handleChange}),r.a.createElement("fieldset",{form:"newQuestion"},r.a.createElement("legend",null,"Options"),r.a.createElement("label",null,"Option 1"),r.a.createElement("input",{type:"text",value:this.state.op1,name:"op1",onChange:this.handleChange}),r.a.createElement("label",null,"Option 2"),r.a.createElement("input",{type:"text",value:this.state.op2,name:"op2",onChange:this.handleChange}),r.a.createElement("label",null,"Option 3"),r.a.createElement("input",{type:"text",value:this.state.op3,name:"op3",onChange:this.handleChange}),r.a.createElement("label",null,"Option 4"),r.a.createElement("input",{type:"text",value:this.state.op4,name:"op4",onChange:this.handleChange}),r.a.createElement("label",null,"Option 5"),r.a.createElement("input",{type:"text",value:this.state.op5,name:"op5",onChange:this.handleChange}),r.a.createElement("label",null,"Option 6"),r.a.createElement("input",{type:"text",value:this.state.op6,name:"op6",onChange:this.handleChange}),r.a.createElement("label",null,"Option 7"),r.a.createElement("input",{type:"text",value:this.state.op7,name:"op7",onChange:this.handleChange}),r.a.createElement("label",null,"Option 8"),r.a.createElement("input",{type:"text",value:this.state.op8,name:"op8",onChange:this.handleChange}),r.a.createElement("label",null,"Option 9"),r.a.createElement("input",{type:"text",value:this.state.op9,name:"op9",onChange:this.handleChange}),r.a.createElement("label",null,"Option 10"),r.a.createElement("input",{type:"text",value:this.state.op10,name:"op10",onChange:this.handleChange})),r.a.createElement("label",null,"Correct Answer"),r.a.createElement("input",{type:"number",value:this.state.answer,name:"answer",onChange:this.handleChange,min:"1",max:"10"})),r.a.createElement("input",{type:"submit",name:"submit",value:"Submit"})))}}]),t}(r.a.Component)),Me=g(qe),Re=(n(60),w(function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:P,component:oe}),r.a.createElement(u.a,{path:"/signup",component:B}),r.a.createElement(u.a,{path:"/signin",component:re}),r.a.createElement(u.a,{path:"/pw-forget",component:F}),r.a.createElement(u.a,{path:"/account",component:fe}),r.a.createElement(u.a,{path:"/admin",component:Oe}),r.a.createElement(u.a,{path:"/instructor",component:De}),r.a.createElement(u.a,{path:"/student",component:Ne}),r.a.createElement(u.a,{path:"/tests/create",component:ye}),r.a.createElement(u.a,{path:"/tests/new_question",component:Me}),r.a.createElement(u.a,{path:"/tests/select/",component:Ue}),r.a.createElement(u.a,{path:"/tests",component:Te}),r.a.createElement(u.a,{path:"/tests/host/:id",component:ke}),r.a.createElement(u.a,{path:"/tests/take/:id",component:Pe}))))}));o.a.render(r.a.createElement(v.Provider,{value:new y},r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.0be5f3d1.chunk.js.map