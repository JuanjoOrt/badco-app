import React from 'react'
import Layout from '../../components/layout/Layout'
import { getCommunications } from '../../_services/comunicationsService'
import Card from '../../components/Card'
import LayoutContent from '../../components/layout/LayoutContent'

const data = getCommunications()

export default function Home () {
  return (
      <Layout>
        <LayoutContent>
          { data.map(item => <Card key={item.id} data={item}/>)}
        </LayoutContent>
      </Layout>
  )
}
