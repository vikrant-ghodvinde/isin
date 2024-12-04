"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { supabase } from "@/utils/supabase/configsupabase";
import Link from "next/link";
import AppLayout from "@/components/AppLayout/AppLayout";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/components/pagination";
const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 2;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!date) return "N/A";

    const day = String(date.getDate()).padStart(2, "0");
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[monthIndex];

    if (year === 9999) {
      return `${day} ${month} ${year} (Not Applicable)`;
    }

    return `${day} ${month} ${year}`;
  };

  const trimDateTime = (date) => {
    if (!date) return "N/A";

    const datePart = date.split("T")[0];

    const [year, month, day] = datePart.split("-");

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = months[parseInt(month) - 1];

    if (year === "9999") {
      return `${day} ${monthName} ${year} (Not Applicable)`;
    }

    return `${day} ${monthName} ${year}`;
  };

  const securityStatusMapping = {
    1: "Active",
    3: "Blocked",
    4: "Suspended",
    5: "Deleted",
  };

  const securityTypeMapping = {
    1: "Equity Shares",
    2: "Postal Savings Scheme",
    3: "Preference Shares",
    4: "Bond",
    5: "Deep Discount Bond",
    7: "Commercial Paper",
    8: "Step Discount Bond",
    9: "Regular Return Bond",
    10: "Certificate of Deposit",
    11: "Securitised Instrument",
    12: "Debenture",
    13: "Mutual Fund Unit",
    14: "Government Securities",
    15: "Warrant",
    18: "Rights RE",
    20: "Mutual Fund Unit",
    21: "Alternative Investment Fund",
    22: "Treasury Bills",
    23: "Infrastructure Investment Trust",
    24: "Municipal Corporation Bond",
    25: "Real Estate Investment Trust",
    26: "Sovereign Gold Bond",
    30: "Commodity Bullion",
  };

  useEffect(() => {
    if (!query) {
      setError("Search query is missing from the URL.");
      setIsLoading(false);
      document.title = "Error - Missing Query";
      return;
    }
    const fetchDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("ISIN_numbers")
          .select("*")
          .or(`ISIN.eq.${query},Company Name.ilike.%${query}%`);

        const { data: data2, error: error2 } = await supabase
          .from("ISIN_numbers_2")
          .select("*")
          .or(`ISIN.eq.${query},Company Name.ilike.%${query}%`);

        if (error || error2) {
          throw new Error("No matching data found for the given query.");
        }

        const combinedData = [...data, ...data2];

        const filteredData = combinedData.filter((item) => {
          return (
            item.ISIN.toUpperCase() === query.toUpperCase() ||
            item["Company Name"].toUpperCase().includes(query.toUpperCase())
          );
        });

        if (filteredData.length === 0) {
          throw new Error("No matching data found for the given query.");
        }

        setData(filteredData);
        setError(null);

        document.title = `Results for: ${query}`;
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
        document.title = "Error - Data Not Found";
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [query]);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(data.length / resultsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading)
    return <p className="text-gray-500 min-h-[60vh]">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!data || data.length === 0)
    return (
      <p className="text-gray-500 min-h-[60vh]">
        No data available for the given query.
      </p>
    );

  const fields = [
    { label: "ISIN", key: "ISIN" },
    { label: "Company Name", key: "Company Name" },
    { label: "National Security Code", key: "National Security Code" },
    { label: "ISIN Short Name", key: "ISIN Short Name" },
    {
      label: "Security Type",
      key: "Security Type",
      format: (value) => securityTypeMapping[value] || value || "N/A",
    },
    {
      label: "Issue Date",
      key: "Issue Date",
      format: formatDate,
    },
    {
      label: "Maturity Date",
      key: "Maturity Date",
      format: formatDate,
    },
    { label: "Convert Date", key: "Convert Date" },
    {
      label: "Face Value",
      key: "Face Value",
      format: (value) => (value ? value / 1000 : "N/A"),
    },
    { label: "Convert Amount", key: "Convert Amount" },
    { label: "Share Registrar Code", key: "Share Registrar Code" },
    { label: "Share Registrar Name", key: "Share Registrar Name" },
    {
      label: "Security Status",
      key: "Security Status",
      format: (value) => securityStatusMapping[value] || value || "N/A",
    },
    { label: "Security Remark", key: "Security Remark" },
    {
      label: "Decimal Allowed",
      key: "Decimal allowed",
      format: (value) => (value ? "Yes" : "No"),
    },
    {
      label: "Creation Date",
      key: "Creation Date",
      format: trimDateTime,
    },
    {
      label: "Last Update Date",
      key: "Last Update date",
      format: trimDateTime,
    },
  ];

  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <div className="relative w-full text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-2">
                  Search Results ({data.length} result
                  {data.length !== 1 ? "s" : ""})
                </h2>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-12 gap-5">
                {currentResults.map((item, index) => (
                  <div className="col-span-12 lg:col-span-6" key={index}>
                    <div className="table-responsive">
                      <table className="table table-bordered table-stripped border border-orange-50 text-sm">
                        <tbody>
                          {fields.map(({ label, key, format }) => (
                            <tr key={key}>
                              <td>
                                <strong>{label}</strong>
                              </td>
                              <td>
                                {format
                                  ? format(item[key])
                                  : item[key] || "N/A"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {totalPages > 1 && (
              <div className="relative">
                <Pagination>
                  <PaginationContent className="gap-3">
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`hover:bg-orange-500 hover:text-white h-auto ${
                          currentPage <= 1 ? "cursor-not-allowed" : ""
                        }`}
                        disabled={currentPage >= 1}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      {currentPage} of {totalPages}
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`hover:bg-orange-500 hover:text-white h-auto ${
                          currentPage >= totalPages ? "cursor-not-allowed" : ""
                        }`}
                        disabled={currentPage >= totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchPage />
    </Suspense>
  );
}
