/* eslint-disable */
import { AspidaClient } from 'aspida'
import { MockClient, MockConfig, mockClient } from 'aspida-mock'
import api from './$api'
import mock0 from './v1/tags/index'
import mock1 from './v1/posts/index'
import mock2 from './v1/posts/_postId@string'

export const mockRoutes = () => [
  { path: '/v1/tags', methods: mock0 },
  { path: '/v1/posts', methods: mock1 },
  { path: '/v1/posts/_postId@string', methods: mock2 }
]

export default <U>(client: AspidaClient<U> | MockClient<U>, config?: MockConfig) => {
  const mock = 'attachRoutes' in client ? client : mockClient(client)
  mock.attachRoutes(mockRoutes(), config)

  return api(mock)
}
