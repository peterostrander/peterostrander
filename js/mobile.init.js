if (Modernizr.touch) {
  // iOS scale fix
  MBP.scaleFix();

  // hide url bar on mobile
  MBP.hideUrlBarOnLoad();
}