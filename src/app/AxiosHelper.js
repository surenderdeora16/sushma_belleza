import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; // For routing in Next.js App Router

const commonHeaders = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    axios.defaults.headers.common['x-api-key'] = process.env.NEXT_PUBLIC_LICENCE;
    axios.defaults.crossDomain = true;
    axios.defaults.withCredentials = true;
};

const errorData = (error, router) => {
    console.error('API error:', error.response); // Log errors to console
    return error.response;
};

const AxiosHelper = {
    getData: async (url, formData = null, router) => {
        try {
            commonHeaders();
            const data = await axios.get(url, { params: formData });
            return data;
        } catch (error) {
            return errorData(error, router);
        }
    },
    postData: async (url, formData, type, router) => {
        try {
            commonHeaders();
            const data = await axios.post(url, formData, {
                headers: { "Content-Type": type ? "multipart/form-data" : "application/json" }
            });
            return data;
        } catch (error) {
            return errorData(error, router);
        }
    },
    putData: async (url, formData, type, router) => {
        try {
            commonHeaders();
            const data = await axios.put(url, formData, {
                headers: { "Content-Type": type ? "multipart/form-data" : "application/json" }
            });
            return data;
        } catch (error) {
            return errorData(error, router);
        }
    },
    deleteData: async (url, router) => {
        try {
            commonHeaders();
            const data = await axios.delete(url);
            return data;
        } catch (error) {
            return errorData(error, router);
        }
    }
};

export default AxiosHelper;
