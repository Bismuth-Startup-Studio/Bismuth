import React from 'react'
import HeaderSection from './Sections/HeaderSection'
import BenefitsSection from './Sections/BenefitsSection'
import SDGSection from './Sections/SDGSection'
import CompaniesSection from './Sections/CompaniesSection'
import QuoteSection from './Sections/QuoteSection'
import SkillsSection from './Sections/SkillsSection'
import BottomSection from '../../components/BottomSection/BottomSection'

function Home() {
  return (
    <section>
      <HeaderSection/>
      <BenefitsSection/>
      <SDGSection/>
      <CompaniesSection/>
      <QuoteSection/>
      <SkillsSection/>
      <BottomSection/>
    </section>
  )
}

export default Home