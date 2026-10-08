import axios from "axios"
import { CompanyProfile, CompanySearch } from './company'

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            'https://financialmodelingprep.com/stable/search-name',
            {
                params: {
                    query,
                    apikey: process.env.REACT_APP_API_KEY,
                },
            }
        );
        console.log(query);
        console.log(data);
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error);
            return "An unexpected error has occured."
        }
    }
}

export const getCompanyProfile = async (symbol: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            'https://financialmodelingprep.com/stable/profile',
            {
                params: {
                    symbol,
                    apikey: process.env.REACT_APP_API_KEY,
                },
            }
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message from API: ', error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error);
            return "An unexpected error has occured."
        }
    }
}