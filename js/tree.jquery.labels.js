labels_tree_data = [
	{
		label : '<button id="Region1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 1</span>',
		children : [
			 { label: '<button id="label1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label1</span>' },
			 { label: '<button id="label2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label2</span>' },
			 { label: '<button id="label3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label3</span>' },
			 { label: '<button id="label4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label4</span>' },
		]
	},
	{
		label : '<button id="Region2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 2</span>',
		children : [
			 { label: '<button id="label1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label1</span>' },
			 { label: '<button id="label2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label2</span>' },
			 { label: '<button id="label3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label3</span>' },
			 { label: '<button id="label4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label4</span>' },
		]
	},
	{
		label : '<button id="Region3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 3</span>',
		children : [
			 { label: '<button id="label1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label1</span>' },
			 { label: '<button id="label2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label2</span>' },
			 { label: '<button id="label3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label3</span>' },
			 { label: '<button id="label4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label4</span>' },
		]
	},
	{
		label : '<button id="Region4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 4</span>',
		children : [
			 { label: '<button id="label1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label1</span>' },
			 { label: '<button id="label2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label2</span>' },
			 { label: '<button id="label3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label3</span>' },
			 { label: '<button id="label4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">label4</span>' },
		]
	}
];

$(function() {
	$('#labels_tree').tree({
		data: labels_tree_data,
		autoEscape: false,
		autoOpen: true
	});
});
