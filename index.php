<!doctype html>
<html><!-- InstanceBegin template="/Templates/main-pages.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=.75, user-scalable=yes, minimum-scale=0.0, maximum-scale=5.0" />
<!-- InstanceBeginEditable name="doctitle" -->
<title>Rockwell Partner Resource Page</title>
<link rel="stylesheet" type="text/css" href="../../wonderware/resources/node_modules/angular-material/angular-material.css" />
<link href="../../wonderware/resources/node_modules/mdi/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link type="text/css" rel="stylesheet" href="../../css/pricingpage.css" />
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->
<meta name="description" content="" />
<meta name="keywords" content=""/>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<style>
.pages {padding-top:0px !important;}
</style>
<script src="../../wonderware/resources/node_modules/angular/angular.min.js"></script>
<script src="../../wonderware/resources/node_modules/angular-animate/angular-animate.js"></script>
<script src="../../wonderware/resources/node_modules/angular-aria/angular-aria.js"></script>
<script src="../../wonderware/resources/node_modules/angular-material/angular-material.js"></script>
<script src="scripts/app.js"></script>
<script src="components/partport.ctr.js"></script>
<script src="components/partport.fac.js"></script>
<script src="components/register.ctr.js"></script>
<script src="components/login.ctr.js"></script>
<script src="components/reset.ctr.js"></script>
<script src="components/profile/main.profile.ctr.js"></script>
<script src="components/profile/pricing.ctr.js"></script>
<script src="components/events.ctr.js"></script>
<script src="components/presentations.ctr.js"></script>
<script src="../../wonderware/resources/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>

<!-- Firebase -->
<script src="https://cdn.firebase.com/js/client/2.2.4/firebase.js"></script>
<!-- AngularFire -->
<script src="https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js"></script> 
<!-- InstanceEndEditable -->
<link rel="icon" type="image/png" href="../../images/favicon.png" />
<link rel="apple-touch-icon-precomposed" href="../../custom_icon_precomposed.png"/> 
<link type="text/css" rel="stylesheet" href="../../css/styles-guts.css"/>
<link href='https://fonts.googleapis.com/css?family=Oswald:300,400,700|Ek+Mukta:900,400,700,300|Roboto:100,300,400,500' rel='stylesheet' type='text/css'>
</head>

<body>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-THJFRX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THJFRX');</script>
<!-- End Google Tag Manager -->
<?php include("../../include/navigation.php"); ?>
<?php include("../../include/page-header.php"); ?>
<!-- InstanceBeginEditable name="learning-ui" -->

<!-- InstanceEndEditable -->
<div class="main-sub-pages">
  <div class="pages">
<!-- InstanceBeginEditable name="Page-Content" -->
<div ng-app="partPortal">    
	
<div ui-view></div>   
    
</div>    
<!-- InstanceEndEditable -->
</div>
</div>
<!-- InstanceBeginEditable name="below-main-content" -->

<!-- InstanceEndEditable -->
<?php include("../../include/footer.php"); ?>

<!-- Script includes -->
<?php include("../../include/scripts.php"); ?>
<?php include("../../include/backToTop.php"); ?>
<?php include("../../include/social-time.php"); ?>

<!-- Mobile Nav -->
<div class="mobile-navigation">
	<?php include("../../include/bottomNav.php"); ?>
</div>
<!-- InstanceBeginEditable name="additonal-page-script" -->

<!-- InstanceEndEditable -->
<?php include("../../include/remarketing.php"); ?>
<?php include("../../include/tracking.php"); ?>
</body>
<!-- InstanceEnd --></html>
