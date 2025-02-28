var lang={
	/** Accessibility **/
	//vocalize page number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		label: 'page number', 
		help: 'Read the page number when displayed' 
	} ,
	//Play a sound (beep) when displaying hidden text
	SoundTxt: { 
		label: 'Hidden content', 
		help: 'Beep when a hidden content appears' 
	},
	//Play a sound (beep) when displaying a page
	SoundSlide: { 
		label: 'page', 
		help: 'Beep when displaying a page'
	},
	//Play a sound (beep) when displaying first page
	SoundSlide1: { 
		label: 'First page', 
		help: 'Beep when displaying the first page'
	},
	//Play a sound (beep) when displaying last page
	SoundSlideEnd: { 
		label: 'Last page', 
		help: 'Beep when displaying the last page'  
	},
	//Vocalize the title of the current page
	VocalizeTitle: { 
		label: 'title', 
		help: 'Read the title of the current page'
	},
	//Update the window title
	UpWindowTitle: { 
		label: 'Window title', 
		help: 'Update the window title when a page is displayed' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		label: 'Next button', 
		help: 'Move the focus on the “Next” button when the reader is loading' 
	},
	//Deactivate click button function to go to next page
	Noclick:  { 
		label: 'Click', 
		help: 'Remove the click action to display the next page.'
	},
	//Enables navigation hotkeys for screen readers.
	KeyboardOk:  { 
		label: 'Screen reader hotkeys', 
		help: 'Enables navigation hotkeys for screen readers.'
	},
	//Dyslexia font choice
	FontDyslexia: {
		label: 'Adapted font family',
		help: 'Choose dyslexia font family'	
	},
	//Dyslexia text format choices
	LineSpaceDyslexia: {
		label: 'Line spacing adapted',
		help: 'Choose dyslexia line spacing'		
	},
	//Justification texte format
	NoJustify: {
		label: 'No justify',
		help: 'Prohibit text justification'
	},
	//Contrast
	Contrast: {
		legend: 'Contrast',
		label: 'Choose contrast mode',
	},
	ContrastDefault:{
		help: 'Default'
	},
	ContrastInvert:{
		help: 'Inverted'
	},
	ContrastEnforced:{
		help: 'Enforced'
	},	
	/** Slideshow parameters **/
	// Display summary as modal window
	SumModOn: {
		label: 'table of contents', 
		help: 'Display the table of contents as a modal window'
	},
	// Switch CSS3=1 or JS=0 for shutter animation
	AnimCssOn: {
		label: 'Sweep effect', 
		help: 'Use CSS3 for sweep effect'
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: {
		label: 'Outline view', 
		help: 'Use the linear layout to display the page in linear succession'
	},
	/** Effects **/
	// Effects select label
	LabelEffect: 'Animation type',
	// Noeffects
	Eno: {
		help: 'No effect'
	},
	// Fade in
	Efadin: {
		help: 'Gradual appearance'
	},
	// Scale
	Escale: {
		help: 'Scale'
	},
	// Flash
	Flash: {
		help: 'Flash appearance'
	},
	// Flip
	Flip: {
		help: 'Flip appearance'
	},
	// Shutter left
	Eleft: {
		help: 'Sweep to left'
	},
	// Shutter rigth
	Eright: {
		help: 'Sweep to right'
	},
	// Shutter bottom
	Ebottom: { 
		help: 'Sweep to bottom'
	},
	// Shutter top
	Etop: { 
		help: 'Sweep to top'
	},
	// TurnPage
	TurnPage: {
		help: 'Turn page effect'
	},
	// Group Legend
	Gaccess: { 
		legend: 'Accessibility' 
	},
	Gslide: { 
		legend: 'Slideshow' 
	},
	Geffects: { 
		legend: 'Effects' 
	},
	Gdys: {
		legend: 'Dyslexia'
	},
	/** Misceallanous **/
	// Setting configuration windows modal properties
	ConfigTitle: 'Configuration',
	SummaryTitle: 'Table of contents',
	SummaryLinkActiveTitle : ' - displayed ',
	OwnerInfoTitle : 'Owner informations',
	HelpInfoTitle : 'Help',
	Wclose: 'Close',
	// Setting buttons
	Bsubmit: {
		title:'Save the configuration', 
		value: 'Save' 
	},
	Bdefault: {
		title:'Default configuration', 
		value: 'Default' 
	},
	// Setting navbar button and select
	// Ndxon = expression "on" in "1 on 4" for vocalization numbers page 
	Bprev: {
		title: 'Previous',
		alt: 'Previous'
	},
	Bnext: {
		title: 'Next',
		alt: 'Next'
	},
	Select:{
		title: 'Go to page N°'
	},
	Bselect: {
		title: 'Display the page',
		alt: 'Display the page'
	},
	Btoc: {
		titleOpen: 'Open Table of Contents',
		altOpen: 'Open table of contents',
		titleClose: 'Close table of contents',
		altClose: 'Close table of contents'
	},
	Bconfig: {
		titleOpen: 'Open configuration',
		altOpen: 'Open configuration',
		titleClose: 'Close configuration',
		altClose: 'Close configuration'
	},
	Bprint: {
		title: 'Print',
		alt: 'Print'
	},
	BfullScreen: {
		title: 'Full screen',
		alt: 'Full screen',
		titleExit: 'Exit full screen',
		altExit: 'Exit full screen'
	},
	BownerInfo: {
		titleOpen: 'Open owner information',
		altOpen: 'Open owner information',
		titleClose: 'Close owner information',
		altClose: 'Close owner information'		
	},
	BhelpInfo: {
		titleOpen: 'Open Help',
		altOpen: 'Open Help',
		titleClose: 'Close Help',
		altClose: 'Close Help'		
	},
	Bdownload: {
		title: 'Download',
		alt: 'Download',
		newWindow: 'new window'
	},
	Ndxon: 'of'
}
