const cases=[
 {no:'01',tag:'Research · Strategy',title:'国货品牌营销出海｜白象方便面',desc:'从市场研究出发，思考国货品牌如何进入海外消费语境，并转化为白象方便面的出海营销方案。',role:['梳理海外市场环境与竞品传播','提炼国货品牌的差异化价值','转译为目标人群、内容主题与传播路径'],quote:'Research → Insight → Strategy',gallery:['slides/slide-06.png','slides/slide-07.png']},
 {no:'02',tag:'IP · AIGC',title:'「我是苏小妹」小红书IP',desc:'将AI内容生产与历史人物IP结合，围绕“苏小妹”进行人设、脚本和内容方向策划。',role:['搭建人物IP的内容人格','用AI辅助脚本与内容创作','结合平台反馈持续迭代选题'],quote:'在职期间小红书粉丝量由约5,000增长至1.6万',gallery:['slides/slide-08.png']},
 {no:'03',tag:'Integrated · KOL',title:'抖音商城「服饰焕新周」',desc:'与ELLE杂志协同推进TVC，联合8位KOL从三种生活场景切入表达八大风格趋势。',role:['参与TVC脚本和视频盯对','拆解趋势为生活化内容场景','协同KOL完成短视频表达'],quote:'多方协同下完成平台趋势内容落地',gallery:['slides/slide-09.png']},
 {no:'04',tag:'UGC · Xiaohongshu',title:'德芙薄荷巧克力新品爆发',desc:'围绕“夏日薄荷清凉”建立新品传播记忆点，通过UGC内容池与主账号内容承接电商引流。',role:['提炼季节情绪与消费场景','搭建小红书UGC内容池','联动品牌主账号导流'],quote:'把产品卖点转化为可感知的夏日场景',gallery:['slides/slide-10.png']},
 {no:'05',tag:'Creator · MCN',title:'唯品会｜抖音女性浅植入项目',desc:'从内容brief到成片交付全链路推进，并根据内容数据筛选高ROI视频，与外包团队推进二创。',role:['独立撰写视频内容brief','负责MCN、达人、选品、脚本和成片沟通','基于内容复盘筛选高价值素材'],quote:'形成达人内容从生产到复用的优化闭环',gallery:['slides/slide-11.png','slides/slide-12.png']},
 {no:'06',tag:'Insight · KOC',title:'图拉斯支点壳｜情绪Moment营销',desc:'基于人群数据洞察，从功能卖点之外寻找情绪切口，联合KOC打造话题内容。',role:['从人群数据中寻找情绪触发点','连接产品使用场景与用户moment','通过KOC强化真实体验感'],quote:'数据洞察驱动内容概念',gallery:['slides/slide-13.png']},
 {no:'07',tag:'Content · Operation',title:'制糖工厂｜账号内容转型',desc:'帮助账号从货架电商式展示，转向更适合内容平台的图文种草表达。',role:['诊断商品陈列式内容问题','重构场景化图文表达','形成更适合种草的账号模板'],quote:'账号从“货架展示”转向“内容种草”',gallery:['slides/slide-14.png']}
];
const modal=document.querySelector('#modal');
function openCase(i){const c=cases[i];document.querySelector('#modalNo').textContent=c.no;document.querySelector('#modalTag').textContent=c.tag;document.querySelector('#modalTitle').textContent=c.title;document.querySelector('#modalDesc').textContent=c.desc;document.querySelector('#modalQuote').textContent='「'+c.quote+'」';document.querySelector('#modalRole').innerHTML=c.role.map(x=>`<li>${x}</li>`).join('');document.querySelector('#modalGallery').innerHTML=c.gallery.map(x=>`<img src="${x}" alt="${c.title}" loading="lazy" onclick="window.open(this.src,'_blank')">`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeCase(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.case-card').forEach(card=>card.addEventListener('click',()=>openCase(+card.dataset.case)));
document.querySelector('.modal-close').addEventListener('click',closeCase);modal.addEventListener('click',e=>{if(e.target===modal)closeCase()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCase()});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.querySelector('#progress').style.width=(scrollY/h*100)+'%'});
