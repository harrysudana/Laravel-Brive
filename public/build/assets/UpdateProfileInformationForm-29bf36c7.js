import{U as x,u as h,g as l,d as s,a as t,b as e,e as n,w as m,h as k,v as V,B as c,n as b,T as S,f as w,o as d,L as N,t as B}from"./app-366dc743.js";import{a as f,b as p,_ as g}from"./TextInput-3ad62ff1.js";import{_ as U}from"./PrimaryButton-c6519ddc.js";const C=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1),E=["onSubmit"],P={key:0},$={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},T={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},q={class:"flex items-center gap-4"},D={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},Y={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(_){const u=_,r=x().props.value.auth.user,a=h({name:r.name,email:r.email}),y=()=>{a.patch(route("profile.update"),{preserveScroll:!0})};return(v,o)=>(d(),l("section",null,[C,s("form",{onSubmit:w(y,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[t(g,{for:"name",value:"Name"}),t(f,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(a).name=i),required:"",autofocus:"",autocomplete:"name",placeholder:"Your Name"},null,8,["modelValue"]),t(p,{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),s("div",null,[t(g,{for:"email",value:"Email"}),t(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(a).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(a).email=i),required:"",autocomplete:"email",placeholder:"email@email.com"},null,8,["modelValue"]),t(p,{class:"mt-2",message:e(a).errors.email},null,8,["message"])]),u.mustVerifyEmail&&e(r).email_verified_at===null?(d(),l("div",P,[s("p",$,[n(" Your email address is unverified. "),t(e(N),{href:v.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[n(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),k(s("div",T," A new verification link has been sent to your email address. ",512),[[V,u.status==="verification-link-sent"]])])):c("",!0),s("div",q,[t(U,{class:b({"opacity-25":e(a).processing}),disabled:e(a).processing},{default:m(()=>[n(B(e(a).processing?"Save...":"Save"),1)]),_:1},8,["class","disabled"]),t(S,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:m(()=>[e(a).recentlySuccessful?(d(),l("p",D,"Saved.")):c("",!0)]),_:1})])],40,E)]))}};export{Y as default};