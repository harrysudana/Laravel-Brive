import{u as f,y as m,c as g,w as s,o as a,a as i,b as e,H as p,g as y,i as _,d as o,e as r,t as h,n as k,L as x,f as v}from"./app-7cb71123.js";import{_ as b}from"./GuestLayout-6912a60d.js";import{_ as w}from"./PrimaryButton-e4775d1b.js";import"./index-6a455d73.js";const V=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},E=["onSubmit"],S={class:"mt-4 flex items-center justify-between"},R={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=f(),d=()=>{t.post(route("verification.send"))},l=m(()=>c.status==="verification-link-sent");return(u,L)=>(a(),g(b,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),V,e(l)?(a(),y("div",B," A new verification link has been sent to the email address you provided during registration. ")):_("",!0),o("form",{onSubmit:v(d,["prevent"])},[o("div",S,[i(w,{class:k({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(h(e(t).processing?"Resend Verification Email...":"Resend Verification Email"),1)]),_:1},8,["class","disabled"]),i(e(x),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,E)]),_:1}))}};export{R as default};