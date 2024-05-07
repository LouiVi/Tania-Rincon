"use strict"

//Create a Home object.
function Home( path, layContent )
{
var self = this;
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn"), self.Anim;
        else lay.Animate( "FadeOut" );
    }
    this.Anim = function()
{
img1.Animate( "FadeOut" );
img2.Animate( "ZoomOut" );
	img1.Gone();
	img2.Gone();
	player1.Animate( "NewsPaper" )
		player2.Animate( "RubberBand" )
		setTimeout(self.AntiAnim, 4500);
}

  this.AntiAnim = function()
{
player2.Animate( "FadeOut" );
player1.Animate( "ZoomOut" );
	player1.Gone();
	player2.Gone();
	img1.Animate( "NewsPaper" )
		img2.Animate( "RubberBand" )
		setTimeout(self.Anim, 4500);
}
    
    //Create layout for app controls.	
    var lay = app.CreateLayout( "Linear", "Top");//,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img1 = app.CreateImage( "Img/1.jpg", 1);
	
	
	var player1 = app.CreateVideoView( 1,1, "ShowControls, AutoPlay");
	player1.SetOnReady( ()=>{player1.Play()} )
	player1.SetOnComplete( ()=>{player1.Play()} )
	player1.SetFile( "Img/1.webm" )
	player1.Gone();
    lay.AddChild( player1);
    
    //Add a logo.
	var img2 = app.CreateImage( "Img/2.jpg", 1 );
	
	
	var player2= app.CreateVideoView( 1,1, "ShowControls, AutoPlay");
	player2.SetOnReady( ()=>{player2.Play()} )
	player2.SetOnComplete( ()=>{player2.Play()} )
	player2.SetFile( "Img/2.webm" )
	player2.Gone();
	lay.AddChild( player2);
	lay.AddChild( img1 );
	lay.AddChild( img2 );
    
    setTimeout(self.Anim, 4500)
     
}
