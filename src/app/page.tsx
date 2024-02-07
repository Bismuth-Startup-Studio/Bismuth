import React from 'react'
import HeaderSection from './_sections/HeaderSection'
import BenefitsSection from './_sections/BenefitsSection'
import SDGSection from './_sections/SDGSection'
import CompaniesSection from './_sections/CompaniesSection'
import QuoteSection from './_sections/QuoteSection'
import SkillsSection from './_sections/SkillsSection'
import BottomSection from '../components/BottomSection/BottomSection'

export default function Home() {
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