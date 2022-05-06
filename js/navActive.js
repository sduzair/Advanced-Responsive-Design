/* Author: usyed6155@conestogac.on.ca - Uzair Ahmed Syed */
// This hightlights current active page in nav

document.addEventListener( "DOMContentLoaded", () => {
  let current = 0;
  const navLinks = document.querySelectorAll( "nav a" );
  const noOfNavLinks = navLinks.length;
  for( var i = 0; i < noOfNavLinks; i++ ) {
    if( document.URL.includes( navLinks[ i ].href ) ) {
      current = i;
    }
  }
  document.links[ current ].className = document.links[ current ].className
    ? document.links[ current ].className + " active-nav"
    : "active-nav";
} );
