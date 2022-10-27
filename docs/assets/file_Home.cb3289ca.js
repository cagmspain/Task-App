import{r as v,o as n,c as d,a as s,b as _,w as C,n as x,d as O,e as h,p as I,f as w,g as U,u as S,h as T,i as D,v as Z,j,k as z,t as g,l as m,m as R,s as A,q as H,x as B,y as L,F as V,z as P,A as X}from"./file_index.2cfc4174.js";import Y from"./file_Login.8e76c695.js";import G from"./file_SignUp.9016ab8a.js";const J="/Task-App/assets/file_logo.c87265a8.png",$=(e,t)=>{const o=e.__vccOpts||e;for(const[a,i]of t)o[a]=i;return o},N=e=>(I("data-v-d9022b67"),e=e(),w(),e),q={class:"navbar container is-transparent",role:"navigation","aria-label":"main navigation"},K={class:"navbar-brand"},W=N(()=>s("img",{src:J,alt:"logo",height:"28"},null,-1)),Q=N(()=>s("span",{"aria-hidden":"true"},null,-1)),ss=N(()=>s("span",{"aria-hidden":"true"},null,-1)),ts=N(()=>s("span",{"aria-hidden":"true"},null,-1)),es=[Q,ss,ts],as={class:"navbar-start"},os={__name:"Navbar",setup(e){const t=v(!1),o=()=>{t.value=!t.value};return(a,i)=>{const c=O("router-link");return n(),d("nav",q,[s("div",K,[_(c,{class:"navbar-item",to:{name:"home"}},{default:C(()=>[W]),_:1}),s("a",{role:"button",onClick:o,class:x(["navbar-burger",{"is-active":t.value}]),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},es,2)]),s("div",{id:"navbarBasicExample",class:x(["navbar-menu",{"is-active":t.value}])},[s("div",as,[_(c,{class:"navbar-item",to:{name:"home"}},{default:C(()=>[h("Home")]),_:1}),_(c,{class:"navbar-item",to:{name:"login"}},{default:C(()=>[h("Login")]),_:1}),_(c,{class:"navbar-item",to:{name:"signup"}},{default:C(()=>[h("Sign Up")]),_:1})])],2)])}}},is=$(os,[["__scopeId","data-v-d9022b67"]]),cs="https://alptkdmtfcigtqmtzklg.supabase.co",ns="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscHRrZG10ZmNpZ3RxbXR6a2xnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3Njk4MSwiZXhwIjoxOTgxNjUyOTgxfQ.b9VfNUn07lu7tJFu-9wVbKXo--EMJ3Y29rdL3L6Srr8",F=U(cs,ns),ds=async(e,t,o)=>{const a=await F.from("task").insert({user_id:e,title:t,description:o});console.log(a)},ls=async()=>{const e=await F.from("task").select("*").order("id",{ascending:!1});return console.log(e),e.data},rs={class:"container"},_s=["onSubmit"],vs={class:"field"},us=s("label",{class:"label"},"Title",-1),ms={class:"control"},ps={class:"control"},hs=s("label",{class:"label"},"Description",-1),ks={__name:"NewTasks",emits:["close"],setup(e,{emit:t}){const o=S(),a=T(),i=v(""),c=v(""),r=a.id;a.user.email;const p=async()=>{await ds(r,c.value,i.value);const y={title:c.value,description:i.value,created_at:new Date};o.addTask(y),i.value="",c.value=""},M=()=>{t("close")};return(y,k)=>(n(),d("div",rs,[s("form",{onSubmit:j(p,["prevent"])},[s("div",vs,[us,s("div",ms,[D(s("input",{"onUpdate:modelValue":k[0]||(k[0]=f=>c.value=f),class:"input",type:"text",placeholder:"title"},null,512),[[Z,c.value]])])]),s("div",ps,[hs,D(s("textarea",{"onUpdate:modelValue":k[1]||(k[1]=f=>i.value=f),class:"textarea",placeholder:"Escribe un task"},null,512),[[Z,i.value]])]),s("div",{class:"control"},[s("button",{onClick:M,type:"submit",class:"mt-2 button is-info"}," Create! ")])],40,_s)]))}};const bs={key:0,class:"card"},fs={key:0,class:"card-flex"},gs={class:"card-header"},$s={class:"card-header-title"},ys={class:"card-content"},Cs={class:"content"},xs={class:"card-footer"},Is={key:1},ws={class:"card-header"},Ss=["v-model","placeholder"],Ts={class:"card-content"},Ns=["placeholder"],Ms={class:"card-footer"},Vs={key:1,class:"done"},Es={class:"card-header"},Ds={class:"card-header-title"},Zs={class:"card-content"},As={class:"content"},Bs={class:"card-footer"},Js={__name:"Card",props:{task:Object},setup(e){const t=e,o=v(!1),a=()=>{o.value=!o.value};T();const i=S(),c=async u=>{i.setTask(),await R(u),i.deleteTask(u)};let r=v(""),p=v(""),M=v("");const y=async u=>{r=!0,await A(u,r),i.setTask()},k=async u=>{r=!1,await A(u,r),i.setTask()},f=async u=>{await H(u,p.value,M.value),i.setTask(),a()};return(u,l)=>(z(r)?r.value=!e.task.isCreated:r=!e.task.isCreated)?(n(),d("div",bs,[o.value?(n(),d("div",Is,[s("header",ws,[s("input",{"v-model":m(p),type:"text",placeholder:t.task.title,class:"card-header-title"},null,8,Ss)]),s("div",Ts,[s("textarea",{placeholder:t.task.description},null,8,Ns)]),s("footer",Ms,[s("button",{class:"card-footer-item button",onClick:l[3]||(l[3]=b=>f(t.task.id))}," Guardar "),s("button",{class:"card-footer-item button",onClick:l[4]||(l[4]=b=>a(t.task.id))}," Cancel ")])])):(n(),d("div",fs,[s("header",gs,[s("p",$s,g(t.task.title),1)]),s("div",ys,[s("div",Cs,g(t.task.description),1)]),s("footer",xs,[s("button",{class:"card-footer-item button is-danger",onClick:l[0]||(l[0]=b=>c(t.task.id))}," Delete "),s("button",{class:"card-footer-item button",onClick:l[1]||(l[1]=b=>y(t.task.id))}," Done "),s("button",{class:"card-footer-item button",onClick:l[2]||(l[2]=b=>a(t.task.id))}," Edit ")])]))])):(n(),d("div",Vs,[s("header",Es,[s("p",Ds,g(t.task.title),1)]),s("div",Zs,[s("div",As,g(t.task.description),1)]),s("footer",Bs,[s("button",{class:"card-footer-item button is-light is-danger",onClick:l[5]||(l[5]=b=>c(t.task.id))}," Delete "),s("button",{class:"card-footer-item button is-primary is-light",onClick:l[6]||(l[6]=b=>k(t.task.id))}," Deshacer ")])]))}},Fs=$(Js,[["__scopeId","data-v-fa8248a1"]]);const Os=e=>(I("data-v-4e86110c"),e=e(),w(),e),Us={class:"modal-card"},js=Os(()=>s("p",{class:"modal-card-title"},"Modal title",-1)),zs={class:"modal-card-body"},Rs={key:0,class:"section"},Hs={class:"container"},Ls={class:"columns is-multiline"},Ps={key:1,class:"section"},Xs=X('<div class="card" data-v-4e86110c><div class="card-content" data-v-4e86110c><div class="media" data-v-4e86110c><div class="media-left" data-v-4e86110c><figure class="image is-48x48" data-v-4e86110c><img src="'+J+'" alt="Placeholder image" data-v-4e86110c></figure></div><div class="media-content is-centrado" data-v-4e86110c><div class="title is-4" data-v-4e86110c>Wellcome to you tasks app!!</div></div></div><div data-v-4e86110c><div class="media" data-v-4e86110c><div class="media-left" data-v-4e86110c></div><div class="media-content is-centrado" data-v-4e86110c><div class="subtitle is-4" data-v-4e86110c>Start by adding your tasks!</div></div></div><div class="media" data-v-4e86110c><div class="media-left" data-v-4e86110c></div><div class="media-content is-centrado" data-v-4e86110c><div class="subtitle is-4" data-v-4e86110c>You can mark as done</div></div></div><div class="media" data-v-4e86110c><div class="media-left" data-v-4e86110c></div><div class="media-content is-centrado" data-v-4e86110c><div class="subtitle is-4" data-v-4e86110c>Edit your task</div></div></div><div class="media" data-v-4e86110c><div class="media-left" data-v-4e86110c></div><div class="media-content is-centrado" data-v-4e86110c><div class="subtitle is-4" data-v-4e86110c>Delete your task</div></div></div></div></div></div>',1),Ys=[Xs],Gs={__name:"Tasks",setup(e){T();const t=S();v(""),B(()=>{t.setTask()});let o=v(!1);const a=()=>{o.value=!o.value};let i=v(t.tasks.length);return L(()=>t.tasks.length,c=>{i.value=t.tasks.length}),(c,r)=>(n(),d(V,null,[s("div",{class:"card"},[s("div",{class:"card-content"},[s("div",{class:"content"},[s("button",{class:"button is-info",onClick:a},"Add new task")])])]),s("div",{class:x(["modal",{"is-active":m(o)}])},[s("div",{class:"modal-background",onClick:a}),s("div",Us,[s("header",{class:"modal-card-head"},[js,s("button",{class:"delete","aria-label":"close",onClick:a})]),s("section",zs,[_(ks,{onClose:a})])])],2),m(i)?(n(),d("div",Rs,[s("div",Hs,[s("div",Ls,[(n(!0),d(V,null,P(m(t).tasks,p=>(n(),d("div",{key:p.id,class:"column is-12-mobile is-6-tablet is-4-desktop"},[_(Fs,{task:p},null,8,["task"])]))),128))])])])):(n(),d("div",Ps,Ys))],64))}},qs=$(Gs,[["__scopeId","data-v-4e86110c"]]);const Ks={},Ws=e=>(I("data-v-f8ef60dd"),e=e(),w(),e),Qs=Ws(()=>s("ul",{class:"footer-list"},[s("li",null,[s("button",{class:"button is-light"},"Github")]),s("li",null,[s("button",{class:"button is-light"},"linked in")])],-1)),st=[Qs];function tt(e,t){return n(),d("footer",null,st)}const et=$(Ks,[["render",tt],["__scopeId","data-v-f8ef60dd"]]);const E=e=>(I("data-v-e9bb38c0"),e=e(),w(),e),at={class:"section principal"},ot={class:"container"},it={key:0},ct=E(()=>s("header",null,[s("h1",{class:"title"},"Este es mi header")],-1)),nt={class:"landing-page"},dt=E(()=>s("div",{class:"container container-landing"},[s("div",{class:"card"},[s("div",{class:"card-content"},[h(" Bienvenido! "),s("br"),h(" Inicia sesion en la APP para ver contenido "),s("br")]),s("div",{class:"card-content"},[h(" Bienvenido! "),s("br"),h(" Inicia sesion en la APP para ver contenido "),s("br")])])],-1)),lt={class:"card container container-landing"},rt={class:"card-flex"},_t={class:"modal-card"},vt=E(()=>s("p",{class:"modal-card-title"},"Registro",-1)),ut={class:"modal-card-body"},mt={key:1},pt={class:"container"},ht={__name:"Home",setup(e){const t=T();S(),B(async()=>{await ls()});let o=v(!1);const a=()=>{o.value=!o.value};return(i,c)=>(n(),d(V,null,[s("div",at,[s("div",ot,[m(t).isAuth?(n(),d("div",mt,[_(is),s("div",null,[s("div",pt,[s("div",null,"Wellcome "+g(m(t).user.email),1),s("button",{onClick:c[0]||(c[0]=r=>m(t).logout()),class:"button is-danger is-light"}," Cerrar Sesi\xF3n ")])]),_(qs)])):(n(),d("article",it,[ct,s("div",nt,[dt,s("div",lt,[s("div",rt,[_(Y,{onClose:a})])])]),s("div",{class:x(["modal",{"is-active":m(o)}])},[s("div",{class:"modal-background",onClick:a}),s("div",_t,[s("header",{class:"modal-card-head"},[vt,s("button",{class:"delete","aria-label":"close",onClick:a})]),s("section",ut,[_(G,{onClose:a})])])],2)]))])]),_(et)],64))}},gt=$(ht,[["__scopeId","data-v-e9bb38c0"]]);export{gt as default};
