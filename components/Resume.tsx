import { FiPocket } from 'react-icons/fi'

export default function Resume() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 font-luckiest`}>Skills <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5">
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Advanced Data Analysis</h6>
                    </div>

                    <p className="text-sm">I excel at exploring complex datasets, identifying patterns, and extracting meaningful insights using statistical methods and analytical techniques. My work ensures every analysis is thorough, accurate, and delivers actionable intelligence that directly impacts business outcomes.
                    </p>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl text-gray-700">Business Intelligence Tools
                        </h6>
                    </div>

                    <p className="text-sm mb-3 text-gray-500">I am proficient in industry-leading BI platforms like Power BI, Tableau, and Looker. I create dynamic, interactive dashboards and reports that transform raw data into intuitive visualizations, enabling stakeholders at all levels to understand and act on critical information quickly.
                        </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">SQL & Database Management
                        </h6>
                    </div>

                    <p className="text-sm">I write efficient, optimized SQL queries to extract and manipulate data from relational databases. My expertise includes query optimization, stored procedures, and database design, ensuring fast, reliable access to the information you need when you need it.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Data Modeling & Architecture
                    </h6>
                    </div>

                    <p className="text-sm">I design scalable, efficient data models that serve as the backbone for analytics and reporting. From dimensional modeling to normalization, I create structures that balance performance, flexibility, and maintainability while supporting current and future business needs.
                        </p>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl text-gray-700">Python & R Programming
                        </h6>
                    </div>

                    <p className="text-sm mb-3 text-gray-500">I leverage Python and R for advanced analytics, automation, and machine learning applications. My programming skills enable me to build custom solutions, automate repetitive tasks, and apply sophisticated analytical techniques that go beyond standard tool capabilities.
                        </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Statistical Analysis & Machine Learning
                        </h6>
                    </div>

                    <p className="text-sm">I apply statistical methods and machine learning algorithms to uncover hidden patterns, build predictive models, and generate forecasts. Whether it&apos;s regression analysis, classification, or clustering, I bring a rigorous, data-scientific approach to problem-solving.
                    </p>
                </div>

                <div className="bg-[#F2F7FC]  dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Data Visualization & Communication
                        </h6>
                    </div>

                    <p className="text-sm">I understand that effective communication isn&apos;t just about saying something; it&apos;s about presenting insights in the right way to the right audience. I create compelling visualizations and clear narratives that make complex data accessible and drive informed decision-making across your organization.</p>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl text-gray-700">Excel & Advanced Analytics
                        </h6>
                    </div>

                    <p className="text-sm mb-3 text-gray-500">I am an Excel power user, proficient in advanced formulas, pivot tables, macros, and Power Query. I quickly adapt to business environments where Excel remains central, delivering sophisticated analyses and automations that enhance productivity and decision-making speed.</p>
                </div>
                
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Reporting & Documentation
                        </h6>
                    </div>

                    <p className="text-sm">I produce clear, comprehensive reports that translate analytical findings into actionable recommendations. My documentation ensures that methodologies, assumptions, and insights are well-recorded, enabling knowledge transfer and supporting informed decision-making across teams.</p>
                </div>


            </div>
        </main>
    )
}