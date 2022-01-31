import aspida from '@aspida/axios'
import axios from 'axios'
import api from './$api'

export const client = api(
  aspida(axios, {
    headers: {
      'X-MICROCMS-API-KEY': `${process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}`,
    },
  })
)
