var x = 2

for (let y = 1; y < 4109; y){
		if(y < 4108){
			document.write(y + ", ");
		}else{
			document.write(y);
		}
		y = y + x;
		x = x*2-1;
}