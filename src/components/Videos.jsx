import React from 'react'
import {Stack,Box} from '@mui/material';
import {ChannelCard,VideoCard} from '../components/index'

const Videos = ( {videos} ) => {
  console.log('Videos',videos);  
  return ( 
    <Stack direction='row' flexWrap='wrap' justifycotent='start' gap={2}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */} 
        </Box> 
      ))} 
    </Stack>  
  )
}

export default Videos
