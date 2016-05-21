<!DOCTYPE html>
<html lang="en" ng-app="docscargo">
<head>
	<title>{{ config('app.name') . ' ' . config('app.version') }}</title>
	<meta charset="UTF-8" />	
	<link href="@{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css" media="all" />
	
	<style>
		/* 
		  Allow angular.js to be loaded in body, hiding cloaked elements until 
		  templates compile.  The !important is important given that there may be 
		  other selectors that are more specific or come later and might alter display.  
		 */
		[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
		  display: none !important;
		}
	</style>
</head>
<body>
	<div></div>
	<script src="@{{ elixir('js/app.js') }}"></script>	
</body>
</html>
