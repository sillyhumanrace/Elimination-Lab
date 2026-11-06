(function(root){
const fmt=n=>{if(Math.abs(n)<1e-9)return '0';if(Number.isInteger(n))return String(n);for(let d=2;d<=1000;d++){let p=Math.round(n*d);if(Math.abs(p/d-n)<1e-8)return p+'/'+d}return Number(n.toFixed(4)).toString()};
const eq=([a,b,c])=>{let s='';for(let [n,v] of [[a,'x'],[b,'y']]){if(!n)continue;let term=(Math.abs(n)===1?'':fmt(Math.abs(n)))+v;s+=s?(n<0?' − ':' + ')+term:(n<0?'−':'')+term}return(s||'0')+' = '+fmt(c)};
const scale=(r,k)=>r.map(v=>v*k);const combine=(a,b,op)=>a.map((v,i)=>v+(op==='add'?1:-1)*b[i]);
function solve(a,b){let d=a[0]*b[1]-a[1]*b[0];if(d)return{type:'one',x:(a[2]*b[1]-a[1]*b[2])/d,y:(a[0]*b[2]-a[2]*b[0])/d};return{type:a[0]*b[2]===a[2]*b[0]&&a[1]*b[2]===a[2]*b[1]?'infinite':'none'}};
const number=s=>{if(typeof s!=='string'||!s.trim())return NaN;if(/^[+-]?(\d+(\.\d*)?|\.\d+)\s*\/\s*[+-]?(\d+(\.\d*)?|\.\d+)$/.test(s)){let[a,b]=s.split('/').map(Number);return b?a/b:NaN}return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(s)?Number(s):NaN};
root.ElimMath={fmt,eq,scale,combine,solve,number};if(typeof module!=='undefined')module.exports=root.ElimMath;
})(typeof window!=='undefined'?window:globalThis);
