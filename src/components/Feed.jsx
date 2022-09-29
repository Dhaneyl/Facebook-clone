import { Box, Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Post } from './Post';

export const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
    {loading ? (
      <Stack spacing={1}>
        <Skeleton variant="text" height={100} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="rectangular" height={300} />
      </Stack>
    ) : (
      <>
        <Post image="https://sumedico.blob.core.windows.net/images/2020/03/17/cuidadosgatobebe_2-focus-min0.07-0.45-640-384.jpg" name="Nicole Sanchez" avatar="https://scontent.fhex6-1.fna.fbcdn.net/v/t39.30808-6/280293358_5454931571207745_5606055162842981290_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xPFo5CZhRd8AX9XKQHh&_nc_ht=scontent.fhex6-1.fna&oh=00_AT8QL2E4h4P787rJ_SSf7Zrzmlq8Zbv4whr2urNGPiLCgw&oe=633A4D46"/>
        <Post image="https://i.pinimg.com/564x/a1/44/79/a14479fad7d0065e8e763421545000c1.jpg" name="Denisse Wright" avatar="https://scontent.fhex6-1.fna.fbcdn.net/v/t39.30808-6/281457554_2965378427093267_5611204816637298434_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=2S3zhOM9DYUAX_JaVrW&_nc_ht=scontent.fhex6-1.fna&oh=00_AT9xSrfGBJmokVzPcHcqSg0AoTol2UcfXwEli8oTpN-Jjg&oe=633A562F"/>
        <Post image ="https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg" name="Pizza Huts" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPNucXLFe4sHTZzKZLtyImpM64RffIQJ58A&usqp=CAU"/>
        <Post image="https://d2fzi53ct7ira4.cloudfront.net/wp-content/uploads/2022/09/elia-plantilla-el-informe-2.webp" name="Telenoticias" avatar="https://i0.wp.com/todoporelarterd.com/wp-content/uploads/2020/03/Logo-Telenoticias.jpg?fit=530%2C445&ssl=1"/>
        <Post image="https://www.gifcen.com/wp-content/uploads/2022/06/one-piece-gif-7.gif" name="Ulices Chamarra" avatar="https://scontent.fhex6-1.fna.fbcdn.net/v/t39.30808-6/240511510_1516988945306116_1473600208695911027_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=51Nksr-yth4AX-tfmwO&tn=veVTF2avcfQj07jt&_nc_ht=scontent.fhex6-1.fna&oh=00_AT_b2E4kxRvF-kI-QI4u1ue8GXqnJxAc6FlWXDGHMu6YLQ&oe=633A5810"/>
        <Post image="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/web-development-t.jpg" name="Ultimo en tecnologia" avatar="https://w1.pngwing.com/pngs/1000/363/png-transparent-user-technology-avatar-communication-line.png"/>
      </>
    )}
  </Box>
  )
}
