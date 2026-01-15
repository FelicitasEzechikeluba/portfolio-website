import { Luckiest_Guy } from 'next/font/google'
import { FiDroplet, FiDownloadCloud, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { SiGithub } from "react-icons/si"
import { SiCredly } from "react-icons/si"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6"
import { SiMedium } from "react-icons/si"
import { MdOutlineViewAgenda } from "react-icons/md";
import Link from "next/link";
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>About Me <span className="text-6xl"></span></h1>
            <p className="mt-4">Are you searching for a data-driven storyteller who can transform raw numbers into actionable insights? Do complex datasets leave you overwhelmed and unsure where to start? Does making critical business decisions feel risky without clear, reliable analytics? Do you need someone who can bridge the gap between data and strategy?
                Does your work schedule make it a little difficult for you to get things done?
                <p>Introducing DataVision Analytics and Associates, your trusted partner who can do it all! I am a results-oriented data professional capable of analyzing complex datasets, building intuitive dashboards, and delivering insights with exceptional clarity and precision.</p>
                <p>Forget spending countless hours wrestling with data or struggling to communicate findings effectively. I am a passionate and skilled analyst who will save you time and effort while ensuring your data tells a compelling story that drives informed decision-making. Let's turn your data into your competitive advantage!</p></p>

             <div className="icons flex gap-3 mt-3">
                <Link href={'https://github.com/FelicitasEzechikeluba'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiGithub size={16} className='text-black' />
                </Link>
                <Link href={'https://www.linkedin.com/in/felicitas-ezechikeluba'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FaLinkedinIn size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://www.credly.com/users/felicitas-ezechikeluba'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiCredly size={16} className='text-black' />
                </Link>
                <Link href={'https://medium.com/@felicitasezechikeluba'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiMedium size={16} className='text-black' />
                </Link>
            </div>

            <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gray-500 lg:hidden rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                 < MdOutlineViewAgenda className='text-white' />
                        <Link href={'https://acrobat.adobe.com/id/urn%3Aaaid%3Asc%3AEU%3A50f562e2-dc84-4659-933e-5a2c15138d8f/?x_api_client_id=bookmark&x_api_client_location=Reader&filetype=application%2Fpdf'} target="_blank" className="capitalize rounded-full text-sm"> View Resume </Link>
            </button>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">What i do</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl text-gray-700">Business Intelligence & Dashboard Development</h6>

                </div>
                    <p className="text-sm mb-3 text-gray-500">From raw data to actionable insights, I help you build powerful, interactive dashboards that monitor key metrics, identify trends, and empower stakeholders to make data-driven decisions with confidence and clarity.

                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet /> 
                        <h6 className="font-bold text-2xl">Data Analysis & Reporting</h6>

                    </div>

                    <p className="text-sm">I dive deep into your data to uncover patterns, anomalies, and opportunities. Through comprehensive analysis and clear reporting, I transform complex information into digestible insights that drive strategic action and measurable results.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Data Cleaning & Preparation</h6>

                    </div>

                    <p className="text-sm">I transform messy, incomplete datasets into clean, structured data ready for analysis. Through careful validation, standardization, and quality checks, I ensure your data is accurate, consistent, and reliable, laying the groundwork for trustworthy insights and confident decision-making.</p>


                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl text-gray-700">Predictive Analytics & Forecasting</h6>

                    </div>

                    <p className="text-sm mb-3 text-gray-500">Using statistical modeling and machine learning techniques, I help you anticipate future trends, forecast demand, and identify potential risks before they impact your business, enabling proactive rather than reactive decision-making.</p>

                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl text-gray-700">Data Modeling & Database Design</h6>

                    </div>

                    <p className="text-sm mb-3 text-gray-500">I architect robust data models and design efficient database structures that ensure data integrity, optimize query performance, and create a solid foundation for all your analytics and reporting needs.</p>

                </div>
                
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Data Visualization & Storytelling</h6>

                    </div>

                    <p className="text-sm">Whether it's executive presentations or operational dashboards, I transform numbers into compelling visual narratives. Through thoughtful design and strategic communication, I turn insights into words and visuals that inspire action and resonate with your audience.

                    </p>
                </div>
            </div>
        </main>
    )
}