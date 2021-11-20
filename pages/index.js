import React, { useRef } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import LargeCard from '../components/LargeCard'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'


const Index = ({exploreData, cardsData}) => {

	return (
    	<div>
			<Head>
				<title>AirBNB Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header/>
			<Banner/>

			<main className="max-w-5xl mx-auto px-8 sm:px-16">
				<section className="py-10">
					<h1 className="text-2xl font-bold mb-10">Explore Nearby</h1>
					<div className="grid sm:grid-cols-location gap-6">
						{exploreData?.map(item => (
							<SmallCard key={item.location} img={item.img} location={item.location} distance={item.distance}/>
						))}
					</div>
				</section>

				<section className="py-10">
					<h1 className="text-2xl font-bold mb-3">Live Anywhere</h1>
					<div className="flex items-center justify-end mb-5 space-x-3 opacity-40 animate-bounce">
						<ArrowCircleRightIcon className="h-5"/>
						<p>Scroll to right</p>
					</div>
					<div className="flex scrollbar-hide overflow-x-scroll space-x-5" >
						{cardsData.map(item => (
							<MediumCard key={item.title} img={item.img} title={item.title}/>
						))}
					</div>
				</section>

				<section className="py-10 relative">
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						description="Whislists curated by Airbnb."
						buttonText="Get Inspired"/>
				</section>
			</main>

			<Footer/>
    	</div>
  	)
}

export const getStaticProps = async() => {

	const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json())

	const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json())

	return {
		props: {
			exploreData,
			cardsData
		}
	}
}

export default Index
