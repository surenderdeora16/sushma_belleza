'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AxiosHelper from '@/app/AxiosHelper';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import SideImg from '@/app/images/getInTouch-img.webp'
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3).max(50),
    email: Yup.string().email('Invalid email address').required('Email is required').min(5).max(50),
    mobile: Yup.string().min(10, 'Must be at least 10 digits').required('Mobile number is required'),
    message: Yup.string().required('Message is required').min(10).max(200),
});

const GetInTouch = () => {
    const [value, setValue] = useState('')
    const [countryCode, setCountryCode] = useState('+ 91');
    const [loaderShow, setLoaderShow] = useState(false);
    const router = useRouter()

    const handleCountryChange = (country) => {
        if (country) {
            const callingCode = getCountryCallingCode(country);
            setCountryCode('+' + ' ' + callingCode)
        }
    };

    return (
        <section id='contact-us' className='get-in-touch section-gap scroll-mt-24'>
            <div className={`w-full h-full relative ${process.env.basePath == '' ? 'bg-GIT-local md:bg-transparent-local' : 'bg-GIT-production md:bg-transparent-production'} bg-cover bg-center-top bg-no-repeat sm:bg-[#000] flex`}>
                <div className='h-full w-full absolute top-0 left-0 bg-[#00000080] md:bg-[#2B2B2B] z-20'></div>
                <div className='z-30 relative hidden md:block w-[35%] h-full'>
                    <div className='w-full h-[750px] relative'>
                        <Image src={SideImg} fill className='object-cover object-top bg-center h-full'  alt="" />
                    </div>
                </div>
                <Formik
                    initialValues={{
                        type: 1,
                        name: '',
                        lastName: '',
                        email: '',
                        mobile: '',
                        city: '',
                        message: '',
                        preferredHomeSize: '-',
                        broker: '-',
                        howHeardAboutUs: '-',
                        event: 'Get In touch Form',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, resetForm }) => {
                        setLoaderShow(true);
                        try {
                            const payload = {
                                ...values,
                                name: `${values.name} ${values.lastName}`,
                                mobile: `${values.mobile}`,
                                action: "getintouch",
                            };
                            const data = await AxiosHelper.postData(`/sushmabelleza-enquiry/`, payload);

                            setLoaderShow(false);
                            if (data && data.status) {
                                resetForm();
                                setValue('');
                                toast.success('Enquiry Sent Successfully');
                                router.push('?req=thankyou');
                            } else {
                                toast.error(data.message || 'An error occurred');
                                setErrors(data.errors || {});
                            }
                        } catch (error) {
                            setLoaderShow(false);
                            toast.error('Something went wrong. Please try again.');
                        }
                    }}
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit} className='z-30 relative w-full md:w-[70%] h-full'>
                            <div className='w-full h-full'>
                                <div className='mx-auto flex flex-col justify-center items-center mt-[24px]'>
                                    <h2 className='font-supera700 text-[30px] sm:text-[33.5px] leading-[1] text-[#F3F9FF] uppercase flex items-center gap-x-2'>Get in
                                        <span className={`font-bebas_Neue font-medium tracking-wide text-[60px] sm:text-[74px] bg-clip-text text-transparent ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-right-bottom`}> Touch</span>
                                    </h2>
                                    <p className='font-supera400 px-2 text-[14px] xs:text-[16px] text-center tracking-wide text-[#F3F9FF]'>You have any question? feel free to contact us.</p>
                                </div>

                                <div className='w-full'>
                                    <div className='w-[90%] md:w-[85%] h-full grid grid-cols-2 grid-flow-row mx-auto  gap-x-[15px] gap-y-3 mt-10'>
                                        <div className='col-span-2 lg:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'><span className='inline lg:hidden'>Your Name</span> <span className='hidden lg:inline'>First Name</span></label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="name" placeholder='Your Name' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="name" />
                                        </div>
                                        <div className='hidden lg:block'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Last Name</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="lastName" placeholder='Last Name (Optional)' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]' />
                                            </div>
                                        </div>
                                        <div className='col-span-2 cmd:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Mobile</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex items-center px-5'>
                                                {/* <input type="text" placeholder='91 +' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]' /> */}
                                                <div className='mr-2.5 font-supera500 text-[14.78px] text-[#909090] whitespace-nowrap '>{countryCode}</div>
                                                <PhoneInput
                                                    placeholder="Your Phone number*"
                                                    defaultCountry='IN'
                                                    value={value}
                                                    onCountryChange={handleCountryChange}
                                                    onChange={(phone) => {
                                                        setValue(phone);
                                                        if (phone) {
                                                            setFieldValue('mobile', phone);
                                                        }
                                                    }} />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="mobile" />
                                        </div>
                                        <div className='col-span-2 cmd:col-span-1'>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>Email</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="email" name="email" placeholder='skt@gmail.com' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-[10.5px]  pl-1 absolute text-red-500" name="email" />
                                        </div>
                                        <div className='col-span-2 '>
                                            <label className='ml-2 font-supera400 text-[15px] tracking-wide text-[#F3F9FF] capitalize'>City</label>
                                            <div className='mt-1.5 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field type="text" name="city" placeholder='City' className='w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]' />
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" aria-label="Preferred Home Size" name="preferredHomeSize" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#909090]  font-supera500 text-[14px]' >
                                                    <option value="" className='hover:bg-[#37493c] text-[#909090]'> Preferred Home Size?</option>
                                                    <option value="Studio Apartments 630 sqft" className='hover:bg-[#37493c] text-[#909090]'>Studio Apartments 630 sqft</option>
                                                    <option value="1BHK/2BRK 880 sqft" className='hover:bg-[#37493c] text-[#909090]'>1BHK/2BRK 880 sqft</option>
                                                    <option value="2BHK/3BRK 1335 sqft" className='hover:bg-[#37493c] text-[#909090]'>2BHK/3BRK 1335 sqft</option>
                                                    <option value="2BHK/3BRK 1385 sqft" className='hover:bg-[#37493c] text-[#909090]'>2BHK/3BRK 1385 sqft</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" aria-label="broker" name="broker" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#909090] font-supera500 text-[14px]' >
                                                    <option value="" className='text-[#909090]'>Are you a broker?</option>
                                                    <option value="Yes, I am a broker" className='text-[#909090]'>Yes, I am a broker</option>
                                                    <option value="No, I am not a broker" className='text-[#909090]'>No, I am not a broker</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 pr-2 w-full h-[44px] bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field component="select" aria-label="How did you hear about us?" name="howHeardAboutUs" className='cursor-pointer w-full h-full bg-transparent outline-none px-5 text-[#909090] font-supera500 text-[14px]' >
                                                    <option value="" className='text-[#909090]'>How did you hear about us?</option>
                                                    <option value="Press" className='text-[#909090]'>Press</option>
                                                    <option value="Advertisement" className='text-[#909090]'>Advertisement</option>
                                                    <option value="Email" className='text-[#909090]'>Email</option>
                                                    <option value="Word Of Mouth" className='text-[#909090]'>Word Of Mouth</option>
                                                    <option value="Broker" className='text-[#909090]'>Broker</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='col-span-2 '>
                                            <div className='mt-1 py-1 pr-2 w-full bg-[#121212CC] md:bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px]'>
                                                <Field as="textarea" name="message" placeholder='Message' className='placeholder:text-[#909090] w-full h-full bg-transparent outline-none px-5 text-[#fff] font-supera500 text-[14px]' />
                                            </div>
                                            <ErrorMessage component="div" className="text-left text-xs  absolute text-red-500" name="message" />
                                        </div>
                                        <div className='col-span-2 my-4'>
                                            <div className='w-[172px] h-[41px] rounded-sm overflow-hidden mx-auto'>
                                                <button
                                                    aria-label="submit"
                                                    disabled={loaderShow}
                                                    className={`w-full h-full text-[#fff] bg-[#a27d27] rounded-full font-supera600 text-[19px] text-center flex justify-center items-center`}>
                                                    <div className='flex justify-center items-center gap-x-4'> {loaderShow ? 'Submiting...' : 'Submit'} {loaderShow && (<span className="form-loader after:bg-[#000] group-hover:after:bg-[#fff]"></span>)}</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </section>
    )
}

export default GetInTouch
