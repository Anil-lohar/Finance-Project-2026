import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) return;

      const result = await getCompanyProfile(ticker);

      if (typeof result !== 'string' && result?.data?.[0]) {
        console.log('Company profile data: ',result.data[0]);
        setCompany(result.data[0]);
      }
    };

    getProfileInit();
  }, [ticker]);

  return (
    <>
    {company ? (
      <div>
        <h1>{company.companyName}</h1>  
      </div>
    ) : (
      <p>Company not found</p>
    )}
    </>
  )
}

export default CompanyPage
