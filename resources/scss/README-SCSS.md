
## SASS Directories


1.  Base

	The base directory contains styles that help start a project. The base directory could contain the following type of SASS files:
	* Vendor dependencies (Compass, Foundation)
	* Authored dependencies (Mixins, variables, Extends, general selector styles)
	* Fonts
	* Reset

2.  Layout

	The layout directory contains styles that are large containers of a page. This directory could include SASS files like:
	* Responsive Grid
	* Page specific layouts

3.  Modules

	The modules directory will probably contain the bulk of your SASS files. A page may consist of multiple modules and should be styled individually. These modules may include files like:
	* Header
	* Footer
	* Navigation
	* Content Block

4.  Views

	The views directory contains any specific styles that a page may need to change from the generic layout or modules. For example the header in your website maybe green throughout a website or application but on a specific page you want it to change to a blue background that's where the views files would come in.


## Commenting
  - Using "// " for your comments in SASS and they will not output in the compiled CSS


## Variables
  - Any values commonly throughout the SASS build should be set as a variable (fonts, colors, percentages, z-index)
  - All colors should be variables


## Order of imports
  - Vendor dependencies (compass)
  - Authored dependencies (Mixins, variables)
  - Base styles ( reset, fonts, typography )
  - Layout styles
  - Modules styles
  - Views styles