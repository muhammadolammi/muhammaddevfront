

export interface Playlist  {
	id:          string ;
	name   :     string ;
	description: string; 
  tutorials : [Tutorial];
}

export interface Post  {
	id:          string; 
	title :      string ;
	post_url:     string; 
	content :    string ;
	thumbnail: string;
	
}

export interface Tutorial  {
	id:        string; 
	title :      string ;
	tutorial_url: string ;
	description :string ;
	youtube_link: string ;
	playlist_id: string;
	thumbnail:string;
}


