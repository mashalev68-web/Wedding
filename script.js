
const target=new Date('2026-08-14T15:30:00');
function tick(){
const d=target-new Date();
if(d<0)return;
const days=Math.floor(d/86400000);
const hrs=Math.floor(d%86400000/3600000);
const mins=Math.floor(d%3600000/60000);
document.getElementById('countdown').textContent=`${days} дней ${hrs} часов ${mins} минут`;
}
tick();setInterval(tick,60000);
