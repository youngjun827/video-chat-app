(this["webpackJsonpdiscord-frontend"]=this["webpackJsonpdiscord-frontend"]||[]).push([[0],{176:function(e,t,n){},226:function(e,t){},228:function(e,t){},236:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),i=n.n(c),o=(n(176),n(61)),s=n(19),l=n(4),u=n(9),d=n(302),j=n(283),b=n(1),h=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#67063c"}),O=function(e){return Object(b.jsx)(h,{children:Object(b.jsx)(d.a,{sx:{width:700,height:400,bgcolor:"#1B1B1B",borderRadius:"5px",boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",display:"flex",flexDirection:"column",padding:"25px"},children:e.children})})},p=n(301),f=function(e){var t=e.label,n=e.additionalStyles,r=e.disabled,a=e.onClick;return Object(b.jsx)(p.a,{variant:"contained",sx:{bgcolor:"#67063c",color:"#FFFFFF",textTransform:"none",fontSize:"16px",fontWeight:500,width:"100%",height:"40px"},style:n||{},disabled:r,onClick:a,children:t})},x=n(246),m=Object(j.a)("span")({color:"#e910a7",fontWeight:500,cursor:"pointer"}),v=function(e){var t=e.text,n=e.redirectText,r=e.additionalStyles,a=e.redirectHandler;return Object(b.jsxs)(x.a,{sx:{color:"#72767d"},style:r||{},variant:"subtitle2",children:[t,Object(b.jsx)(m,{onClick:a,children:n})]})},g=n(294),S=function(e){var t=e.handleLogin,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{title:n?"Press to log in!":"Enter correct e-mail address and password should contains between 6 and 12 characters",children:Object(b.jsx)("div",{children:Object(b.jsx)(f,{label:"Log in",additionalStyles:{marginTop:"30px",backgroundColor:"#67063c"},disabled:!n,onClick:t})})}),Object(b.jsx)(v,{text:"Need an account? ",redirectText:"Create an account",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/register")}})]})},y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{variant:"h5",sx:{color:"#FFFFFF"},children:"Welcome Back!"}),Object(b.jsx)(x.a,{sx:{color:"#E1E1E1"},children:"We are happy that you are with us!"})]})},w=Object(j.a)("div")({display:"flex",justifyContent:"center",flexDirection:"column",width:"100%"}),E=Object(j.a)("p")({color:"#E1E1E1",textTransform:"uppercase",fontWeight:"600",fontSize:"16px"}),C=Object(j.a)("input")({flexGrow:1,height:"40px",border:"1px solid black",borderRadius:"5px",color:"#E1E1E1",background:"#141414",margin:0,fontSize:"16px",padding:"0 5px"}),I=function(e){var t=e.value,n=e.setValue,r=e.label,a=e.type,c=e.placeholder;return Object(b.jsxs)(w,{children:[Object(b.jsx)(E,{children:r}),Object(b.jsx)(C,{value:t,onChange:function(e){n(e.target.value)},type:a,placeholder:c})]})},k=function(e){var t=e.mail,n=e.setMail,r=e.password,a=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{value:t,setValue:n,label:"E-mail",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(I,{value:r,setValue:a,label:"Password",type:"password",placeholder:"Enter password"})]})},T=function(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)},R=function(e){return e.length>5&&e.length<13},D=function(e){return e.length>2&&e.length<13},A=n(16),F=n(17),_=n(29),U=n(135),M=function(){localStorage.clear(),window.location.pathname="/login"},L=n.n(U).a.create({baseURL:"https://youngjun-video-chat-app.herokuapp.com/api"});L.interceptors.request.use((function(e){var t=localStorage.getItem("user");if(t){var n=JSON.parse(t).token;e.headers.Authorization="Bearer ".concat(n)}return e}),(function(e){return Promise.reject(e)}));var N=function(){var e=Object(_.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/auth/login",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(_.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/auth/register",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(_.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/invite",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),H(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(_.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/accept",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),H(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(_.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/reject",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),H(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t,n=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status;n&&(401===n||403===n)&&M()},G={OPEN_ALERT_MESSAGE:"ALERT.OPEN_ALERT_MESSAGE",CLOSE_ALERT_MESSAGE:"ALERT.CLOSE_ALERT_MESSAGE"},J=function(e){return{type:G.OPEN_ALERT_MESSAGE,content:e}},V=function(){return{type:G.CLOSE_ALERT_MESSAGE}},Y=G,Z="AUTH.SET_USER_DETAILS",$=function(e){return{login:function(t,n){return e(K(t,n))},register:function(t,n){return e(Q(t,n))},setUserDetails:function(t){return e(q(t))}}},q=function(e){return{type:Z,userDetails:e}},K=function(e,t){return function(){var n=Object(_.a)(Object(F.a)().mark((function n(r){var a,c,i,o,s;return Object(F.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(e);case 2:a=n.sent,console.log(a),a.error?r(J(null===a||void 0===a||null===(c=a.exception)||void 0===c||null===(i=c.response)||void 0===i?void 0:i.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(q(s)),t.push("/dashboard"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(_.a)(Object(F.a)().mark((function n(r){var a,c,i,o,s;return Object(F.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W(e);case 2:a=n.sent,console.log(a),a.error?r(J(null===a||void 0===a||null===(c=a.exception)||void 0===c||null===(i=c.response)||void 0===i?void 0:i.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(q(s)),t.push("/dashboard"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},X=Object(A.b)(null,(function(e){return Object(l.a)({},$(e))}))((function(e){var t=e.login,n=Object(s.g)(),a=Object(r.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],p=Object(r.useState)(!1),f=Object(u.a)(p,2),x=f[0],m=f[1];Object(r.useEffect)((function(){m(function(e){var t=e.mail,n=e.password,r=T(t),a=R(n);return r&&a}({mail:i,password:j}))}),[i,j,m]);return Object(b.jsxs)(O,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(k,{mail:i,setMail:o,password:j,setPassword:h}),Object(b.jsx)(S,{isFormValid:x,handleLogin:function(){t({mail:i,password:j},n)}})]})})),ee=function(e){var t=e.mail,n=e.setMail,r=e.username,a=e.setUsername,c=e.password,i=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{value:t,setValue:n,label:"E-mail address",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(I,{value:r,setValue:a,label:"Username",type:"text",placeholder:"Enter a username"}),Object(b.jsx)(I,{value:c,setValue:i,label:"Password",type:"password",placeholder:"Enter password"})]})},te=function(e){var t=e.handleRegister,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{title:n?"Press to register!":"Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided",children:Object(b.jsx)("div",{children:Object(b.jsx)(f,{label:"Register",additionalStyles:{marginTop:"30px"},disabled:!n,onClick:t})})}),Object(b.jsx)(v,{text:"",redirectText:"Already have an account ?",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/login")}})]})},ne=Object(A.b)(null,(function(e){return Object(l.a)({},$(e))}))((function(e){var t=e.register,n=Object(s.g)(),a=Object(r.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],p=Object(r.useState)(""),f=Object(u.a)(p,2),m=f[0],v=f[1],g=Object(r.useState)(!1),S=Object(u.a)(g,2),y=S[0],w=S[1];return Object(r.useEffect)((function(){w(function(e){var t=e.mail,n=e.password,r=e.username;return T(t)&&R(n)&&D(r)}({mail:i,username:j,password:m}))}),[i,j,m,w]),Object(b.jsxs)(O,{children:[Object(b.jsx)(x.a,{variant:"h5",sx:{color:"white "},children:"Create an account"}),Object(b.jsx)(ee,{mail:i,setMail:o,username:j,setUsername:h,password:m,setPassword:v}),Object(b.jsx)(te,{handleRegister:function(){t({mail:i,password:m,username:j},n)},isFormValid:y})]})})),re=n.p+"static/media/JOO_white.fdb1b01c.png",ae=function(){return Object(b.jsx)(p.a,{style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#67063c"},children:Object(b.jsx)("img",{src:re,style:{width:"35px"}})})},ce=n(140),ie=n.n(ce),oe=n(136),se=n(78),le=n(137),ue={userDetails:null},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return t.type===Z?Object(l.a)(Object(l.a)({},e),{},{userDetails:t.userDetails}):e},je={showAlertMessage:!1,alertMessageContent:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.OPEN_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!0,alertMessageContent:t.content});case Y.CLOSE_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!1,alertMessageContent:null});default:return e}},he="FRIENDS.SET_FRIENDS",Oe="FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",pe="FRIENDS.SET_ONLINE_USERS",fe=function(e){return{sendFriendInvitation:function(t,n){return e(xe(t,n))},acceptFriendInvitation:function(t){return e(me(t))},rejectFriendInvitation:function(t){return e(ve(t))}}},xe=function(e,t){return function(){var n=Object(_.a)(Object(F.a)().mark((function n(r){var a,c,i;return Object(F.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e);case 2:(a=n.sent).error?r(J(null===(c=a.exception)||void 0===c||null===(i=c.response)||void 0===i?void 0:i.data)):(r(J("Invitation has been sent!")),t());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(_.a)(Object(F.a)().mark((function t(n){var r,a,c;return Object(F.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:(r=t.sent).error?n(J(null===(a=r.exception)||void 0===a||null===(c=a.response)||void 0===c?void 0:c.data)):n(J("Invitation accepted!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ve=function(e){return function(){var t=Object(_.a)(Object(F.a)().mark((function t(n){var r,a,c;return Object(F.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:(r=t.sent).error?n(J(null===(a=r.exception)||void 0===a||null===(c=a.response)||void 0===c?void 0:c.data)):n(J("Invitation rejected!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge={friends:[],pendingFriendsInvitations:[],onlineUsers:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(l.a)(Object(l.a)({},e),{},{pendingFriendsInvitations:t.pendingFriendsInvitations});case he:return Object(l.a)(Object(l.a)({},e),{},{friends:t.friends});case pe:return Object(l.a)(Object(l.a)({},e),{},{onlineUsers:t.onlineUsers});default:return e}},ye="DIRECT",we="CHAT.SET_CHOSEN_CHAT_DETAILS",Ee="CHAT.SET_MESSAGES",Ce=function(e,t){return{type:we,chatType:t,chatDetails:e}},Ie={chosenChatDetails:null,chatType:null,messages:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(l.a)(Object(l.a)({},e),{},{chosenChatDetails:t.chatDetails,chatType:t.chatType,messages:[]});case Ee:return Object(l.a)(Object(l.a)({},e),{},{messages:t.messages});default:return e}},Te="ROOM.OPEN_ROOM",Re="ROOM.SET_ROOM_DETAILS",De="ROOM.SET_ACTIVE_ROOMS",Ae="ROOM.SET_LOCAL_STREAM",Fe="ROOM.SET_REMOTE_STREAMS",_e="ROOM.SET_AUDIO_ONLY",Ue="ROOM.SET_SCREEN_SHARE_STREAM",Me="ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO",Le=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:Te,isUserRoomCreator:e,isUserInRoom:t}},Ne=function(e){return{setAudioOnly:function(t){return e(ze(t))},setScreenSharingStream:function(t){e(He(t))}}},We=function(e){return{type:Re,roomDetails:e}},Pe=function(e){return{type:Ae,localStream:e}},ze=function(e){return{type:_e,audioOnly:e}},Be=function(e){return{type:Fe,remoteStreams:e}},He=function(e){return{type:Ue,isScreenSharingActive:!!e,screenSharingStream:e||null}},Ge=function(e){return{type:Me,isUserJoinedWithOnlyAudio:e}},Je={isUserInRoom:!1,isUserRoomCreator:!1,roomDetails:null,activeRooms:[],localStream:null,remoteStreams:[],audioOnly:!1,screenSharingStream:null,isScreenSharingActive:!1,isUserJoinedWithOnlyAudio:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(l.a)(Object(l.a)({},e),{},{isUserInRoom:t.isUserInRoom,isUserRoomCreator:t.isUserRoomCreator});case Re:return Object(l.a)(Object(l.a)({},e),{},{roomDetails:t.roomDetails});case De:return Object(l.a)(Object(l.a)({},e),{},{activeRooms:t.activeRooms});case Ae:return Object(l.a)(Object(l.a)({},e),{},{localStream:t.localStream});case _e:return Object(l.a)(Object(l.a)({},e),{},{audioOnly:t.audioOnly});case Fe:return Object(l.a)(Object(l.a)({},e),{},{remoteStreams:t.remoteStreams});case Ue:return Object(l.a)(Object(l.a)({},e),{},{screenSharingStream:t.screenSharingStream,isScreenSharingActive:t.isScreenSharingActive});case Me:return Object(l.a)(Object(l.a)({},e),{},{isUserJoinedWithOnlyAudio:t.isUserJoinedWithOnlyAudio});default:return e}},Ye=Object(se.combineReducers)({auth:de,alert:be,friends:Se,chat:ke,room:Ve}),Ze=Object(se.createStore)(Ye,Object(oe.composeWithDevTools)(Object(se.applyMiddleware)(le.a))),$e=n(154),qe=function(e){var t=e.participants,n=e.usersInCoversation,r=e.messages;t.every((function(e){return n.includes(e)}))&&Ze.dispatch(function(e){return{type:Ee,messages:e}}(r))},Ke=n(28),Qe=n(139),Xe=n.n(Qe),et={audio:!0,video:!1},tt={video:!0,audio:!0},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=e?et:tt;navigator.mediaDevices.getUserMedia(n).then((function(e){Ze.dispatch(Pe(e)),t()})).catch((function(e){console.log(e),console.log("Cannot get an access to local stream")}))},rt={},at=function(e,t){var n=Ze.getState().room.localStream;t?console.log("preparing new peer connection as initiator"):console.log("preparing new peer connection as not initiator"),rt[e]=new Xe.a({initiator:t,config:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),stream:n}),rt[e].on("signal",(function(t){lt({signal:t,connUserSocketId:e})})),rt[e].on("stream",(function(t){console.log("remote stream came from other user"),console.log("direct connection has been established"),t.connUserSocketId=e,ct(t)}))},ct=function(e){var t=Ze.getState().room.remoteStreams,n=[].concat(Object(Ke.a)(t),[e]);Ze.dispatch(Be(n))},it=function(e){for(var t in rt)for(var n in rt[t].streams[0].getTracks())for(var r in e.getTracks())if(rt[t].streams[0].getTracks()[n].kind===e.getTracks()[r].kind){rt[t].replaceTrack(rt[t].streams[0].getTracks()[n],e.getTracks()[r],rt[t].streams[0]);break}},ot=null,st=function(e){var t=e.token;(ot=Object($e.a)("https://youngjun-video-chat-app.herokuapp.com/",{auth:{token:t}})).on("connect",(function(){console.log("succesfully connected with socket.io server"),console.log(ot.id)})),ot.on("friends-invitations",(function(e){var t=e.pendingInvitations;Ze.dispatch({type:Oe,pendingFriendsInvitations:t})})),ot.on("friends-list",(function(e){var t=e.friends;Ze.dispatch(function(e){return{type:he,friends:e}}(t))})),ot.on("online-users",(function(e){var t=e.onlineUsers;Ze.dispatch(function(e){return{type:pe,onlineUsers:e}}(t))})),ot.on("direct-chat-history",(function(e){console.log(e),function(e){var t,n=e.participants,r=e.messages,a=null===(t=Ze.getState().chat.chosenChatDetails)||void 0===t?void 0:t.id,c=Ze.getState().auth.userDetails._id;a&&c&&qe({participants:n,usersInCoversation:[a,c],messages:r})}(e)})),ot.on("room-create",(function(e){dt(e)})),ot.on("active-rooms",(function(e){jt(e)})),ot.on("conn-prepare",(function(e){var t=e.connUserSocketId;at(t,!1),ot.emit("conn-init",{connUserSocketId:t})})),ot.on("conn-init",(function(e){var t=e.connUserSocketId;at(t,!0)})),ot.on("conn-signal",(function(e){!function(e){var t=e.connUserSocketId,n=e.signal;rt[t]&&rt[t].signal(n)}(e)})),ot.on("room-participant-left",(function(e){console.log("user left room"),function(e){var t=e.connUserSocketId;rt[t]&&(rt[t].destroy(),delete rt[t]);var n=Ze.getState().room.remoteStreams.filter((function(e){return e.connUserSocketId!==t}));Ze.dispatch(Be(n))}(e)}))},lt=function(e){ot.emit("conn-signal",e)},ut=function(){var e=Ze.getState().room.audioOnly;nt(e,(function(){Ze.dispatch(Le(!0,!0));var e=Ze.getState().room.audioOnly;Ze.dispatch(Ge(e)),ot.emit("room-create")}))},dt=function(e){var t=e.roomDetails;Ze.dispatch(We(t))},jt=function(e){var t,n=e.activeRooms,r=Ze.getState().friends.friends,a=[],c=null===(t=Ze.getState().auth.userDetails)||void 0===t?void 0:t._id;n.forEach((function(e){e.roomCreator.userId===c?a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:"Me"})):r.forEach((function(t){t.id===e.roomCreator.userId&&a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:t.username}))}))})),Ze.dispatch(function(e){return{type:De,activeRooms:e}}(a))},bt=function(e){var t=Ze.getState().room.audioOnly;nt(t,(function(){Ze.dispatch(We({roomId:e})),Ze.dispatch(Le(!1,!0));var t,n=Ze.getState().room.audioOnly;Ze.dispatch(Ge(n)),t={roomId:e},ot.emit("room-join",t)}))},ht=function(){var e=Ze.getState().room.roomDetails.roomId,t=Ze.getState().room.localStream;t&&(t.getTracks().forEach((function(e){return e.stop()})),Ze.dispatch(Pe(null)));var n,r=Ze.getState().room.screenSharingStream;r&&(r.getTracks().forEach((function(e){return e.stop()})),Ze.dispatch(He(null))),Ze.dispatch(Be([])),Object.entries(rt).forEach((function(e){var t=e[0];rt[t]&&(rt[t].destroy(),delete rt[t])})),n={roomId:e},ot.emit("room-leave",n),Ze.dispatch(We(null)),Ze.dispatch(Le(!1,!1))},Ot=function(e){var t=e.isUserInRoom;return Object(b.jsx)(p.a,{disabled:t,onClick:function(){ut()},style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#67063c"},children:Object(b.jsx)(ie.a,{})})},pt=Object(j.a)("div")({height:"42px",width:"42px",backgroundColor:"#67063c",borderRadius:"42px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700",color:"white"}),ft=function(e){var t=e.username,n=e.large;return Object(b.jsx)(pt,{style:n?{height:"80px",width:"80px"}:{},children:t.substring(0,2)})},xt=function(e){var t=e.creatorUsername,n=e.roomId,r=e.amountOfParticipants,a=e.isUserInRoom,c=r>3,i="Cretor: ".concat(t,". Connected: ").concat(r);return Object(b.jsx)(g.a,{title:i,children:Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#67063c"},disabled:c||a,onClick:function(){r<4&&bt(n)},children:Object(b.jsx)(ft,{username:t})})})})},mt=Object(j.a)("div")({width:"72px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#000000"}),vt=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.activeRooms,n=e.isUserInRoom;return Object(b.jsxs)(mt,{children:[Object(b.jsx)(ae,{}),Object(b.jsx)(Ot,{stlye:{backgroundColor:"#67063c"},isUserInRoom:n}),t.map((function(e){return Object(b.jsx)(xt,{roomId:e.roomId,creatorUsername:e.creatorUsername,amountOfParticipants:e.participants.length,isUserInRoom:n,style:{backgroundColor:"#5865f2"}},e.roomId)}))]})})),gt=n(303),St=n(293),yt=n(308),wt=n(306),Et=n(307),Ct=Object(A.b)(null,(function(e){return Object(l.a)({},fe(e))}))((function(e){var t=e.isDialogOpen,n=e.closeDialogHandler,a=e.sendFriendInvitation,c=void 0===a?function(){}:a,i=Object(r.useState)(""),o=Object(u.a)(i,2),s=o[0],l=o[1],d=Object(r.useState)(""),j=Object(u.a)(d,2),h=j[0],O=j[1],p=function(){n(),l("")};return Object(r.useEffect)((function(){O(T(s))}),[s,O]),Object(b.jsx)("div",{children:Object(b.jsxs)(gt.a,{open:t,onClose:p,children:[Object(b.jsx)(St.a,{children:Object(b.jsx)(x.a,{children:"Invite a Friend"})}),Object(b.jsxs)(wt.a,{children:[Object(b.jsx)(Et.a,{children:Object(b.jsx)(x.a,{children:"Enter e-mail address of friend which you would like to invite"})}),Object(b.jsx)(I,{label:"Mail",type:"text",value:s,setValue:l,placeholder:"Enter mail address"})]}),Object(b.jsx)(yt.a,{children:Object(b.jsx)(f,{onClick:function(){c({targetMailAddress:s},p)},disabled:!h,label:"Send",additionalStyles:{marginLeft:"15px",marginRight:"15px",marginBottom:"10px"}})})]})})})),It={marginTop:"10px",marginLeft:"5px",width:"80%",height:"30px",background:"#3ba55d"},kt=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{additionalStyles:It,label:"Add Friend",onClick:function(){a(!0)}}),Object(b.jsx)(Ct,{isDialogOpen:n,closeDialogHandler:function(){a(!1)}})]})},Tt=function(e){var t=e.title;return Object(b.jsx)(x.a,{sx:{textTransform:"uppercase",color:"#E1E1E1",fontSize:"14px",marginTop:"10px"},children:t})},Rt=n(141),Dt=n.n(Rt),At=function(){return Object(b.jsx)(d.a,{sx:{color:"#3ba55d",display:"flex",alignItems:"center",position:"absolute",right:"5px"},children:Object(b.jsx)(Dt.a,{})})},Ft=Object(A.b)(null,(function(e){return Object(l.a)({},function(e){return{setChosenChatDetails:function(t,n){return e(Ce(t,n))}}}(e))}))((function(e){var t=e.id,n=e.username,r=e.isOnline,a=e.setChosenChatDetails;return Object(b.jsxs)(p.a,{onClick:function(){a({id:t,name:n},ye)},style:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"flex-start",textTransform:"none",color:"#F3F3F3",position:"relative"},children:[Object(b.jsx)(ft,{username:n}),Object(b.jsx)(x.a,{style:{marginLeft:"7px",fontWeight:700,color:"#E1E1E1"},variant:"subtitle1",align:"left",children:n}),r&&Object(b.jsx)(At,{})]})})),_t=Object(j.a)("div")({flexGrow:1,width:"100%"}),Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){var n=t.find((function(t){return t.userId===e.id}));e.isOnline=!!n})),e},Mt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.friends,n=e.onlineUsers;return Object(b.jsx)(_t,{children:Ut(t,n).map((function(e){return Object(b.jsx)(Ft,{username:e.username,id:e.id,isOnline:e.isOnline},e.id)}))})})),Lt=n(142),Nt=n.n(Lt),Wt=n(143),Pt=n.n(Wt),zt=n(309),Bt=function(e){var t=e.disabled,n=e.acceptInvitationHandler,r=e.rejectInvitationHandler;return Object(b.jsxs)(d.a,{sx:{display:"flex"},children:[Object(b.jsx)(zt.a,{style:{color:"white"},disabled:t,onClick:n,children:Object(b.jsx)(Nt.a,{})}),Object(b.jsx)(zt.a,{style:{color:"white"},disabled:t,onClick:r,children:Object(b.jsx)(Pt.a,{})})]})},Ht=Object(A.b)(null,(function(e){return Object(l.a)({},fe(e))}))((function(e){var t=e.id,n=e.username,a=e.mail,c=e.acceptFriendInvitation,i=void 0===c?function(){}:c,o=e.rejectFriendInvitation,s=void 0===o?function(){}:o,l=Object(r.useState)(!1),j=Object(u.a)(l,2),h=j[0],O=j[1];return Object(b.jsx)(g.a,{title:a,children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsxs)(d.a,{sx:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(b.jsx)(ft,{username:n}),Object(b.jsx)(x.a,{sx:{marginLeft:"7px",fontWeight:700,color:"#8e9297",flexGrow:1},variant:"subtitle1",children:n}),Object(b.jsx)(Bt,{disabled:h,acceptInvitationHandler:function(){console.log(t),i({id:t}),O(!0)},rejectInvitationHandler:function(){console.log(t),s({id:t}),O(!0)}})]})})})})),Gt=Object(j.a)("div")({width:"100%",height:"22%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"auto"}),Jt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.pendingFriendsInvitations;return Object(b.jsx)(Gt,{children:t.map((function(e){return Object(b.jsx)(Ht,{id:e._id,username:e.senderId.username,mail:e.senderId.mail},e._id)}))})})),Vt=Object(j.a)("div")({width:"224px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#141414"}),Yt=function(){return Object(b.jsxs)(Vt,{children:[Object(b.jsx)(kt,{}),Object(b.jsx)(Tt,{title:"Private Messages"}),Object(b.jsx)(Mt,{}),Object(b.jsx)(Tt,{title:"Invitations"}),Object(b.jsx)(Jt,{})]})},Zt=Object(j.a)("div")({flexGrow:1,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),$t=function(){return Object(b.jsx)(Zt,{children:Object(b.jsx)(x.a,{variant:"h6",sx:{color:"#FFFFFF"},children:"To start chatting - choose conversation"})})},qt=Object(j.a)("div")({width:"98%",display:"column",marginTop:"10px"}),Kt=function(e){var t=e.name,n=void 0===t?"":t;return Object(b.jsxs)(qt,{children:[Object(b.jsx)(ft,{large:!0,username:n}),Object(b.jsx)(x.a,{variant:"h4",sx:{fontWeight:"bold",color:"white",marginLeft:"5px",marginRight:"5px"},children:n}),Object(b.jsxs)(x.a,{sx:{color:"#b9bbbe",marginLeft:"5px",marginRight:"5px"},children:["This is the beginning of your conversation with ",n]})]})},Qt=Object(j.a)("div")({width:"97%",display:"flex",marginTop:"10px"}),Xt=Object(j.a)("div")({width:"70px"}),en=Object(j.a)("div")({display:"flex",flexDirection:"column"}),tn=Object(j.a)("div")({color:"#DCDDDE"}),nn=Object(j.a)("div")({color:"#DCDDDE",width:"97%"}),rn=Object(j.a)("span")({marginLeft:"70px"}),an=function(e){var t=e.content,n=e.sameAuthor,r=e.username,a=e.date,c=e.sameDay;return n&&c?Object(b.jsx)(nn,{children:Object(b.jsx)(rn,{children:t})}):Object(b.jsxs)(Qt,{children:[Object(b.jsx)(Xt,{children:Object(b.jsx)(ft,{username:r})}),Object(b.jsxs)(en,{children:[Object(b.jsxs)(x.a,{style:{fontSize:"16px",color:"white"},children:[r," ",Object(b.jsx)("span",{style:{fontSize:"12px",color:"#72767d"},children:a})]}),Object(b.jsx)(tn,{children:t})]})]})},cn=Object(j.a)("div")({width:"95%",backgroundColor:"#b9bbbe",height:"1px",position:"relative",marginTop:"20px",marginBottom:"10px"}),on=Object(j.a)("span")({backgroundColor:"#36393f",position:"absolute",left:"45%",top:"-10px",color:"#b9bbbe",padding:"0 5px",fontSize:"14px"}),sn=function(e){var t=e.date;return Object(b.jsx)(cn,{children:Object(b.jsx)(on,{children:t})})},ln=Object(j.a)("div")({height:"calc(100% - 60px)",overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center"}),un=function(e,t){var n={mm:e.getMonth()+1,dd:e.getDate(),yy:e.getFullYear().toString().slice(-2),yyyy:e.getFullYear()};return t.replace(/mm|dd|yy|yyy/gi,(function(e){return n[e]}))},dn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=e.messages;return Object(b.jsxs)(ln,{children:[Object(b.jsx)(Kt,{name:null===t||void 0===t?void 0:t.name}),n.map((function(e,t){var r=t>0&&n[t].author._id===n[t-1].author._id,a=t>0&&un(new Date(e.date),"dd/mm/yy")===un(new Date(n[t-1].date),"dd/mm/yy");return Object(b.jsxs)("div",{style:{width:"97%"},children:[(!a||0===t)&&Object(b.jsx)(sn,{date:un(new Date(e.date),"dd/mm/yy")}),Object(b.jsx)(an,{content:e.content,username:e.author.username,sameAuthor:r,date:un(new Date(e.date),"dd/mm/yy"),sameDay:a})]},e._id)}))]})})),jn=Object(j.a)("div")({height:"60px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),bn=Object(j.a)("input")({backgroundColor:"#2f3136",width:"98%",height:"44px",color:"white",border:"none",borderRadius:"8px",fontSize:"14px",padding:"0 10px"}),hn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],i=a[1],o=function(){var e;c.length>0&&(e={receiverUserId:t.id,content:c},console.log(e),ot.emit("direct-message",e),i(""))};return Object(b.jsx)(jn,{children:Object(b.jsx)(bn,{placeholder:"Write message to ".concat(t.name),value:c,onChange:function(e){i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&o()}})})})),On=Object(j.a)("div")({flexGrow:1}),pn=function(e){var t=e.chosenChatDetails;return Object(r.useEffect)((function(){var e;e={receiverUserId:t.id},ot.emit("direct-chat-history",e)}),[t]),Object(b.jsxs)(On,{children:[Object(b.jsx)(dn,{}),Object(b.jsx)(hn,{})]})},fn=Object(j.a)("div")({flexGrow:1,backgroundColor:"#1B1B1B",marginTop:"48px",display:"flex"}),xn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails;return Object(b.jsx)(fn,{children:t?Object(b.jsx)(pn,{chosenChatDetails:t}):Object(b.jsx)($t,{})})})),mn=n(296),vn=n(300),gn=n(144),Sn=n.n(gn),yn=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},Ne(e))}))((function(e){var t=e.audioOnly,n=e.setAudioOnly,a=r.useState(null),c=Object(u.a)(a,2),i=c[0],o=c[1],s=Boolean(i);return Object(b.jsxs)("div",{children:[Object(b.jsx)(zt.a,{onClick:function(e){o(e.currentTarget)},style:{color:"#FFFFFF"},children:Object(b.jsx)(Sn.a,{})}),Object(b.jsxs)(mn.a,{id:"basic-menu",anchorEl:i,open:s,onClose:function(){o(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(b.jsx)(vn.a,{onClick:M,style:{color:"#000000"},children:"Logout"}),Object(b.jsx)(vn.a,{onClick:function(){n(!t)},style:{color:"#000000"},children:t?"Audio Only Enabled":"Audio Only Disabled"})]})]})})),wn=Object(A.b)((function(e){var t;return{name:null===(t=e.chat.chosenChatDetails)||void 0===t?void 0:t.name}}))((function(e){var t=e.name;return Object(b.jsx)(x.a,{sx:{fontSize:"16px",color:"white",fontWeight:"bold"},children:"".concat(t?"Chosen conversation: ".concat(t):"")})})),En=Object(j.a)("div")({position:"absolute",right:"0",top:"0",height:"48px",borderBottom:"1px solid black",backgroundColor:"#1B1B1B",width:"calc(100% - 326px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 15px"}),Cn=function(){return Object(b.jsxs)(En,{children:[Object(b.jsx)(wn,{}),Object(b.jsx)(yn,{})]})},In=n(146),kn=n.n(In),Tn=n(145),Rn=n.n(Tn),Dn=Object(j.a)("div")({position:"absolute",bottom:"3px",right:"3px"}),An=function(e){var t=e.isRoomMinimized,n=e.handleRoomResize;return Object(b.jsx)(Dn,{children:Object(b.jsx)(zt.a,{style:{color:"white"},onClick:n,children:t?Object(b.jsx)(Rn.a,{}):Object(b.jsx)(kn.a,{})})})},Fn=Object(j.a)("div")({height:"50%",width:"50%",backgroundColor:"black",borderRadius:"8px"}),_n=Object(j.a)("video")({width:"100%",height:"100%"}),Un=function(e){var t=e.stream,n=e.isLocalStream,a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current;e.srcObject=t,e.onloadedmetadata=function(){e.play()}}),[t]),Object(b.jsx)(Fn,{children:Object(b.jsx)(_n,{ref:a,autoPlay:!0,muted:!!n})})},Mn=Object(j.a)("div")({height:"85%",width:"100%",display:"flex",flexWrap:"wrap"}),Ln=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.localStream,n=e.remoteStreams,r=e.screenSharingStream;return Object(b.jsxs)(Mn,{children:[Object(b.jsx)(Un,{stream:r||t,isLocalStream:!0}),n.map((function(e){return Object(b.jsx)(Un,{stream:e},e.id)}))]})})),Nn=n(147),Wn=n.n(Nn),Pn=n(148),zn=n.n(Pn),Bn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),c=a[0],i=a[1];return Object(b.jsx)(zt.a,{onClick:function(){t.getVideoTracks()[0].enabled=!c,i(!c)},style:{color:"white"},children:c?Object(b.jsx)(Wn.a,{}):Object(b.jsx)(zn.a,{})})},Hn=n(149),Gn=n.n(Hn),Jn=n(150),Vn=n.n(Jn),Yn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),c=a[0],i=a[1];return Object(b.jsx)(zt.a,{onClick:function(){t.getAudioTracks()[0].enabled=!c,i(!c)},style:{color:"white"},children:c?Object(b.jsx)(Gn.a,{}):Object(b.jsx)(Vn.a,{})})},Zn=n(151),$n=n.n(Zn),qn=function(){return Object(b.jsx)(zt.a,{onClick:function(){ht()},style:{color:"white"},children:Object(b.jsx)($n.a,{})})},Kn=n(153),Qn=n.n(Kn),Xn=n(152),er=n.n(Xn),tr={audio:!1,video:!0},nr=function(e){var t=e.localStream,n=e.screenSharingStream,r=e.setScreenSharingStream,a=e.isScreenSharingActive,c=function(){var e=Object(_.a)(Object(F.a)().mark((function e(){var c;return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=14;break}return c=null,e.prev=2,e.next=5,navigator.mediaDevices.getDisplayMedia(tr);case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error occured when trying to get an access to screen share stream");case 11:c&&(r(c),it(c)),e.next=17;break;case 14:it(t),n.getTracks().forEach((function(e){return e.stop()})),r(null);case 17:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(zt.a,{onClick:c,style:{color:"white"},children:a?Object(b.jsx)(er.a,{}):Object(b.jsx)(Qn.a,{})})},rr=Object(j.a)("div")({height:"15%",width:"100%",backgroundColor:"#67063c",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"}),ar=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},Ne(e))}))((function(e){var t=e.localStream,n=e.isUserJoinedWithOnlyAudio;return Object(b.jsxs)(rr,{children:[!n&&Object(b.jsx)(nr,Object(l.a)({},e)),Object(b.jsx)(Yn,{localStream:t}),Object(b.jsx)(qn,{}),!n&&Object(b.jsx)(Bn,{localStream:t})]})})),cr=Object(j.a)("div")({position:"absolute",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#141414"}),ir={width:"100%",height:"100vh"},or={bottom:"0px",right:"0px",width:"30%",height:"40vh"},sr=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(cr,{style:n?or:ir,children:[Object(b.jsx)(Ln,{}),Object(b.jsx)(ar,{}),Object(b.jsx)(An,{isRoomMinimized:n,handleRoomResize:function(){a(!n)}})]})},lr=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex"}),ur=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},$(e))}))((function(e){var t=e.setUserDetails,n=e.isUserInRoom;return Object(r.useEffect)((function(){var e=localStorage.getItem("user");e?(t(JSON.parse(e)),st(JSON.parse(e))):M()}),[]),Object(b.jsxs)(lr,{children:[Object(b.jsx)(vt,{}),Object(b.jsx)(Yt,{}),Object(b.jsx)(xn,{}),Object(b.jsx)(Cn,{}),n&&Object(b.jsx)(sr,{})]})})),dr=n(297),jr=n(298),br=Object(A.b)((function(e){var t=e.alert;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},function(e){return{openAlertMessage:function(t){return e(J(t))},closeAlertMessage:function(){return e(V())}}}(e))}))((function(e){var t=e.showAlertMessage,n=e.closeAlertMessage,r=e.alertMessageContent;return Object(b.jsx)(jr.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,onClose:n,autoHideDuration:6e3,children:Object(b.jsx)(dr.a,{severity:"info",children:r})})}));n(236);var hr=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,path:"/login",children:Object(b.jsx)(X,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/register",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/dashboard",children:Object(b.jsx)(ur,{})}),Object(b.jsx)(s.b,{path:"/",children:Object(b.jsx)(s.a,{to:"/dashboard"})})]})}),Object(b.jsx)(br,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(A.a,{store:Ze,children:Object(b.jsx)(hr,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.47258bf8.chunk.js.map