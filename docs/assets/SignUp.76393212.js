import{B as h,r as a,o as f,c as b,a as s,j as w,i as n,v as i,D as y}from"./index.efd85066.js";const U={class:"section"},g={class:"container"},S=s("h2",null,"Sign up for an account",-1),V=s("br",null,null,-1),k=["onSubmit"],x={class:"field"},B=s("label",{class:"label"},"Name",-1),P={class:"control"},M={class:"field"},C=s("label",{class:"label"},"Email",-1),D={class:"control"},E={class:"field"},N=s("label",{class:"label"},"Password",-1),j={class:"control"},R={class:"field"},T=s("label",{class:"label"},"Confirm your Password",-1),q={class:"control"},F={__name:"SignUp",emits:["close"],setup(z,{emit:u}){const p=h(),r=a(""),c=a(""),o=a(""),d=a(""),_=()=>o.value===d.value,m=async()=>{try{if(_()){const t=await y.auth.signUp({email:c.value,password:o.value});p.push({name:"home"})}else return alert("password doesn't match")}catch(t){alert(t.error_description||t.message)}},v=()=>{u("close")};return(t,e)=>(f(),b("div",U,[s("div",g,[S,V,s("form",{onSubmit:w(m,["prevent"])},[s("div",x,[B,s("div",P,[n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),class:"input",type:"text",placeholder:"nombre"},null,512),[[i,r.value]])])]),s("div",M,[C,s("div",D,[n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),class:"input",type:"email",placeholder:"email"},null,512),[[i,c.value]])])]),s("div",E,[N,s("div",j,[n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),class:"input",type:"password",placeholder:"password"},null,512),[[i,o.value]])])]),s("div",R,[T,s("div",q,[n(s("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l),class:"input",type:"password",placeholder:"password"},null,512),[[i,d.value]])])]),s("div",{class:"field"},[s("div",{class:"control"},[s("input",{onClick:v,class:"button is-link is-fullwidth",type:"submit"})])])],40,k)])]))}};export{F as default};