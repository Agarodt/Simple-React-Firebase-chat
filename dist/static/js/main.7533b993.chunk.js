(this["webpackJsonpchat-test-2906"]=this["webpackJsonpchat-test-2906"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),i=n(16),a=n.n(i),s=(n(23),n(11)),o=(n(24),n(10)),u=o.a.initializeApp({apiKey:"AIzaSyAm8Ijz9J8gvQClXTm7Vo5ARP8S9GXdvvI",authDomain:"chat2906-9557b.firebaseapp.com",projectId:"chat2906-9557b",storageBucket:"chat2906-9557b.appspot.com",messagingSenderId:"142966766297",appId:"1:142966766297:web:9edf6e66306d0e918f9cc8"}).firestore(),d=o.a.auth(),j=n(14),p=n.n(j),b=n(17),l=n(4);var h=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];function i(){return(i=Object(b.a)(p.a.mark((function e(t){var c,i,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=d.currentUser,i=c.uid,a=c.photoURL,e.next=4,u.collection("messages").add({text:n,photoURL:a,uid:i,createdAt:o.a.firestore.FieldValue.serverTimestamp()});case 4:r("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{placeholder:"your message",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("button",{onClick:function(e){return i.apply(this,arguments)},children:"Send"})]})})};var v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return d.signOut()},children:"Sign Out"})})};var O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){u.collection("messages").orderBy("createdAt").limit(50).onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)("div",{children:n.map((function(e){var t=e.id,n=e.text,c=e.photoURL,r=e.uid;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"msg ".concat(r===d.currentUser.uid?"sent":"received"),children:[Object(l.jsx)("img",{src:c,alt:""}),Object(l.jsx)("p",{children:n})]},t)})}))}),Object(l.jsx)(h,{})]})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){var e=new o.a.auth.GoogleAuthProvider;d.signInWithPopup(e)},children:"Sign In"})})},x=n(18),m={app:{textAlign:"center"}};var g=function(){var e=Object(x.a)(d),t=Object(s.a)(e,1)[0];return Object(l.jsx)("div",{style:m.app,children:t?Object(l.jsx)(O,{}):Object(l.jsx)(f,{})})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7533b993.chunk.js.map