import React from 'react'
import {Metadata} from "next";
import {AiOutlineCheckCircle, AiOutlineFilePdf} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";
import {FaSquareFacebook} from "react-icons/fa6";
import {BsDribbble, BsInstagram} from "react-icons/bs";
import Image from "next/image";
import image1 from "/public/assets/campaign-details-img-1.jpg";
import image2 from "../../../public/assets/page-header-bg.jpg";
import image3 from "../../../public/assets/comment-1-2.png";
import image4 from "../../../public/assets/organizer-img-1.png";
import image5 from "../../../public/assets/summary-img-1.jpg";
import image6 from "../../../public/assets/summary-img-2.jpg";
import image7 from "../../../public/assets/comment-1-1.png";
import image8 from "../../../public/assets/recent-donation-img-1.jpg";
import image9 from "../../../public/assets/recent-donation-img-2.jpg";
import image10 from "../../../public/assets/recent-donation-img-3.jpg";


export const metadata: Metadata = {
    title: 'Donations',
    description: 'This is the donations page',
}
const Donations = () => {
    return (
        <div>
            <section src={image2} alt="image2" className=" w-full h-[23rem] bg-no-repeat bg-cover
            before:content-['']  before:left-0 before:h-[23rem] before:w-[100%]
             before:bg-[#2C2734] before:opacity-[0.6] before:absolute">
            <div className=''>
                <div className='relative block text-center pt-[7.2rem]'>
                    <h2 className='font-abril text-[#FFFFFF] text-[3.5rem] font-bold  tracking-wider'>Donations</h2>
                    <div className='flex  font-shadows text-[#FFFFFF] text-[1.5rem] pl-[35.5rem] gap-4'>
                        <p className=' transition-colors duration-500 ease-in-out hover:text-[#FF6C1E] cursor-pointer tracking-wider'>Home</p>
                        <p>/</p>
                        <p className=' transition-colors duration-500 ease-in-out hover:text-[#FF6C1E] cursor-pointer tracking-wider'>Donation
                            Details</p>
                    </div>
                </div>
            </div>
        </section>
            <div className='flex'>
                <div className='w-[50rem]  rounded-t-lg ml-[5.5rem] mt-[7.5rem]'>
                    <div className='flex'>

                        <Image src={image1} alt="campaign"
                               className="rounded-t-lg w-[48.4rem] h-[28.5rem] bg-cover bg-no-repeat"/>
                            <div
                                className='font-rubik bg-[#FF9D00] w-[4.813rem] h-[2.25rem] text-white flex items-center justify-center ml-[42.2rem] mt-[26.2rem] rounded-t-lg'>Food
                            </div>

                    </div>
                    <div className='w-[48.4rem] h-[8.688rem]  border-b-2 border-l-2 border-r-2 rounded-b-lg'>
                        <div className='flex'>
                            <div
                                className='w-[43rem] h-[0.625rem] bg-[#EAE5E3] flex mt-[3rem] ml-[2.5rem] rounded-r-full'>
                                <div className='w-[15.479rem] h-[0.625rem] bg-[#FF6D12]  rounded-full'></div>
                                <p className='font-rubik mt-[-1.6rem] ml-[-2rem]'>36%</p>
                            </div>
                        </div>


                        <div className='flex mt-[1rem]'>
                            <span className='font-rubik flex text-[1.25rem] ml-[2.4rem]'>
                                $25,270
                                <p className='text-[0.875rem] text-[#88858E]  ml-1 mt-[0.4rem] '>Raised</p>
                            </span>
                            <span className='font-rubik flex text-[1.25rem]  ml-[28.3rem]'>
                                $30,000
                                <p className='text-[0.875rem] text-[#88858E] ml-1 mt-[0.4rem]'>Goal</p>
                            </span>
                        </div>
                    </div>
                    <div className='mt-6 w-[48.125rem]'>
                        <p className='font-rubik  text-[2.125rem] font-semibold'>Raise Fund for Clean & Healthy
                            Water</p>
                        <p className='text-[1.125rem] font-semibold text-[#88858E] leading-loose mt-8'>Lorem ipsum dolor
                            sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of
                            Lorem Ipsum available, but the majority have alteration in some injected or words which
                            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem
                            Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
                            the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                            combined with a handful of model sentence structures, </p>
                    </div>
                    <div className='mt-16 w-[48.125rem]'>
                        <p className='font-rubik  text-[2.125rem] font-semibold'>Summary</p>
                        <p className='text-[1.125rem] font-semibold text-[#88858E] leading-loose mt-8'>Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type simen book. </p>
                    </div>
                    <div className='mt-[3rem]'>
                        <ul className='items-center '>
                            <li className='flex '>
                                <AiOutlineCheckCircle className='text-[2rem]  text-[#FF6D12]'/>
                                <p className='font-rubik text-[1.25rem] ml-[1rem]'>Nsectetur cing do not elit.</p>
                            </li>
                            <li className='flex mt-4'>
                                <AiOutlineCheckCircle className='text-[2rem] text-[#FF6D12]'/>
                                <p className='font-rubik text-[1.25rem] ml-[1rem]'>Suspe ndisse suscipit sagittis in
                                    leo.</p>
                            </li>
                            <li className='flex mt-4'>
                                <AiOutlineCheckCircle className='text-[2rem] text-[#FF6D12]'/>
                                <p className='font-rubik text-[1.25rem] ml-[1rem]'>Entum estibulum dignissim lipsm
                                    posuere.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex mt-[3.8rem]'>
                        <div className='w-[25rem] h-[16.063rem] '>
                            <Image src={image5} className=" w-[23.125rem] h-[100%] rounded-xl" alt='summary'/>

                        </div>
                        <div className='w-[25rem] h-[16.063rem] '>

                            <Image src={image6} className=" w-[23.125rem] h-[100%] rounded-xl" alt=''/>
                        </div>

                    </div>
                    <div className='mt-6 w-[48.125rem]'>
                        <p className='text-[1.125rem] font-semibold text-[#88858E] leading-loose mt-14'>Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry. orem Ipsum has been the
                            industry's standard dummy text ever since the when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className='mt-12 w-[48.125rem]'>
                        <p className='font-rubik  text-[2.125rem] font-semibold'>Campaign Map</p>
                        <section className='w-[100%] h-[34rem] mt-[2rem] relative block'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3159595774714!2d79.99727977406721!3d7.089324716331443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb1c286b065b%3A0x13616876f884dc14!2sJava%20Institute%20for%20Advanced%20Technology%20Gampaha!5e0!3m2!1sen!2slk!4v1696091561482!5m2!1sen!2slk"
                                style={{border: "0"}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='w-[100%] h-[34rem]'
                                title='map'
                            >

                            </iframe>
                        </section>
                    </div>
                    <div className='flex '>

                        <div
                            className=" transition-colors duration-500 ease-in-out w-[13.438rem] bg-orange-500 h-[4.188rem]  mt-[2rem] flex rounded-full cursor-pointer hover:bg-black ">
                            <p className='text-[#FFFFFF] font-bold font-sans flex items-center pl-14 text-lg'>Donate
                                Now</p>

                        </div>
                        <div className='flex justify-center items-center  gap-3  mt-[2rem] ml-[1rem]'>
                            <div
                                className='transition-colors duration-500 ease-in-out rounded-full w-[2.5rem] h-[2.5rem] bg-[#56B4E5] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>
                                <BiLogoTwitter className='text-white text-[1.2rem] '/>
                            </div>
                            <div
                                className='transition-colors duration-500 ease-in-out  rounded-full w-[2.5rem] h-[2.5rem] bg-[#465FDD] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>

                                <FaSquareFacebook className='text-white text-[1rem] '/>
                            </div>
                            <div
                                className='transition-colors duration-500 ease-in-out rounded-full  w-[2.5rem] h-[2.5rem] bg-[#D8423F] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>

                                <BsDribbble className='text-white text-[1rem] '/>
                            </div>
                            <div
                                className='transition-colors duration-500 ease-in-out rounded-full  w-[2.5rem] h-[2.5rem] bg-[#5374A0] flex justify-center items-center hover:bg-[#FF6D12] cursor-pointer'>

                                <BsInstagram className='text-white text-[1rem] '/>
                            </div>
                        </div>
                    </div>


                    <div className='w-[48.125rem] h-[11.25rem]  bg-[#F7F4F2] rounded-lg mt-[2rem] flex'>
                        <div
                            className='w-[4.375rem] h-[4.375rem] rounded-full bg-[#FF9D00] flex justify-center items-center mt-[3.4rem] ml-[3.5rem]'>
                            <AiOutlineFilePdf className='text-[2rem] text-white'/>
                        </div>
                        <p className='font-shadows  text-[1.875rem] items-center flex ml-5'>Our Presentation</p>
                        <div
                            className=" transition-colors duration-500 ease-in-out w-[8.125rem] bg-orange-500 h-[2.75rem] ml-[16rem] mt-[4.4rem] flex items-center justify-center rounded-full cursor-pointer hover:bg-black ">
                            <p className='text-[#FFFFFF] font-bold font-sans  text-[0.875rem]'>Download</p>

                        </div>
                    </div>
                    <div className='mt-10 w-[48.125rem]'>
                        <p className='font-rubik  text-[2.125rem] font-semibold'>2 Comments</p>
                        <div className='flex mt-[3rem]'>
                            <div className='w-[10.375rem] h-[10.375rem] rounded-full'>
                                <Image src={image7} className="w-[10.375rem] h-[10.375rem] rounded-full" alt=''/>
                            </div>
                            <div className='ml-[2rem] w-[34.938rem] h-[10.375rem]'>

                                <p className='font-rubik  text-[1.25rem]  '>Kevin Matin</p>
                                <p className='mt-[2rem] leading-loose font-rubik text-[1rem] text-[#88858E]'>It has
                                    survived not only five centuries, but also the leap into electronic typesetting
                                    unchanged. It was popularised in the sheets containing lorem ipsum is simply free
                                    text.</p>

                                <div
                                    className=" mt-[-10rem] transition-colors duration-500 ease-in-out w-[6.188rem] bg-orange-500 h-[2.75rem] ml-[28.8rem]  flex items-center justify-center rounded-full cursor-pointer hover:bg-black ">
                                    <p className='text-[#FFFFFF] font-bold font-sans  text-[0.875rem]'>Reply</p>

                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-3 bg-gray-200 border-0 mt-16 w-[100%]"></hr>
                        <div className='flex mt-[3rem]'>
                            <div className='w-[10.375rem] h-[10.375rem] rounded-full'>
                                <Image src={image3} className="w-[10.375rem] h-[10.375rem] rounded-full" alt=''/>
                            </div>
                            <div className='ml-[2rem] w-[34.938rem] h-[10.375rem]'>

                                <p className='font-rubik  text-[1.25rem]  '>Sarah Albert</p>
                                <p className='mt-[2rem] leading-loose font-rubik text-[1rem] text-[#88858E]'>It has
                                    survived not only five centuries, but also the leap into electronic typesetting
                                    unchanged. It was popularised in the sheets containing lorem ipsum is simply free
                                    text.</p>

                                <div
                                    className=" mt-[-10rem] transition-colors duration-500 ease-in-out w-[6.188rem] bg-orange-500 h-[2.75rem] ml-[28.8rem]  flex items-center justify-center rounded-full cursor-pointer hover:bg-black ">
                                    <p className='text-[#FFFFFF] font-bold font-sans  text-[0.875rem]'>Reply</p>

                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-3 bg-gray-200 border-0  w-[100%] mt-16"></hr>
                        <div className='mt-16 w-[48.125rem]'>
                            <p className='font-rubik  text-[2.125rem] font-semibold'>Leave a Comment</p>
                        </div>

                        <div className='w-[50rem] h-[39.938rem]'>
                            <div className='flex'>
                                <div className=' mt-[3rem]'>
                                    <input placeholder='Your Name'
                                           className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10 placeholder:text-black '/>
                                </div>
                                <div className='ml-[1.5rem] mt-[3rem]'>
                                    <input placeholder='Email Address'
                                           className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10  placeholder:text-black '/>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='mt-[2rem]'>
                                    <input placeholder='Phone Number'
                                           className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10  placeholder:text-black '/>
                                </div>
                                <div className='ml-[1.5rem] mt-[2rem]'>
                                    <input placeholder='Subject'
                                           className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10 placeholder:text-black '/>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className=' mt-[2rem] h-[12rem]'>
                                    <textarea placeholder='Write a message'
                                              className='w-[41.126rem] h-[12rem] bg-[#F7F4F2] rounded-3xl pl-10 pr-10 placeholder:text-black pt-5 pb-5'></textarea>
                                </div>
                            </div>
                            <div
                                className=" transition-colors duration-500 ease-in-out w-[16.188rem] bg-orange-500 h-[4.188rem] mt-[2rem] flex justify-center items-center rounded-full cursor-pointer hover:bg-black ">
                                <p className='text-[#FFFFFF] font-bold font-sans text-[1rem]'>Submit Comment</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[23rem]  mt-[7.5rem] '>
                    <div className='bg-[#FF6D12] w-[100%] h-[30rem] rounded-lg'>
                        <div className='flex justify-center items-center pt-[3rem]'>
                            <Image src={image4} className=" w-[13.063rem] h-[13.063rem] rounded-full" alt=''/>
                        </div>
                        <div className='flex justify-center items-center pt-[1rem]'>
                            <p className='font-shadows text-white text-[1.875rem]'>Jessica Smith</p>
                        </div>
                        <div className='flex justify-center items-center leading-loose'>
                            <div className='w-[15.625rem] h-[6.375rem]'>
                                <p className='font-rubik text-white text-[1.125rem] text-center'>It uses a dictionary of
                                    over lorem ipsum simply free text latin words,</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F7F4F2] w-full h-[30rem] rounded-lg mt-[2rem]'>
                        <div>
                            <p className='font-rubik text-black text-[1.25rem] pt-[2.5rem] pl-[3rem] font-semibold'>Recent
                                Donations</p>
                            <div className='flex pt-[1.5rem]  pl-[3rem]'>
                                <div>
                                    <Image src={image8} className="w-[5rem] h-[5.063rem] rounded-lg" alt='donation'/>
                                </div>
                                <div className='pl-[1rem] leading-loose mt-[-0.5rem]'>
                                    <p className='font-rubik text-[1.125rem] text-[#FF6D12] '>$20</p>
                                    <div className='flex'>
                                        <p className='font-rubik text-[1rem] font-semibold'>David Marks</p>
                                        <p className='text-[#88858E] font-rubik text-[0.875rem]  pl-1 pt-1'>3 hours
                                            ago</p>
                                    </div>
                                    <p className='text-[#88858E] font-rubik text-[1rem]  '>God bless you dear</p>

                                </div>
                            </div>
                            <div className='flex pt-[1.5rem]  pl-[3rem]'>
                                <div>
                                    <Image src={image9} className=" w-[5rem] h-[5.063rem] rounded-lg" alt=''/>
                                </div>
                                <div className='pl-[1rem] leading-loose mt-[-0.5rem]'>
                                    <p className='font-rubik text-[1.125rem] text-[#FF6D12] '>$50</p>
                                    <div className='flex'>
                                        <p className='font-rubik text-[1rem] font-semibold'>Christine Eve</p>
                                        <p className='text-[#88858E] font-rubik text-[0.875rem]  pl-1 pt-1'>8 hours
                                            ago</p>
                                    </div>
                                    <p className='text-[#88858E] font-rubik text-[1rem]  '>God bless you dear</p>

                                </div>
                            </div>
                            <div className='flex pt-[1.5rem]  pl-[3rem]'>
                                <div>
                                    <Image src={image10} className="w-[5rem] h-[5.063rem] rounded-lg" alt='donation-3'/>
                                </div>
                                <div className='pl-[1rem] leading-loose mt-[-0.5rem]'>
                                    <p className='font-rubik text-[1.125rem] text-[#FF6D12] '>$10</p>
                                    <div className='flex'>
                                        <p className='font-rubik text-[1rem] font-semibold'>Mike Hardson</p>
                                        <p className='text-[#88858E] font-rubik text-[0.875rem]  pl-1 pt-1'>1 day
                                            ago</p>
                                    </div>
                                    <p className='text-[#88858E] font-rubik text-[1rem]  '>God bless you dear</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Donations
