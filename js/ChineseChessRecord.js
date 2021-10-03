// <script>
	const row = 10;
	const column = 9;
	const origin = [100,50];		
	const rowSpacing = 62;
	const columnSpacing = 62;
	const markPosittion = [ [1,2],[7,2],
							[0,3],[2,3],[4,3],[6,3],[8,3],
							[1,7],[7,7],
							[0,6],[2,6],[4,6],[6,6],[8,6]
						  ];
	init();
	
	function init() {
		// 繪製棋盤
		chessboardInit();
	}
	
	function chessboardInit() {
		const width = document.querySelector("#Div_canvas").clientWidth;
		const height = 650;
		const canvas = document.querySelector("#Canvas_chessboard");
		if (canvas.getContext) {
			canvas.setAttribute('width', width);   //設定寬度
			canvas.setAttribute('height', height); //設定高度
			
			let ctx = canvas.getContext("2d");
			// 繪製背景
			ctx.fillStyle = "rgb(232,176,96)";
			ctx.fillRect (0, 0, width, height);
			// 繪製棋盤格線 
			drawChessboardLine(ctx);
		}
	}
	
	function drawChessboardLine(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		// 外框 100,50 -> 550,50 -> 550,
		ctx.lineWidth = 2;
		//ctx.lineCap = type
		ctx.moveTo(origin[0], origin[1]);
		ctx.lineTo(origin[0], origin[1]+(row-1)*rowSpacing);
		ctx.lineTo(origin[0]+(column-1)*columnSpacing, origin[1]+(row-1)*rowSpacing);
		ctx.lineTo(origin[0]+(column-1)*columnSpacing, origin[1]);
		ctx.lineTo(origin[0], origin[1]);
		ctx.stroke();
		// 橫線
		ctx.lineWidth = 1;
		for(let i=1; i<row-1; i++) {
			ctx.moveTo(origin[0], origin[1]+i*rowSpacing);
			ctx.lineTo(origin[0]+(column-1)*columnSpacing, origin[1]+i*rowSpacing);
		}
		// 直線
		for(let j=1; j<column-1; j++) {
			ctx.moveTo(origin[0]+j*columnSpacing, origin[1]);
			ctx.lineTo(origin[0]+j*columnSpacing, origin[1]+4*rowSpacing);
			// 避開楚河漢界
			ctx.moveTo(origin[0]+j*columnSpacing, origin[1]+5*rowSpacing);
			ctx.lineTo(origin[0]+j*columnSpacing, origin[1]+(row-1)*rowSpacing);
		}
		// 斜線
		ctx.moveTo(origin[0]+3*columnSpacing, origin[1]);
		ctx.lineTo(origin[0]+5*columnSpacing, origin[1]+2*rowSpacing);
		ctx.moveTo(origin[0]+5*columnSpacing, origin[1]);
		ctx.lineTo(origin[0]+3*columnSpacing, origin[1]+2*rowSpacing);
		
		ctx.moveTo(origin[0]+3*columnSpacing, origin[1]+7*rowSpacing);
		ctx.lineTo(origin[0]+5*columnSpacing, origin[1]+9*rowSpacing);
		ctx.moveTo(origin[0]+5*columnSpacing, origin[1]+7*rowSpacing);
		ctx.lineTo(origin[0]+3*columnSpacing, origin[1]+9*rowSpacing);
		// 井號
		for(let i=0; i<markPosittion.length; i++) {
			drawMark(ctx, origin[0]+markPosittion[i][0]*columnSpacing, origin[1]+markPosittion[i][1]*rowSpacing);
		}
		ctx.stroke();
	}
	
	function drawMark(ctx, x, y,){
		const length = 12; // 井號長度
		const distance = 5; // 與交點的距離
		if(x !== origin[0]) {
			// 左上
			ctx.moveTo(x-length, y-distance);
			ctx.lineTo(x-distance, y-distance);
			ctx.lineTo(x-distance, y-length);
			// 左下
			ctx.moveTo(x-length, y+distance);
			ctx.lineTo(x-distance, y+distance);
			ctx.lineTo(x-distance, y+length);
		}
		if(x !== origin[0]+8*columnSpacing) {
			// 右上
			ctx.moveTo(x+distance, y-length);
			ctx.lineTo(x+distance, y-distance);
			ctx.lineTo(x+length, y-distance);
			// 右下
			ctx.moveTo(x+distance, y+length);
			ctx.lineTo(x+distance, y+distance);
			ctx.lineTo(x+length, y+distance);
		}
	}
// </script>
