

export interface Playlist  {
	id:          string ;
	name   :     string ;
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


export const EmptyPost:Post = {
	id: "",
	title:"",
	thumbnail:"",
	content: "",
	post_url:""
}

export const EmptyTutorial:Tutorial = {
	id: "",
	title:"",
	thumbnail:"",
	description: "",
	tutorial_url:"",
	youtube_link:"",
	playlist_id:""
}