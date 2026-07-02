const p=document.getElementById('passport'),m=document.getElementById('modal');
p.onclick=()=>m.style.display='flex';
document.getElementById('close').onclick=()=>m.style.display='none';
m.onclick=e=>{if(e.target===m)m.style.display='none';};