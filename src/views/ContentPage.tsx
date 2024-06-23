

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { F404Page } from '../common/F404Page'
import {  getPostWithTitle } from '../db/posts'
import { EmptyPost, EmptyTutorial, Post, Tutorial } from '../db/models'
import {  getTutorialWithTitle } from '../db/tutorial'
import DOMPurify from 'dompurify'
import { ReFormatTitle } from '../helperfunc/formatTitle'
import NavBar from '../common/NavBar'

type Props = {}

const ContentPage = (props: Props) => {
    const { title} = useParams<{title:string}>();
    const {contentType} = useParams<{contentType:string}>();
    // const [loading, setLoading]= useState<boolean>(false)
    
   

    const [post, setPost] = useState<Post>(EmptyPost)
    const [tutorial, setTutorial] = useState<Tutorial>(EmptyTutorial)
    useEffect(()=>{
        const fetchContent =()=>{
         if(contentType==="posts"){
             // Check if theres a valid content id
             if(title){
                const contentTitle = decodeURIComponent(title)   
                 getPostWithTitle(contentTitle).then((postData)=>{
                     setPost({
                         id: postData.id,
                         content: postData.content,
                         title: postData.title,
                         thumbnail: postData.thumbnail,
                         post_url: postData.post_url
                        })
                     
                 }).catch((e)=>{
                  console.log(e)
                  
                 })
             }
         }   
         if(contentType==="tutorials"){
             // Check if theres a valid content id
             if(title){
                const contentTitle = decodeURIComponent(title) 
                 getTutorialWithTitle(contentTitle).then((tutorialData)=>{
                    
                     setTutorial({
                         id: tutorialData.id,
                         description: tutorialData.description,
                         title: tutorialData.title,
                         thumbnail: tutorialData.thumbnail,
                         tutorial_url: tutorialData.tutorial_url,
                         youtube_link: tutorialData.youtube_link,
                         playlist_id: tutorialData.playlist_id
                        })
                     
                 }).catch((e)=>{
                  
                   console.log(e)
                 })
             } 
         }}
     
     
         fetchContent()
      },[])
// Handle for posts
   if(post!==EmptyPost){
  
   
        return (
            <>
            <NavBar />

            <div className="ContentPage">
                <h1 className="ContentTitle"> {ReFormatTitle(post.title)}</h1>
                <div className="ContentBody"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}>
               
                </div>
            </div> </>
        )
    
   
    
   }
//  Handle Tutorials

if(tutorial !==EmptyTutorial){
        return (
            <div className="ContentPage">
                <h1 className="ContentTitle"> {ReFormatTitle(tutorial.title)}</h1>
                <div className="ContentBody" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tutorial.description)  }}>
               
                </div>
            </div>
        )
    
   
    
   }

   return (
    <div>

        <F404Page />
    </div>
  )
}

export  {ContentPage}