'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import realtyNiveshlogo from '@/app/images/realtynivesh-logo.png'
import logo from "@/app/images/combined-logo2.webp";

import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import Link from 'next/link';
import AxiosHelper from '@/app/AxiosHelper';
import { useRouter } from 'next/navigation';

const EnquiryForm = ({ formType, eventSource = '' }) => {
    const router = useRouter();
    const [value, setValue] = useState('')
    const [action, setAction] = useState('submitForm');
    const [countryCode, setCountryCode] = useState('+ 91');
    const [loaderShow, setLoaderShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [otp, setOtp] = useState('');  // OTP input state
    const [showOtpInput, setShowOtpInput] = useState(false);  // Toggle OTP input visibility
    const [message, setMessage] = useState('');
    const [editingNumber, setEditingNumber] = useState(true);
    const [otpResendLoading, setOtpResendLoading] = useState(false)
    const [thankYou, setThankYou] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        mobile: Yup.string().min(10, 'Must be at least 10 digits').required('Mobile number is required'),
        siteVisitDate: formType === 'bookSiteVisit' ? Yup.string().required('Site visit date is required') : null,
        email: formType === 'enquiry' ? Yup.string().email('Invalid email address').required('Email is required') : null,

    });

    const handleCountryChange = (country) => {
        if (country) {
            const callingCode = getCountryCallingCode(country);
            setCountryCode('+' + ' ' + callingCode)
        }
    };

    // Function to handle phone number change
    const changePhoneNumber = () => {
        setShowOtpInput(false);  // Hide the OTP input
        setAction('submitForm');
        setMessage('');  // Clear any messages
        setOtp('');  // Clear OTP input
    };

    return (
        <div className='section-gap'>
            <div className=' w-full h-full relative bg-[#4b4b4b] cmd:bg-[#f1f1f1] flex justify-center items-center py-8 sm:py-10 md:py-16 cmd:py-0'>
                <div className={`block cmd:hidden w-full h-1/2 absolute top-0 left-0  bg-[#a27d27]`}></div>

                <div
                    style={{ background: 'transparent' }}
                    className={`enquiry-form w-full max-w-[96%] sm:max-w-[95%] cmd:max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] h-auto ${showOtpInput || thankYou ? 'xs:h-[400px]' : 'xs:min-h-[400px]'} ${formType === 'bookSiteVisit' ? 'lg:h-[550px] xl:h-[550px]' : 'lg:h-[500px] xl:h-[500px]'} bg-white overflow-hidden rounded-lg cmd:rounded-[5px] mx-auto`}>
                    <div className='shadow-[0px_0px_1.8px_0px_rgba(0,0,0,0.25)] cmd:shadow-none bg-white cmd:bg-transparent relative w-full h-full bg-no-repeat bg-left-bottom'>
                        <div className={`w-full h-full flex flex-col cmd:flex-row ${showOtpInput ? '' : 'justify-between    '} pt-7 lg:pt-16 cmd:pb-7 lg:pb-16 px-3.5 xxs:px-5 cxs:px-10 xl:px-28 3xl:px-7`}>
                            <div className='w-full cmd:w-1/2 flex flex-col justify-around'>
                                <h4 className='mb-5 cmd:mb-0 pr-5 xs:pr-10 sm:pr-7 lg:pr-5 capitalize font-supera600 text-[25px] cmd:text-[30px] xl:text-[35px] text-[#4E4E4E] w-full  leading-[1.3]'>
                                    {thankYou ? (
                                        'Thank You'
                                    ) : (
                                        <>
                                            Can't wait to know more? <span className='text-[#464646] font-supera700'>Let's talk!</span>
                                        </>
                                    )}
                                </h4>
                                <div className='hidden cmd:block w-[400px] h-[100px] lg:w-[450px] lg:h-[120px] xl:w-[520px] xl:h-[150px] relative'>
                                    <Image src={logo} fill alt="realty nivesh logo" className='object-contain object-left' />
                                </div>
                            </div>
                            <Formik
                                initialValues={{
                                    type: `${formType === 'bookSiteVisit' ? 3 : 2}`,
                                    name: '',
                                    mobile: '',
                                    siteVisitDate: '',
                                    email: '',
                                    otp: '',
                                    event: eventSource,
                                }}
                                validationSchema={validationSchema}
                                onSubmit={async (values, { setErrors, resetForm }) => {
                                    if (!isChecked) {
                                        toast.error('Please agree to the terms and conditions to submit the form.');
                                        return;
                                    }
                                    setLoaderShow(true);
                                    try {
                                        const actionToSend = action == 'submitForm' ? 'submitForm' : 'verifyOTP';

                                        console.log('actionToSend', actionToSend)
                                        const payload = {
                                            ...values,
                                            mobile: `${values.mobile}`,
                                            action: actionToSend,
                                            data: actionToSend == 'submitForm'
                                                ? { ...values, mobile: `${values?.mobile}` }
                                                : {
                                                    ...values, mobile: `${values?.mobile}`, otp: `${values?.otp}`
                                                },
                                        };
                                        const data = await AxiosHelper.postData(`/sushmabelleza-enquiry/`, payload);
                                        console.log("data,", data)

                                        if (data && data?.data?.status) {
                                            if (actionToSend == 'submitForm') {
                                                setShowOtpInput(true)
                                                setAction('verifyOTP')
                                                setEditingNumber(`${values?.mobile}`)
                                                setLoaderShow(false);
                                            } else if (actionToSend == 'verifyOTP' && data?.data?.status) {
                                                resetForm();
                                                setValue('');
                                                setIsChecked(false);
                                                setSelectedDate('')
                                                setShowOtpInput(false);
                                                setAction('submitForm');
                                                setLoaderShow(false)
                                                setThankYou(true)
                                                router.push('?req=thankyou')
                                                toast.success('Form Submited');
                                            }
                                        } else {
                                            toast.error(data?.data?.message || 'Error occurred');
                                            setErrors(data?.data?.message || {});
                                            setLoaderShow(false)
                                        }
                                    } catch (error) {

                                        setLoaderShow(false);
                                        toast.error(error?.response?.data?.error ?? 'Something went wrong. Please try again.');
                                        setLoaderShow(false)
                                    }
                                }}
                            >
                                {({ values, handleSubmit, setFieldValue }) => (
                                    <Form onSubmit={handleSubmit} className={`h-full overflow-y-auto pr-2 ${showOtpInput ? 'self-center justify-self-center w-full cmd:w-1/2 ' : ''}`}>
                                        {!showOtpInput && (
                                            <div className={`${thankYou ? 'hidden' : ''} w-full h-full flex flex-col justify-between cmd:justify-center lg:justify-start ${formType === 'bookSiteVisit' ? 'gap-y-4' : 'gap-y-3 xl:gap-y-5'} `}>
                                                <div className='flex flex-col max-w-full cmd:max-w-[405px]'>
                                                    {/* <label className='ml-1 font-supera600 text-[14px] sm:text-[16px] text-[#484A4B] capitalize'></label> */}
                                                    <div className='mt-1 cmd:mt-2  pr-2 pt-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden'>
                                                        <Field type="text" name="name" placeholder='Your Name' className='w-full h-full placeholder:text-[#101010] outline-none bg-transparent' />
                                                    </div>
                                                    <ErrorMessage component="div" className=" text-left text-[12px] font-supera500 pl-1 mt-1  text-red-500" name="name" />
                                                </div>
                                                <div className='flex flex-col max-w-full'>
                                                    <div className='w-full h-full flex justify-between items-center gap-x-3 pt-2.5 mt-1 cmd:mt-2  text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden '>
                                                        <div className='w-full flex items-center'>
                                                            <span className='whitespace-nowrap pr-2.5'>{countryCode}</span>
                                                            <PhoneInput
                                                                placeholder="Your Phone number*"
                                                                defaultCountry='IN'
                                                                value={value}
                                                                onCountryChange={handleCountryChange}
                                                                onChange={(phone) => {
                                                                    setValue(phone);
                                                                    setFieldValue('mobile', phone);
                                                                }} />
                                                        </div>

                                                    </div>
                                                    <p className='pt-1.5 font-supera400 text-[12px] text-[#7D7D7D]'>You’ll receive OTP via SMS </p>
                                                    <ErrorMessage component="div" className=" text-left text-[12px] font-supera500 pl-1 mt-1  text-red-500" name="mobile" />

                                                </div>
                                                {/* {formType === 'enquiry' && ( */}
                                                <div className='mt-2 lg:mt-0 flex flex-col max-w-full cmd:max-w-[405px]'>
                                                    <div className='  pr-2 xl:pt-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden'>
                                                        <Field type="email" name="email" placeholder='Email Id' className='w-full h-full placeholder:text-[#101010] outline-none bg-transparent' />
                                                    </div>
                                                    <ErrorMessage component="div" className=" text-left text-[12px] font-supera500 pl-1 mt-1  text-red-500" name="email" />
                                                </div>
                                                {/* )} */}
                                                <div className=' xl:mt-0'>
                                                    {formType === 'bookSiteVisit' && (
                                                        <div className='flex flex-col max-w-full cmd:max-w-[405px] '>
                                                            <div className=' flex justify-between items-center mt-1 2xl:mt-2 pr-4 py-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden '>
                                                                <label className=' text-[#101010] outline-none bg-transparent'>{selectedDate ? selectedDate : 'Select site visit Date'}</label>
                                                                <span className='relative'>
                                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="12.5961" cy="12.5961" r="12.5961" fill="#727272" />
                                                                        <path d="M17.1558 7.38569H15.8531V6.73435C15.8531 6.5616 15.7845 6.39593 15.6624 6.27378C15.5402 6.15163 15.3746 6.08301 15.2018 6.08301C15.0291 6.08301 14.8634 6.15163 14.7412 6.27378C14.6191 6.39593 14.5505 6.5616 14.5505 6.73435V7.38569H10.6424V6.73435C10.6424 6.5616 10.5738 6.39593 10.4516 6.27378C10.3295 6.15163 10.1638 6.08301 9.99106 6.08301C9.81832 6.08301 9.65265 6.15163 9.5305 6.27378C9.40834 6.39593 9.33972 6.5616 9.33972 6.73435V7.38569H8.03704C7.5188 7.38569 7.02178 7.59156 6.65533 7.95801C6.28888 8.32447 6.08301 8.82148 6.08301 9.33972V17.1558C6.08301 17.6741 6.28888 18.1711 6.65533 18.5375C7.02178 18.904 7.5188 19.1099 8.03704 19.1099H17.1558C17.6741 19.1099 18.1711 18.904 18.5375 18.5375C18.904 18.1711 19.1099 17.6741 19.1099 17.1558V9.33972C19.1099 8.82148 18.904 8.32447 18.5375 7.95801C18.1711 7.59156 17.6741 7.38569 17.1558 7.38569ZM17.8072 17.1558C17.8072 17.3286 17.7386 17.4943 17.6164 17.6164C17.4943 17.7386 17.3286 17.8072 17.1558 17.8072H8.03704C7.86429 17.8072 7.69862 17.7386 7.57647 17.6164C7.45432 17.4943 7.38569 17.3286 7.38569 17.1558V12.5964H17.8072V17.1558ZM17.8072 11.2937H7.38569V9.33972C7.38569 9.16697 7.45432 9.0013 7.57647 8.87915C7.69862 8.757 7.86429 8.68838 8.03704 8.68838H9.33972V9.33972C9.33972 9.51247 9.40834 9.67814 9.5305 9.80029C9.65265 9.92244 9.81832 9.99106 9.99106 9.99106C10.1638 9.99106 10.3295 9.92244 10.4516 9.80029C10.5738 9.67814 10.6424 9.51247 10.6424 9.33972V8.68838H14.5505V9.33972C14.5505 9.51247 14.6191 9.67814 14.7412 9.80029C14.8634 9.92244 15.0291 9.99106 15.2018 9.99106C15.3746 9.99106 15.5402 9.92244 15.6624 9.80029C15.7845 9.67814 15.8531 9.51247 15.8531 9.33972V8.68838H17.1558C17.3286 8.68838 17.4943 8.757 17.6164 8.87915C17.7386 9.0013 17.8072 9.16697 17.8072 9.33972V11.2937Z" fill="white" />
                                                                    </svg>
                                                                    <Field type='date' name="siteVisitDate" onChange={(e) => { setSelectedDate(e.target.value); setFieldValue('siteVisitDate', e.target.value) }} className=' w-full h-full absolute left-0 top-0 opacity-0' />
                                                                </span>
                                                            </div>
                                                            <ErrorMessage component="div" className=" text-left text-[12px] font-supera500 pl-1 mt-1  text-red-500" name="siteVisitDate" />
                                                        </div>
                                                    )}
                                                    <div className='mt-3 cmd:mt-5 pl-2 flex'>
                                                        <Field type="checkbox" id="terms" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='w-[17px] h-[17px] relative top-0.5 border-[#e98f0a] outline-[#e98f0a]' />
                                                        <p className='ml-2.5 max-w-[350px] tracking-wide font-supera500 text-[11px] text-[#101010]'>I agree to receive newsletters, or relevant marketing content and
                                                            Sushma Belleza Terms and Conditions</p>
                                                    </div>
                                                    <button aria-label="submit" type='submit' onClick={() => { setAction('submitForm') }} disabled={loaderShow} className='mt-5 cmd:mt-10 w-full h-[45px] bg-[#4B4B4B] rounded-[20px] text-[#fff] font-supera500 tracking-wide text-[16px]'>
                                                        {loaderShow ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : `${action == 'submitForm' ? 'Get OTP' : 'Submit'}`}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {showOtpInput && (
                                            <div className={`${thankYou ? 'hidden' : ''} cxs:pt-5 lg:pt-0 lg:pl-8 2xl:pl-0 3xl:pl-16 w-full h-full flex flex-col justify-start`}>

                                                <div className='flex flex-col w-full '>
                                                    <div className='mt-5 w-full '>
                                                        <div className="mb-5">
                                                            <div className='font-supera500 text-[#101010] text-[13px] cxs:text-[14px] lg:text-[15px] cxs:flex cxs:items-center 2xl:whitespace-nowrap'>
                                                                Please enter the OTP sent to {editingNumber}
                                                                <div
                                                                    className='pl-1 xs:pl-1.5 xs:whitespace-nowrap text-[#101010] hover:underline text-[13px] cxs:text-[14px] lg:text-[15px] tracking-wide font-supera600'
                                                                    onClick={changePhoneNumber}
                                                                >
                                                                    Change
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex item-center justify-between mt-10 w-full'>
                                                            <div className='flex w-full'>
                                                                {/* {Array(4).fill('').map((_, index) => (
                                                                    <input
                                                                        key={index}
                                                                        type='text'
                                                                        maxLength='1'
                                                                        disabled={message?.includes('OTP verified successfully')}
                                                                        data-index={index}  // Add data attribute for focus management
                                                                        className='w-10 h-10 xxs:w-12 xxs:h-12 text-center rounded-md font-supera600 text-[18px] border-2 border-gray-400 outline-[#37493c]'
                                                                        value={otp[index] || ''}
                                                                        onChange={(event) => handleOtpChange(event, index)}
                                                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                                                    />
                                                                ))} */}
                                                                <div className='w-full mt-1 cmd:mt-2  pr-2 pt-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden'>
                                                                    <Field type="number"
                                                                        disabled={loaderShow}
                                                                        maxLength={4}
                                                                        name="otp"
                                                                        placeholder='OTP*'
                                                                        onChange={(e) => {
                                                                            const { value } = e.target;
                                                                            if (value.length <= 4) {
                                                                                setFieldValue("otp", value);
                                                                            }
                                                                        }}
                                                                        className='w-full h-full placeholder:text-[#101010] outline-none bg-transparent' />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 xl:mt-4'>
                                                    <div className='flex'>
                                                        <p className='max-w-[350px] tracking-wide font-supera500 text-[16px] text-[#101010]'>Didn&apos;t get OTP?
                                                            <button
                                                                aria-label="resend"
                                                                className='ml-1 text-[#101010] font-supera600 hover:underline cursor-pointer'
                                                                disabled={loaderShow || otpResendLoading}
                                                                type="button"
                                                                onClick={async () => {
                                                                    try {
                                                                        setOtpResendLoading(true);
                                                                        setLoaderShow(true)
                                                                        const payload = {
                                                                            mobile: `${values?.mobile}`,
                                                                            action: 'resendOTP',
                                                                            data: { mobile: `${values?.mobile}` },
                                                                        };
                                                                        const response = await AxiosHelper.postData(`/sushmabelleza-enquiry/`, payload);

                                                                        if (response?.data?.status) {
                                                                            toast.success(response?.data?.message || 'New OTP sent to your mobile no.');
                                                                            setOtpResendLoading(false);
                                                                            setLoaderShow(false)
                                                                        } else {
                                                                            toast.error(response.data?.error || 'Failed to resend OTP');
                                                                            setOtpResendLoading(false);
                                                                            setLoaderShow(false)
                                                                        }
                                                                    } catch (error) {
                                                                        toast.error('Error resending OTP');
                                                                        setOtpResendLoading(false);
                                                                        setLoaderShow(false)
                                                                    } finally {
                                                                        setOtpResendLoading(false);
                                                                        setLoaderShow(false)
                                                                    }
                                                                }}>
                                                                {otpResendLoading ? 'Resending...' : 'Resend'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <button
                                                        aria-label="submit"
                                                        type='submit'
                                                        onClick={() => { setAction('verifyOTP'); }} disabled={loaderShow}
                                                        className='mt-16 cmd:mt-16 w-full h-[45px] bg-[#4B4B4B] rounded-[20px] text-[#fff] font-supera500 tracking-wide text-[16px]'>
                                                        {loaderShow ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : `${action == 'verifyOTP' ? 'Submit' : 'Verify'}`}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        <div className='block cmd:hidden mx-auto my-10 w-full bxxs:w-[300px] h-[100px] sm:w-[350px] sm:h-[80px] md:w-[420px] md:h-[100px] relative'>
                                            <Image src={logo} fill alt="realty nivesh logo" className='object-contain' />
                                        </div>
                                        {thankYou && (
                                            <div className='cxs:pt-5 lg:pt-0 lg:pl-8 xl:pl-16 w-full h-full flex flex-col justify-start'>
                                                <div className='mt-5 flex flex-col gap-10 w-full h-full'>
                                                    <h5 className='font-supera500 text-[15px] text-[#101010] tracking-wide pr-6 2xl:pr-0'>Meanwhile you can continue exploring more about Sushma Belleza</h5>

                                                    <div>
                                                        <ul className='flex flex-wrap gap-x-8 xs:gap-x-16 gap-y-3'>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="#products" className="w-full h-full">Products</Link></li>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="/plans" className="w-full h-full">Plans</Link></li>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="/amenities" className="w-full h-full">Amenities</Link></li>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="/price" className="w-full h-full">Price</Link></li>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="/location" className="w-full h-full">Location</Link></li>
                                                            <li className={`font-supera600 text-[17px] text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-bottom `}><Link href="/gallery" className="w-full h-full">Gallery</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className='mt-5 text-[17px] font-supera500 text-[#101010]'>or call us at <button aria-label="call" onClick={() => window.location.href = 'tel:918968066698'} className='text-[#000] cursor-pointer font-supera600'>+91 99880 10405</button></div>
                                                </div>
                                            </div>
                                        )}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
