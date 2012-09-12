var equalColumns = {
		
		// This gives all columns in a particular row equal height
		init : function(rowClass,columnClass,excludedClass) { 
			var tallestCol = 0;
			curRow = $(rowClass);
			curRow.each(function(){
				tallestCol = 0;
				curCol = $(this).find(columnClass);
				curCol.each(function(){
					curColHeight = $(this).height();
					if(curColHeight > tallestCol){
						tallestCol = curColHeight;
					}
				});
				curCol.height(tallestCol);
				curColHeight = 0;
				$(excludedClass).css('height','auto');
			});
		}
	}