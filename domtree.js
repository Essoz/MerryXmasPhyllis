const width = 500;
const height = 600;
const quantity = 400;
const types = [ 'text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox' ];
const greetings = ["P: 我爱你大猪宝宝", "M: 我爱你黄美人", "M: 牛🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂🐂", "P: 你的潮汕牛肉也不香了", "P: jyx上辈子是牛顿吧", "P: Hi, I'm Phyllis from the group 'Acapella.", "P: 一个测试工程师走进一家酒吧，要了一杯啤酒", "P: 你喝酸奶不", "M: 我也想打羽毛球", "P: 哈哈我发现好像根本没有什么核酸检测", "M: 倒计时20min提前恭喜落地", "P: 你情人节有没有给你喜欢的那个女孩啥准备", "M: 本来很怂", "M: 想了想唱了首歌，也不知道算不算", "P: 今天事情巨多", "P: 我的备忘录都记不完了", "P: 但是一和你说话我就不累了", "M: 知道菊老师给我带东西吃就很幸福啦", "M: 你几点到我去火车站接你", "P: 等我的话你就吃不上饭了", "P: 刚刚你回去的时候是不是下雨了 你是不淋雨了", "P: 可惜我太害羞了", "P: 要请姜老师多多指教", "M: 回去没淋雨哈哈，我走了四区到三区的那个通道", "P: 那你觉得你被降智了吗", "M: 但是我学会老白了", "P: 你连打呼噜都打得那么可爱", "P: 一熬夜人就变敏感了就想给你表白", "M: 猜猜菊老师应该还没起床，所以我偷偷地说一句“我爱你”", "P: 还有 明天一定要叫我起床", "P: 你真该看我穿旗袍，你会流鼻血的", "P: 我这么火辣", "P: 我的心跳正常的___/\___/\___和你聊天的时候的心跳___/\___/\___/\___你说想我的时候我的心跳___/\_/\_/\_/\_/\_/\___你不回我时候的心跳___/\________________", "M: 带着菊小姐，穿梭西安的大街小巷", "M: 马上就要回到，每天给菊老师发自拍的日子了", "M: 我爱你阿菊，我们要各自好好奋斗，创造未来", "M: 害，也许这就是突然想说我爱你了吧", "M: 喜欢死了", "P: 你百分之九十喜欢我"];
let tree = document.querySelector( '.tree' ),
	treeRotation = 0;
 
tree.style.width = width + 'px';
tree.style.height = height + 'px';
 
window.addEventListener( 'resize', resize, false );
 
// The tree
for( var i = 0; i < quantity; i++ ) {
	let element = null,
		type = types[ Math.floor( Math.random() * types.length ) ],
		greeting = greetings[ Math.floor( Math.random() * greetings.length ) ];
 
	let x = width/2,
		y = Math.round( Math.random() * height );
 
	let rx = 0,
		ry = Math.random() * 360,
		rz = -Math.random() * 15;
 
	let elemenWidth = 5 + ( ( y / height ) * width / 2 ),
		elemenHeight = 26;
 
	switch( type ) {
		case 'button':
			element = document.createElement( 'button' );
			element.textContent = greeting;
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'progress':
			element = document.createElement( 'progress' );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			if( Math.random() > 0.5 ) {
				element.setAttribute( 'max', '100' );
				element.setAttribute( 'value', '100' );
			}
			break;
		case 'select':
			element = document.createElement( 'select' );
			element.setAttribute( 'selected', greeting );
			element.innerHTML = '<option>' + greetings.join( '</option><option>' ) + '</option>';
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'meter':
			element = document.createElement( 'meter' );
			element.setAttribute( 'min', '0' );
			element.setAttribute( 'max', '100' );
			element.setAttribute( 'value', Math.round( 100 ) );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'text':
		default:
			element = document.createElement( 'input' );
			element.setAttribute( 'type', 'text' );
			element.setAttribute( 'value', greeting );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
	}
 
	element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
 
	tree.appendChild( element );
}
 
// Let it snow
for( var i = 0; i < 200; i++ ) {
	let element = document.createElement( 'input' );
	element.setAttribute( 'type', 'radio' );
 
	let spread = window.innerWidth/2;
 
	let x = Math.round( Math.random() * spread ) - ( spread / 4 ),
		y = Math.round( Math.random() * height ),
		z = Math.round( Math.random() * spread ) - ( spread / 2 );
 
	let rx = 0,
		ry = Math.random() * 360,
		rz = 0;
 
	if( Math.random() > 0.5 ) element.setAttribute( 'checked', '' );
 
	element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
 
	tree.appendChild( element );
}
 
function resize() {
	tree.style.top = ( ( window.innerHeight - height - 100 ) / 2 ) + 'px';
}
 
resize();