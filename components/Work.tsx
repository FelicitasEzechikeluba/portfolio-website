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
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Strategic Communication</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
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
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Project Title 2</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
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
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Project Title 3</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
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
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Project Title 4</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Project 5 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Project Title 5</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Documentation
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Project 6 */}
                <div className="bg-[#FAF9F6] p-5 rounded-xl">
                    <img src="/Amapiano.jpeg" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2">
                            <h2 className="font-bold text-xl text-black">Project Title 6</h2>
                        </div>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered a production-grade unified customer analytics platform for a large telecom operator facing high customer churn and fragmented reporting. The platform consolidates complaint, interaction, and customer data from S3, Google Sheets, and PostgreSQL, stages it as raw Parquet data, and transforms it into trusted analytical models in Snowflake.
                    </p>

                    <div className="border-t border-red-500 my-4"></div>
                    
                    <p className="text-sm mb-4">
                        <span className="font-bold text-black">Stack:</span>{' '}
                        <span className="text-gray-400">
                            Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                        </span>
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
                                target="_blank"
                                className="capitalize rounded-full text-sm"
                            >
                                Github
                            </Link>
                        </button>

                        <button className="w-44 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                                href="https://github.com/chik0di/coretelecoms-data-platform"
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