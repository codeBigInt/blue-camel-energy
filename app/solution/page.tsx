import React from 'react'
import CompanyDetailHeader from '../custom-components/CompanyPage/CompanyDetailHeader'
import AboutCompany from '../custom-components/CompanyPage/AboutCompany'
import CompanyService from '../custom-components/CompanyPage/CompanyService'
import Client from '../custom-components/Client'
import CareerComp from '../custom-components/CompanyPage/CareerComp'

const SolutionsPage = () => {
  return (
    <div>
      <CompanyDetailHeader />
      <AboutCompany />
      <CompanyService />
      <Client />
      <CareerComp />
    </div>
  )
}

export default SolutionsPage
