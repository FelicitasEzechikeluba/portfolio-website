import Image from 'next/image'
import Link from 'next/link'
import { FiLink2 } from 'react-icons/fi'

const Work = () => {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 font-luckiest`}>Portfolio <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-5">
                {/* Project 1 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/Hospital records analysis.webp" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Hospital Records Analysis: Healthcare Utilization and Cost Insights</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                       Analyzed comprehensive hospital records to uncover patterns in healthcare utilization, treatment costs, and patient outcomes across different demographics and conditions. The analysis identified key cost drivers, high-utilization patterns, and opportunities for operational efficiency, providing actionable insights to optimize resource allocation and improve patient care delivery while managing healthcare costs effectively.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Power Query, DAX, Power BI, Power point, Ms Word
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/FelicitasEzechikeluba/TDI-POWER-BI-CAPSTONE-PROJECT--Hospital-Records-Analysis-Healthcare-Utilization-and-Cost-Insights"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://medium.com/@felicitasezechikeluba/hospital-records-analysis-healthcare-utilization-and-cost-insights-89e8fae0de8c"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/Maven Toys.webp" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Maven Toys Case Study:Cracking the Code of Retail Growth
</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Conducted an in-depth retail analytics study examining sales performance, inventory turnover, and customer purchasing patterns across Maven Toys&apos; product lines and store locations. The analysis revealed seasonal trends, top-performing product categories, and underperforming stores, delivering strategic recommendations that drive revenue growth, optimize inventory management, and enhance overall retail profitability.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            MSSQL, Excel, Power Query, Power Pivot, MS Word
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/FelicitasEzechikeluba/TDI-SQL-CAPSTONE-PROJECT--Maven-Toys-Stores-Product-and-Sales-Performance-Analysis"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://medium.com/@felicitasezechikeluba/cracking-the-code-of-retail-growth-a-maven-toys-case-study-a31ed6ebbf95"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/ESG Financial Analysis.webp" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">ESG & Financial Performance Analysis</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Explored the relationship between Environmental, Social, and Governance (ESG) metrics and corporate financial performance across multiple industries. Through statistical analysis and data visualization, the project quantified how sustainability initiatives correlate with profitability, stock performance, and long-term value creation, providing evidence-based insights for stakeholders on the business case for responsible corporate practices.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Excel, Pivot Table, Financial Analysis
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/FelicitasEzechikeluba/ESG-Financial-Performance-TDI-Excel-Capstone-Project"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://medium.com/@felicitasezechikeluba/esg-financial-performance-analysis-733d1b619b2b"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/Healthcare insights.jfif" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Healthcare Data Insights</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Developed a comprehensive dashboard reports examining healthcare trends, patient demographics, and service delivery metrics to support data-driven decision-making in the health sector. The analysis highlighted critical areas for intervention, resource optimization opportunities, and patterns in healthcare access, empowering stakeholders to improve public health outcomes and operational efficiency.

                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                           Excel, Pivot Tables, Data Visualization
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://www.linkedin.com/posts/felicitas-ezechikeluba_healthcareanalytics-dataforgood-publichealth-activity-7374747040548831234-eE4V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm3i8ABGiTWT8Qnb9YHK7F7sgenA9xtpC0"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://www.linkedin.com/posts/felicitas-ezechikeluba_healthcareanalytics-dataforgood-publichealth-activity-7374747040548831234-eE4V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm3i8ABGiTWT8Qnb9YHK7F7sgenA9xtpC0"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>


                {/* Blog Post Cards */}
               
            
            </div>
        </main>
    )
}

export default Work
