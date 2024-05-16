import{k as m,P as v,f as w,b as o,t as n,a,u as e,w as f,n as h,q as V,e as b,o as _,d as k,h as y}from"./app-9172825b.js";import{_ as d,a as p,b as u}from"./TextInput-5fb8cc21.js";import{_ as S}from"./PrimaryButton-5538c6e6.js";const P={class:"text-lg font-medium text-slate-900 dark:text-slate-100"},I={class:"mt-1 text-sm text-slate-600 dark:text-slate-400"},N=["onSubmit"],U={class:"flex items-center gap-4"},$={key:0,class:"text-sm text-slate-600 dark:text-slate-400"},T={__name:"UpdatePasswordForm",setup(x){const c=m(null),i=m(null),s=v({current_password:"",password:"",password_confirmation:""}),g=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(r,l)=>(_(),w("section",null,[o("header",null,[o("h2",P,n(r.lang().profile.update_password),1),o("p",I,n(r.lang().profile.update_password_caption),1)]),o("form",{onSubmit:b(g,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[a(d,{for:"current_password",value:r.lang().profile.current_password},null,8,["value"]),a(p,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:e(s).current_password,"onUpdate:modelValue":l[0]||(l[0]=t=>e(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password",placeholder:r.lang().placeholder.password,error:e(s).errors.current_password},null,8,["modelValue","placeholder","error"]),a(u,{message:e(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[a(d,{for:"password",value:r.lang().profile.new_password},null,8,["value"]),a(p,{id:"password",ref_key:"passwordInput",ref:c,modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:r.lang().placeholder.password,error:e(s).errors.password},null,8,["modelValue","placeholder","error"]),a(u,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[a(d,{for:"password_confirmation",value:r.lang().label.password_confirmation},null,8,["value"]),a(p,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:r.lang().placeholder.password_confirmation,error:e(s).errors.password_confirmation},null,8,["modelValue","placeholder","error"]),a(u,{message:e(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",U,[a(S,{class:h({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:f(()=>[k(n(e(s).processing?r.lang().button.save+"...":r.lang().button.save),1)]),_:1},8,["class","disabled"]),a(V,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:f(()=>[e(s).recentlySuccessful?(_(),w("p",$,n(r.lang().profile.saved),1)):y("",!0)]),_:1})])],40,N)]))}};export{T as default};