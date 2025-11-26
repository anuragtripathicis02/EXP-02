import Home from '@/components/profileflow/editprofilestudent/Home'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  )
}

export default page