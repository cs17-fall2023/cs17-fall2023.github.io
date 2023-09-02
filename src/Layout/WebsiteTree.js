const tree = [
	{ label: "Home", navigation: "/cs17fall2023.github.io", children: [] },
	{
		label: "Notes", navigation: "/classes", children:
			[
				{ label: "Classes", navigation: "/classes", children: [] },
				{ label: "Workshops", navigation: "/workshops", children: [] },
			]
	},
	{
		label: "Assignments", navigation: "/homeworks", children:
			[
				{ label: "Homeworks", navigation: "/homeworks", children: [] },
				{ label: "Labs", navigation: "/labs", children: [] },
				{ label: "Projects", navigation: "/projects", children: [] },
			]
	},
	{ label: "Resources", navigation: "/resources", children: [] },
	{ label: "Staff", navigation: "/staff", children: [] }
]

export default tree;