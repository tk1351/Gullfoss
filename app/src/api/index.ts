import aspida from '@aspida/axios'
import axios from 'axios'
import api from './$api'
import mock from './$mock'

export const client =
  process.env.NODE_ENV === 'development'
    ? api(
        aspida(axios, {
          headers: {
            'X-MICROCMS-API-KEY': `${process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}`,
          },
        })
      )
    : mock(aspida())
//
// export const client = api(
//   aspida(axios, {
//     headers: {
//       'X-MICROCMS-API-KEY': `${process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}`,
//     },
//   })
// )
