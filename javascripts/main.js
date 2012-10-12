var viewer_schematic = null;
var viewer_top = null;
var viewer_bottom = null;

$(function() {

    // Initialize SeaDragon Deep Zoom Top Layout
    viewer_schematic = new Seadragon.Viewer("schematic");
    viewer_schematic.openDzi("http://cache.zoom.it/content/prPg.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" TileOverlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="3508" Height="2479" /></Image>');

    // Initialize SeaDragon Deep Zoom Top Layout
    viewer_top = new Seadragon.Viewer("top_layout");
    viewer_top.openDzi("http://cache.zoom.it/content/vuE5.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="4156" Height="2539" /></Image>');

    // Initialize SeaDragon Deep Zoom Bottom Layout
    viewer_bottom = new Seadragon.Viewer("bottom_layout");
    viewer_bottom.openDzi("http://cache.zoom.it/content/kD0N.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="4156" Height="2539" /></Image>');
});