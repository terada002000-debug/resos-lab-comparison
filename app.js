const notes=[...articlePlans];
const list=document.querySelector('#entries'),search=document.querySelector('#search');
const pager=document.querySelector('#pagination'),count=document.querySelector('#result-count'),sort=document.querySelector('#article-sort');
const params=new URLSearchParams(location.search),categoryNames={resos:'RESOS研究',karen:'カレン研究'};
let selected=categoryNames[params.get('category')]||'すべて',page=Math.max(1,Number(params.get('page'))||1);
const PAGE_SIZE=8;
search.value=params.get('q')||'';sort.value=params.get('order')==='desc'?'desc':'asc';
function escapeText(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function selectArticles(query,category,order){
 const terms=query.normalize('NFKC').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return notes.filter(n=>(category==='すべて'||n.cat===category)&&terms.every(t=>[n.id,String(n.id).padStart(2,'0'),n.title,n.desc,n.topic,n.cat,articleSearchText[n.url]||''].join(' ').normalize('NFKC').toLocaleLowerCase().includes(t))).sort((a,b)=>order==='desc'?b.id-a.id:a.id-b.id);
}
function saveView(){
 const p=new URLSearchParams();const key=Object.keys(categoryNames).find(k=>categoryNames[k]===selected);
 if(key)p.set('category',key);if(search.value.trim())p.set('q',search.value.trim());if(page>1)p.set('page',String(page));if(sort.value==='desc')p.set('order','desc');
 history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash);
}
function render(){
 const found=selectArticles(search.value,selected,sort.value),pages=Math.max(1,Math.ceil(found.length/PAGE_SIZE));page=Math.min(pages,Math.max(1,page));
 const start=(page-1)*PAGE_SIZE,visible=found.slice(start,start+PAGE_SIZE);
 count.textContent=found.length?found.length+'件中 '+(start+1)+'〜'+(start+visible.length)+'件 ／ '+page+' / '+pages+'ページ':'該当する記事はありません。';
 list.innerHTML=visible.length?visible.map(n=>{
 const tag='a',href=' href="'+escapeText(n.url)+'"';
 return '<'+tag+href+' class="entry" data-id="'+n.id+'"><span class="entry-number">'+String(n.id).padStart(2,'0')+'</span><div><span class="entry-meta">'+'RESEARCH NOTE'+' / '+String(n.id).padStart(2,'0')+'</span><h3 class="entry-title">'+escapeText(n.title)+'</h3><div class="entry-desc">'+escapeText(n.desc)+'</div></div><div class="entry-side"><span class="tag '+(n.cat==='カレン研究'?'karen':'')+'">'+escapeText(n.cat)+'</span><br>'+escapeText(n.topic)+'<br>'+'本文を読む'+'</div><span class="arrow">↗</span></'+tag+'>';
 }).join(''):'<p class="empty">別の言葉やカテゴリで探してみてください。</p>';
 const button=(p,label,disabled=false)=>'<button type="button" data-page="'+p+'"'+(disabled?' disabled':'')+(p===page&&!disabled?' aria-current="page"':'')+' aria-label="'+(typeof label==='number'?label+'ページへ':label)+'">'+label+'</button>';
 pager.innerHTML=pages>1?button(page-1,'前へ',page===1)+Array.from({length:pages},(_,i)=>button(i+1,i+1)).join('')+button(page+1,'次へ',page===pages):'';
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===selected;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 saveView();
}
function resetAndRender(){page=1;render()}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.filter;resetAndRender()}));
document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.theme;search.value='';resetAndRender();document.querySelector('#journal').scrollIntoView({behavior:'smooth'})}));
search.addEventListener('input',resetAndRender);sort.addEventListener('change',resetAndRender);
pager.addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(!b||b.disabled)return;page=Number(b.dataset.page);render();document.querySelector('#journal').scrollIntoView({behavior:'smooth'});const active=pager.querySelector('[aria-current="page"]');active?.focus({preventScroll:true})});
render();
