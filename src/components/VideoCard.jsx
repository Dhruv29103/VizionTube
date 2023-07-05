import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoChannelUrl,demoVideoUrl,demoVideoTitle,demoThumbnailUrl,demoChannelTitle } from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  console.log('videocard',videoId);   
  console.log('snippet',snippet);    
  return ( 
    <Card>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}> 
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ height:180, width:358 }}
        />  
      </Link> 
      <CardContent sx={{background:'#1e1e1e',height:'160px'}}>
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0,60) || 
            demoVideoTitle.slice(0,60)}
          </Typography> 
        </Link> 
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color="#fff">
            {snippet.ChannelTitle ||  
            demoChannelTitle}  
          </Typography> 
        </Link> 
      </CardContent>
    </Card>
    )
} 

export default VideoCard