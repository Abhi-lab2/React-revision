import { Box, Center, Heading, Stack ,Flex,Text, useColorModeValue,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FilterComponent } from '../Components/FilterComponent'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from "../Redux/products/action"
import { useSearchParams } from 'react-router-dom'

import { Link } from "react-router-dom"
import ProductSimple from '../Components/ProductSimple'
import { PaginationComponent } from '../Components/Pagination'


export const Products = () => {
const dispatch=useDispatch();
const [searchParams]=useSearchParams()
const [page, setPage] = useState(Number(searchParams.get("page") || 1));  

const products=useSelector((store)=>store.ecommerceData.products)

  useEffect(()=>{
    if(products?.length===0){
      let params={
        category:searchParams.getAll("category")
      }
      dispatch(fetchData(params, page))
    }
  },[dispatch, products?.length, searchParams])

  console.log(products)

  useEffect(() => {
    dispatch(fetchData(page))
  },[page])
  console.log(page, dispatch)

  
  return (
   
    <Box>
      <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

      <Box minWidth={"15rem"}>
        <FilterComponent/>
      </Box>
      <Box>
        <Heading as="h3">Products</Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">

          {products.map((product)=>(
            <Link key ={product.id} to={`/products/${product.id}`}> 
              <ProductSimple  key ={product.id} image={product.image} title={product.title} price={product.price}/>
            </Link>
          ))}
        </Flex>
        {/* <PaginationComponent/> */}
        {/* <button disabled={page===1} onClick={() => setPage(page-1)}>prev</button>{" "}
        <button  onClick={() => setPage(page+1)}>next</button> */}
      </Box>
      </Stack>
    </Box>
  )
}

//  function ProductSimple({image,title,price}) {
//   return (
//     <Center py={12}>
//       <Box
//         role={'group'}
//         p={6}
//         maxW={'330px'}
//         w={'full'}
//         bg={useColorModeValue('white', 'gray.800')}
//         boxShadow={'2xl'}
//         rounded={'lg'}
//         pos={'relative'}
//         zIndex={1}>
//         <Box
//           rounded={'lg'}
//           mt={-12}
//           pos={'relative'}
//           height={'230px'}
//           _after={{
//             transition: 'all .3s ease',
//             content: '""',
//             w: 'full',
//             h: 'full',
//             pos: 'absolute',
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${image})`,
//             filter: 'blur(15px)',
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: 'blur(20px)',
//             },
//           }}>
//           <Image
//             rounded={'lg'}
//             height={230}
//             width={282}
//             objectFit={'contain'}
//             src={image}
//           />
//         </Box>
//         <Stack pt={10} align={'center'}>
         
//           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//            {title}
//           </Heading>
//           <Stack direction={'row'} align={'center'}>
//             <Text fontWeight={800} fontSize={'xl'}>
//             ₹{price}
//             </Text>
//             <Text textDecoration={'line-through'} color={'gray.600'}>
//             ₹{price + 128}
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
