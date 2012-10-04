var viewer_top = null;
var viewer_bottom = null;

$(function() {

    // Initialize SeaDragon Deep Zoom Top Layout
    viewer_top = new Seadragon.Viewer("top_layout");
    viewer_top.openDzi("http://cache.zoom.it/content/eOel.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="3076" Height="2038" /></Image>');

    // Initialize SeaDragon Deep Zoom Bottom Layout
    viewer_top = new Seadragon.Viewer("bottom_layout");
    viewer_top.openDzi("http://cache.zoom.it/content/ZhCD.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="jpg" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="2363" Height="945" /></Image>');
});