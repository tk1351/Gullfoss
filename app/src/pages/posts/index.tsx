import { NextPage } from 'next'
import BaseHeader from '../../components/organisms/BaseHeader/BaseHeader'
import Head from 'next/head'
import { footerLinks, headerLinks } from '../../lib'
import BaseFooter from '../../components/organisms/BaseFooter/BaseFooter'

const Posts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gullfoss</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main>
        <BaseHeader links={headerLinks} />
        <p>Posts</p>
      </main>
      <BaseFooter links={footerLinks} />
    </div>
  )
}

export default Posts
